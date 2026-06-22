#!/usr/bin/env python3
"""
HarmonyHub backend — pure Python standard library (no pip installs needed).

Serves the static site AND a small JSON API that stores user accounts and
revision progress in a SQLite database, so logins work across devices.

Run:   python3 server.py            (defaults to port 8000)
       PORT=4173 python3 server.py  (custom port)

Endpoints (all JSON):
  POST /api/signup     {username, password}            -> {token, username, progress}
  POST /api/login      {username, password}            -> {token, username, progress}
  GET  /api/me         (Authorization: Bearer <token>) -> {username, progress}
  PUT  /api/progress   {progress}  + Bearer token      -> {ok: true}
Anything else is served as a static file from this directory.
"""

import os
import json
import sqlite3
import hashlib
import secrets
import threading
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer

ROOT = os.path.dirname(os.path.abspath(__file__))
DB_PATH = os.path.join(ROOT, "harmonyhub.db")
PORT = int(os.environ.get("PORT", "8000"))
PBKDF2_ROUNDS = 200_000

_db_lock = threading.Lock()


def now_iso():
    return datetime.now(timezone.utc).isoformat()


def get_db():
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db():
    with get_db() as conn:
        conn.execute("""
            CREATE TABLE IF NOT EXISTS users (
                username  TEXT PRIMARY KEY,
                salt      TEXT NOT NULL,
                pw_hash   TEXT NOT NULL,
                progress  TEXT NOT NULL DEFAULT '{}',
                created   TEXT NOT NULL
            )""")
        conn.execute("""
            CREATE TABLE IF NOT EXISTS sessions (
                token     TEXT PRIMARY KEY,
                username  TEXT NOT NULL,
                created   TEXT NOT NULL
            )""")


def hash_pw(password, salt):
    return hashlib.pbkdf2_hmac(
        "sha256", password.encode("utf-8"), bytes.fromhex(salt), PBKDF2_ROUNDS
    ).hex()


