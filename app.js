/* ============================================================
   HarmonyHub — app logic: auth, progress tracking, quiz engine
   Storage is browser localStorage (per-device, private).
   ============================================================ */

const LS_USERS = "hh_users";       // { username: { password, progress } }
const LS_SESSION = "hh_session";   // current username

/* ---------- tiny helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const view = $("#view");

function loadUsers() { try { return JSON.parse(localStorage.getItem(LS_USERS)) || {}; } catch { return {}; } }
function saveUsers(u) { localStorage.setItem(LS_USERS, JSON.stringify(u)); }
function currentUser() { return localStorage.getItem(LS_SESSION); }

/* very light hash so passwords aren't stored in plain text */
function hash(str) {
  let h = 5381;
  for (let i = 0; i < str.length; i++) h = ((h << 5) + h + str.charCodeAt(i)) | 0;
  return "h" + (h >>> 0).toString(16);
}

function getProgress() {
  const users = loadUsers();
  const u = users[currentUser()];
  return (u && u.progress) || {};
}
function setProgress(p) {
  const users = loadUsers();
  if (users[currentUser()]) { users[currentUser()].progress = p; saveUsers(users); }
}

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ============================================================
   AUTH
   ============================================================ */
function initAuth() {
  $$(".auth-tab").forEach(tab => {
    tab.addEventListener("click", () => {
      $$(".auth-tab").forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      const isLogin = tab.dataset.tab === "login";
      $("#login-form").classList.toggle("hidden", !isLogin);
      $("#signup-form").classList.toggle("hidden", isLogin);
      $("#login-error").textContent = "";
      $("#signup-error").textContent = "";
    });
  });

  $("#login-form").addEventListener("submit", e => {
    e.preventDefault();
    const username = $("#login-username").value.trim();
    const pw = $("#login-password").value;
    const users = loadUsers();
    const err = $("#login-error");
    if (!users[username]) { err.textContent = "No account with that username."; return; }
    if (users[username].password !== hash(pw)) { err.textContent = "Incorrect password."; return; }
    localStorage.setItem(LS_SESSION, username);
    enterApp();
  });

  $("#signup-form").addEventListener("submit", e => {
    e.preventDefault();
    const username = $("#signup-username").value.trim();
    const pw = $("#signup-password").value;
    const confirm = $("#signup-confirm").value;
    const err = $("#signup-error");
    if (username.length < 3) { err.textContent = "Username must be at least 3 characters."; return; }
    if (pw.length < 4) { err.textContent = "Password must be at least 4 characters."; return; }
    if (pw !== confirm) { err.textContent = "Passwords do not match."; return; }
    const users = loadUsers();
    if (users[username]) { err.textContent = "That username is already taken."; return; }
    users[username] = { password: hash(pw), progress: {} };
    saveUsers(users);
    localStorage.setItem(LS_SESSION, username);
    toast("Welcome to HarmonyHub, " + username + "! 🎵");
    enterApp();
  });

  $("#logout-btn").addEventListener("click", () => {
    localStorage.removeItem(LS_SESSION);
    $("#app-shell").classList.add("hidden");
    $("#auth-screen").classList.remove("hidden");
  });

  $("#topbar-home").addEventListener("click", renderDashboard);
}

function enterApp() {
  $("#auth-screen").classList.add("hidden");
  $("#app-shell").classList.remove("hidden");
  $("#user-chip").textContent = "👋 " + currentUser();
  renderDashboard();
}

/* ============================================================
   PROGRESS HELPERS
   ============================================================ */
// progress shape: { [topicId]: { levels: { [levelId]: pct }, exam: pct } }
function topicProgress(topicId) {
  const p = getProgress();
  return p[topicId] || { levels: {}, exam: 0 };
}
function recordScore(topicId, itemId, pct, isExam) {
  const p = getProgress();
  if (!p[topicId]) p[topicId] = { levels: {}, exam: 0 };
  if (isExam) {
    p[topicId].exam = Math.max(p[topicId].exam || 0, pct);
  } else {
    p[topicId].levels[itemId] = Math.max(p[topicId].levels[itemId] || 0, pct);
  }
  setProgress(p);
}

function topicCompletion(topic) {
  // fraction of (levels + exam) passed
  const tp = topicProgress(topic.id);
  const total = topic.levels.length + 1;
  let done = 0;
  topic.levels.forEach(l => { if ((tp.levels[l.id] || 0) >= PASS_MARK * 100) done++; });
  if ((tp.exam || 0) >= PASS_MARK * 100) done++;
  return { done, total, pct: Math.round((done / total) * 100) };
}

