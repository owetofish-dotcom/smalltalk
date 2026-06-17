// theory.js - treść teorii PN-D-94021:2013-10
const THEORY = [
  {
    id: 'A1',
    title: 'Zakres normy i gatunki drewna',
    content: `Norma PN-D-94021:2013-10 dotyczy tarcicy konstrukcyjnej iglastej — obrzyny, szorstkiej lub struganej — przeznaczonej na nośne konstrukcje drewniane, sortowanej wizualnie.

Gatunki drewna objęte normą (kody botaniczne):
• PNSY — Pinus sylvestris — Sosna zwyczajna
• PCAB — Picea abies — Świerk pospolity
• LADC — Larix decidua — Modrzew europejski
• ABAL — Abies alba — Jodła pospolita
• PSMN — Pseudotsuga menziesii — Daglezja zielona

Norma określa klasy jakości, metody badań, wymagania wymiarowe oraz zasady oceny tarcicy przeznaczonej do stosowania w konstrukcjach nośnych.`
  },
  {
    id: 'A2',
    title: 'Klasyfikacja tarcicy — wymiary przekroju (Tablica 1)',
    content: `Podział tarcicy iglastej wg wymiarów przekroju poprzecznego:

┌─────────────┬──────────────────┬───────────────┐
│ Rodzaj      │ Szerokość (b)    │ Proporcja h/b │
├─────────────┼──────────────────┼───────────────┤
│ Deski       │ 22–50 mm         │ h/b ≥ 2       │
│ Bale        │ 50–100 mm        │ h/b ≥ 2       │
│ Łaty        │ 30–100 mm        │ 1 ≤ h/b < 2   │
│ Krawędziaki │ ≥ 100 mm         │ 1 ≤ h/b < 2   │
│ Belki       │ ≥ 100 mm         │ h/b ≥ 2       │
└─────────────┴──────────────────┴───────────────┘

gdzie: b = szerokość, h = wysokość (grubość) przekroju.

Tarcica może być surowa (mokra lub sucha) albo suszona. Wilgotność suchej tarcicy nie przekracza 20%.`
  },
  {
    id: 'A3',
    title: 'Klasy jakości KW / KS / KG — definicje',
    content: `Norma wyróżnia trzy klasy jakości:

KW (Klasa Wyższa)
Najwyższa klasa jakości. Surowe wymogi dotyczące sęków, pęknięć, ukośności włókien. Stosowana tam, gdzie wymagana jest wysoka niezawodność elementów.

KS (Klasa Średnia)
Klasa pośrednia. Dopuszcza większe wady niż KW, ale wymaga spełnienia określonych progów. Najczęściej stosowana w praktyce budowlanej.

KG (Klasa Górna / Odrzut)
Najniższa klasa sortowania wizualnego. Dopuszcza największe wady w granicach normy. Tarcicy niespełniającej KG nie klasyfikuje się jako tarcicę konstrukcyjną.

Zasada przekroju najgorszego: klasę wyznacza się według najgorszej wady w najgorszym miejscu przekroju. Jedna wada dyskwalifikująca oznacza przypisanie niższej klasy lub odrzut.`
  },
  {
    id: 'A4',
    title: 'Definicje podstawowe',
    content: `Strefa marginalna (brzeżna)
Część przekroju tarcicy, która leży w odległości do 1/4 szerokości od krawędzi (b/4). W tej strefie sęki mają większy wpływ na wytrzymałość niż w środkowej strefie.

Przekrój najgorszy
Miejsce na długości elementu, w którym łączny wpływ wad na wytrzymałość jest największy. To w tym miejscu ocenia się klasę jakości.

USC (Uśredniony Sęk w Ćwiartce)
Stosunek sumy średnic sęków w ćwiartce szerokości do długości ćwiartki wynoszący 150 mm. Wskaźnik uwzględnia skupienie sęków na odcinku.

USM (Uśredniony Sęk Marginalny)
Analogiczny do USC, ale liczony dla strefy marginalnej (brzeżnej). Kluczowy dla oceny sęków na krawędziach, które mają największy wpływ na wytrzymałość na zginanie.

Sęk — defekt wynikający z obecności gałęzi w drewnie. Oceniany przez stosunek średnicy sęka do szerokości elementu lub przez wskaźniki USC/USM.`
  },
  {
    id: 'A5',
    title: 'Sęki — wskaźniki sękatości dla klas KW/KS/KG (Tablica 2)',
    content: `Dopuszczalne wskaźniki sękatości wg klasy:

WSKAŹNIK USC (sęki w ćwiartce):
• KW: USC ≤ 1/5 (0,20)
• KS: USC ≤ 2/5 (0,40)
• KG: USC ≤ 3/5 (0,60) lub USC ≤ 1/2 w strefie marginalnej

WSKAŹNIK USM (sęki marginalne):
• KW: USM ≤ 1/5 (0,20)
• KS: USM ≤ 1/3 (0,33)
• KG: USM ≤ 1/2 (0,50)

Sęki zdrośnięte (wrosłe): traktowane jak sęki żywe — mogą być dopuszczone w powyższych limitach.
Sęki luźne i wybite: wchodzą w ogólny wskaźnik, ale liczne luźne sęki mogą powodować odrzut ze względu na integralność elementu.
Sęki karbowe (karby): niedopuszczalne w KW, ograniczone w KS i KG.`
  },
  {
    id: 'A6',
    title: 'Ukośny przebieg włókien',
    content: `Ukośność włókien (skośność) mierzy się jako odchylenie przebiegu włókna od osi podłużnej elementu, wyrażone stosunkiem 1:x (np. 1:10 oznacza 1 mm odchylenia na 10 mm długości).

Dopuszczalne wartości:
• KW: nie więcej niż 1:10 (≤ 10%)
• KS: nie więcej niż 1:6 (≤ 16,7%)
• KG: nie więcej niż 1:4 (≤ 25%)

Drewno ze skrętem włókien (sęcznienie spiralne) ocenia się oddzielnie — spiralny przebieg włókien jest bardziej niekorzystny niż skos i może wymagać zaostrzonych kryteriów.

Pomiar: na płaskiej powierzchni tarcicy (krawędziak lub bale — na bocznej), na odcinku przynajmniej 150 mm, mierząc odchylenie rysy od osi elementu.`
  },
  {
    id: 'A7',
    title: 'Pęknięcia — głębokość i długość dla klas KW/KS/KG',
    content: `Pęknięcia (rysy, szczeliny) dzielone są na:
• Powierzchniowe — głębokość ≤ 5 mm (ogólnie tolerowane)
• Głębokie — głębokość > 5 mm, oceniane wg poniższych kryteriów

PĘKNIĘCIA GŁĘBOKIE:
┌───────────────┬─────────────────────┬────────────────────────┐
│ Klasa         │ Głębokość           │ Długość                │
├───────────────┼─────────────────────┼────────────────────────┤
│ KW            │ ≤ 1/4 b             │ ≤ 1/4 długości         │
│ KS            │ ≤ 1/3 b             │ ≤ 1/3 długości         │
│ KG            │ ≤ 1/2 b             │ bez limitu             │
└───────────────┴─────────────────────┴────────────────────────┘

Pęknięcia przelotowe (na wylot): niedopuszczalne w KW. W KS i KG — ograniczone długością i lokalizacją (nie na końcach elementu, z wyjątkiem kurczowych).

Pęknięcia kurczowe (skurczowe): powstające podczas suszenia. Tolerowane do określonej długości w każdej klasie.`
  },
  {
    id: 'A8',
    title: 'Wady niedopuszczalne',
    content: `Następujące wady dyskwalifikują tarcicę ze wszystkich klas (KW, KS, KG):

Zgnilizna (butwienie)
Jakikolwiek widoczny rozkład biologiczny drewna powodujący utratę struktury komórkowej. Zgnilizna sucha (biaława, brązowa lub biała) i mokra — każda forma jest wadą niedopuszczalną.

Chodniki owadzie
Otwory i kanały drążone przez larwy owadów (chrząszcze, drewnojady). Nawet ślad aktywnej inwazji dyskwalifikuje element.

Wady niedopuszczalne w KW i KS (dopuszczalne częściowo w KG):
• Drewno zakorzone (z korą) na powierzchniach nośnych
• Wyraźne drewno reakcyjne (drewno ściskowe u iglaków) — powyżej ustalonych limitów
• Grzyby zmieniające barwę — sinizna może być dozwolona w niższych klasach w ograniczonym zakresie`
  },
  {
    id: 'A9',
    title: 'Drewno reakcyjne, sinizna, słoistość, gęstość',
    content: `Drewno reakcyjne (ściskowe / kompresyjne)
U drzew iglastych tworzy się po stronie dolnej pochyłego pnia jako drewno ściskowe (drewno ciemniejsze, gęstsze). Charakteryzuje się anizotropowym kurczeniem i niższą wytrzymałością na rozciąganie. Norma ogranicza jego udział w przekroju:
• KW: ≤ 1/4 przekroju
• KS: ≤ 1/3 przekroju
• KG: ≤ 1/2 przekroju

Sinizna (zasinienie, blue stain)
Przebarwienie spowodowane grzybami sinicowymi (Ophiostoma). Nie osłabia mechanicznie drewna, ale świadczy o wysokiej wilgotności i możliwym ryzyku biologicznym. W KW niedopuszczalna, w KS ograniczona (do 1/3 powierzchni), w KG dopuszczona szerzej.

Słoistość
Norma nie określa wprost limitów szerokości słojów rocznych dla izgatunków, jednak gęste słojowanie poprawia właściwości mechaniczne.

Gęstość
Norma nie klasyfikuje bezpośrednio wg gęstości, ale klasy wytrzymałości (C16, C24 etc.) przypisywane do klas wizualnych wynikają pośrednio z typowej gęstości gatunków.`
  },
  {
    id: 'A10',
    title: 'Cechy geometryczne — Tablica 3 (oblina, krzywizna, wichrowatość)',
    content: `Cechy geometryczne oceniane wg Tablicy 3:

OBLINA (zaokrąglenie krawędzi z kory)
Stosunek głębokości obliny do szerokości/grubości elementu:
• KW: ≤ 1/3 b na krawędziach, ≤ 1/4 h na płaszczyznach
• KS: ≤ 1/2 b / ≤ 1/3 h
• KG: bez limitu wymiarowego (ale nie może naruszać wymiarów nominalnych w miejscach nośnych)

KRZYWIZNA WZDŁUŻNA
Pomiar strzałki ugięcia względem długości:
• KW: ≤ 5 mm/2 m (prosta i ukośna)
• KS: ≤ 8 mm/2 m
• KG: ≤ 12 mm/2 m

WICHROWATOŚĆ
Skręcenie przekroju na długości 2 m:
• KW: ≤ 2 mm/25 mm szerokości
• KS: ≤ 4 mm/25 mm szerokości
• KG: ≤ 6 mm/25 mm szerokości

STRZAŁKA BOCZNA (krzyżulec)
• KW: ≤ 5 mm/2 m
• KS: ≤ 10 mm/2 m
• KG: ≤ 15 mm/2 m`
  },
  {
    id: 'A11',
    title: 'Metody badań (wilgotność, wymiary, jakość)',
    content: `Wilgotność
Pomiar metodą elektryczną (wilgotnościomierzem oporowym) lub wagową (suszenie do stałej masy). Tarcica sucha: wilgotność ≤ 20%. Pomiar w odległości 300 mm od czoła, w przekroju środkowym grubości.

Wymiary
• Grubość i szerokość — mierzone prostopadle do osi, suwmiarką z dokładnością 1 mm, w 3 miejscach na długości
• Długość — taśmą mierniczą od czoła do czoła, z dokładnością 50 mm
• Wymiary nominalne podawane dla wilgotności 20% (korekta kurczliwości przy innych wilgotnościach)

Ocena wad jakościowych
• Sęki — średnicę sęka mierzy się jako średnią z dwóch prostopadłych wymiarów; dla sęków karbowych uwzględnia się zagłębienie
• Pęknięcia — głębokość mierzona sondą lub w przekroju, długość wzdłuż elementu
• Ukośność włókien — linia rysika na zwilżonej powierzchni lub obserwacja włókien na krawędziach
• Oblina — pomiar na krawędzi prostopadle do płaszczyzny

Tarcicę ocenia się po wyschnięciu do wilgotności ≤ 20%, chyba że kontrakt przewiduje inaczej.`
  },
  {
    id: 'A12',
    title: 'Ocena i weryfikacja — Tablica 4 (liczność próby)',
    content: `Weryfikacja zgodności partii tarcicy odbywa się na podstawie próby losowej według Tablicy 4:

┌──────────────────────┬──────────────┬─────────────────────┐
│ Wielkość partii (szt)│ Liczność próby│ Dopuszcz. niezgodne │
├──────────────────────┼──────────────┼─────────────────────┤
│ do 150               │ 13           │ 1                   │
│ 151–500              │ 20           │ 1                   │
│ 501–1200             │ 32           │ 2                   │
│ 1201–3200            │ 50           │ 3                   │
│ > 3200               │ 80           │ 4                   │
└──────────────────────┴──────────────┴─────────────────────┘

Zasada: jeśli w próbie liczba elementów niezgodnych z deklarowaną klasą jest równa lub mniejsza od dopuszczalnej — partia zostaje przyjęta. Jeśli przekracza — partia zostaje odrzucona lub poddana 100% kontroli.

Oznaczenie tarcicy: każdy element powinien być oznaczony klasą jakości (KW / KS / KG) lub cała partia oznaczona na dokumentach.

Klasy wytrzymałości (EN 338): klasy wizualne przekładają się na:
• KW → C24 (i wyższe wg EN 1912)
• KS → C18
• KG → C14`
  }
];
