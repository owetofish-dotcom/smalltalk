// theory.js - treść teorii PN-D-94021:2013-10
const THEORY = [
  {
    id: 'M1', module: 'Modul 1', title: 'Zakres normy i gatunki drewna', icon: '📋',
    sections: [
      {
        heading: 'Czego dotyczy norma',
        body: 'Norma **PN-D-94021:2013-10** dotyczy **tarcicy konstrukcyjnej iglastej** — obrzyny, szorstkiej lub struganej — przeznaczonej na nośne konstrukcje drewniane, sortowanej wizualnie.\n\nNorma określa klasy jakości, metody badań, wymagania wymiarowe oraz zasady oceny tarcicy przeznaczonej do stosowania w konstrukcjach nośnych.'
      },
      {
        heading: 'Gatunki drewna objęte normą',
        body: '• **PNSY** — Pinus sylvestris — Sosna zwyczajna\n• **PCAB** — Picea abies — Świerk pospolity\n• **LADC** — Larix decidua — Modrzew europejski\n• **ABAL** — Abies alba — Jodła pospolita\n• **PSMN** — Pseudotsuga menziesii — Daglezja zielona'
      }
    ]
  },
  {
    id: 'M2', module: 'Modul 2', title: 'Klasyfikacja tarcicy — wymiary przekroju', icon: '📐',
    sections: [
      {
        heading: 'Podział tarcicy wg wymiarów przekroju (Tablica 1)',
        body: '| Rodzaj | Szerokość (b) | Proporcja h/b |\n|---|---|---|\n| Deski | 22–50 mm | h/b ≥ 2 |\n| Bale | 50–100 mm | h/b ≥ 2 |\n| Łaty | 30–100 mm | 1 ≤ h/b < 2 |\n| Krawędziaki | ≥ 100 mm | 1 ≤ h/b < 2 |\n| Belki | ≥ 100 mm | h/b ≥ 2 |\n\ngdzie: **b** = szerokość, **h** = wysokość (grubość) przekroju.'
      },
      {
        heading: 'Wilgotność tarcicy',
        body: 'Tarcica może być **surowa** (mokra lub sucha) albo **suszona**. Wilgotność suchej tarcicy nie przekracza **20%**.'
      }
    ]
  },
  {
    id: 'M3', module: 'Modul 3', title: 'Klasy jakości KW / KS / KG', icon: '⭐',
    sections: [
      {
        heading: 'KW — Klasa Wyższa',
        body: '**Najwyższa** klasa jakości. Surowe wymogi dotyczące sęków, pęknięć, ukośności włókien. Stosowana tam, gdzie wymagana jest wysoka niezawodność elementów.'
      },
      {
        heading: 'KS — Klasa Średnia',
        body: 'Klasa **pośrednia**. Dopuszcza większe wady niż KW, ale wymaga spełnienia określonych progów. Najczęściej stosowana w praktyce budowlanej.'
      },
      {
        heading: 'KG — Klasa Górna',
        body: '**Najniższa** klasa sortowania wizualnego. Dopuszcza największe wady w granicach normy. Tarcicy niespełniającej KG nie klasyfikuje się jako tarcicę konstrukcyjną.'
      },
      {
        heading: 'Zasada przekroju najgorszego',
        body: 'Klasę wyznacza się według **najgorszej wady w najgorszym miejscu przekroju**. Jedna wada dyskwalifikująca oznacza przypisanie niższej klasy lub odrzut.'
      }
    ]
  },
  {
    id: 'M4', module: 'Modul 4', title: 'Definicje podstawowe', icon: '📖',
    sections: [
      {
        heading: 'Strefa marginalna (brzeżna)',
        body: 'Część przekroju tarcicy, która leży w odległości do **1/4 szerokości od krawędzi** (b/4). W tej strefie sęki mają większy wpływ na wytrzymałość niż w środkowej strefie.'
      },
      {
        heading: 'Przekrój najgorszy',
        body: 'Miejsce na długości elementu, w którym łączny wpływ wad na wytrzymałość jest **największy**. To w tym miejscu ocenia się klasę jakości.'
      },
      {
        heading: 'USC — Uśredniony Sęk w Ćwiartce',
        body: 'Stosunek sumy średnic sęków w ćwiartce szerokości do **długości ćwiartki wynoszącej 150 mm**. Wskaźnik uwzględnia skupienie sęków na odcinku.'
      },
      {
        heading: 'USM — Uśredniony Sęk Marginalny',
        body: 'Analogiczny do USC, ale liczony dla **strefy marginalnej** (brzeżnej). Kluczowy dla oceny sęków na krawędziach, które mają największy wpływ na wytrzymałość na zginanie.'
      },
      {
        heading: 'Sęk',
        body: 'Defekt wynikający z obecności gałęzi w drewnie. Oceniany przez stosunek średnicy sęka do szerokości elementu lub przez wskaźniki **USC/USM**.'
      }
    ]
  },
  {
    id: 'M5', module: 'Modul 5', title: 'Sęki — wskaźniki sękatości USC i USM', icon: '🌲',
    sections: [
      {
        heading: 'Wskaźnik USC — sęki w ćwiartce (Tablica 2)',
        body: '• **KW**: USC ≤ 1/5 (0,20)\n• **KS**: USC ≤ 2/5 (0,40)\n• **KG**: USC ≤ 3/5 (0,60) lub USC ≤ 1/2 w strefie marginalnej'
      },
      {
        heading: 'Wskaźnik USM — sęki marginalne',
        body: '• **KW**: USM ≤ 1/5 (0,20)\n• **KS**: USM ≤ 1/3 (0,33)\n• **KG**: USM ≤ 1/2 (0,50)'
      },
      {
        heading: 'Rodzaje sęków i ich traktowanie',
        body: '**Sęki zdrośnięte (wrosłe)**: traktowane jak sęki żywe — mogą być dopuszczone w powyższych limitach.\n\n**Sęki luźne i wybite**: wchodzą w ogólny wskaźnik, ale liczne luźne sęki mogą powodować odrzut ze względu na integralność elementu.\n\n**Sęki karbowe (karby)**: niedopuszczalne w KW, ograniczone w KS i KG.'
      }
    ]
  },
  {
    id: 'M6', module: 'Modul 6', title: 'Ukośny przebieg włókien', icon: '↗️',
    sections: [
      {
        heading: 'Definicja i pomiar',
        body: 'Ukośność włókien mierzy się jako **odchylenie przebiegu włókna od osi podłużnej** elementu, wyrażone stosunkiem 1:x (np. 1:10 oznacza 1 mm odchylenia na 10 mm długości).\n\nPomiar wykonuje się na płaskiej powierzchni tarcicy na odcinku przynajmniej **150 mm**, mierząc odchylenie rysy od osi elementu.'
      },
      {
        heading: 'Dopuszczalne wartości wg klasy',
        body: '• **KW**: nie więcej niż 1:10 (≤ 10%)\n• **KS**: nie więcej niż 1:6 (≤ 16,7%)\n• **KG**: nie więcej niż 1:4 (≤ 25%)'
      },
      {
        heading: 'Skręt spiralny włókien',
        body: 'Drewno ze **skrętem spiralnym** ocenia się oddzielnie — spiralny przebieg włókien jest bardziej niekorzystny niż skos i może wymagać zaostrzonych kryteriów.'
      }
    ]
  },
  {
    id: 'M7', module: 'Modul 7', title: 'Pęknięcia', icon: '🔩',
    sections: [
      {
        heading: 'Rodzaje pęknięć',
        body: '• **Powierzchniowe** — głębokość ≤ 5 mm (ogólnie tolerowane)\n• **Głębokie** — głębokość > 5 mm, oceniane wg limitów klasy'
      },
      {
        heading: 'Pęknięcia głębokie — limity wg klasy',
        body: '| Klasa | Głębokość | Długość |\n|---|---|---|\n| KW | ≤ 1/4 b | ≤ 1/4 długości |\n| KS | ≤ 1/3 b | ≤ 1/3 długości |\n| KG | ≤ 1/2 b | bez limitu |'
      },
      {
        heading: 'Pęknięcia przelotowe',
        body: '**Niedopuszczalne w KW**. W KS i KG ograniczone długością i lokalizacją — nie na końcach elementu, z wyjątkiem pęknięć kurczowych.'
      },
      {
        heading: 'Pęknięcia kurczowe (skurczowe)',
        body: 'Pęknięcia **powstające podczas suszenia**. Tolerowane do określonej długości w każdej klasie.'
      }
    ]
  },
  {
    id: 'M8', module: 'Modul 8', title: 'Wady niedopuszczalne', icon: '⚠️',
    sections: [
      {
        heading: 'Wady dyskwalifikujące wszystkie klasy (KW, KS, KG)',
        body: '**Zgnilizna (butwienie)** — jakikolwiek widoczny rozkład biologiczny drewna powodujący utratę struktury komórkowej. Zgnilizna sucha (biaława, brązowa lub biała) i mokra — każda forma jest wadą niedopuszczalną.\n\n**Chodniki owadzie** — otwory i kanały drążone przez larwy owadów (chrząszcze, drewnojady). Nawet ślad aktywnej inwazji dyskwalifikuje element.'
      },
      {
        heading: 'Wady niedopuszczalne w KW i KS (częściowo dopuszczalne w KG)',
        body: '• Drewno **zakorzone** (z korą) na powierzchniach nośnych\n• Wyraźne **drewno reakcyjne** (drewno ściskowe u iglaków) — powyżej ustalonych limitów\n• **Grzyby zmieniające barwę** — sinizna może być dozwolona w niższych klasach w ograniczonym zakresie'
      }
    ]
  },
  {
    id: 'M9', module: 'Modul 9', title: 'Drewno reakcyjne, sinizna, gęstość', icon: '🌿',
    sections: [
      {
        heading: 'Drewno reakcyjne (ściskowe / kompresyjne)',
        body: 'U drzew iglastych tworzy się po stronie dolnej pochyłego pnia jako drewno ściskowe (ciemniejsze, gęstsze). Charakteryzuje się anizotropowym kurczeniem i **niższą wytrzymałością na rozciąganie**.\n\nLimity udziału w przekroju:\n• **KW**: ≤ 1/4 przekroju\n• **KS**: ≤ 1/3 przekroju\n• **KG**: ≤ 1/2 przekroju'
      },
      {
        heading: 'Sinizna (zasinienie, blue stain)',
        body: 'Przebarwienie spowodowane **grzybami sinicowymi** (Ophiostoma). Nie osłabia mechanicznie drewna, ale świadczy o wysokiej wilgotności.\n\n• **KW**: niedopuszczalna\n• **KS**: ograniczona (do 1/3 powierzchni)\n• **KG**: dopuszczona szerzej'
      },
      {
        heading: 'Słoistość i gęstość',
        body: 'Norma nie określa wprost limitów szerokości słojów rocznych, jednak **gęste słojowanie** poprawia właściwości mechaniczne.\n\nKlasy wytrzymałości (C16, C24 etc.) przypisywane do klas wizualnych wynikają pośrednio z typowej gęstości gatunków.'
      }
    ]
  },
  {
    id: 'M10', module: 'Modul 10', title: 'Cechy geometryczne (Tablica 3)', icon: '📏',
    sections: [
      {
        heading: 'Oblina — zaokrąglenie krawędzi z kory',
        body: 'Stosunek głębokości obliny do szerokości/grubości elementu:\n• **KW**: ≤ 1/3 b na krawędziach, ≤ 1/4 h na płaszczyznach\n• **KS**: ≤ 1/2 b / ≤ 1/3 h\n• **KG**: bez limitu wymiarowego (ale nie może naruszać wymiarów nominalnych w miejscach nośnych)'
      },
      {
        heading: 'Krzywizna wzdłużna',
        body: 'Pomiar strzałki ugięcia względem długości (na 2 m):\n• **KW**: ≤ 5 mm\n• **KS**: ≤ 8 mm\n• **KG**: ≤ 12 mm'
      },
      {
        heading: 'Wichrowatość',
        body: 'Skręcenie przekroju na długości 2 m (na 25 mm szerokości):\n• **KW**: ≤ 2 mm\n• **KS**: ≤ 4 mm\n• **KG**: ≤ 6 mm'
      },
      {
        heading: 'Strzałka boczna',
        body: 'Ugięcie boczne na 2 m:\n• **KW**: ≤ 5 mm\n• **KS**: ≤ 10 mm\n• **KG**: ≤ 15 mm'
      }
    ]
  },
  {
    id: 'M11', module: 'Modul 11', title: 'Metody badań', icon: '🔬',
    sections: [
      {
        heading: 'Pomiar wilgotności',
        body: 'Pomiar metodą **elektryczną** (wilgotnościomierzem oporowym) lub **wagową** (suszenie do stałej masy). Tarcica sucha: wilgotność ≤ 20%.\n\nPomiar w odległości **300 mm od czoła**, w przekroju środkowym grubości.'
      },
      {
        heading: 'Pomiar wymiarów',
        body: '• **Grubość i szerokość** — suwmiarką z dokładnością 1 mm, w 3 miejscach na długości\n• **Długość** — taśmą mierniczą od czoła do czoła, z dokładnością 50 mm\n• Wymiary nominalne podawane dla wilgotności **20%**'
      },
      {
        heading: 'Ocena wad jakościowych',
        body: '• **Sęki** — średnicę mierzy się jako średnią z dwóch prostopadłych wymiarów\n• **Pęknięcia** — głębokość mierzona sondą lub w przekroju, długość wzdłuż elementu\n• **Ukośność włókien** — linia rysika na zwilżonej powierzchni lub obserwacja włókien na krawędziach\n• **Oblina** — pomiar na krawędzi prostopadle do płaszczyzny'
      },
      {
        heading: 'Warunki oceny',
        body: 'Tarcicę ocenia się po wyschnięciu do wilgotności **≤ 20%**, chyba że kontrakt przewiduje inaczej.'
      }
    ]
  },
  {
    id: 'M12', module: 'Modul 12', title: 'Ocena i weryfikacja partii (Tablica 4)', icon: '✅',
    sections: [
      {
        heading: 'Liczność próby wg wielkości partii',
        body: '| Wielkość partii (szt) | Liczność próby | Dopuszcz. niezgodne |\n|---|---|---|\n| do 150 | 13 | 1 |\n| 151–500 | 20 | 1 |\n| 501–1200 | 32 | 2 |\n| 1201–3200 | 50 | 3 |\n| > 3200 | 80 | 4 |'
      },
      {
        heading: 'Zasada akceptacji partii',
        body: 'Jeśli w próbie liczba elementów niezgodnych z deklarowaną klasą jest **równa lub mniejsza od dopuszczalnej** — partia zostaje przyjęta. Jeśli przekracza — partia zostaje **odrzucona** lub poddana 100% kontroli.'
      },
      {
        heading: 'Oznaczenie tarcicy',
        body: 'Każdy element powinien być oznaczony klasą jakości (**KW / KS / KG**) lub cała partia oznaczona na dokumentach.'
      },
      {
        heading: 'Klasy wytrzymałości (EN 338)',
        body: 'Klasy wizualne przekładają się na klasy wytrzymałości:\n• **KW** → C24 (i wyższe wg EN 1912)\n• **KS** → C18\n• **KG** → C14'
      }
    ]
  }
];
