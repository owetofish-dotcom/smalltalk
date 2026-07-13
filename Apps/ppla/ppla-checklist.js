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
        'MS i PDT: Sprawdzone',
        'Master i iskrowniki: Wyłączone',
        'Poszycie kadłuba: Ciągłe',
        'Ster wysokości i anteny: Sprawdzone',
        'Statecznik pion. i ster kier.: Sprawdzone',
      ]},
      { label: 'Prawe skrzydło', items: [
        'Opona i hamulce: Sprawdzone',
        'Klapy i lotki: Sprawdzone',
        'Poziom paliwa i wentyl: Sprawdzone',
        'Czujnik przeciągnięcia: Sprawdzony',
        'Dajniki ciśnienia stat. x2: Sprawdzone',
        'Szyba przednia: Czysta',
        'Starter CB OFF: Obróć śmigło 15x',
        'Poziom oleju: Na skali',
        'Śmigło i kołpak: Umocowane',
        'Stójka przednia i opona: Bez luzów',
        'Filtr powietrza, chłodnice: Czyste',
        'Reflektor i stroby: Działa',
        'Płyn chłodzący: min. 2/3',
        'L. skrzydło paliwo i wentylacja: Sprawdzone',
        'Rurka Pitota: Zabezp. zdjęte, czysta',
        'Lotki i klapy: Sprawdzone',
        'Opona: Napompowana',
        'Hamulce: Brak wycieków',
      ]},
      { label: 'Przed uruchomieniem', items: [
        'Przegląd przedlotowy: Wykonany',
        'Siedzenia i pasy: Ustawione i zapięte',
        'Zapas. dajnik ciśn. stat.: Normal',
        'Bezpieczniki: Sprawdzone',
        'Układ sterowania: Ruchy swobodne',
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
        'Trymer: Neutrum',
        'Panel powiadomień Recall: Sprawdzony',
        'Radio i Avionic Master: Wyłączone',
        'Podgrzew gaźnika: Wyłączony',
        'Przepustnica: IDLE',
        'Choke / Ssanie: Zimny ON / ciepły OFF',
        'El. pompa paliwa: Włączona',
        'Światła Strobe: Włączone',
        'Strefa śmigła: Wolna',
        'Zapłon: START',
        'Ciśnienie oleju: Zielone pole',
        'Obroty: 1000 rpm',
        'Generator: Włączony i >14V',
        'El. pompa paliwa: Wyłączona',
        'Odmrażanie szyby przedniej: Włączone',
      ]},
      { label: 'Po uruchomieniu', items: [
        'OP LOW, FP LOW, ALT OUT: Zgasły',
        'Avionic Master: Włączony',
        'Audio panel, Radia: Włączone i Głośno',
        'Transponder: STBY',
        'Światła NAV: Włącz',
        'Choke / Ssanie: Wyłączone',
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
        'Zbiornik paliwa: Pełniejszy',
        'El. pompa paliwa: Włączona',
        'Przepustnica: 1640 obr.',
        'Iskrowniki: Spadek 130/50',
        'Podgrzew gaźnika: Sprawdzony',
        'Wskaźniki silnika: Zielone pole',
        'Obroty min. 600 RPM: Sprawdzone',
        'Hamulce: Spr. Lewy i Prawy',
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
        'Active RWY: Strobes, LDG Lgt, XPDR ALT',
        'Wysokość wznoszenia: Ustawiona',
        'Podgrzew gaźnika: Wyłączony',
        'Klapy: T/O',
      ]},
      { label: 'Po starcie 200 ft AGL', items: [
        'Prędkość: 71 KIAS',
        'Taxi, LDG Lgt: OFF',
        'Klapy: UP',
        'Obroty: redukcja o 100 obr.',
        'El. pompa paliwa: OFF',
      ]},
    ],
  },

  {
    id: 'e',
    title: 'E — ZNIŻANIE',
    sub: null,
    emergency: false,
    groups: [
      { label: null, items: [
        'El. pompa paliwa: Włączona',
        'Podgrzew gaźnika: Włączony',
        'Moc, Klapy: Ustawione',
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
        'Active RWY: Strobe, LDG Lgt, XPDR STBY',
        'Klapy: Schowane',
        'Podgrzew gaźnika: Wyłączony',
        'El. pompa paliwa: Wyłączona',
      ]},
    ],
  },

  {
    id: 'g',
    title: 'G — WYŁĄCZENIE',
    sub: null,
    emergency: false,
    groups: [
      { label: null, items: [
        'Obroty: 1200 RPM — 1 min — IDLE',
        'Audio panel, Radia i XPDR: Wyłączone',
        'Avionic Master: Wyłączony',
        'Światła NAV: Wyłącz',
        'Iskrowniki: Wyłączone',
        'Stan licznika: Zapisany',
        'Master i Generator: Wyłączony',
        'Zawór paliwa: Wyłączony',
      ]},
    ],
  },

  // ---- PROCEDURY AWARYJNE ----

  {
    id: 'em1',
    title: 'AWARIA SILNIKA — ROZBIEG',
    sub: 'Przerwanie startu podczas rolowania',
    emergency: true,
    groups: [
      { label: null, items: [
        'Przepustnica: IDLE',
        'Hamulce: HAMUJ',
        'Klapy: SCHOWAJ',
        'Iskrowniki: WYŁĄCZ',
        'Zawór paliwa: WYŁĄCZ',
        'Master i Generator: WYŁĄCZ',
      ]},
    ],
  },

  {
    id: 'em2',
    title: 'AWARIA SILNIKA — PO STARCIE',
    sub: 'Prędkość: 60 KIAS',
    emergency: true,
    groups: [
      { label: null, items: [
        'Prędkość: 60 KIAS',
        'Iskrowniki: WYŁĄCZ',
        'El. pompa paliwa: WYŁĄCZ',
        'Zawór paliwa: WYŁĄCZ',
        'Klapy: WG POTRZEBY',
        'Master i Generator: WYŁĄCZ',
      ]},
    ],
  },

  {
    id: 'em3',
    title: 'AWARIA SILNIKA — PODCZAS LOTU',
    sub: 'Prędkość szybowania: 60 KIAS',
    emergency: true,
    groups: [
      { label: 'Próba restartu', items: [
        'Prędkość: 60 KIAS',
        'El. pompa paliwa: WŁĄCZ',
        'Podgrzew gaźnika: WŁĄCZ',
        'Zawór paliwa: ZMIEŃ ZBIORNIK',
        'Iskrowniki: BOTH / START',
        'Dalszy brak mocy: LĄDUJ AWARYJNIE',
      ]},
    ],
  },

  {
    id: 'em4',
    title: 'LĄDOWANIE AWARYJNE',
    sub: 'Przyziemienie: 45 KIAS',
    emergency: true,
    groups: [
      { label: null, items: [
        'Prędkość: 71 KIAS',
        'El. pompa paliwa: WYŁĄCZ',
        'Zawór paliwa: ZAMKNIJ',
        'Iskrowniki: WYŁĄCZ',
        'Mayday + pozycja: NADAJ',
        'Klapy: LND',
        'Master i Generator: WYŁĄCZ',
        'Drzwi: ODBLOKUJ',
        'Przyziemienie: 45 KIAS',
      ]},
    ],
  },

  {
    id: 'em5',
    title: 'POŻAR SILNIKA — NA ZIEMI',
    sub: null,
    emergency: true,
    groups: [
      { label: null, items: [
        'Zawór paliwa: WYŁĄCZ',
        'El. pompa paliwa: WYŁĄCZ',
        'Iskrowniki: WYŁĄCZ',
        'Przepustnica: PEŁNA MOC',
        'Ogrzewanie kabiny: WYŁĄCZ',
        'Master i Generator: WYŁĄCZ',
        'Ewakuacja: OPUŚĆ SAMOLOT',
      ]},
    ],
  },

  {
    id: 'em6',
    title: 'POŻAR — PODCZAS LOTU',
    sub: null,
    emergency: true,
    groups: [
      { label: null, items: [
        'Ogrzewanie kabiny: WYŁĄCZ',
        'Zawór paliwa: WYŁĄCZ',
        'El. pompa paliwa: WYŁĄCZ',
        'Przepustnica: PEŁNA MOC',
        'Iskrowniki: WYŁĄCZ',
        'Ślizg na skrzydło: WG POTRZEB',
        'Lądowanie awaryjne: WYKONAJ',
      ]},
    ],
  },

  {
    id: 'em7',
    title: 'BRAK ŁADOWANIA ELEKTR.',
    sub: 'Lądowanie zapobiegawcze do 25 min',
    emergency: true,
    groups: [
      { label: null, items: [
        'Światła, XPDR, Radio: Wyłącz',
        'Master i Generator: Wyłącz i Włącz',
        'ALT OUT świeci: Generator Wyłącz',
        'Lądowanie zapobiegawcze do: 25 min',
      ]},
    ],
  },

  {
    id: 'em8',
    title: 'LĄDOWANIE ZAPOBIEGAWCZE',
    sub: 'Prędkość szybowania bez klap: 71 KIAS',
    emergency: true,
    groups: [
      { label: null, items: [
        'Prędkość szybowania bez klap: 71 KIAS',
        'Klapy: LND',
        'El. pompa paliwa: WYŁĄCZ',
        'Zawór paliwa: WYŁĄCZ',
        'Iskrowniki: WYŁĄCZ',
        'Generator i Master: WYŁĄCZ',
        'Drzwi kabiny: ODBLOKUJ',
      ]},
    ],
  },

  {
    id: 'em9',
    title: 'AWARIA KLAP',
    sub: 'Dystans lądowania: +35%',
    emergency: true,
    groups: [
      { label: null, items: [
        'Prędkość podejścia: 65 KIAS',
        'Dystans do lądowania: +35%',
      ]},
    ],
  },

  {
    id: 'em10',
    title: 'DYM W KABINIE',
    sub: null,
    emergency: true,
    groups: [
      { label: null, items: [
        'Ogrzewanie kabiny: WYŁĄCZONE',
        'Gaśnica i wietrzenie kabiny: WYKONAJ',
      ]},
    ],
  },
];
