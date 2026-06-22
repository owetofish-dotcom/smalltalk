// Small Talk App Logic

const state = {
    currentScene: 0,
    progress: {},
    quiz: {
        current: 0,
        score: 0,
        done: false
    }
};

const QS = [
    {
        q: "🛗 Wchodzisz do windy z nieznajomą osobą. Ona nic nie mówi. Jak reagujesz?",
        opts: ["Też milczysz i patrzysz w podłogę.", "Mówisz „Dzień dobry\" + ew. rzucasz krótki komentarz.", "Uśmiechasz się w ciszy.", "Pytasz co u niej słychać."],
        ok: 1,
        fb: "✓ Dobrze. W Polsce „dzień dobry\" to grzecznościowy obowiązek."
    },
    {
        q: "☕ Firmowa kuchnia. Chcesz zagadać do nowej osoby. Co mówisz?",
        opts: ["„Słyszałam, że wasz dział ma teraz problemy...\"", "„Już trzecia kawa? Mnie też tak jakoś wychodzi.\"", "„Podobno zmienią nam szefa, wiesz coś?\"", "Czekasz w milczeniu."],
        ok: 1,
        fb: "✓ Świetnie! Autoironia i narzekanie z uśmiechem to najbezpieczniejsze narzędzia w polskiej kuchni."
    },
    {
        q: "💻 Czekacie na rozpoczęcie spotkania online, panuje niezręczna cisza. Co powiesz?",
        opts: ["„Poczekajmy minutkę na Maćka. A jak tam Wam mija poniedziałek?\"", "Czekasz w pełnej ciszy patrząc w kamerę.", "Zaczynasz narzekać na swoją pensję i projekt.", "Odchodzisz od biurka zrobić herbatę."],
        ok: 0,
        fb: "✓ Dokładnie tak. Zagadujesz lekko, pozwalając komuś na odpowiedź jednym zdaniem bez angażowania się w długą rozmowę."
    },
    {
        q: "🚕 Jedziesz taksówką, kierowca milczy. Jaki temat będzie ryzykowny, by go rozpocząć?",
        opts: ["Pogoda.", "Korki.", "Polityka miasta i decyzje obecnego prezydenta.", "Długość zmiany kierowcy."],
        ok: 2,
        fb: "✓ Zgadza się. Tematy ustrojowe, infrastrukturalne czy polityczne mogą prowadzić do ostrzejszych kłótni – lepiej ich unikać."
    },
    {
        q: "🍻 Wyjście po pracy na piwo. Jak zacząć w luźnym gronie?",
        opts: ["„Ale nasz kierownik zepsuł dzisiaj prezentację...\"", "„Czym zajmuje się mąż/żona?\"", "„Fajnie spotkać się po godzinach. Często tu bywacie?\"", "Pytasz kogoś o poglądy polityczne."],
        ok: 2,
        fb: "✓ Otwarty, pozytywny i bezpiecznie dystansujący komentarz. Lepiej nie inicjować wieczoru uderzaniem w menedżment."
    },
    {
        q: "👔 Szef pyta Cię w korytarzu: „Co u pana/pani słychać?\"",
        opts: ["„Zarobiony jestem po pachy, ledwo żyję.\"", "„Dziękuję, w porządku. Właśnie rozpisuję nowy projekt.\"", "„Wszystko świetnie.\"", "Szczegółowo opowiadasz o chorobie w rodzinie."],
        ok: 1,
        fb: "✓ Profesjonalnie. Podkreślasz, że nie tracisz zapału i pokazujesz, co aktualnie robisz."
    },
    {
        q: "🚂 W przedziale pociągu chcę zacząć rozmowę. Od czego zacząć?",
        opts: ["„Politycy znów oszukują!\"", "„Przepraszam, upewnię się: to jest wagon do Warszawy?\"", "„Skoro jedziemy razem 3 godziny, porozmawiajmy o religii.\"", "Ciągłe natarczywe wpatrywanie się w książkę rozmówcy."],
        ok: 1,
        fb: "✓ Bezpieczne, praktyczne pytanie otwiera furtkę – jeśli osoba zechce, pociągnie rozmowę dalej."
    },
    {
        q: "🤝 Jak się najlepiej przedstawić koleżance, którą mijasz na korytarzu od miesiąca?",
        opts: ["Udawać, że się nie znacie.", "„Cześć, chyba pracujemy w tej samej firmie — jestem Marek, z IT.\"", "„Strasznie dziwne, że do tej pory nie gadaliśmy, oburzające.\"", "„Słyszałem o tobie od Krzyśka!\""],
        ok: 1,
        fb: "✓ Proste, eleganckie i zrzucające odpowiedzialność za poprzedni brak kontaktu."
    }
];

