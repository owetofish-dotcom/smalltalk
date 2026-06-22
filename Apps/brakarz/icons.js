// icons.js — BrakarzAppka outlined SVG icons
const ICONS = {

  // M1: Prawo/normy — waga sprawiedliwosci
  M1: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M8 8l-4 7a4 4 0 008 0z" fill="currentColor" fill-opacity="0.13" stroke="none"/>
    <path d="M16 8l4 7a4 4 0 01-8 0z" fill="currentColor" fill-opacity="0.13" stroke="none"/>
    <line x1="12" y1="3" x2="12" y2="21"/>
    <line x1="3" y1="6" x2="21" y2="6"/>
    <line x1="3" y1="6" x2="8" y2="8"/>
    <line x1="21" y1="6" x2="16" y2="8"/>
    <path d="M8 8l-4 7a4 4 0 008 0z"/>
    <path d="M16 8l4 7a4 4 0 01-8 0z"/>
    <line x1="7" y1="21" x2="17" y2="21"/>
  </svg>`,

  // M2: Budowa drewna — przekroj poprzeczny ze slojami
  M2: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="9"/>
    <circle cx="12" cy="12" r="6" stroke-width="1" stroke-opacity="0.65"/>
    <circle cx="12" cy="12" r="3" stroke-width="1" stroke-opacity="0.45"/>
    <circle cx="12" cy="12" r="1.5" fill="currentColor" fill-opacity="0.25" stroke="none"/>
    <line x1="12" y1="3" x2="12" y2="21" stroke-width="0.75" stroke-opacity="0.22"/>
    <line x1="3" y1="12" x2="21" y2="12" stroke-width="0.75" stroke-opacity="0.22"/>
  </svg>`,

  // M3: Gatunki drewna — drzewo iglaste (dwupoziomowe)
  M3: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2L6 10L9 10L4 18L20 18L15 10L18 10Z" fill="currentColor" fill-opacity="0.12" stroke="none"/>
    <path d="M12 2L6 10L9 10L4 18L20 18L15 10L18 10Z"/>
    <line x1="12" y1="18" x2="12" y2="22"/>
    <line x1="10" y1="22" x2="14" y2="22"/>
  </svg>`,

  // M4: Terminologia — otwarta ksiazka
  M4: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z" fill="currentColor" fill-opacity="0.1" stroke="none"/>
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z" fill="currentColor" fill-opacity="0.1" stroke="none"/>
    <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
    <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
  </svg>`,

  // M5: Seki — okrag z zakluceniem slojow
  M5: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <circle cx="12" cy="12" r="3.5" fill="currentColor" fill-opacity="0.18" stroke="none"/>
    <circle cx="12" cy="12" r="3.5"/>
    <path d="M2 9 Q7 9 8.5 12 Q10 15 2 15" stroke-width="1" stroke-opacity="0.5" fill="none"/>
    <path d="M2 12 Q6 12 8.5 12" fill="none"/>
    <path d="M22 9 Q17 9 15.5 12 Q14 15 22 15" stroke-width="1" stroke-opacity="0.5" fill="none"/>
    <path d="M15.5 12 Q18 12 22 12" fill="none"/>
  </svg>`,

  // M6: Pekniecia — blyskanica / pekniecie
  M6: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M13 2L4 14h7l-2 8 11-12h-8z" fill="currentColor" fill-opacity="0.12" stroke="none"/>
    <path d="M13 2L4 14h7l-2 8 11-12h-8z"/>
  </svg>`,

  // M7: Wady — trojkat ostrzegawczy
  M7: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" fill="currentColor" fill-opacity="0.12" stroke="none"/>
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>`,

  // M8: Geometria — katonik / wegielenica ciesielska
  M8: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M4 4v16h16" />
    <line x1="4" y1="9" x2="7" y2="9"/>
    <line x1="4" y1="14" x2="7" y2="14"/>
    <line x1="9" y1="20" x2="9" y2="17"/>
    <line x1="14" y1="20" x2="14" y2="17"/>
    <line x1="19" y1="20" x2="19" y2="17"/>
    <path d="M4 20l5-5" stroke-width="1" stroke-opacity="0.35" stroke-dasharray="2 2"/>
  </svg>`,

  // M9: Pomiar — linijka z podziałka
  M9: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="2" y="8" width="20" height="8" rx="1.5" fill="currentColor" fill-opacity="0.1" stroke="none"/>
    <rect x="2" y="8" width="20" height="8" rx="1.5"/>
    <line x1="6" y1="8" x2="6" y2="13"/>
    <line x1="10" y1="8" x2="10" y2="11"/>
    <line x1="14" y1="8" x2="14" y2="13"/>
    <line x1="18" y1="8" x2="18" y2="11"/>
  </svg>`,

  // M10: Sortowanie — lista z checkboxami
  M10: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" fill="currentColor" fill-opacity="0.1" stroke="none"/>
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2"/>
    <rect x="9" y="3" width="6" height="4" rx="1" fill="currentColor" fill-opacity="0.2"/>
    <rect x="9" y="3" width="6" height="4" rx="1"/>
    <polyline points="9 12 11 14 15 10"/>
    <line x1="9" y1="17" x2="15" y2="17"/>
  </svg>`,

  // M11: Weryfikacja — siatka / tabela danych
  M11: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" fill="currentColor" fill-opacity="0.08" stroke="none"/>
    <rect x="3" y="3" width="18" height="18" rx="2"/>
    <line x1="3" y1="9" x2="21" y2="9"/>
    <line x1="3" y1="15" x2="21" y2="15"/>
    <line x1="9" y1="3" x2="9" y2="21"/>
    <line x1="15" y1="3" x2="15" y2="21"/>
    <rect x="3" y="3" width="6" height="6" fill="currentColor" fill-opacity="0.15" stroke="none"/>
  </svg>`,

  // M12: Dokumentacja — clipboard z liniami
  M12: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M9 2h6a1 1 0 011 1v1H8V3a1 1 0 011-1z" fill="currentColor" fill-opacity="0.2" stroke="none"/>
    <path d="M9 2h6a1 1 0 011 1v1H8V3a1 1 0 011-1z"/>
    <rect x="5" y="4" width="14" height="17" rx="2" fill="currentColor" fill-opacity="0.08" stroke="none"/>
    <rect x="5" y="4" width="14" height="17" rx="2"/>
    <line x1="9" y1="10" x2="15" y2="10"/>
    <line x1="9" y1="14" x2="15" y2="14"/>
    <line x1="9" y1="18" x2="13" y2="18"/>
  </svg>`,

  // M13: Normy EU — tarcza certyfikatu z checkmarkiem
  M13: `<svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 2L4 6v6c0 5.25 3.5 9.5 8 11 4.5-1.5 8-5.75 8-11V6z" fill="currentColor" fill-opacity="0.12" stroke="none"/>
    <path d="M12 2L4 6v6c0 5.25 3.5 9.5 8 11 4.5-1.5 8-5.75 8-11V6z"/>
    <polyline points="9 12 11 14 15 10"/>
  </svg>`,
};
