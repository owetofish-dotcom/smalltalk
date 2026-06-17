// theory.js — BrakarzAppka
// Struktura zgodna z metodyką kursów brakarskich (PIGPD, Forest Consulting Center, CEBET)
// Kolejność: prawo → budowa drewna → gatunki → wady → klasy jakości → pomiar → dokumentacja

const THEORY = [

  // ─── MODUŁ 1: Podstawy prawne i normatywne ───────────────────────────────
  {
    id: 'M1',
    module: 'Moduł 1',
    title: 'Podstawy prawne i normatywne',
    icon: '⚖️',
    sections: [
      {
        heading: 'Dlaczego sortowanie wytrzymałościowe jest obowiązkowe?',
        body: `Drewno konstrukcyjne stosowane w nośnych elementach budowlanych musi posiadać udokumentowane właściwości mechaniczne. Bez klasyfikacji wytrzymałościowej nie można przypisać drewnu wartości obliczeniowych wymaganych przez Eurokod 5 (PN-EN (Polska Norma wdrażająca normę Europejską) 1995-1-1).

Znak CE (Conformité Européenne — europejski znak zgodności) na tarcicy konstrukcyjnej jest obowiązkowy od wdrożenia systemu znakowania wyrobów budowlanych. Oznacza, że producent przejmuje odpowiedzialność za zgodność produktu z deklarowanymi właściwościami.`
      },
      {
        heading: 'Kluczowe dokumenty normatywne',
        body: `• **PN-D-94021:2013-10** — polska norma klasyfikacyjna, definiuje klasy jakości KW, KS, KG dla sortowania wizualnego
• **PN-EN (Polska Norma wdrażająca normę Europejską) 14081-1** — wymagania ogólne dla drewna sortowanego wytrzymałościowo (wymogi ZKP (Zakładowa Kontrola Produkcji), oznakowanie)
• **PN-EN 338** — klasy wytrzymałości drewna (C16, C24, C30...)
• **PN-EN 1912** — przyporządkowanie klas jakości wizualnej (KW (Klasa Wyborowa)/KS (Klasa Średniej jakości)/KG (Klasa Gorszej jakości)) do klas wytrzymałości
• **PN-EN 1995-1-1 (Eurokod 5)** — projektowanie konstrukcji drewnianych, wartości obliczeniowe`
      },
      {
        heading: 'System Zakładowej Kontroli Produkcji (ZKP)',
        body: `Producent tarcicy konstrukujcyjnej musi wdrożyć system ZKP zgodny z PN-EN 14081-1. Wymaga on:
• Wykwalifikowanego brakarza z ważnym certyfikatem
• Udokumentowanych procedur sortowania
• Zapisów wyników sortowania
• Regularnych audytów przez jednostkę notyfikowaną

Brakarz wizualny posiadający certyfikat jest kluczowym ogniwem w tym systemie — bez niego firma nie może oznakować tarcicy znakiem CE (Conformité Européenne — europejski znak zgodności).`
      }
    ]
  },

  // ─── MODUŁ 2: Budowa anatomiczna drewna ──────────────────────────────────
  {
    id: 'M2',
    module: 'Moduł 2',
    title: 'Budowa anatomiczna drewna iglastego',
    icon: '🔬',
    sections: [
      {
        heading: 'Makroskopowa budowa drewna',
        body: `Przekrój poprzeczny pnia drzewa iglastego pokazuje:
• **Rdzeń** — centralna część pnia, często miękka lub pusta
• **Drewno dojrzałe (twardziel)** — ciemniejsza wewnętrzna część, martwe komórki, większa trwałość naturalna
• **Biel** — zewnętrzna, jaśniejsza część, żywe komórki transportujące wodę i substancje pokarmowe
• **Kambium** — warstwa komórek tworzących nowe drewno
• **Łyko i kora** — transportuje asymilaty z liści/igieł`
      ,
        images: [
          {
            src: 'assets/img/anatomia_przekroj.jpg',
            alt: 'Przekrój pnia z opisem anatomicznym - twardziel, biel, kambium, kora',
            source: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:American_forestry_(1910-1923)_(18145731255).jpg',
            license: 'Public domain'
          },
          {
            src: 'assets/img/anatomia_rysunek.png',
            alt: 'Rysunek przekroju pnia: biel (alburnum/sapwood) i kora - klasyczna ilustracja anatomiczna',
            source: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Alburnum_(PSF).png',
            license: 'Public domain'
          }
        ]
      },
      {
        heading: 'Słoje roczne (przyrosty roczne)',
        body: `Każdy rok wegetacyjny tworzy jeden słój roczny złożony z:
• **Drewno wczesne** — duże, cienkościenne komórki, jasne, tworzone wiosną
• **Drewno późne** — małe, grubościenne komórki, ciemne, tworzone latem/jesienią

**Słoistość** to przeciętna szerokość przyrostów rocznych — mierzona na czole tarcicy na odcinku 75 mm wzdłuż linii promieniowej. Wąskie słoje (gęste drewno) oznaczają wyższą gęstość i wytrzymałość.`
      ,
        image: {
          src: 'assets/img/sloje_schemat.png',
          alt: 'Schemat struktury drewna - słoje roczne (drewno wczesne i późne), twardziel, łyko, kora',
          caption: 'Schemat struktury drewna — słoje roczne (drewno wczesne i późne), twardziel, łyko, kora. Źródło: Wikimedia Commons · CC BY-SA 3.0',
          source: 'Wikimedia Commons',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Wood_structure_numbers.svg',
          license: 'CC BY-SA 3.0'
        }
      },
      {
        heading: 'Kierunki anatomiczne drewna',
        body: `• **Podłużny** — wzdłuż osi pnia, kierunek włókien
• **Promieniowy** — od rdzenia do kory
• **Styczny** — prostopadle do promienia

Różne orientacje drewna w tarcicy wpływają na właściwości mechaniczne:
• Tarcica **promieniowa** — słoje prostopadle do płaszczyzny, stabilna wymiarowo
• Tarcica **styczna** — słoje równolegle do płaszczyzny, większe skurcze
• Tarcica **rdzeniowa** — zawiera rdzeń, mniej stabilna`
      }
    ]
  ,
        image: {
          src: 'assets/img/anatomia_schemat.png',
          alt: 'Schemat kierunków włókien w pniu - przekrój tangencjalny, radialny i poprzeczny',
          source: 'Wikimedia Commons',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Baum_und_Fasern.svg',
          license: 'CC BY-SA 3.0'
        }
      },

  // ─── MODUŁ 3: Gatunki drewna iglastego ───────────────────────────────────
  {
    id: 'M3',
    module: 'Moduł 3',
    title: 'Rozpoznawanie gatunków drewna iglastego',
    icon: '🌲',
    sections: [
      {
        heading: 'Gatunki objęte normą PN-D-94021',
        body: `Norma obejmuje 5 gatunków drewna iglastego:

| Kod | Gatunek | Nazwa łacińska |
|-----|---------|----------------|
| PNSY | Sosna zwyczajna | Pinus sylvestris L. |
| PCAB | Świerk pospolity | Picea abies (L.) Karst. |
| LADC | Modrzew europejski | Larix decidua Mill. |
| ABAL | Jodła pospolita | Abies alba Mill. |
| PSMN | Daglezja zielona | Pseudotsuga menziesii (Mirb.) Franco |`
      ,
        image: {
          src: 'assets/img/16_gatunkow.jpg',
          alt: 'Próbki 16 gatunków drewna europejskiego - sosna, świerk, modrzew, jodła i inne gatunki iglaste i liściaste',
          source: 'Wikimedia Commons',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:16_wood_samples.jpg',
          license: 'CC0 (domena publiczna)'
        }
      },
      {
        heading: 'Cechy rozpoznawcze gatunków',
        body: `**Sosna zwyczajna (PNSY)**
Wyraźna twardziel (czerwono-brązowa), biel kremowa. Sęki okrągłe, twarde, zrośnięte. Charakterystyczny zapach żywiczny.

**Świerk pospolity (PCAB)**
Brak wyraźnej twardzieli, drewno jednolicie kremowe/żółtawe. Sęki mniejsze, często w skupiskach (okółki). Smoliste pęcherze charakterystyczne.

**Modrzew europejski (LADC)**
Wyraźna czerwono-brązowa twardziel. Drewno cięższe, trwalsze. Sęki wyraźne, twarde.

**Jodła pospolita (ABAL)**
Brak wyraźnej twardzieli, drewno białe/kremowe. Brak żywicy — brak smolnych kieszonek. Lekkie.

**Daglezja zielona (PSMN)**
Wyraźna twardziel. Twardsza i cięższa od świerka. Charakterystyczny zapach.`,
        images: [
          {
            src: 'assets/img/sosna_przekroj.jpg',
            alt: 'Przekrój poprzeczny sosny zwyczajnej (Pinus sylvestris) - wyraźna czerwono-brązowa twardziel i biała biel',
            source: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pinus_silvestris_cross_beentree.jpg',
            license: 'CC BY-SA 3.0'
          },
          {
            src: 'assets/img/swierka_przekroj.jpg',
            alt: 'Przekrój poprzeczny świerka pospolitego (Picea abies) - brak wyraźnej twardzieli, drewno kremowe',
            source: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Norway_spruce_(Picea_abies)_trunk_cross_section.png',
            license: 'CC0 (domena publiczna)'
          },
          {
            src: 'assets/img/modrzew_przekroj.jpg',
            alt: 'Przekrój poprzeczny modrzewia europejskiego (Larix decidua) - silnie zaznaczona twardziel, wyraźne słoje roczne',
            source: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Przekr%C3%B3j_Larix_decidua_Modrzew_europejski_OB_UWr_2023-07-21_01.jpg',
            license: 'CC BY-SA 4.0'
          },
          {
            src: 'assets/img/jodla_przekroj.jpg',
            alt: 'Przekrój poprzeczny jodły pospolitej (Abies alba) - brak wyraźnej twardzieli, drewno białe/kremowe, Beskid Żywiecki',
            source: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Abies_alba_cross_section_Beskid_%C5%BBywiecki.JPG',
            license: 'CC BY-SA 4.0'
          },
          {
            src: 'assets/img/daglezja_przekroj.jpg',
            alt: 'Przekrój poprzeczny daglezji zielonej (Pseudotsuga menziesii) - wyraźna twardziel, gęste słoje roczne',
            source: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pseudotsuga_menziesii_cross_section.jpg',
            license: 'CC BY-SA 3.0'
          }
        ]
      },
      {
        heading: 'Zakaz mieszania gatunków przy sortowaniu wizualnym',
        body: `Przy sortowaniu metodą wizualną **nie wolno mieszać w jednej partii różnych gatunków drewna** — szczególnie jodłowej ze świerkową (wyglądają podobnie, ale mają inne właściwości).

Przy sortowaniu maszynowym mieszanie jest dopuszczalne za zgodą stron.

Gatunek sprawdza się przez **oględziny nieuzbrojonym okiem** (pkt 6.1 normy).`
      }
    ]
  },

  // ─── MODUŁ 4: Terminologia i definicje ───────────────────────────────────
  {
    id: 'M4',
    module: 'Moduł 4',
    title: 'Kluczowe terminy i definicje',
    icon: '📖',
    sections: [
      {
        heading: 'Strefa marginalna',
        body: `**Strefa marginalna** (pkt 3.2) to strefa boczna na całej długości każdego z boków tarcicy, o szerokości równej **¼ szerokości płaszczyzny** tarcicy.

Każda sztuka tarcicy ma dwie strefy marginalne (górna i dolna ¼ szerokości). To w tych strefach sęki mają największy wpływ na wytrzymałość — strefy marginalne są szczególnie ważne, bo materiał na krawędziach pracuje przy zginaniu najintensywniej.`
      },
      {
        heading: 'Przekrój poprzeczny najgorszy',
        body: `**Przekrój poprzeczny najgorszy** (pkt 3.3) to przekrój umowny poprowadzony w miejscu **największego skupienia wad drewna**, zwłaszcza sęków, stanowiący płaszczyznę rzutowania tych sęków.

Uwaga: pod uwagę brane są wymiary i rozmieszczenie (na płaszczyznach, bokach, krawędziach) **wszystkich sęków bez względu na ich kształt, zdrowotność i stopień zrośnięcia** z otaczającym drewnem.

Jakość sztuki tarcicy określa się w miejscu maksymalnego nasilenia wad.`
      },
      {
        heading: 'Wskaźniki sękatości USC i USM',
        body: `**USM** (wskaźnik sękatości strefy marginalnej) — odnosi się do jednej z dwóch stref marginalnych, tj. do tej, w której sęki zajmują **większą powierzchnię** (gorszy margines).

**USC** (ogólny wskaźnik sękatości) — odnosi się do **całego przekroju poprzecznego** tarcicy.

Oblicza się je jako stosunek pola przekroju sęków do pola przekroju tarcicy (lub strefy marginalnej). Szczegółowe zasady obliczania podano w Załączniku A (rysunki A.1-A.3).`,
        examTips: [
          {
            q: 'Co oznacza skrót USM?',
            a: 'Wskaźnik Sękatości Marginalnej — odnosi się do gorszego z dwóch marginesów (większy udział sęków)',
            note: 'USC = Ogólny Wskaźnik Sękatości całego przekroju. Strefa marginalna = ¼ szerokości tarcicy z każdej strony.'
          }
        ]
      },
      {
        heading: 'Klasyfikacja wymiarów — Tablica 1',
        body: `Tarcicę dzieli się na 5 sortymentów wg grubości b i stosunku h/b:

| Sortyment | Grubość b (mm) | Stosunek h/b |
|-----------|----------------|--------------|
| Deski | 22 ≤ b < 50 | h/b ≥ 2 |
| Bale | 50 ≤ b < 100 | h/b ≥ 2 |
| Łaty | 30 ≤ b < 100 | 1 ≤ h/b < 2 |
| Krawędziaki | b ≥ 100 | 1 ≤ h/b < 2 |
| Belki | b ≥ 100 | h/b ≥ 2 |

gdzie **b = grubość**, **h = szerokość** przekroju poprzecznego.`,
        examTips: [
          {
            q: 'Jak klasyfikuje się tarcicę o grubości b = 35 mm i stosunku h/b = 3,0?',
            a: 'Deska (22 ≤ b < 50 mm i h/b ≥ 2)',
            note: 'Tablica 1: deski 22–50 mm, bale 50–100 mm, łaty h/b 1–2, krawędziaki b ≥ 100 mm h/b < 2, belki b ≥ 100 mm h/b ≥ 2.'
          }
        ]
      }
    ]
  },

  // ─── MODUŁ 5: Klasy jakości — sęki ───────────────────────────────────────
  {
    id: 'M5',
    module: 'Moduł 5',
    title: 'Klasy jakości — sęki i ukośny przebieg włókien',
    icon: '🔵',
    sections: [
      {
        heading: 'Trzy klasy jakości wizualnej',
        body: `Przy sortowaniu wizualnym wyróżniamy:
• **KW** — klasa wyborowa (najlepsza)
• **KS** — klasa średniej jakości
• **KG** — klasa gorszej jakości

Klasy te przyporządkowuje się do klas wytrzymałości wg PN-EN 1912. W praktyce polskiej sosna i świerk KW → C24, KG/KS → C16.`
      },
      {
        heading: 'Wskaźniki sękatości — Tablica 2',
        body: `**Klasa KW:**
• USM (Wskaźnik Sękatości Marginalnej) ≤ ¼ i USC (Ogólny Wskaźnik Sękatości) ≤ ¼

**Klasa KS** (dwa warianty, oba dopuszczone):
• Wariant 1: USM ≤ ¼, USC ≤ ⅓
• Wariant 2: USM ≤ ½, USC ≤ ¼

**Klasa KG** (dwa warianty):
• Wariant 1: USM ≤ ½, USC ≤ ½
• Wariant 2: USM > ½, USC ≤ ⅓

Przy krawędziakach i belkach marginesy wyznacza się dla każdej z czterech powierzchni podłużnych.

Sęki o średnicy < 5 mm **pomija się**.`,
        examTips: [
          {
            q: 'Jakie są dopuszczalne wskaźniki sękatości dla klasy KW?',
            a: 'USM ≤ ¼ i USC ≤ ¼',
            note: 'KW to klasa wyborowa — najsurowsze kryteria ze wszystkich trzech klas. KS wariant 1: USM ≤ ¼, USC ≤ ⅓.'
          }
        ],
        image: {
          src: 'assets/img/sek_tarcica.jpg',
          alt: 'Sęk w tarcicy iglastej',
          source: 'Wikimedia Commons',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Wood_Knot.JPG',
          license: 'CC BY-SA 3.0'
        }
      },
      {
        heading: 'Kumulacja sęków',
        body: `Dwa pojedyncze sęki lub dwa oddzielne skupienia sęków **podlegają kumulacji** (traktuje się je jako jedno skupienie), jeżeli:
1. Rozmiary każdego z nich rozpatrywanego z osobna mogą stanowić podstawę klasyfikacji (są wystarczająco duże)
2. Odległość między nimi, mierzona wzdłuż włókien, **nie jest większa niż ½ szerokości tarcicy**

Po kumulacji, jeśli suma przekracza kryterium, sztukę reklasyfikuje się do niższej klasy lub odrzuca.`
      ,
        images: [
          {
            src: 'assets/img/seki_deska.jpg',
            alt: 'Deska budowlana z sękami różnego rodzaju - widoczne sęki zrośnięte i niezrośnięte',
            source: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Wood_knots_IMG_8897.JPG',
            license: 'CC0 (domena publiczna)'
          },
          {
            src: 'assets/img/seki_podloga.jpg',
            alt: 'Sęki zrośnięte w starej podłodze - wystają bo są twardsze od otaczającego drewna',
            source: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Prominent_Knots_in_Worn_Wooden_Floor_at_Kiyomizu-dera.jpg',
            license: 'CC BY-SA 4.0'
          }
        ]
      },
      {
        heading: 'Ukośny przebieg włókien — Tablica 2',
        body: `Ukośny przebieg włókien osłabia wytrzymałość na rozciąganie. Dopuszczalne wartości:

| Klasa | Max odchylenie | Proporcja |
|-------|----------------|-----------|
| KW (Klasa Wyborowa) | ≤ 7% | 1:14 |
| KS (Klasa Średniej jakości) | ≤ 10% | 1:10 |
| KG (Klasa Gorszej jakości) | ≤ 16% | 1:6 |

Mierzone jako odchylenie włókien od osi podłużnej (s = BC/AC × 100%).

**Narzędzie:** rysak z obrotowym uchwytem i cienką igłą. Igła prowadzona wzdłuż tarcicy wyznacza przebieg włókien. Możliwe też szablony klasy.`,
        examTips: [
          {
            q: 'Jaki jest dopuszczalny ukośny przebieg włókien dla klasy KW?',
            a: '≤ 7% (proporcja 1:14)',
            note: 'KS: ≤ 10% (1:10), KG: ≤ 16% (1:6). Mierzone rysakiem z obrotową igłą lub szablonami klas.'
          }
        ],
        image: {
          src: 'assets/img/ukosny_diagram2.jpg',
          alt: 'Diagram spiralnego przebiegu włókien w kłodzie — linie czerwona i niebieska pokazują odchylenie od osi',
          caption: 'Diagram spiralnego przebiegu włókien w kłodzie — linie czerwona i niebieska pokazują odchylenie od osi. Źródło: Wikimedia Commons · CC BY-SA 3.0',
          source: 'Wikimedia Commons',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Slope_of_grain_beentree.jpg',
          license: 'CC BY-SA 3.0'
        }
      }
    ]
  },

  // ─── MODUŁ 6: Pęknięcia i wady strukturalne ──────────────────────────────
  {
    id: 'M6',
    module: 'Moduł 6',
    title: 'Pęknięcia, pęcherze żywiczne, zakorki',
    icon: '🔶',
    sections: [
      {
        heading: 'Rodzaje pęknięć i sposób pomiaru',
        body: `Pęknięcia mierzy się **szczelinomierzem** (grubość płytki 0,2 mm).

**Głębokość pęknięcia (G)** — odległość między stycznymi równoległymi do płaszczyzn tarcicy.
**Miara pęknięcia: p = G/b** (stosunek głębokości do grubości sztuki).

Pęknięcia na **przeciwległych płaszczyznach lub bokach** sumuje się: p = (G₁+G₂)/b.`
      },
      {
        heading: 'Pęknięcia głębokie — limity Tablica 2',
        body: `Pęknięcia głębokie, nieprzechodzące na czoła (głębokość mierzona szczelinomierzem):

**Głębokość dopuszczalna:**
• KW (Klasa Wyborowa): do **⅓** grubości sztuki
• KS (Klasa Średniej jakości): do **½** grubości sztuki
• KG (Klasa Gorszej jakości): do **⅔** grubości sztuki

**Długość dopuszczalna:**
• KW i KS: do **¼ długości** sztuki, nie dłuższe niż **600 mm**
• KG: do **¼ długości** sztuki, nie dłuższe niż **900 mm**

Pęknięcia traktuje się jako jedno, jeśli odległość między końcami < 5 mm (w kierunku prostopadłym do przebiegu).`,
        examTips: [
          {
            q: 'Jaka jest dopuszczalna głębokość i długość pęknięć głębokich dla klasy KW?',
            a: 'Głębokość: do ⅓ grubości; długość: do ¼ długości sztuki i max 600 mm',
            note: 'KS: głębokość ½, też max 600 mm; KG: głębokość ⅔, max 900 mm. Miara p = G/b (szczelinomierz 0,2 mm).'
          }
        ]
      },
      {
        heading: 'Pęknięcia czołowe — limity',
        body: `Pęknięcia czołowe (nieprzechodzące, przechodzące i okrężne):
• KW (Klasa Wyborowa) i KS (Klasa Średniej jakości): do **1/1** szerokości sztuki
• KG (Klasa Gorszej jakości): do **1½** szerokości sztuki

**Pęcherze żywiczne, zakorki, zabitki** mierzy się tak samo jak pęknięcia głębokie.

Pęknięcia zaczynające się na czołach odnosi się do szerokości lub 1,5× szerokości tarcicy.`
      }
    ]
  },

  // ─── MODUŁ 7: Pozostałe wady strukturalne ────────────────────────────────
  {
    id: 'M7',
    module: 'Moduł 7',
    title: 'Inne wady strukturalne — drewno reaktywne, gęstość, słoistość',
    icon: '⚠️',
    sections: [
      {
        heading: 'Wady bezwzględnie dyskwalifikujące',
        body: `Następujące wady są **niedopuszczalne we wszystkich klasach (KW (Klasa Wyborowa), KS (Klasa Średniej jakości), KG (Klasa Gorszej jakości))**:

• **Zgnilizna** — każde stadium rozkładu drewna przez grzyby powodujące obniżenie wytrzymałości
• **Chodniki owadzie** — drewno z aktywnymi lub widocznymi chodnikami larw

Obecność którejkolwiek z tych wad oznacza natychmiastowe odrzucenie sztuki, bez względu na wszystkie inne parametry.`,
        examTips: [
          {
            q: 'Które wady są bezwzględnie niedopuszczalne we wszystkich klasach?',
            a: 'Zgnilizna i chodniki owadzie — dyskwalifikują sztukę niezależnie od wszystkich innych parametrów',
            note: 'Sinizna natomiast jest dopuszczalna we wszystkich klasach — to tylko przebarwienie, nie wpływa na wytrzymałość.'
          }
        ],
        images: [
          {
            src: 'assets/img/zgnilizna_brunatna2.jpg',
            alt: 'Zgnilizna brunatna (sześcienna) na dębie — Białowieża, Polska. Charakterystyczne pękanie sześcienne.',
            caption: 'Zgnilizna brunatna (sześcienna) na dębie — Białowieża, Polska. Charakterystyczne pękanie sześcienne. Źródło: Wikimedia Commons · CC BY-SA 3.0',
            source: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Cubical_rot_checked_quercus_bialowieza_1_beentree.jpg',
            license: 'CC BY-SA 3.0'
          },
          {
            src: 'assets/img/chodniki_owadzie.jpg',
            alt: 'Chodniki larw kornika pod korą drewna iglastego',
            source: 'Wikimedia Commons',
            sourceUrl: 'https://commons.wikimedia.org/wiki/File:Bark_Beetle_larva_labyrinths.JPG',
            license: 'Public domain'
          }
        ]
      },
      {
        heading: 'Drewno reakcyjne (drewno ciągniące)',
        body: `**Drewno reakcyjne** (drewno sprężyste/drewno ciągniące) to drewno wykazujące zwiększone naprężenia wewnętrzne. W drewnie iglastym to **drewno ściskane** — ciemniejsze, twardsze pasma.

**Pomiar:** R = (R₁+R₂+R₃+R₄) / 2(b+h), gdzie R₁-R₄ to szerokości drewna reakcyjnego na czterech powierzchniach.

**Limity (Tablica 2):**
• KW (Klasa Wyborowa): do **1/5** obwodu
• KS (Klasa Średniej jakości): do **2/5** obwodu
• KG (Klasa Gorszej jakości): do **3/5** obwodu`,
        image: {
          src: 'assets/img/drewno_reakcyjne.jpg',
          alt: 'Drewno reakcyjne (twardzica) - ciemne pasy w drewnie iglastym',
          source: 'Wikimedia Commons',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Twardzica_beentree.jpg',
          license: 'CC BY-SA 3.0'
        }
      },
      {
        heading: 'Sinizna, słoistość i gęstość',
        body: `**Sinizna** — dopuszczalna we wszystkich klasach. To tylko przebarwienie od grzybów (saprofitów), nie wpływa na wytrzymałość.

**Słoistość** (przeciętna szerokość przyrostów rocznych):
• KW (Klasa Wyborowa): ≤ 4 mm
• KS (Klasa Średniej jakości): ≤ 6 mm
• KG (Klasa Gorszej jakości): ≤ 10 mm
Mierzona na czole, na odcinku ~75 mm, wzdłuż linii promieniowej.

**Gęstość minimalna** przy wilgotności 20%:
• KW: ≥ 450 kg/m³ | KS: ≥ 420 kg/m³ | KG: ≥ 400 kg/m³

Ważne: **gęstości nie bierze się pod uwagę, gdy spełnione jest kryterium słoistości** (alternatywne kryteria).`,
        examTips: [
          {
            q: 'Jaka jest dopuszczalna słoistość dla klasy KW?',
            a: '≤ 4 mm (mierzona na czole, odcinek ~75 mm, linia promieniowa)',
            note: 'KS: ≤ 6 mm, KG: ≤ 10 mm. Gęstości nie bierze się pod uwagę, gdy spełnione jest kryterium słoistości.'
          },
          {
            q: 'Jaka jest minimalna gęstość tarcicy klasy KW przy wilgotności 20%?',
            a: '≥ 450 kg/m³ (KS: ≥ 420, KG: ≥ 400)',
            note: 'Gęstość i słoistość to alternatywne kryteria — wystarczy spełnić jedno z nich.'
          }
        ],
        image: {
          src: 'assets/img/sinizna.jpg',
          alt: 'Sinizna w drewnie sosny zwyczajnej - przebarwienie od grzybów',
          source: 'Wikimedia Commons',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Blue_stain_on_pinus_sylvestris_1_beentree.jpg',
          license: 'CC BY-SA 3.0'
        }
      }
    ]
  },

  // ─── MODUŁ 8: Cechy geometryczne ─────────────────────────────────────────
  {
    id: 'M8',
    module: 'Moduł 8',
    title: 'Cechy geometryczne i wady obróbki — Tablica 3',
    icon: '📐',
    sections: [
      {
        heading: 'Oblina',
        body: `**Oblina** to pozostałość kory lub powierzchni okrągłej na krawędzi tarcicy.

**Wskaźnik obliny:** n_H = H/h (na płaszczyźnie) lub n_B = B/b (na boku), gdzie H/B = szerokość obliny.

**Limity:**
• KW (Klasa Wyborowa) i KS (Klasa Średniej jakości): do ¼ grubości i do ¼ szerokości (łącznie na dwóch krawędziach)
• KG (Klasa Gorszej jakości): zróżnicowane — do 300 mm od czół do ⅓/⅓, dalej do ½ grubości i ⅓ szerokości

Oblina mierzy się w miejscu gdzie jej udział jest największy — szczególnie w pierwszych 300 mm od czół.`
      },
      {
        heading: 'Krzywizny i odkształcenia',
        body: `Wszystkie mierzone na odcinku **2 metrów**:

**Krzywizna podłużna płaszczyzyn** (Rys. A.8a — strzałka x):
• KW (Klasa Wyborowa) i KS (Klasa Średniej jakości): ≤ 10 mm | KG (Klasa Gorszej jakości): ≤ 20 mm

**Krzywizna podłużna boków** (Rys. A.8b — spaczenie y):
• KW i KS: ≤ 8 mm | KG: ≤ 12 mm

**Wichrowatość** (Rys. A.8c — odchylenie z od poziomu/25mm szerokości):
• KW i KS: ≤ 1 mm/25 mm | KG: ≤ 2 mm/25 mm

**Krzywizna poprzeczna** (Rys. A.8d — mierzona na czole):
• KW i KS: ≤ 1 mm/25 mm | KG: ≤ 2 mm/25 mm`,
        examTips: [
          {
            q: 'Jaka jest dopuszczalna krzywizna podłużna płaszczyzyn dla klas KW i KS?',
            a: '≤ 10 mm (mierzona na odcinku 2 m); dla KG: ≤ 20 mm',
            note: 'Krzywizna boków: KW/KS ≤ 8 mm, KG ≤ 12 mm. Wichrowatość: KW/KS ≤ 1 mm/25 mm, KG ≤ 2 mm/25 mm.'
          }
        ]
      },
      {
        heading: 'Inne cechy geometryczne',
        body: `**Rysy i falistość rzazu** — dopuszczalne w granicach odchyłek grubości i szerokości dla wymiarów nominalnych.

**Nierównoległość płaszczyzn i boków** — płaszczyzny powinny być wzajemnie równoległe, boki prostopadłe do płaszczyzn. Odchylenia mieszczą się w granicach dopuszczalnych odchyłek wymiarowych.

**Nieprostopadłość czół** — czoła prostopadłe do płaszczyzn i boków; odchylenia mieszczą się w granicach dopuszczalnych odchyłek długości.

Odchyłki wymiarowe określa się wg **PN-EN (Polska Norma wdrażająca normę Europejską) 336**, wymiary wg **PN-EN 1313-1:2010**.`
      }
    ]
  },

  // ─── MODUŁ 9: Praktyczne metody pomiaru (Załącznik A) ────────────────────
  {
    id: 'M9',
    module: 'Moduł 9',
    title: 'Praktyczne metody pomiaru — Załącznik A normy',
    icon: '📏',
    sections: [
      {
        heading: 'A.1 Określanie wskaźnika sękatości (USC i USM)',
        body: `1. Znajdź **najgorszy przekrój poprzeczny** — miejsce największego skupienia sęków
2. Narysuj przekrój z naniesionymi strefami marginalnymi (po ¼ szerokości z każdej strony)
3. **Zaznacz rzuty sęków** na płaszczyźnie rzutowania:
   - Na boku: średnica sęka między stycznymi do jego obwodu, równoległymi do osi podłużnej
   - Na płaszczyźnie: podobnie, z uwzględnieniem kształtu sęka (rdzeń otwarty/zamknięty)
4. Oblicz **USC** = pole sęków / pole całego przekroju
5. Oblicz **USM** = pole sęków w gorszym marginesie / pole marginesu

Rysunki A.1 (zasady) i A.2 (przekrój z rzutami) ilustrują metodę. Rysunek A.3 — 12 przykładów z przypisaną klasą.`
      },
      {
        heading: 'A.2 Pomiar ukośnego przebiegu włókien',
        body: `**Metoda rysakiem:**
1. Przyłóż rysak igłowy do powierzchni tarcicy
2. Prowadź wzdłuż tarcicy (między skupieniami sęków) — igła zagłębia się w drewno wzdłuż włókien
3. Zmierz odchylenie: s = BC/AC (gdzie BC = boczne odchylenie, AC = długość odcinka pomiarowego)
4. Wyraź w % lub proporcji (1:X)

**Szablony klas:** po przyłożeniu szablonu danej klasy, linia przebiegu włókien powinna się "chować" pod szablon.

Rysunek A.4: a) rysak, b) wytyczanie przebiegu, c) szablony KW (1:14), KS (1:10), KG (1:6).`
      ,
        image: {
          src: 'assets/img/ukosny_diagram.jpg',
          alt: 'Diagram pomiaru ukośnego przebiegu włókien (slope of grain) - zasada mierzenia nachylenia',
          source: 'Wikimedia Commons',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Slope_of_grain_2_beentree.jpg',
          license: 'CC BY-SA 3.0'
        }
      },
      {
        heading: 'A.3-A.7 Pozostałe metody pomiaru',
        body: `**A.3 Pęknięcia:** szczelinomierz 0,2 mm do głębokości G; p = G/b. Przy pęknięciach symetrycznych p = (G₁+G₂)/b.

**A.4 Słoistość:** czoło tarcicy, linia promieniowa, odcinek ~75 mm obejmujący całą liczbę przyrostów. W tarcicy rdzeniowej pomija się słoje < 25 mm od rdzenia.

**A.5 Oblina:** niezależnie na bokach i płaszczyznach. Szukaj przekroju z największym udziałem. Wzory: n_H = H/h, n_B = B/b.

**A.6 Odkształcenia:** 2-metrowa listwa (lub struna) do krzywizn podłużnych; pomiar w mm.

**A.7 Drewno reakcyjne:** R = (R₁+R₂+R₃+R₄) / 2(b+h), gdzie R₁-R₄ to szerokości na każdej powierzchni.`
      }
    ]
  },

  // ─── MODUŁ 10: Prowadzenie sortowania i ocena ─────────────────────────────
  {
    id: 'M10',
    module: 'Moduł 10',
    title: 'Prowadzenie sortowania i ocena jakości',
    icon: '✅',
    sections: [
      {
        heading: 'Czynności sortownicze — kolejność',
        body: `W ramach czynności sortowniczych brakarz musi kolejno:
a) **Sprawdzić gatunek drewna** — oględziny nieuzbrojonym okiem
b) **Sprawdzić wilgotność** — wilgotnościomierz elektryczny (PN-EN (Polska Norma wdrażająca normę Europejską) 13183-2)
c) **Sprawdzić wymiary** — wg PN-EN 1309-1, odchyłki wg PN-EN 336
d) **Sprawdzić jakość** — oględziny nieuzbrojonym okiem w miejscu max nasilenia wad
e) **Nanieść oznakowanie** — wg PN-EN 14081-1`
      ,
        image: {
          src: 'assets/img/wilgotnosciomierz.jpg',
          alt: 'Wilgotnościomierz elektryczny podczas pomiaru wilgotności drewna - odczyt cyfrowy Wagner Meters Orion 950',
          source: 'Wikimedia Commons',
          sourceUrl: 'https://commons.wikimedia.org/wiki/File:Wood_moisture_meter_reading_for_wikipedia.jpg',
          license: 'CC BY-SA 4.0'
        }
      },
      {
        heading: 'Sztuka wadliwa i sortowanie stuprocentowe',
        body: `Sortowanie tarcicy ma charakter **kontroli stuprocentowej** — bada się każdą sztukę.

Sztukę tarcicy uznaje się za **wadliwą**, jeżeli nie spełnia chociażby **jednego** z wymagań Rozdziału 5 normy (wilgotność, wymiary, jakość strukturalna, cechy geometryczne).

Sztuka wadliwa może być:
• Zdegradowana do niższej klasy
• Odrzucona z klasy KG (Klasa Gorszej jakości, jeśli nie spełnia nawet KG) — musi być jasno oznaczona jako niekwalifikowalna`,
        examTips: [
          {
            q: 'Co to jest "sztuka wadliwa"?',
            a: 'Sztuka niespełniająca chociażby jednego wymagania Rozdziału 5 normy',
            note: 'Sortowanie ma charakter stuprocentowy — sprawdzana jest każda sztuka z osobna (wilgotność, wymiary, jakość strukturalna, cechy geometryczne).'
          }
        ]
      },
      {
        heading: 'Wilgotność i wymiary — wymagania szczegółowe',
        body: `**Wilgotność:** Zaleca się ≤ 20% przy sortowaniu wizualnym. Za zgodą stron dopuszcza się > 20%.
W sporze — metoda suszarkowo-wagowa (PN-EN (Polska Norma wdrażająca normę Europejską) 13183-1).

**Wymiary:** Minimalna grubość 22 mm (wyjątkowo od 19 mm przy polu przekroju ≥ 2000 mm²). Minimalne pole przekroju 2000 mm².

**Tarcica po przycinaniu/struganiu:** wymaga ponownego sortowania, chyba że nie przekroczono tolerancji wymiarowej.`
      }
    ]
  },

  // ─── MODUŁ 11: Weryfikacja partii ────────────────────────────────────────
  {
    id: 'M11',
    module: 'Moduł 11',
    title: 'Weryfikacja partii — Tablica 4',
    icon: '📊',
    sections: [
      {
        heading: 'Kiedy stosuje się weryfikację partii?',
        body: `Weryfikacja partii jest procedurą uzupełniającą stosowaną **w razie konieczności zweryfikowania**, np. w postępowaniu reklamacyjnym. Nie zastępuje sortowania stuprocentowego.

Zasada: losowy wybór sztuk w ilościach wg **Tablicy 4**. Jeśli liczba sztuk wadliwych w próbie nie przekracza limitu — partia uznana za dobrą. Jeśli przekracza — partia odrzucona.`
      },
      {
        heading: 'Tablica 4 — Liczność próby',
        body: `| Liczność partii | Liczność próby | Max sztuk wadliwych |
|-----------------|----------------|---------------------|
| ≤ 50 | 20 (lub 100%) | 1 |
| 51–90 | 32 | 2 |
| 91–150 | 50 | 3 |
| 151–280 | 80 | 5 |
| 281–500 | 125 | 8 |
| 501–1200 | 200 | 12 |
| 1201–3200 | 315 | 18 |
| > 3200 | 500 | 18 |

**Uwaga:** Jeśli liczność próby ≤ 20 sztuk → stosuje się kontrolę stuprocentową.`,
        examTips: [
          {
            q: 'Ile sztuk należy zbadać przy weryfikacji partii 51–90 sztuk?',
            a: '32 sztuki (max 2 wadliwe dopuszczalne)',
            note: 'Tablica 4: partia ≤ 50 → 20 szt. lub 100%; 91–150 → 50 szt.; 151–280 → 80 szt.; 281–500 → 125 szt.'
          }
        ]
      }
    ]
  },

  // ─── MODUŁ 12: Dokumentacja i ZKP ────────────────────────────────────────
  {
    id: 'M12',
    module: 'Moduł 12',
    title: 'Dokumentacja, ZKP i oznakowanie CE',
    icon: '📋',
    sections: [
      {
        heading: 'Oznakowanie tarcicy sortowanej wytrzymałościowo',
        body: `Oznakowanie wg **PN-EN (Polska Norma wdrażająca normę Europejską) 14081-1** musi zawierać:
• Symbol CE (Conformité Européenne — europejski znak zgodności)
• Numer jednostki certyfikującej
• Klasę wytrzymałości (np. C24)
• Gatunek drewna (np. PNSY)
• Metodę sortowania (V = wizualna)
• Wilgotność (np. KD = suszona komorowo)
• Producenta i numer zakładu

Oznakowanie nakłada się w sposób trwały — stempel, wypalenie, etykieta. Tarcica bez oznakowania **nie może być wprowadzona do obrotu** jako tarcica CE.`
      },
      {
        heading: 'System ZKP — Zakładowa Kontrola Produkcji',
        body: `ZKP (Factory Production Control) to udokumentowany system kontroli, który musi obejmować:
• **Procedury sortowania** z instrukcjami dla brakarzy
• **Zapisy sortowania** — każda partia z datą, ilością, klasą, brakarza
• **Kalibrację urządzeń** (wilgotnościomierze, miary)
• **Szkolenie personelu** — certyfikaty brakarzy muszą być ważne
• **Badania kontrolne** — regularne sprawdzanie wyrobów

System ZKP jest warunkiem uzyskania i utrzymania **certyfikatu CE (Conformité Européenne — europejski znak zgodności)** od jednostki notyfikowanej.`
      },
      {
        heading: 'Rola brakarza w systemie ZKP',
        body: `Brakarz wizualny posiadający ważny certyfikat jest kluczowym elementem ZKP. Jego obowiązki:
• Prowadzenie sortowania zgodnie z normą
• Dokumentowanie wyników każdej partii
• Zgłaszanie problemów (nowe wady, zmiany materiału)
• Udział w audytach jednostki notyfikowanej
• Odnawianie certyfikatów w wymaganych terminach

Praca brakarza jest kontrolowana podczas audytów — może zostać poproszony o praktyczne sortowanie próbek i wyjaśnienie decyzji klasyfikacyjnych.`
      }
    ]
  },

  // ─── MODUŁ 13: Normy europejskie i klasy wytrzymałości ───────────────────
  {
    id: 'M13',
    module: 'Moduł 13',
    title: 'Normy europejskie i klasy wytrzymałości',
    icon: '🏷️',
    sections: [
      {
        heading: 'Normy europejskie w sortowaniu drewna',
        body: `Obok polskiej normy **PN-D-94021** obowiązują normy europejskie (EN) wdrożone w Polsce jako PN-EN:

• **PN-EN 338** — klasy wytrzymałości drewna (C14–C50, D18–D70)
• **PN-EN 1912** — tabele przyporządkowania klas wizualnych do klas wytrzymałości
• **PN-EN 13183-2** — pomiar wilgotności metodą elektryczną oporową
• **PN-EN 14081-1+A1** — ogólne wymagania dla drewna sortowanego wytrzymałościowo, oznakowanie CE

Normy EN są **wymagane przy eksporcie** drewna i do uzyskania **certyfikatu CE**. Producenci stosujący oznakowanie CE muszą stosować te normy łącznie. Na kursach brakarskich normy EN są integralną częścią programu szkolenia.`,
        examTips: [
          {
            q: 'Co oznaczają normy PN-EN 338, 1912, 13183-2 i 14081-1?',
            a: 'EN 338 = klasy wytrzymałości, EN 1912 = przyporządkowanie klas wizualnych, EN 13183-2 = wilgotnościomierz oporowy, EN 14081-1 = wymagania ogólne + oznakowanie CE'
          }
        ]
      },
      {
        heading: 'Klasy wytrzymałości drewna (PN-EN 338)',
        body: `Norma EN 338 definiuje klasy wytrzymałości dla drewna iglastego i topolowego (oznaczenie **C** — od ang. *conifer*):

**C14 · C16 · C18 · C20 · C22 · C24 · C27 · C30 · C35 · C40 · C45 · C50**

Najczęściej stosowana w budownictwie jest klasa **C24**.

Wybrane wartości charakterystyczne:

| Klasa | fm,k (MPa) | ρk (kg/m³) |
|-------|-----------|------------|
| C16   | 16        | 310        |
| C18   | 18        | 320        |
| C24   | 24        | 350        |
| C30   | 30        | 380        |

**fm,k** = charakterystyczna wytrzymałość na zginanie. **ρk** = charakterystyczna gęstość. Cyfra w oznaczeniu klasy odpowiada wartości fm,k w MPa.`,
        examTips: [
          {
            q: 'Jakie wartości charakterystyczne ma klasa C24?',
            a: 'fm,k = 24 MPa (wytrzymałość na zginanie), ρk = 350 kg/m³'
          },
          {
            q: 'Co oznacza cyfra w oznaczeniu klasy C (np. C24)?',
            a: 'Wartość fm,k w MPa — im wyższa cyfra, tym wyższa wytrzymałość drewna'
          }
        ]
      },
      {
        heading: 'Przyporządkowanie klas (PN-EN 1912)',
        body: `Norma EN 1912 podaje tabele przyporządkowania klas wizualnych do klas wytrzymałości. Dla Polski i Europy Środkowej (strefa **CNE**):

| Gatunek | Klasa wizualna | Klasa wytrzymałości |
|---------|---------------|---------------------|
| Sosna zwyczajna (*Pinus sylvestris*) | S10/S10K (KW/KS) | **C24** |
| Świerk pospolity (*Picea abies*) | S10/S10K (KW/KS) | **C24** |
| Jodła pospolita (*Abies alba*) | S10/S10K (KW/KS) | **C24** |
| Modrzew europejski (*Larix decidua*) | S10/S10K (KW/KS) | **C24** |
| Modrzew europejski (*Larix decidua*) | S13/S13K (KG) | **C30** |

Sortowanie wizualne wg PN-D-94021 klasy KW lub KS odpowiada klasie **C24** dla głównych gatunków iglastych. Daglezja (*Pseudotsuga menziesii*) nie jest standardowo ujęta w tablicy dla Polski.`,
        examTips: [
          {
            q: 'Jakiej klasie wytrzymałości odpowiada sosna, świerk i jodła klasy KW/KS?',
            a: 'Klasa C24 wg PN-EN 1912 dla Europy Środkowej (strefa CNE)'
          },
          {
            q: 'Jakiej klasie wytrzymałości odpowiada modrzew europejski klasy S13/S13K?',
            a: 'Klasa C30 — wyższa niż C24 dla głównych gatunków iglastych'
          },
          {
            q: 'Jaka klasa wytrzymałości jest standardem dla polskiego drewna konstrukcyjnego?',
            a: 'C24 — dla sosny, świerka i jodły spełniających wymagania klasy wizualnej KW/KS'
          }
        ]
      },
      {
        heading: 'Pomiar wilgotności opornikiem (PN-EN 13183-2)',
        body: `Metoda oporowa (elektryczna) mierzy opór elektryczny drewna między elektrodami.

**Zakres stosowania:** 7–30% (poza tym zakresem wyniki są niepewne).

**Pozycja elektrod:**
• Odległość od czoła: **≥ 0,3 m**
• Odległość od krawędzi: **≥ 0,3 szerokości** tarcicy
• Głębokość wbicia: **≥ 0,3 grubości** tarcicy

**Odczyt:** w ciągu 2–3 sekund po wbiciu elektrod.

**Zaokrąglenie:** wynik zaokrągla się zawsze **w górę** do pełnego procentu (np. 17,2% → 18%).

**Kalibracja:** urządzenie musi być skalibrowane na gatunek i temperaturę drewna. Pomiar wykonuje się w **najgorszym miejscu** przekroju (najbardziej wilgotnym).`,
        image: {
          src: 'assets/img/wilgotnosciomierz.jpg',
          alt: 'Wilgotnościomierz oporowy elektryczny z elektrodami wbitymi w tarcicę',
          source: 'Materiały szkoleniowe',
          sourceUrl: '#',
          license: 'Materiały edukacyjne'
        },
        examTips: [
          {
            q: 'Jak ustawia się elektrody wilgotnościomierza oporowego wg PN-EN 13183-2?',
            a: '≥ 0,3 m od czoła; ≥ 0,3 szerokości od krawędzi; głębokość ≥ 0,3 grubości — zapamiętaj trzy wartości 0,3!'
          },
          {
            q: 'Jak zaokrągla się wynik pomiaru wilgotności opornikiem elektrycznym?',
            a: 'Zawsze W GÓRĘ do pełnego procentu — np. 17,2% → 18%'
          },
          {
            q: 'Jaki jest zakres stosowania wilgotnościomierza oporowego wg PN-EN 13183-2?',
            a: '7–30% — poza tym zakresem pomiar jest niepewny'
          }
        ]
      },
      {
        heading: 'Oznakowanie i wymagania wg PN-EN 14081-1',
        body: `Norma EN 14081-1 określa ogólne wymagania dla drewna sortowanego wytrzymałościowo.

**Metody sortowania:**
• **V** — sortowanie wizualne (*Visual*)
• **M** — sortowanie maszynowe (*Machine*)

**Oznakowanie CE** musi zawierać:
• Kod producenta i numer jednostki certyfikującej
• Numer normy: EN 14081-1
• Metodę sortowania (V lub M)
• Kod gatunku (np. PNSY = sosna)
• Klasę wytrzymałości (np. C24)
• Wilgotność w chwili sortowania (np. KD = suszona komorowo)

**Dokumentacja FPC** (Factory Production Control — Zakładowa Kontrola Produkcji) musi być przechowywana przez **10 lat**. Sortowanie wizualne podlega nadzorowi jednostki certyfikującej podczas regularnych audytów.`,
        examTips: [
          {
            q: 'Co musi zawierać kompletne oznakowanie CE drewna sortowanego wg PN-EN 14081-1?',
            a: 'Kod producenta, nr normy EN 14081-1, metoda sortowania (V lub M), gatunek, klasa wytrzymałości, wilgotność w chwili sortowania'
          },
          {
            q: 'Przez ile lat przechowuje się dokumentację FPC wg PN-EN 14081-1?',
            a: '10 lat'
          }
        ]
      }
    ]
  }
];
