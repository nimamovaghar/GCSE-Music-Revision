/* ============================================================
   HarmonyHub — data layer.
   Talks to the Python backend when one is reachable (accounts &
   progress sync across devices); otherwise falls back to this
   browser's localStorage so the static site still works offline.
   ============================================================ */

const HHApi = (() => {
  const API_BASE = "";            // same origin (server.py serves the site)
  const LS_TOKEN = "hh_token";
  const LS_USER = "hh_user";
  const LS_USERS = "hh_users";    // local-mode account store
  let _mode = null;               // 'server' | 'local'

  /* ---- mode detection ---- */
  async function mode() {
    if (_mode) return _mode;
    try {
      const r = await fetch(API_BASE + "/api/me", { method: "GET" });
      _mode = (r.status === 401 || r.ok) ? "server" : "local";
    } catch (_) {
      _mode = "local";            // no backend reachable
    }
    return _mode;
  }
  async function isServer() { return (await mode()) === "server"; }

  /* ---- local-mode helpers ---- */
  function loadUsers() { try { return JSON.parse(localStorage.getItem(LS_USERS)) || {}; } catch { return {}; } }
  function saveUsers(u) { localStorage.setItem(LS_USERS, JSON.stringify(u)); }
  function localHash(str) {
    let h = 5381;
    for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
    return "h" + (h >>> 0).toString(16);
  }

  /* ---- public API ---- */
  async function signup(username, password) {
    username = (username || "").trim();
    if (await isServer()) {
      const r = await fetch(API_BASE + "/api/signup", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Sign-up failed.");
      localStorage.setItem(LS_TOKEN, data.token);
      localStorage.setItem(LS_USER, data.username);
      return { username: data.username, progress: data.progress || {} };
    }
    // local mode
    if (username.length < 3) throw new Error("Username must be at least 3 characters.");
    if ((password || "").length < 4) throw new Error("Password must be at least 4 characters.");
    const users = loadUsers();
    if (users[username]) throw new Error("That username is already taken.");
    users[username] = { password: localHash(password), progress: {} };
    saveUsers(users);
    localStorage.setItem(LS_USER, username);
    return { username, progress: {} };
  }

  async function login(username, password) {
    username = (username || "").trim();
    if (await isServer()) {
      const r = await fetch(API_BASE + "/api/login", {
        method: "POST", headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error || "Log-in failed.");
      localStorage.setItem(LS_TOKEN, data.token);
      localStorage.setItem(LS_USER, data.username);
      return { username: data.username, progress: data.progress || {} };
    }
    // local mode
    const users = loadUsers();
    if (!users[username]) throw new Error("No account with that username.");
    if (users[username].password !== localHash(password)) throw new Error("Incorrect password.");
    localStorage.setItem(LS_USER, username);
    return { username, progress: users[username].progress || {} };
  }

  // Restore a session on page load (returns {username, progress} or null)
  async function restore() {
    const username = localStorage.getItem(LS_USER);
    if (!username) return null;
    if (await isServer()) {
      const token = localStorage.getItem(LS_TOKEN);
      if (!token) return null;
      try {
        const r = await fetch(API_BASE + "/api/me", { headers: { Authorization: "Bearer " + token } });
        if (!r.ok) { logout(); return null; }
        const data = await r.json();
        return { username: data.username, progress: data.progress || {} };
      } catch (_) { return null; }
    }
    const users = loadUsers();
    if (!users[username]) return null;
    return { username, progress: users[username].progress || {} };
  }

  async function saveProgress(progress) {
    if (await isServer()) {
      const token = localStorage.getItem(LS_TOKEN);
      try {
        await fetch(API_BASE + "/api/progress", {
          method: "PUT",
          headers: { "Content-Type": "application/json", Authorization: "Bearer " + token },
          body: JSON.stringify({ progress }),
        });
      } catch (_) { /* network blip — progress stays in memory */ }
      return;
    }
    const username = localStorage.getItem(LS_USER);
    const users = loadUsers();
    if (users[username]) { users[username].progress = progress; saveUsers(users); }
  }

  function logout() {
    localStorage.removeItem(LS_TOKEN);
    localStorage.removeItem(LS_USER);
  }

  async function modeLabel() {
    return (await isServer())
      ? "☁️ Synced across devices"
      : "💾 Saved on this device";
  }

  return { signup, login, restore, saveProgress, logout, mode, modeLabel };
})();
