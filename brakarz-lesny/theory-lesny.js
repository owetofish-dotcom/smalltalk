// theory-lesny.js — BrakarzLesny
// Drewno okragle, klasy LP, PN-D-94022, reklamacja do lesnictwa

const THEORY_LESNY = [

  // ─── MODUL 1: Podstawy prawne i normy ──────────────────────────────────
  {
    id: 'M1',
    module: 'Modul 1',
    title: 'Podstawy prawne i normy',
    icon: 'M1',
    sections: [
      {
        heading: 'PN-D-94022 — drewno okragle iglaste',
        body: `Norma <strong>PN-D-94022</strong> reguluje sortowanie drewna okraglego iglastego (sosna, swierka, jodla, modrzew, daglezja). Okresla wymagania wymiarowe, dopuszczalne wady i zasady klasyfikacji jakosciowej klod tartacznych, papierowego i malowymiarowego.

Glowne zagadnienia normy:
<ul>
<li><strong>Klasy wymiarowe</strong> — minimalne dlugosci i srednice dla poszczegolnych sortymentow</li>
<li><strong>Wady dopuszczalne i dyskwalifikujace</strong> — normatywne limity sekow, zgnilizny, skrzywien, pekniecia</li>
<li><strong>Metody pomiaru</strong> — srednica, dlugosc, objetosc</li>
<li><strong>Znakowanie i dokumentacja</strong> — opis klas na czole klody</li>
</ul>`
      },
      {
        heading: 'Seria PN-D-95000 — wymiary drewna okraglego',
        body: `Normy serii <strong>PN-D-95000</strong> ustalaja standardowe wymiary drewna okraglego:
<ul>
<li><strong>Dlugosci nominalne</strong>: 2,5 m / 3,0 m / 4,0 m / 5,0 m / 6,0 m i wiecej (krotowe)</li>
<li><strong>Nadmiarka dlugosci</strong>: zazwyczaj +2% lub +5 cm (zalezy od sortymentu)</li>
<li><strong>Srednica minimalna</strong>: mierzona na cienszym koncu bez kory</li>
</ul>

Odchylenie od nominalnej dlugosci nie powinno przekraczac wartosci okreslonych w normie. Krotkie kody (papierowka S2) mogly miec dlugosc min. 1 m.`
      },
      {
        heading: 'Instrukcja LP — zasady sprzedazy drewna z Lasow Panstwowych',
        body: `Lasy Panstwowe sprzedaja drewno zgodnie z wewnetrzna <strong>Instrukcja sprzedazy drewna LP</strong> oraz cenником ustalanym przez DGLP (Dyrekcja Generalna Lasow Panstwowych).

Kluczowe zasady:
<ul>
<li>Drewno sprzedawane jest wedlug klas jakosci i sortymentow LP</li>
<li>Cena zalezy od gatunku, klasy i sortymentu</li>
<li>Przy odbiorze kupujacy ma prawo do weryfikacji klasy jakosci</li>
<li>Rozbieznosci klasy wymagaja sporzadzenia protokolu odbioru</li>
<li>Reklamacja jakosciowa powinna byc zlozona do wlasciwego nadlesnictwa</li>
</ul>`
      },
      {
        heading: 'Klasy jakosci LP — przeglad systemu',
        body: `System klasyfikacji LP dzieli drewno okragle na nastepujace klasy:

<table>
<tr><th>Klasa</th><th>Nazwa</th><th>Charakterystyka</th></tr>
<tr><td><strong>W0</strong></td><td>Szczegolna</td><td>Drewno fornierowe i specjalne, bardzo wysokiej jakosci, brak wad</td></tr>
<tr><td><strong>W1</strong></td><td>Tartaczna wyborowa</td><td>Najwyzsza klasa tartaczna; brak zgnilizny, seki ograniczone, skrzywienie do 1%</td></tr>
<tr><td><strong>W2</strong></td><td>Tartaczna srednia</td><td>Dopuszcza zgnilizne twardai do 1/4 przekroju, seki do 1/2 srednicy</td></tr>
<tr><td><strong>W3</strong></td><td>Tartaczna gorsza</td><td>Wady bardziej zaawansowane, zgnilizna do 1/3, skrzywienie do 3%</td></tr>
<tr><td><strong>S2</strong></td><td>Papierowka dluga</td><td>Min. 1 m, sr. od 5 cm; surowiec celulozowo-papierniczy</td></tr>
<tr><td><strong>S3</strong></td><td>Papierowka krotka</td><td>Podobna do S2, inne parametry wymiarowe</td></tr>
<tr><td><strong>M</strong></td><td>Malowymiarowe</td><td>Male srednice, galeziak, wierszowina</td></tr>
<tr><td><strong>X</strong></td><td>Pozostalosci</td><td>Klocki, zrzynki, nie spelniaja zadnej innej klasy</td></tr>
</table>`,
        examTips: [
          { q: 'Co oznacza klasa W0?', a: 'Drewno fornierowe i specjalne — najwyzsza jakosc, praktycznie bez wad', note: 'W0 jest rzadkie i bardzo drogie — np. buk o czystym pniu na forniry meblowe' },
          { q: 'Jaka jest roznica miedzy W1 a W2?', a: 'W1 = brak zgnilizny, W2 = zgnilizna twarda do 1/4 przekroju', note: 'Zgnilizna miekka dyskwalifikuje z obu klas W1 i W2' },
          { q: 'Co to S2?', a: 'Papierowka dluga — surowiec celulozowy, min. 1 m, sr. od 5 cm', note: 'S2 i S3 nie musza miec czystego pnia — liczy sie objetosc' }
        ]
      }
    ]
  },

  // ─── MODUL 2: Wady drewna okraglego ─────────────────────────────────────
  {
    id: 'M2',
    module: 'Modul 2',
    title: 'Wady drewna okraglego',
    icon: 'M2',
    sections: [
      {
        heading: 'Seki — rodzaje i normy dopuszczalne',
        body: `<strong>Sek</strong> to slad po galezi w drewnie. Wplywa na wytrzymalosc i estetike.

Rodzaje sekow:
<ul>
<li><strong>Sek zdrowy (zywy)</strong> — scisle zespolony z otaczajacym drewnem, dopuszczalny w W1-W3</li>
<li><strong>Sek suchy</strong> — obumarty, slabo zespolony, moze wypadac; ograniczony w W1</li>
<li><strong>Sek chory / zgnily</strong> — z objawami rozkladu; dyskwalifikuje z W1</li>
<li><strong>Sek przelotowy</strong> — przechodzi przez cala klode; bardzo niekorzystny</li>
</ul>

Mierzy sie go jako stosunek srednicowy (srednica seka do srednicy klody). W klasie W1 seki zdrowe moga wynoscic do 1/3 srednicy klody.`
      },
      {
        heading: 'Zgnilizna — rodzaje i wplyw na klase',
        body: `<strong>Zgnilizna</strong> to rozklad drewna przez grzyby. Jest jednym z najwazniejszych kryteriow klasyfikacji.

<table>
<tr><th>Rodzaj</th><th>Objawy</th><th>Wplyw na klase</th></tr>
<tr><td>Brunatna</td><td>Brunatne zabarwienie, drewno kruszy sie kubicznie</td><td>Dyskwalifikuje W1; limit 1/4 w W2</td></tr>
<tr><td>Biala</td><td>Biale lub zolto-biale plamy, drewno traci lignine</td><td>Dyskwalifikuje W1; ogranicz. w W2-W3</td></tr>
<tr><td>Twarda</td><td>Drewno zachowuje twardosc, tylko zabarwienie</td><td>Dopuszczona w W2 do 1/4 przekroju</td></tr>
<tr><td>Miekka</td><td>Drewno mieknie, latwi sie zgniata</td><td>Dyskwalifikuje z W1 i W2</td></tr>
</table>`,
        examTips: [
          { q: 'Zgnilizna miekka w klodzie...', a: 'Dyskwalifikuje klade z klasy W1 i W2', note: 'Kazda miekka tkanka zgnilizny to automatyczne obnizenie do W3 lub odrzut' }
        ]
      },
      {
        heading: 'Skrzywienie podluzne i poprzeczne',
        body: `<strong>Skrzywienie podluzne (strzalka f)</strong> — odchylenie osi klody od linii prostej:
<ul>
<li>Mierzy sie jako: f/L × 100%, gdzie f = maksymalna strzalka [cm], L = dlugosc klody [cm]</li>
<li>W1: skrzywienie max 1%</li>
<li>W2: max 2%</li>
<li>W3: max 3%</li>
</ul>

<strong>Skrzywienie poprzeczne (owalizacja)</strong> — gdy przekroj poprzeczny jest eliptyczny:
<ul>
<li>Mierzy sie stosunek srednicy mniejszej do wiekszej</li>
<li>Duza owalizacja utrudnia pozysk tarcicy, obniza wydajnosc</li>
</ul>`,
        examTips: [
          { q: 'Jak liczymy skrzywienie podluzne?', a: 'Strzalka f [cm] / dlugosc L [cm] x 100% = procent skrzywienia', note: 'Przyklad: kloda 4 m (400 cm), strzalka 4 cm → 4/400 x100% = 1% → klasa W1' }
        ]
      },
      {
        heading: 'Pekniecia — rodzaje i znaczenie',
        body: `<strong>Pekniecia</strong> to szczeliny w drewnie powstale w wyniku naprezenia:
<ul>
<li><strong>Mrozowe</strong> — podluzne, od zewnatrz do srodka; powstaja przy silnych mrozach</li>
<li><strong>Czolowe</strong> — na powierzchni czola klody, promieniowe lub gwiazdkowe</li>
<li><strong>Pierscieniowe</strong> — wzdluz sloja rocznego; oddzielaja drewno wczesne od poznego</li>
<li><strong>Promieniowe</strong> — od rdzenia na zewnatrz, czesto zwiazane z schnieciem</li>
</ul>

Pekniecia czolowe i promieniowe sa normalnym zjawiskiem przy schnieciy drewna. Glebsze pekniecia mrozowe moga obnizyc klase.`
      },
      {
        heading: 'Pozostale wady drewna okraglego',
        body: `<ul>
<li><strong>Chodniki owadzie</strong> — tunele wydrezone przez larwy owadow (kornik, szelkarz). Plytkie (pod kora) sa mniej groznie niz glebokie. Moga obnizyc klase lub dyskwalifikowac.</li>
<li><strong>Sinizna</strong> — niebieskawoszare zabarwienie bielu drewna iglastego, powodowane przez grzyby sinizniaki. Nie obniza wytrzymalosci, ale obnizia estetike; ogranicza zastosowania.</li>
<li><strong>Rak i skret wlokien</strong> — deformacja pnia (rak) lub skrecone przebiegi wlokien. Obnizaja wydajnosc tarcicy.</li>
<li><strong>Zbiezystosc ponadnormatywna</strong> — zbyt duza roznica srednicy miedzy grubszym a cienszym koncem. Norma dopuszcza max 1 cm/m dlugosci klody dla W1.</li>
<li><strong>Wymiary niezgodne</strong> — kloda nie spelnia wymagan wymiarowych dla deklarowanej klasy (za krotka, za cienka).</li>
</ul>`,
        examTips: [
          { q: 'Czym rozni sie sinizna od zgnilizny?', a: 'Sinizna = zabarwienie grzybowe bez utraty wytrzymalosci; zgnilizna = rozklad struktury drewna', note: 'Sinizna jest wada estetyczna, zgnilizna jest wada strukturalna' },
          { q: 'Jaka jest norma zbiezystosci dla W1?', a: 'Max 1 cm roznica srednicy na 1 m dlugosci klody', note: 'Zbiezystosc = (D_gruba - D_cienka) / dlugosc [cm/m]' }
        ]
      }
    ]
  },

  // ─── MODUL 3: Pomiar drewna okraglego ───────────────────────────────────
  {
    id: 'M3',
    module: 'Modul 3',
    title: 'Pomiar drewna okraglego',
    icon: 'M3',
    sections: [
      {
        heading: 'Metoda srodkowa — podstawowa metoda pomiaru objetosci',
        body: `<strong>Metoda srodkowa (Hubnera uproszczona)</strong> to najpowszechniejsza metoda obliczania objetosci klody:

<em>V = (pi / 4) × d² × L</em>

Gdzie:
<ul>
<li><strong>d</strong> — srednica w polowie dlugosci klody (srednica srodkowa), mierzona bez kory [m]</li>
<li><strong>L</strong> — dlugosc klody [m]</li>
<li><strong>pi / 4 ≈ 0,7854</strong></li>
</ul>

<strong>Przyklad:</strong> d = 0,30 m, L = 4,0 m → V = 0,7854 × 0,09 × 4 = 0,283 m³

Metoda srodkowa jest prosta i dokladna dla klod o regularnym ksztalcie.`,
        examTips: [
          { q: 'Gdzie mierzymy srednice w metodzie srodkowej?', a: 'Dokladnie w polowie dlugosci klody, prostopadle do osi, bez kory', note: 'Jeden pomiar srednicy — dlatego metoda srodkowa jest szybka i popularna' }
        ]
      },
      {
        heading: 'Metoda czopowa (Hubnera pelna)',
        body: `<strong>Metoda czopowa Hubnera</strong> — dokladniejsza, uwzglednia obie srednice i srodkowa:

<em>V = (L / 12) × (d1² + 4 × dm² + d2²) × (pi / 4)</em>

Gdzie:
<ul>
<li><strong>d1</strong> — srednica grubszego konca (czopciec) [m]</li>
<li><strong>dm</strong> — srednica srodkowa (w polowie dlugosci) [m]</li>
<li><strong>d2</strong> — srednica cienszego konca [m]</li>
<li><strong>L</strong> — dlugosc klody [m]</li>
</ul>

Metoda bardziej pracochlonn, stosowana przy duzych partach drewna lub sporach handlowych.`
      },
      {
        heading: 'Technika pomiaru srednicy i dlugosci',
        body: `<strong>Pomiar srednicy:</strong>
<ul>
<li>Mierzona <strong>prostopadle do osi podluznej klody</strong></li>
<li>Dwa pomiary prostopadle do siebie — bierzemy srednia arytmetyczna</li>
<li><strong>Bez kory</strong> — srednica handlowa nie wlicza kory</li>
<li>Narzedzia: srednica lesna (kluczka), tasma miernicza</li>
</ul>

<strong>Pomiar dlugosci:</strong>
<ul>
<li>Miedzy <strong>plaskimi czolami</strong> klody — nie wzdluz skosow</li>
<li>Przy skosnym cielu mierzy sie najkrotsza odleglosc miedzy czolami</li>
<li>Narzedzie: tasma lub miara skladana</li>
</ul>

<strong>Kora:</strong>
<ul>
<li>Do objetosci handlowej nie wlicza sie kory</li>
<li>Przy grubej korze (np. stara sosna) nalezy odliczyc grubosc kory</li>
</ul>`,
        examTips: [
          { q: 'Czy kora wlicza sie do miazszosci handlowej?', a: 'Nie — srednica mierzona jest bez kory, kora nie wlicza sie do objetosci handlowej', note: 'W praktyce mierzy sie srednice z kora i odlicza szacunkowa grubosc kory (ok. 1-3 cm)' }
        ]
      },
      {
        heading: 'Pomiar zbiezystosci',
        body: `<strong>Zbiezystosc</strong> to roznica srednicy miedzy grubszym a cienszym koncem klody, odniesiona do dlugosci:

<em>Zbiezystosc [cm/m] = (D_grubszy - D_cienszy) / L</em>

Przyklad: kloda 4 m, D_grubszy = 35 cm, D_cienszy = 27 cm → zbiezystosc = (35-27)/4 = 2 cm/m

Dla klasy W1 dopuszczalne max 1 cm/m. Zbyt duza zbiezystosc oznacza strate materialu przy obrzynaniu.`
      }
    ]
  },

  // ─── MODUL 4: Klasy jakosci LP szczegolowo ──────────────────────────────
  {
    id: 'M4',
    module: 'Modul 4',
    title: 'Klasy jakosci LP — szczegolowe wymagania',
    icon: 'M4',
    sections: [
      {
        heading: 'Klasa W1 — tartaczna wyborowa',
        body: `<strong>W1</strong> to najwyzsza klasa tartaczna — najwyzsza cena w skupie.

Wymagania W1 (sosna/swierka):
<ul>
<li><strong>Zgnilizna:</strong> niedopuszczalna (zaden rodzaj)</li>
<li><strong>Seki zdrowe:</strong> max 1/3 srednicy klody</li>
<li><strong>Seki suche/chore:</strong> niedopuszczalne lub bardzo ograniczone</li>
<li><strong>Skrzywienie podluzne:</strong> max 1%</li>
<li><strong>Zbiezystosc:</strong> max 1 cm/m</li>
<li><strong>Pekniecia mrozowe:</strong> max 1/2 promienia na czole</li>
<li><strong>Sinizna:</strong> dozwolona w ograniczonym zakresie (zalezne od normy)</li>
<li><strong>Chodniki owadzie:</strong> tylko plytkie podkorowe</li>
</ul>`,
        examTips: [
          { q: 'Co absolutnie dyskwalifikuje z klasy W1?', a: 'Zgnilizna (kazdy rodzaj), seki chore/zgnile, duze pekniecia promieniowe', note: 'W1 = "czysta" kloda do produkcji tarcicy wyborowej KW' }
        ]
      },
      {
        heading: 'Klasa W2 — tartaczna srednia',
        body: `<strong>W2</strong> — srednia klasa tartaczna, dopuszcza wieksze wady:

<ul>
<li><strong>Zgnilizna twarda:</strong> do 1/4 przekroju poprzecznego</li>
<li><strong>Zgnilizna miekka:</strong> niedopuszczalna</li>
<li><strong>Seki zdrowe:</strong> do 1/2 srednicy klody</li>
<li><strong>Skrzywienie podluzne:</strong> max 2%</li>
<li><strong>Zbiezystosc:</strong> max 1,5 cm/m</li>
<li><strong>Chodniki owadzie:</strong> plytkie; glebsze ograniczone</li>
<li><strong>Sinizna:</strong> dozwolona</li>
</ul>`
      },
      {
        heading: 'Klasa W3 — tartaczna gorsza',
        body: `<strong>W3</strong> — nizsze wymagania, przeznaczona na tarcice nizeprzetworzona lub konstrukcyjna bez wymagan wizualnych:

<ul>
<li><strong>Zgnilizna twarda:</strong> do 1/3 przekroju</li>
<li><strong>Zgnilizna miekka:</strong> ograniczona</li>
<li><strong>Seki:</strong> bez limitu srednicy (zdrowe)</li>
<li><strong>Skrzywienie podluzne:</strong> max 3%</li>
<li><strong>Inne wady:</strong> bardziej tolerowane niz W1/W2</li>
</ul>`
      },
      {
        heading: 'Klasy S2, S3, M, X — nieklasowe sortymentu',
        body: `<table>
<tr><th>Klasa</th><th>Zastosowanie</th><th>Kluczowe wymogi</th></tr>
<tr><td><strong>S2</strong></td><td>Papierowka dluga — masa celulozowa, plyty</td><td>Min. 1 m, sr. od 5 cm; sloj cienki; wady strukturalne tolerowane</td></tr>
<tr><td><strong>S3</strong></td><td>Papierowka krotka / galeziakowa</td><td>Krotsze odcinki, mniejsze srednicy; zblizone do S2</td></tr>
<tr><td><strong>M</strong></td><td>Malowymiarowe — galeziak, wierszowina, klocki</td><td>Male srednicy (czesto 5-14 cm), krotkie; na zarowki, pilsniowki</td></tr>
<tr><td><strong>X</strong></td><td>Pozostalosci/Odrzut — zreby, kociolek</td><td>Nie spelnia zadnego sortymentu; na biomase lub odpad</td></tr>
</table>`,
        examTips: [
          { q: 'Jaka jest minimalna srednica dla S2?', a: 'Od 5 cm (srednica cienszego konca bez kory)', note: 'S2 moze miec wady jakosciowe — wazna jest objetosc, nie estetyka' },
          { q: 'Co trafia do klasy X?', a: 'Drewno ktore nie spelnia zadnej innej klasy — zreby, klocki, odpad', note: 'X jest traktowane jak biomasa — najnizsza wartosc handlowa' }
        ]
      }
    ]
  },

  // ─── MODUL 5: Reklamacja i dokumentacja ─────────────────────────────────
  {
    id: 'M5',
    module: 'Modul 5',
    title: 'Reklamacja i dokumentacja odbioru',
    icon: 'M5',
    sections: [
      {
        heading: 'Kiedy przysluguje reklamacja jakosciowa',
        body: `Reklamacja jakosciowa przysluguje gdy:
<ul>
<li><strong>Niezgodnosc klasy</strong> — dostarczone drewno ma nizszqa klase niz zadeklarowana na WZ</li>
<li><strong>Wady ukryte</strong> — wady niewidoczne przy odbiorze, ujawnione po rozciciu lub z czasem</li>
<li><strong>Niedobory miary</strong> — objetosc mierzona jest niezgodna z dokumentem WZ</li>
<li><strong>Niezgodnosc gatunku</strong> — dostarczono inny gatunek niz w zamowieniu</li>
</ul>

<strong>Wazne:</strong> Reklamacja jakosciowa musi byc zlozona do nadlesnictwa na pismie. Ustne zastrzezenia nie sa podstawa do roszczen.`
      },
      {
        heading: 'Terminy i procedura reklamacyjna',
        body: `<strong>Termin zgloszenia reklamacji:</strong>
<ul>
<li>Zazwyczaj <strong>7-14 dni od daty odbioru</strong> (wg umowy kupna-sprzedazy z LP)</li>
<li>Przy wadach ukrytych — od momentu ich wykrycia</li>
<li>Przekroczenie terminu moze byc podstawa do odrzucenia reklamacji</li>
</ul>

<strong>Procedura:</strong>
<ol>
<li>Sporzadzenie protokolu odbioru z opisem wad i rozbieznosci klasowych</li>
<li>Dokumentacja fotograficzna (numery klod, wady, tabliczka WZ)</li>
<li>Zlozenie pisma reklamacyjnego do nadlesnictwa (nadlesnicy lub dzialu handlowego)</li>
<li>Oczekiwanie na odpowiedz (zazwyczaj 14-30 dni)</li>
<li>W razie odrzucenia — droga reklamacyjna przez RDLP lub postepowanie sadowe</li>
</ol>`,
        examTips: [
          { q: 'Co nalezy zrobic przy odbiorze drewna z watpliwa klasa?', a: 'Natychmiast sporzadzic protokol odbioru, zrobic zdjecia, nie wydawac potwierdzenia bez zastrzezenia', note: 'Podpisanie WZ bez uwag utrudnia pozniejsza reklamacje' }
        ]
      },
      {
        heading: 'Co dokumentowac — dowody do reklamacji',
        body: `<strong>Obowiazkowa dokumentacja:</strong>
<ul>
<li><strong>Numer WZ</strong> i data dostawy</li>
<li><strong>Gatunek drewna</strong> i klasa deklarowana</li>
<li><strong>Klasa stwierdzona</strong> po weryfikacji z uzasadnieniem</li>
<li><strong>Opis wad</strong> — rodzaj, lokalizacja, stopien nasilenia</li>
<li><strong>Zdjecia</strong>: kloda z calego + zblizenie wady + tabliczka z numerem WZ lub nr rejestracyjny pojazdu</li>
</ul>

<strong>Optymalna sekwencja zdjec:</strong>
<ol>
<li>Tabliczka WZ / pojazd z dokumentem</li>
<li>Kloda z boku (cala dlugosc)</li>
<li>Czolow klody (przekroj)</li>
<li>Zblizenie stwierdzonej wady</li>
</ol>`,
        examTips: [
          { q: 'Jakie minimum informacji zawiera pismo reklamacyjne?', a: 'Nr WZ, data dostawy, gatunek, klasa deklarowana i stwierdzona, opis wad, zqdanie (korekta ceny / wymiana)', note: 'Brak opisu wady lub brak numeru WZ = slaby dowod w reklamacji' },
          { q: 'Co jest najwazniejszym dowodem w reklamacji jakosciowej?', a: 'Zdjecia wad z widocznym numerem WZ lub pojazdu + protokol odbioru sporzadzony na miejscu', note: 'Fotografie z metadanymi GPS i czasu sa nieodpartelnym dowodem' }
        ]
      },
      {
        heading: 'Dokument WZ — co powinien zawierac',
        body: `Dokument WZ (Wydanie Zewnetrzne) towarzyszacy dostawie drewna z LP powinien zawierac:
<ul>
<li>Nazwe i adres nadlesnictwa (wystawcy)</li>
<li>Date wystawienia i numer WZ</li>
<li>Gatunek drewna (kod gatunkowy)</li>
<li>Sortyment i klase jakosci</li>
<li>Ilosc (m³ lub szt.) i miazszose</li>
<li>Cene jednostkowa i wartosc</li>
<li>Dane pojazdu i kierowcy</li>
<li>Swiadectwo legalnosci pozyskania drewna (SL) — obowiazkowe od 2016 r.</li>
</ul>

<strong>Swiadectwo legalnosci (SL)</strong> jest obowiazkowe zgodnie z ustawa o lasach i regulacjami UE EUTR/EUDR.`
      }
    ]
  },

  // ─── MODUL 6: Korelacja z tarcica (PN-D-94021) ──────────────────────────
  {
    id: 'M6',
    module: 'Modul 6',
    title: 'Korelacja z tarcica — PN-D-94021',
    icon: 'M6',
    sections: [
      {
        heading: 'Zwiazek klasy klody z klasa tarcicy',
        body: `Klasa klody (W1/W2/W3) bezposrednio wplywa na spodziewana klase tarcicy:

<table>
<tr><th>Kloda LP</th><th>Spodziewana tarcica</th><th>Uwagi</th></tr>
<tr><td>W1</td><td>KW lub KS (PN-D-94021)</td><td>Czesta baza dla wyrobow wyborowych</td></tr>
<tr><td>W2</td><td>KS lub KG</td><td>Ogolnobudowlana, stolarstwo</td></tr>
<tr><td>W3</td><td>KG, czesc X (odpad)</td><td>Niska wydajnosc wyrobow wizualnych</td></tr>
<tr><td>S2/S3</td><td>Brak tarcicy — masa celulozowa</td><td>Papierowka nie jest pilowan na tarcice</td></tr>
</table>`
      },
      {
        heading: 'Jakie wady klody wykluczaja klasy tarcicy',
        body: `<strong>Wady klody → wplyw na tarcice:</strong>
<ul>
<li><strong>Zgnilizna</strong> → uniemozliwia produkcje tarcicy KW; defekty zgnilizny na tarcicy = natychmiast klasa nizsza</li>
<li><strong>Seki duze/przelotowe</strong> → wyzsze WSC, ograniczenie klas KW i KS</li>
<li><strong>Skrzywienie podluzne</strong> → straty materialowe, niepelna wydajnosc pilowania</li>
<li><strong>Zbiezystosc</strong> → mniej kawalow tarcicy na krawedzi przy cieniu obrzynajacym</li>
<li><strong>Chodniki owadzie glebole</strong> → otwory w tarcicy = dyskwalifikacja KW, problem w KS</li>
</ul>`,
        examTips: [
          { q: 'Kloda W1 gwarantuje tarcice klasy KW?', a: 'Nie — kloda W1 daje mozliwosc uzyskania KW, ale sortowanie tarcicy jest osobna operacja', note: 'Brakarz lesny i brakarz tarcicy to osobne uprawnienia — ale wiedza sie uzupelnia' }
        ]
      },
      {
        heading: 'Roznice miedzy brakarzem lesnym a brakarzem tarcicy',
        body: `<table>
<tr><th>Aspekt</th><th>Brakarz lesny</th><th>Brakarz tarcicy (PN-D-94021)</th></tr>
<tr><td>Przedmiot oceny</td><td>Drewno okragle (klody)</td><td>Tarcica (obliny, deski, krawedzi.)</td></tr>
<tr><td>Norma</td><td>PN-D-94022, Instrukcja LP</td><td>PN-D-94021:2013-10</td></tr>
<tr><td>Klasy</td><td>W0/W1/W2/W3/S2/S3/M/X</td><td>KW/KS/KG</td></tr>
<tr><td>Pomiar</td><td>Srednica, dlugosc, objetosc</td><td>Szerokos, grubosc, dlugosc, wady</td></tr>
<tr><td>Uprawnienia</td><td>Odrebny kurs/egzamin LP</td><td>Certyfikat wg PN-EN 14081-1</td></tr>
</table>

Znajomosc obu systemow klasyfikacji jest cenna dla zakup tartacznych — umozliwia ocene, czy cena klody odpowiada spodziewanej wydajnosci tarcicy.`
      }
    ]
  },
];