function overallStats() {
  let levelsPassed = 0, levelsTotal = 0, examsPassed = 0;
  TOPICS.forEach(t => {
    const tp = topicProgress(t.id);
    t.levels.forEach(l => { levelsTotal++; if ((tp.levels[l.id] || 0) >= PASS_MARK * 100) levelsPassed++; });
    if ((tp.exam || 0) >= PASS_MARK * 100) examsPassed++;
  });
  return { levelsPassed, levelsTotal, examsPassed, examsTotal: TOPICS.length };
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard() {
  const s = overallStats();
  const topicsDone = TOPICS.filter(t => topicCompletion(t).pct === 100).length;

  view.innerHTML = `
    <div class="page-head">
      <h2>Hello, ${currentUser()} 👋</h2>
      <p>Pick a topic below to revise GCSE Music Theory (Eduqas). Score ${PASS_MARK * 100}%+ on a level to mark it complete.</p>
    </div>
    <div class="stats-row">
      <div class="stat-card"><div class="num">${s.levelsPassed}/${s.levelsTotal}</div><div class="lbl">Levels completed</div></div>
      <div class="stat-card"><div class="num">${s.examsPassed}/${s.examsTotal}</div><div class="lbl">Exams passed</div></div>
      <div class="stat-card"><div class="num">${topicsDone}/${TOPICS.length}</div><div class="lbl">Topics mastered</div></div>
    </div>
    <div class="topic-grid">
      ${TOPICS.map(t => {
        const c = topicCompletion(t);
        return `
        <div class="topic-card" data-topic="${t.id}">
          <div class="topic-icon" style="background:${t.color}">${t.icon}</div>
          <h3>${t.title}</h3>
          <p class="desc">${t.desc}</p>
          <div class="progress-track"><div class="progress-fill" style="width:${c.pct}%"></div></div>
          <div class="topic-meta">
            <span>${t.levels.length} levels + exam</span>
            <span class="${c.pct === 100 ? "badge-done" : ""}">${c.pct === 100 ? "✓ Mastered" : c.pct + "%"}</span>
          </div>
        </div>`;
      }).join("")}
    </div>`;

  $$(".topic-card").forEach(card =>
    card.addEventListener("click", () => renderTopic(card.dataset.topic)));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================
   TOPIC DETAIL
   ============================================================ */
function renderTopic(topicId) {
  const topic = TOPICS.find(t => t.id === topicId);
  const tp = topicProgress(topicId);

  // exam unlocks once all levels are passed
  const allLevelsPassed = topic.levels.every(l => (tp.levels[l.id] || 0) >= PASS_MARK * 100);

  const levelRows = topic.levels.map((l, i) => {
    const score = tp.levels[l.id] || 0;
    const passed = score >= PASS_MARK * 100;
    return `
      <div class="level-item" data-level="${l.id}">
        <div class="level-num">${i + 1}</div>
        <div class="level-info"><h4>${l.title}</h4><p>${l.desc} · ${l.questions.length} questions</p></div>
        <div class="level-score ${passed ? "score-pass" : "score-none"}">${score ? score + "%" : "—"}${passed ? " ✓" : ""}</div>
      </div>`;
  }).join("");

  const examScore = tp.exam || 0;
  const examPassed = examScore >= PASS_MARK * 100;

  view.innerHTML = `
    <button class="btn btn-ghost btn-pill back-btn" id="back-dash">← All topics</button>
    <div class="page-head">
      <h2><span style="margin-right:8px">${topic.icon}</span>${topic.title}</h2>
      <p>${topic.desc}</p>
    </div>
    <div class="section-label">Lessons</div>
    <div class="level-list">${levelRows}</div>
    <div class="section-label">End-of-topic exam</div>
    <div class="level-list">
      <div class="level-item exam ${allLevelsPassed ? "" : "locked"}" data-exam="${topic.id}">
        <div class="level-num">★</div>
        <div class="level-info">
          <h4>${topic.title} Exam</h4>
          <p>${allLevelsPassed ? topic.exam.questions.length + " questions · prove your mastery" : "🔒 Complete all lessons above to unlock"}</p>
        </div>
        <div class="level-score ${examPassed ? "score-pass" : "score-none"}">${examScore ? examScore + "%" : "—"}${examPassed ? " ✓" : ""}</div>
      </div>
    </div>`;

  $("#back-dash").addEventListener("click", renderDashboard);
  $$(".level-item[data-level]").forEach(el =>
    el.addEventListener("click", () => {
      const lvl = topic.levels.find(l => l.id === el.dataset.level);
      startQuiz(topic, lvl, false);
    }));
  const examEl = $(".level-item[data-exam]");
  examEl.addEventListener("click", () => {
    if (!allLevelsPassed) { toast("Complete all lessons first to unlock the exam 🔒"); return; }
    startQuiz(topic, { id: "exam", title: topic.title + " Exam", questions: topic.exam.questions }, true);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================
   QUIZ ENGINE
   ============================================================ */
function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function startQuiz(topic, item, isExam) {
  const questions = shuffle(item.questions);
  let idx = 0, correct = 0, answered = false;

  function renderQuestion() {
    answered = false;
    const q = questions[idx];
    const pct = Math.round((idx / questions.length) * 100);
    view.innerHTML = `
      <div class="quiz-wrap">
        <button class="btn btn-ghost btn-pill back-btn" id="quiz-quit">← Exit ${isExam ? "exam" : "lesson"}</button>
        <div class="quiz-top">
          <span class="quiz-counter">${item.title}</span>
          <span class="quiz-counter">Question ${idx + 1} / ${questions.length}</span>
        </div>
        <div class="quiz-progress"><div style="width:${pct}%"></div></div>
        <div class="q-card glass">
          <p class="q-text">${q.q}</p>
          <div class="options">
            ${q.options.map((opt, i) =>
              `<button class="option" data-i="${i}">
                 <span class="opt-key">${String.fromCharCode(65 + i)}</span>${opt}
               </button>`).join("")}
          </div>
          <div class="explain" id="explain"></div>
          <div class="quiz-actions">
            <button class="btn btn-primary btn-pill hidden" id="next-btn">Next →</button>
          </div>
        </div>
      </div>`;

    $("#quiz-quit").addEventListener("click", () => renderTopic(topic.id));

    $$(".option").forEach(btn => btn.addEventListener("click", () => {
      if (answered) return;
      answered = true;
      const chosen = +btn.dataset.i;
      const right = q.answer;
      $$(".option").forEach(o => o.classList.add("disabled"));
      $$(".option")[right].classList.add("correct");
      if (chosen !== right) btn.classList.add("wrong");
      else correct++;

      const ex = $("#explain");
      ex.innerHTML = (chosen === right ? "✅ <b>Correct!</b> " : "❌ <b>Not quite.</b> ") + q.explain;
      ex.classList.add("show");

      const next = $("#next-btn");
      next.classList.remove("hidden");
      next.textContent = idx + 1 < questions.length ? "Next →" : "See results →";
      next.focus();
    }));

    $("#next-btn").addEventListener("click", () => {
      idx++;
      if (idx < questions.length) renderQuestion();
      else finishQuiz();
    });

    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function finishQuiz() {
    const pct = Math.round((correct / questions.length) * 100);
    const passed = pct >= PASS_MARK * 100;
    recordScore(topic.id, item.id, pct, isExam);

    let emoji, heading, msg;
    if (pct === 100) { emoji = "🏆"; heading = "Perfect score!"; msg = "Flawless — you've nailed this one."; }
    else if (passed) { emoji = "🎉"; heading = "You passed!"; msg = isExam ? "Topic exam cleared. On to the next!" : "Lesson complete — keep the streak going."; }
    else { emoji = "💪"; heading = "Keep practising"; msg = `You need ${PASS_MARK * 100}% to pass. Review the explanations and try again.`; }

    view.innerHTML = `
      <div class="result-card glass">
        <div class="result-emoji">${emoji}</div>
        <h2>${heading}</h2>
        <div class="result-score">${pct}%</div>
        <p class="result-msg">${correct} / ${questions.length} correct · ${msg}</p>
        <div class="result-actions">
          <button class="btn btn-soft btn-pill" id="retry">↻ Try again</button>
          <button class="btn btn-primary btn-pill" id="to-topic">Back to ${topic.title}</button>
        </div>
      </div>`;

    $("#retry").addEventListener("click", () => startQuiz(topic, item, isExam));
    $("#to-topic").addEventListener("click", () => renderTopic(topic.id));
    if (passed) toast((isExam ? "Exam passed" : "Level complete") + ": " + pct + "% 🎵");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  renderQuestion();
}

/* ============================================================
   BOOT
   ============================================================ */
initAuth();
if (currentUser() && loadUsers()[currentUser()]) {
  enterApp();
}
