// ppla-checklist.js — dane checklisty Tecnam P2008 JC
// Edytuj ten plik żeby poprawić/zmienić treść checklisty.
// Po zmianach odśwież ppla.html w przeglądarce.

const CHECKLIST = [
  {
    id: 'a',
    title: 'A — PRZEGLĄD PRZED LOTEM',
    sub: 'Glide ratio 12:1 at 71 KIAS | Vy 71 KIAS | Vx 65 KIAS',
    emergency: false,
    groups: [
      { label: 'Ogólny przegląd', items: [
        'MSI / PDT: Sprawdzone',
        'Master i iskrowniki: Wyłączone',
        'Pozycje kadłuba: Ciągłe',
        'Ster wysokości i anteny: Sprawdzone',
        'Statecznik pionowy i ster kier.: Sprawdzone',
      ]},
      { label: 'Prawe skrzydło', items: [
        'Lotka i hamulec: Sprawdzone',
        'Klapy i lotki: Sprawdzone',
        'Przewód paliwa i wentyl: Sprawdzone',
        'Czujnik przeciążenia: Sprawdzony',
        'Dajniki ciśnienia stat. x2: Sprawdzone',
        'Szyba przednia: Czysta',
        'Starter CB OFF + Obróć śmigło 15x',
        'Poziom oleju: Na skali',
        'Śmigło i kołpak: Umocowane',
      ]},
      { label: 'Lewa strona i hamulce', items: [
        'Stójka przednia i opona: Bez luzów',
        'Filtr powietrza, chłodnica: Czyste',
        'Reflektor i strobes: Działa',
        'Płyn chłodzący: min. 2/3',
        'L. skrzydło paliwo i wentylacja: Sprawdzone',
        'Lotka: Zabezp. zdjęte, czysta',
        'Łożka i klapy: Sprawdzone',
        'Opona: Napompowana',
        'Hamulce: Brak wycieku',
      ]},
      { label: 'Przed wejściem do kabiny', items: [
        'Przegląd przedlotowy: Wykonany',
        'Siedzenia i pasy: Ustawione i zapięte',
        'Papas, dajnik ciś., stat.: Normal',
        'Bezpieczniki: Sprawdzone',
        'Drążek sterowy: Ruchy swobodne',
        'Hamulce: Zaciągnięte',
        'Drzwi kabiny: Zabezpieczone',
      ]},
    ],
  },

  {
    id: 'b',
    title: 'B — URUCHOMIENIE SILNIKA',
    sub: null,
    emergency: false,
    groups: [
      { label: 'Uruchomienie', items: [
        'Master: Włączony',
        'ATIS/QNH: Zapisany / Ustawione',
        'Obroty: Neutralne',
        'Panel powiadomień radiowych: Sprawdzone',
        'Avionik Master: Wyłączone',
        'Podgrzew gaźnika: Wyłączone',
        'Przepustnica: IDLE',
        'Zawór paliwa: Włączony',
      ]},
      { label: 'Odpalenie', items: [
        'Choke/Ssanie: Zimny ON / ciepły OFF',
        'El. pompa paliwa: Włączona',
        'Światła Strobe: Włączone',
        'Strefa śmigła: Wolna',
        'Zapłon: START',
        'Ciśnienie oleju: Zielone pole',
        'Obroty: 1000 rpm',
        'Generator: Włączony (>14V)',
        'EL: Włączone',
        'Odmrożenie szyby przedniej: Włączone',
      ]},
      { label: 'Po uruchomieniu', items: [
        'OP LOW, FP LOW, ALT OUT: sprawdzone',
        'Avionik Master: Włączony',
        'Audio panel, Radia: Głośno',
        'Transpondery: Ustawione',
        'Światła NAV: Włącz',
        'Choke/Ssanie: Wyłączone',
      ]},
    ],
  },

  {
    id: 'c',
    title: 'C — PRÓBA SILNIKA',
    sub: null,
    emergency: false,
    groups: [
      { label: null, items: [
        'Temperatura oleju: > 50°C',
        'Klapy: UP → LND → UP',
        'Obroty (próba): Pełne w dół',
        'El. pompa paliwa: Włączona',
        'Przepustnica: 1640 obr.',
        'Iskrowniki: Spadek 130/50',
        'Podgrzew gaźnika: Sprawdzony',
        'Wskaźniki silnika: Zielone pole',
        'Obroty min.: 600 RPM',
        'Hamulce: Sprawdzone lewy i prawy',
      ]},
    ],
  },

  {
    id: 'd',
    title: 'D — START I WZNOSZENIE',
    sub: null,
    emergency: false,
    groups: [
      { label: 'Start', items: [
        'Active RWY: Strobes ON, LDG Lgt ON, XPDR ALT',
        'Wysokość wznoszenia: Ustawiona',
        'Podgrzew gaźnika: Wyłączony',
        'Klapy: T/O',
      ]},
      { label: 'Po starcie 200 ft AGL', items: [
        'Prędkość: 71 KIAS',
        'Train, LDG Lgt: UP',
        'Klapy: UP',
        'Obroty: redukcja o 100 obr.',
        'El. pompa paliwa: OFF',
      ]},
    ],
  },

  {
    id: 'e',
    title: 'E — PODEJŚCIE DO LĄDOWANIA',
    sub: null,
    emergency: false,
    groups: [
      { label: null, items: [
        'El. pompa paliwa: Włączona',
        'Podgrzew gaźnika: Włączony',
        'Mac, Klapy: Ustawione',
        'Światło do lądowania: Włączone',
      ]},
    ],
  },

  {
    id: 'f',
    title: 'F — PO LĄDOWANIU',
    sub: null,
    emergency: false,
    groups: [
      { label: null, items: [
        'Active RWY: Strobe OFF, LDG Lgt OFF, XPDR STBY',
        'Zawór paliwa: Wyłączony',
        'Podgrzew gaźnika: Wyłączony',
        'Iskrowniki: Sprawdzone',
        'Wskaźniki silnika: Sprawdzone',
      ]},
    ],
  },

  {
    id: 'g',
    title: 'G — WYŁĄCZENIE NA ZIEMI',
    sub: null,
    emergency: false,
    groups: [
      { label: null, items: [
        'Zawór paliwa: WYŁĄCZ',
        'El. pompa paliwa: WYŁĄCZ',
        'Iskrowniki: WYŁĄCZ',
        'Przepustnica: PEŁNA MOC (chwilowo dla wychłodzenia)',
        'Ogrzewanie kabiny: WYŁĄCZ',
        'Avionik Master: WYŁĄCZ',
        'Master i Generator: WYŁĄCZ',
        'Zawór paliwa: WYŁĄCZ (kontr.)',
        'Ewakuacja: check',
      ]},
    ],
  },

  // ---- PROCEDURY AWARYJNE ----

  {
    id: 'em1',
    title: 'AWARIA SILNIKA W LOCIE',
    sub: 'Szybowanie bez klap: 71 KIAS',
    emergency: true,
    groups: [
      { label: null, items: [
        'Prędkość szybowania bez klap: 71 KIAS',
        'Klapy: LND',
        'Zawór paliwa: WYŁĄCZ',
        'Iskrowniki: WYŁĄCZ',
        'Generator i Master: WYŁĄCZ',
        'Drzwi kabiny: ODBLOKUJ',
      ]},
      { label: 'Przy braku mocy — spróbuj restart', items: [
        'Podgrzew gaźnika: ZMIEŃ ŻEBROWNIK',
        'Iskrowniki: BOTH/START',
        'Dalszy brak mocy: LĄDUJ AWARYJNIE',
      ]},
    ],
  },

  {
    id: 'em2',
    title: 'LĄDOWANIE AWARYJNE',
    sub: 'Przyziemienie: 45 KIAS',
    emergency: true,
    groups: [
      { label: null, items: [
        'Prędkość: 71 KIAS',
        'El. pompa paliwa: WYŁĄCZ',
        'Iskrowniki: WYŁĄCZ',
        'Mayday + pozycja: NADAJ',
        'Pasy: LRG (leg restraint)',
        'Generator i Master: WYŁĄCZ',
        'Drzwi: ODBLOKUJ',
        'Przyziemienie: 45 KIAS',
      ]},
    ],
  },

  {
    id: 'em3',
    title: 'AWARIA KLAP',
    sub: 'Dystans lądowania: +85%',
    emergency: true,
    groups: [
      { label: null, items: [
        'Prędkość do lądowania: 65 KIAS',
        'Dystans do lądowania: +85% (dłuższy pas!)',
      ]},
    ],
  },

  {
    id: 'em4',
    title: 'POŻAR / AWARIA W KABINIE',
    sub: null,
    emergency: true,
    groups: [
      { label: null, items: [
        'Ogrzewanie kabiny: WYŁĄCZONE',
        'Zawór paliwa: WYŁĄCZ',
        'El. pompa paliwa: WYŁĄCZ',
        'Przepustnica: WYŁĄCZ',
        'Iskrowniki: WYŁĄCZ',
        'Ślug na skrzydle: WG POTRZEB',
        'Lądowanie awaryjne: WYKONAJ',
      ]},
    ],
  },

  {
    id: 'em5',
    title: 'AWARIA ALTERNATORA (ALT OUT)',
    sub: 'Zabezpieczenie do 25 min',
    emergency: true,
    groups: [
      { label: null, items: [
        'Światła, XPDR, Radio: Wyłącz niepotrzebne',
        'Master i Generator: Wyłącz',
        'ALT OUT Świeci: Generator Wyłącz',
        'Lądowanie: zabezpieczenie do 25 min',
      ]},
    ],
  },
];