// INIT
document.addEventListener('DOMContentLoaded', () => {
    loadProgress();
    initUI();
    renderScene(state.currentScene);
});

function initUI() {
    // Tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const sceneId = parseInt(tab.dataset.scene);
            renderScene(sceneId);
        });
    });

    // Phrase Cards
    document.querySelectorAll('.pcard-top').forEach(top => {
        top.addEventListener('click', (e) => {
            if (e.target.classList.contains('btn-audio')) return;
            top.parentElement.classList.toggle('open');
        });
    });

    // Audio Buttons
    document.querySelectorAll('.btn-audio').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const phrase = btn.closest('.pcard').dataset.phrase;
            speak(phrase);
        });
    });

    // Quiz Next
    document.getElementById('qNext').addEventListener('click', nextQuestion);
}

function renderScene(id) {
    state.currentScene = id;
    saveProgress();

    // Update Tabs
    document.querySelectorAll('.tab').forEach((tab, idx) => {
        tab.classList.toggle('active', idx === id);
    });

    // Update Content
    document.querySelectorAll('.scene').forEach((scene, idx) => {
        scene.classList.toggle('active', idx === id);
    });

    // Update Progress Bar
    const total = 8;
    const progress = ((id + 1) / total) * 100;
    document.getElementById('pFill').style.width = `${progress}%`;
    
    const labs = ['Zasady', 'Kuchnia', 'Spotkanie', 'Taksówka', 'Po pracy', 'Winda', 'Nowa osoba', 'Quiz'];
    document.getElementById('pLbl').textContent = `${labs[id]} · widok ${id + 1} z ${total}`;

    // Special logic for Quiz (scene 7)
    if (id === 7) initQuiz();

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// AUDIO
function speak(text) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pl-PL';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
}

// QUIZ LOGIC
function initQuiz() {
    state.quiz.current = 0;
    state.quiz.score = 0;
    state.quiz.done = false;
    renderQuestion();
}

function renderQuestion() {
    const q = QS[state.quiz.current];
    document.getElementById('qTitle').textContent = `Pytanie ${state.quiz.current + 1}`;
    document.getElementById('qCnt').textContent = `${state.quiz.current + 1} / ${QS.length}`;
    document.getElementById('qQ').textContent = q.q;
    
    const opts = document.getElementById('qOpts');
    opts.innerHTML = '';
    
    q.opts.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'qopt';
        btn.textContent = opt;
        btn.onclick = () => handleAnswer(idx);
        opts.appendChild(btn);
    });

    document.getElementById('qFb').classList.remove('show');
    document.getElementById('qNext').style.display = 'none';
    updatePips();
}

function handleAnswer(idx) {
    if (state.quiz.done) return;
    
    const q = QS[state.quiz.current];
    const btns = document.querySelectorAll('.qopt');
    
    btns.forEach(b => b.disabled = true);
    btns[q.ok].classList.add('correct');
    
    if (idx === q.ok) {
        state.quiz.score++;
    } else {
        btns[idx].classList.add('wrong');
    }
    
    const fb = document.getElementById('qFb');
    fb.innerHTML = q.fb;
    fb.classList.add('show');
    
    const nextBtn = document.getElementById('qNext');
    nextBtn.style.display = 'block';
    nextBtn.textContent = state.quiz.current < QS.length - 1 ? 'Następne →' : 'Zobacz wyniki';
}

function nextQuestion() {
    state.quiz.current++;
    if (state.quiz.current < QS.length) {
        renderQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const { score } = state.quiz;
    let msg = "";
    if (score === QS.length) msg = "Ekspert small talku! 🎉";
    else if (score >= 5) msg = "Świetny wynik! 👍";
    else msg = "Warto przećwiczyć to w praktyce! 💪";

    document.getElementById('qQ').textContent = `Twój wynik: ${score} / ${QS.length}. ${msg}`;
    document.getElementById('qOpts').innerHTML = '';
    document.getElementById('qFb').classList.remove('show');
    document.getElementById('qNext').style.display = 'none';
    document.getElementById('qTitle').textContent = "🏁 Koniec";
}

function updatePips() {
    const pips = document.getElementById('qPips');
    pips.innerHTML = QS.map((_, idx) => `
        <div class="qpip ${idx < state.quiz.current ? 'done' : idx === state.quiz.current ? 'cur' : ''}"></div>
    `).join('');
}

// STORAGE
function saveProgress() {
    localStorage.setItem('smalltalk_current', state.currentScene);
}

function loadProgress() {
    const saved = localStorage.getItem('smalltalk_current');
    if (saved !== null) state.currentScene = parseInt(saved);
}