class Handler(BaseHTTPRequestHandler):
    server_version = "HarmonyHub/2.0"

    # ---------- helpers ----------
    def _send_json(self, code, payload):
        body = json.dumps(payload).encode("utf-8")
        self.send_response(code)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(body)))
        self._cors()
        self.end_headers()
        self.wfile.write(body)

    def _cors(self):
        # Allow a separately-hosted frontend (e.g. GitHub Pages) to call this API.
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Headers", "Content-Type, Authorization")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS")

    def _read_json(self):
        length = int(self.headers.get("Content-Length", 0) or 0)
        if not length:
            return {}
        try:
            return json.loads(self.rfile.read(length).decode("utf-8"))
        except (ValueError, UnicodeDecodeError):
            return None

    def _bearer_user(self):
        auth = self.headers.get("Authorization", "")
        if not auth.startswith("Bearer "):
            return None
        token = auth[7:].strip()
        with get_db() as conn:
            row = conn.execute(
                "SELECT username FROM sessions WHERE token = ?", (token,)
            ).fetchone()
        return row["username"] if row else None

    def log_message(self, fmt, *args):
        pass  # keep the console quiet

    # ---------- routing ----------
    def do_OPTIONS(self):
        self.send_response(204)
        self._cors()
        self.end_headers()

    def do_GET(self):
        if self.path.split("?")[0] == "/api/me":
            return self.handle_me()
        return self.serve_static()

    def do_POST(self):
        path = self.path.split("?")[0]
        if path == "/api/signup":
            return self.handle_signup()
        if path == "/api/login":
            return self.handle_login()
        return self._send_json(404, {"error": "Not found"})

    def do_PUT(self):
        if self.path.split("?")[0] == "/api/progress":
            return self.handle_save_progress()
        return self._send_json(404, {"error": "Not found"})

    # ---------- API handlers ----------
    def handle_signup(self):
        data = self._read_json()
        if data is None:
            return self._send_json(400, {"error": "Invalid JSON"})
        username = (data.get("username") or "").strip()
        password = data.get("password") or ""
        if len(username) < 3:
            return self._send_json(400, {"error": "Username must be at least 3 characters."})
        if len(password) < 4:
            return self._send_json(400, {"error": "Password must be at least 4 characters."})

        salt = secrets.token_hex(16)
        token = secrets.token_urlsafe(32)
        with _db_lock, get_db() as conn:
            exists = conn.execute(
                "SELECT 1 FROM users WHERE username = ?", (username,)
            ).fetchone()
            if exists:
                return self._send_json(409, {"error": "That username is already taken."})
            conn.execute(
                "INSERT INTO users (username, salt, pw_hash, progress, created) VALUES (?,?,?,?,?)",
                (username, salt, hash_pw(password, salt), "{}", now_iso()),
            )
            conn.execute(
                "INSERT INTO sessions (token, username, created) VALUES (?,?,?)",
                (token, username, now_iso()),
            )
        return self._send_json(200, {"token": token, "username": username, "progress": {}})

    def handle_login(self):
        data = self._read_json()
        if data is None:
            return self._send_json(400, {"error": "Invalid JSON"})
        username = (data.get("username") or "").strip()
        password = data.get("password") or ""
        with get_db() as conn:
            row = conn.execute(
                "SELECT * FROM users WHERE username = ?", (username,)
            ).fetchone()
        if not row:
            return self._send_json(401, {"error": "No account with that username."})
        if not secrets.compare_digest(row["pw_hash"], hash_pw(password, row["salt"])):
            return self._send_json(401, {"error": "Incorrect password."})

        token = secrets.token_urlsafe(32)
        with _db_lock, get_db() as conn:
            conn.execute(
                "INSERT INTO sessions (token, username, created) VALUES (?,?,?)",
                (token, username, now_iso()),
            )
        progress = json.loads(row["progress"] or "{}")
        return self._send_json(200, {"token": token, "username": username, "progress": progress})

    def handle_me(self):
        username = self._bearer_user()
        if not username:
            return self._send_json(401, {"error": "Not authenticated"})
        with get_db() as conn:
            row = conn.execute(
                "SELECT progress FROM users WHERE username = ?", (username,)
            ).fetchone()
        progress = json.loads(row["progress"] or "{}") if row else {}
        return self._send_json(200, {"username": username, "progress": progress})

    def handle_save_progress(self):
        username = self._bearer_user()
        if not username:
            return self._send_json(401, {"error": "Not authenticated"})
        data = self._read_json()
        if data is None or "progress" not in data:
            return self._send_json(400, {"error": "Missing progress"})
        with _db_lock, get_db() as conn:
            conn.execute(
                "UPDATE users SET progress = ? WHERE username = ?",
                (json.dumps(data["progress"]), username),
            )
        return self._send_json(200, {"ok": True})

    # ---------- static files ----------
    def serve_static(self):
        path = self.path.split("?")[0]
        if path == "/" or path == "":
            path = "/index.html"
        # prevent directory traversal
        safe = os.path.normpath(os.path.join(ROOT, path.lstrip("/")))
        if not safe.startswith(ROOT) or not os.path.isfile(safe):
            return self._send_json(404, {"error": "Not found"})
        # don't serve the database or the server source
        if os.path.basename(safe) in ("harmonyhub.db", "server.py"):
            return self._send_json(403, {"error": "Forbidden"})

        ctype = {
            ".html": "text/html", ".css": "text/css", ".js": "application/javascript",
            ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png",
            ".ico": "image/x-icon",
        }.get(os.path.splitext(safe)[1], "application/octet-stream")
        with open(safe, "rb") as f:
            body = f.read()
        self.send_response(200)
        self.send_header("Content-Type", ctype)
        self.send_header("Content-Length", str(len(body)))
        self.end_headers()
        self.wfile.write(body)


def main():
    init_db()
    httpd = ThreadingHTTPServer(("0.0.0.0", PORT), Handler)
    print(f"HarmonyHub running at http://localhost:{PORT}  (Ctrl+C to stop)")
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down.")
        httpd.shutdown()


if __name__ == "__main__":
    main()
