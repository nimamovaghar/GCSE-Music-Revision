/* ============================================================
   HarmonyHub — app logic: auth, progress, Learn (flashcards),
   and the quiz engine (with randomised option order).
   Data is handled by HHApi (server when available, else local).
   ============================================================ */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
const view = $("#view");

// In-memory session: { username, progress }
let SESSION = null;

function toast(msg) {
  const t = $("#toast");
  t.textContent = msg;
  t.classList.add("show");
  clearTimeout(toast._t);
  toast._t = setTimeout(() => t.classList.remove("show"), 2600);
}

function shuffle(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ============================================================
   PROGRESS  (shape: { [topicId]: { levels:{[id]:pct}, exam:pct } })
   ============================================================ */
function getProgress() { return (SESSION && SESSION.progress) || {}; }

function topicProgress(topicId) {
  const p = getProgress();
  return p[topicId] || { levels: {}, exam: 0, learned: false };
}

function recordScore(topicId, itemId, pct, isExam) {
  const p = getProgress();
  if (!p[topicId]) p[topicId] = { levels: {}, exam: 0, learned: false };
  if (isExam) p[topicId].exam = Math.max(p[topicId].exam || 0, pct);
  else p[topicId].levels[itemId] = Math.max(p[topicId].levels[itemId] || 0, pct);
  HHApi.saveProgress(p);
}

function markLearned(topicId) {
  const p = getProgress();
  if (!p[topicId]) p[topicId] = { levels: {}, exam: 0, learned: false };
  if (!p[topicId].learned) { p[topicId].learned = true; HHApi.saveProgress(p); }
}

function topicCompletion(topic) {
  const tp = topicProgress(topic.id);
  const total = topic.levels.length + 1; // levels + exam
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

  $("#login-form").addEventListener("submit", async e => {
    e.preventDefault();
    const err = $("#login-error");
    const btn = $("#login-form button[type=submit]");
    err.textContent = ""; btn.disabled = true;
    try {
      SESSION = await HHApi.login($("#login-username").value, $("#login-password").value);
      enterApp();
    } catch (ex) { err.textContent = ex.message; }
    finally { btn.disabled = false; }
  });

  $("#signup-form").addEventListener("submit", async e => {
    e.preventDefault();
    const err = $("#signup-error");
    const btn = $("#signup-form button[type=submit]");
    err.textContent = "";
    const pw = $("#signup-password").value, confirm = $("#signup-confirm").value;
    if (pw !== confirm) { err.textContent = "Passwords do not match."; return; }
    btn.disabled = true;
    try {
      SESSION = await HHApi.signup($("#signup-username").value, pw);
      toast("Welcome to HarmonyHub, " + SESSION.username + "! 🎵");
      enterApp();
    } catch (ex) { err.textContent = ex.message; }
    finally { btn.disabled = false; }
  });

  $("#logout-btn").addEventListener("click", () => {
    HHApi.logout();
    SESSION = null;
    $("#app-shell").classList.add("hidden");
    $("#auth-screen").classList.remove("hidden");
  });

  $("#topbar-home").addEventListener("click", renderDashboard);
}

async function enterApp() {
  $("#auth-screen").classList.add("hidden");
  $("#app-shell").classList.remove("hidden");
  $("#user-chip").textContent = "👋 " + SESSION.username;
  $("#sync-chip").textContent = await HHApi.modeLabel();
  renderDashboard();
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard() {
  const s = overallStats();
  const topicsDone = TOPICS.filter(t => topicCompletion(t).pct === 100).length;

  view.innerHTML = `
    <div class="page-head">
      <h2>Hello, ${SESSION.username} 👋</h2>
      <p>Pick a topic to revise GCSE Music Theory (Eduqas). <b>Learn</b> the concepts first, then take the levels — score ${PASS_MARK * 100}%+ to complete each one and unlock the exam.</p>
    </div>
    <div class="stats-row">
      <div class="stat-card"><div class="num">${s.levelsPassed}/${s.levelsTotal}</div><div class="lbl">Levels completed</div></div>
      <div class="stat-card"><div class="num">${s.examsPassed}/${s.examsTotal}</div><div class="lbl">Exams passed</div></div>
      <div class="stat-card"><div class="num">${topicsDone}/${TOPICS.length}</div><div class="lbl">Topics mastered</div></div>
    </div>
    <div class="topic-grid">
      ${TOPICS.map(t => {
        const c = topicCompletion(t);
        const tp = topicProgress(t.id);
        const nq = t.levels.reduce((n, l) => n + l.questions.length, 0) + t.exam.questions.length;
        return `
        <div class="topic-card" data-topic="${t.id}">
          <div class="topic-icon" style="background:${t.color}">${t.icon}</div>
          <h3>${t.title}</h3>
          <p class="desc">${t.desc}</p>
          <div class="progress-track"><div class="progress-fill" style="width:${c.pct}%"></div></div>
          <div class="topic-meta">
            <span>${t.flashcards.length} cards · ${nq} questions</span>
            <span class="${c.pct === 100 ? "badge-done" : ""}">${c.pct === 100 ? "✓ Mastered" : (tp.learned ? c.pct + "%" : "New")}</span>
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

    <div class="section-label">Learn first</div>
    <div class="level-list">
      <div class="level-item learn" data-learn="${topic.id}">
        <div class="level-num">📖</div>
        <div class="level-info">
          <h4>Flashcards: Learn the concepts</h4>
          <p>${topic.flashcards.length} flip-cards covering everything you need before the questions.</p>
        </div>
        <div class="level-score ${tp.learned ? "score-pass" : "score-none"}">${tp.learned ? "Reviewed ✓" : "Start here"}</div>
      </div>
    </div>

    <div class="section-label">Lessons</div>
    <div class="level-list">${levelRows}</div>

    <div class="section-label">End-of-topic exam</div>
    <div class="level-list">
      <div class="level-item exam ${allLevelsPassed ? "" : "locked"}" data-exam="${topic.id}">
        <div class="level-num">★</div>
        <div class="level-info">
          <h4>${topic.title} Exam</h4>
          <p>${allLevelsPassed ? topic.exam.questions.length + " questions · prove your mastery" : "🔒 Pass all lessons above to unlock"}</p>
        </div>
        <div class="level-score ${examPassed ? "score-pass" : "score-none"}">${examScore ? examScore + "%" : "—"}${examPassed ? " ✓" : ""}</div>
      </div>
    </div>`;

  $("#back-dash").addEventListener("click", renderDashboard);
  $(".level-item[data-learn]").addEventListener("click", () => startLearn(topic));
  $$(".level-item[data-level]").forEach(el =>
    el.addEventListener("click", () => {
      const lvl = topic.levels.find(l => l.id === el.dataset.level);
      startQuiz(topic, lvl, false);
    }));
  $(".level-item[data-exam]").addEventListener("click", () => {
    if (!allLevelsPassed) { toast("Pass all lessons first to unlock the exam 🔒"); return; }
    startQuiz(topic, { id: "exam", title: topic.title + " Exam", questions: topic.exam.questions }, true);
  });
  window.scrollTo({ top: 0, behavior: "smooth" });
}

/* ============================================================
   LEARN — flashcards
   ============================================================ */
function startLearn(topic) {
  const cards = topic.flashcards;
  let idx = 0;

  function render() {
    const card = cards[idx];
    const pct = Math.round(((idx + 1) / cards.length) * 100);
    view.innerHTML = `
      <div class="quiz-wrap">
        <button class="btn btn-ghost btn-pill back-btn" id="learn-quit">← Back to ${topic.title}</button>
        <div class="quiz-top">
          <span class="quiz-counter">${topic.icon} Learn: ${topic.title}</span>
          <span class="quiz-counter">Card ${idx + 1} / ${cards.length}</span>
        </div>
        <div class="quiz-progress"><div style="width:${pct}%"></div></div>

        <div class="flashcard" id="flashcard" tabindex="0" aria-label="Flashcard, click to flip">
          <div class="flashcard-inner">
            <div class="flashcard-face flashcard-front">
              <span class="flashcard-tag">Concept</span>
              <p>${card.front}</p>
              <span class="flashcard-hint">Tap to reveal 👆</span>
            </div>
            <div class="flashcard-face flashcard-back">
              <span class="flashcard-tag">Answer</span>
              <p>${card.back}</p>
            </div>
          </div>
        </div>

        <div class="learn-actions">
          <button class="btn btn-soft btn-pill" id="learn-prev" ${idx === 0 ? "disabled" : ""}>← Previous</button>
          <button class="btn btn-soft btn-pill" id="learn-flip">↻ Flip</button>
          ${idx + 1 < cards.length
            ? `<button class="btn btn-primary btn-pill" id="learn-next">Next →</button>`
            : `<button class="btn btn-primary btn-pill" id="learn-done">I'm ready — to the lessons →</button>`}
        </div>
      </div>`;

    const fc = $("#flashcard");
    const flip = () => fc.classList.toggle("flipped");
    fc.addEventListener("click", flip);
    $("#learn-flip").addEventListener("click", e => { e.stopPropagation(); flip(); });
    $("#learn-quit").addEventListener("click", () => renderTopic(topic.id));
    if ($("#learn-prev")) $("#learn-prev").addEventListener("click", () => { if (idx > 0) { idx--; render(); } });
    if ($("#learn-next")) $("#learn-next").addEventListener("click", () => { idx++; render(); });
    if ($("#learn-done")) $("#learn-done").addEventListener("click", () => {
      markLearned(topic.id);
      toast("Nice — concepts reviewed! 📖");
      renderTopic(topic.id);
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  render();
}

/* ============================================================
   QUIZ ENGINE  (options randomised per question)
   ============================================================ */
function startQuiz(topic, item, isExam) {
  // shuffle question order, and pre-shuffle each question's option order
  const questions = shuffle(item.questions).map(q => {
    const order = shuffle(q.options.map((_, i) => i));        // randomised indices
    return {
      q: q.q,
      explain: q.explain,
      options: order.map(i => q.options[i]),                  // reordered option text
      answer: order.indexOf(q.answer),                        // new index of the correct one
    };
  });
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
    else { emoji = "💪"; heading = "Keep practising"; msg = `You need ${PASS_MARK * 100}% to pass. Review the flashcards and try again.`; }

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
(async function boot() {
  initAuth();
  const restored = await HHApi.restore();
  if (restored) { SESSION = restored; enterApp(); }
})();
