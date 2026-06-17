// icons-lesny.js — BrakarzLesny outlined SVG icons
const ICONS_LESNY = {

  // ── HOME SCREEN ICONS ──────────────────────────────────────────────────

  // Teoria: otwarta ksiazka
  TEORIA: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" fill="currentColor" fill-opacity="0.1" stroke="none"/>
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" fill="currentColor" fill-opacity="0.1" stroke="none"/>
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
  </svg>`,

  // Nauka: zarowka
  NAUKA: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 18h6M10 22h4"/>
    <path d="M12 2a7 7 0 015 11.9V15a2 2 0 01-2 2H9a2 2 0 01-2-2v-1.1A7 7 0 0112 2z" fill="currentColor" fill-opacity="0.1" stroke="none"/>
    <path d="M12 2a7 7 0 015 11.9V15a2 2 0 01-2 2H9a2 2 0 01-2-2v-1.1A7 7 0 0112 2z"/>
  </svg>`,

  // Egzamin: clipboard z liscikami
  EGZAMIN: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 2h6a1 1 0 011 1v1H8V3a1 1 0 011-1z" fill="currentColor" fill-opacity="0.2" stroke="none"/>
    <path d="M9 2h6a1 1 0 011 1v1H8V3a1 1 0 011-1z"/>
    <rect x="5" y="4" width="14" height="17" rx="2" fill="currentColor" fill-opacity="0.08" stroke="none"/>
    <rect x="5" y="4" width="14" height="17" rx="2"/>
    <line x1="9" y1="10" x2="15" y2="10"/>
    <line x1="9" y1="14" x2="15" y2="14"/>
    <line x1="9" y1="18" x2="12" y2="18"/>
  </svg>`,

  // Checklista: lista z haczykami
  CHECKLISTA: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" fill="currentColor" fill-opacity="0.08" stroke="none"/>
    <rect x="3" y="4" width="18" height="18" rx="2"/>
    <polyline points="7 10 9.5 12.5 13 8.5"/>
    <line x1="16" y1="10.5" x2="19" y2="10.5"/>
    <polyline points="7 16 9.5 18.5 13 14.5"/>
    <line x1="16" y1="16.5" x2="19" y2="16.5"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
  </svg>`,

  // WZ + Reklamacja: koperta z dokumentem
  REKLAMACJA: `<svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" fill="currentColor" fill-opacity="0.1" stroke="none"/>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22 6 12 13 2 6"/>
    <line x1="8" y1="15" x2="12" y2="15"/>
  </svg>`,

  // ── MODUL ICONS (teoria) ───────────────────────────────────────────────

  // M1: Podstawy prawne — dokument z paragrafia
  M1: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="4" y="2" width="16" height="20" rx="2" fill="currentColor" fill-opacity="0.08" stroke="none"/>
    <rect x="4" y="2" width="16" height="20" rx="2"/>
    <line x1="8" y1="7" x2="16" y2="7"/>
    <line x1="8" y1="11" x2="16" y2="11"/>
    <line x1="8" y1="15" x2="13" y2="15"/>
    <path d="M15 14.5c0-.83.67-1.5 1.5-1.5S18 13.67 18 14.5c0 .5-.25.94-.64 1.21L15 17.5V18h3" stroke-width="1.3"/>
  </svg>`,

  // M2: Wady drewna — kloda z peknieciami
  M2: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <ellipse cx="12" cy="12" rx="9" ry="6" fill="currentColor" fill-opacity="0.1" stroke="none"/>
    <ellipse cx="12" cy="12" rx="9" ry="6"/>
    <circle cx="12" cy="12" r="3.5"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" fill-opacity="0.2" stroke="none"/>
    <circle cx="12" cy="12" r="1.5"/>
    <path d="M12 8.5v1M8.5 12h1M12 15.5v-1M15.5 12h-1" stroke-width="1"/>
  </svg>`,

  // M3: Pomiar — linijka z podzialkia i okrag w polowie
  M3: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="9" width="20" height="6" rx="1.5" fill="currentColor" fill-opacity="0.1" stroke="none"/>
    <rect x="2" y="9" width="20" height="6" rx="1.5"/>
    <line x1="6" y1="9" x2="6" y2="13"/>
    <line x1="10" y1="9" x2="10" y2="12"/>
    <line x1="14" y1="9" x2="14" y2="13"/>
    <line x1="18" y1="9" x2="18" y2="12"/>
    <circle cx="12" cy="5" r="2" fill="currentColor" fill-opacity="0.15" stroke="none"/>
    <circle cx="12" cy="5" r="2"/>
    <line x1="12" y1="7" x2="12" y2="9" stroke-width="1.2"/>
  </svg>`,

  // M4: Klasy LP — tarcza z gwiazdka jakosci
  M4: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2L4 5v7c0 5 3.5 9.3 8 11 4.5-1.7 8-6 8-11V5z" fill="currentColor" fill-opacity="0.1" stroke="none"/>
    <path d="M12 2L4 5v7c0 5 3.5 9.3 8 11 4.5-1.7 8-6 8-11V5z"/>
    <polyline points="8.5 12 11 14.5 15.5 9.5"/>
  </svg>`,

  // M5: Reklamacja — pismo/list
  M5: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z" fill="currentColor" fill-opacity="0.1" stroke="none"/>
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2z"/>
    <polyline points="22 6 12 13 2 6"/>
    <line x1="7" y1="16" x2="11" y2="16" stroke-opacity="0.5"/>
  </svg>`,

  // M6: Korelacja — strzalka dwukierunkowa miedzy kloda a deska
  M6: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="5" cy="12" r="3" fill="currentColor" fill-opacity="0.12" stroke="none"/>
    <circle cx="5" cy="12" r="3"/>
    <rect x="16" y="9" width="6" height="6" rx="1" fill="currentColor" fill-opacity="0.12" stroke="none"/>
    <rect x="16" y="9" width="6" height="6" rx="1"/>
    <line x1="8" y1="12" x2="16" y2="12"/>
    <polyline points="13 9 16 12 13 15"/>
    <polyline points="11 9 8 12 11 15" stroke-opacity="0.45"/>
  </svg>`,
};
