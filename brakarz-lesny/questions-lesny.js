// questions-lesny.js — BrakarzLesny
// Pytania egzaminacyjne: drewno okragle, klasy LP, PN-D-94022, reklamacja
// Kategorie: A=Normy/Prawo, B=Wady, C=Pomiar, D=Klasy LP, E=Reklamacja/Praktyka

const QUESTIONS_LESNY = [

  // ─── KATEGORIA A: Normy i podstawy prawne ──────────────────────────────
  {cat:'A', q:'Ktora klasa LP oznacza drewno tartaczne najwyzszej jakosci?',
   opts:['W1','W0','W2','S2'],
   ans:0, exp:'W1 to najwyzsza klasa tartaczna (nie W0 — ktore jest klasa specjalna fornierowa/szczegolna). W1 jest najczesciej kupowana przez tartaki jako baza tarcicy wyborowej.'},

  {cat:'A', q:'Co oznacza klasa W0 w systemie LP?',
   opts:['Drewno fornierowe i specjalne — najwyzsza jakosc, praktycznie bez wad','Drewno tartaczne wyborowe','Papierowka dluga','Drewno malowymiarowe'],
   ans:0, exp:'W0 to klasa szczegolna — drewno fornierowe, rezonansowe, na instrumenty muzyczne. Bardzo rzadkie i drogie. Brak jakichkolwiek istotnych wad.'},

  {cat:'A', q:'Co oznacza klasa S2 w systemie LP?',
   opts:['Papierowka dluga do produkcji masy celulozowej','Tarcica sredniej jakosci','Drewno specjalne','Galeziak malowymiarowy'],
   ans:0, exp:'S2 to papierowka dluga — surowiec na mase celulozowa i plyty. Minimalna dlugosc 1 m, srednica od 5 cm. Jakosc drugoplanowa — liczy sie objetosc.'},

  {cat:'A', q:'Jaka norma reguluje sortowanie drewna okraglego iglastego w Polsce?',
   opts:['PN-D-94022','PN-D-94021','PN-EN 14081-1','PN-D-95000'],
   ans:0, exp:'PN-D-94022 dotyczy drewna okraglego iglastego. PN-D-94021 to norma dla tarcicy iglastej sortowanej wizualnie. PN-EN 14081-1 to norma dla tarcicy sortowanej wytrzymalosciowo.'},

  {cat:'A', q:'Jaki dokument obowiazkowy musi towarzyszyc dostawie drewna z Lasow Panstwowych od 2016 r.?',
   opts:['Swiadectwo legalnosci pozyskania drewna (SL)','Certyfikat PEFC/FSC','Atest jakosiowy ISO','Deklaracja wlasciwosci uzytkowych'],
   ans:0, exp:'Swiadectwo legalnosci (SL) jest obowiazkowe zgodnie z ustawa o lasach i regulacjami UE EUTR/EUDR. Dokumentuje legalne pozyskanie drewna w lasach.'},

  {cat:'A', q:'Ile klas tartacznych wyroznia system LP?',
   opts:['4 (W0, W1, W2, W3)','3 (W1, W2, W3)','2 (W0, W1)','5 (W0, W1, W2, W3, WX)'],
   ans:0, exp:'System LP wyroznia 4 klasy tartaczne: W0 (szczegolna/fornierowa) oraz W1, W2, W3 (tartaczne wyborowa, srednia, gorsza).'},

  // ─── KATEGORIA B: Wady drewna okraglego ───────────────────────────────
  {cat:'B', q:'Zgnilizna miekka w klodzie tartacznej...',
   opts:['Dyskwalifikuje klade z klas W1 i W2','Jest dopuszczalna w W2 do 1/4 przekroju','Obnizynajako klase jedynie o 1 poziom','Nie ma wplywu na klase — liczy sie tylko twardosc'],
   ans:0, exp:'Zgnilizna miekka dyskwalifikuje klade z klas W1 i W2. Dopuszczona jest tylko twarda zgnilizna, i to z limitem: W2 do 1/4, W3 do 1/3 przekroju.'},

  {cat:'B', q:'Jaki rodzaj zgnilizny jest dopuszczalny w klasie W2?',
   opts:['Twarda do 1/4 przekroju poprzecznego','Miekka do 1/4 przekroju','Brunatna bez limitu','Kazda zgnilizna bez ograniczen'],
   ans:0, exp:'W2 dopuszcza tylko twardazgnilizne (brak rozkladu struktury), i to do 1/4 przekroju. Zgnilizna miekka jest niedopuszczalna nawet w W2.'},

  {cat:'B', q:'Jak mierzymy skrzywienie podluzne klody?',
   opts:['Strzalka f [cm] / dlugosc L [cm] x 100%','Roznica srednicy koniec/poczatek','Kat odchylenia w stopniach','Stosunek srednicy do dlugosci'],
   ans:0, exp:'Skrzywienie podluzne = strzalka f / dlugosc L x 100%. Strzalka f to maksymalne odchylenie od linii prostej przylozonej do klody.'},

  {cat:'B', q:'Kloda sosny ma dlugosc 4 m i strzalke skrzywienia 4 cm. Jakiej klasy maksymalnie moze byc?',
   opts:['W1 (skrzywienie 1%)','W2 (skrzywienie 2%)','W3 (skrzywienie 3%)','Odrzut — przekracza W3'],
   ans:0, exp:'Skrzywienie = 4/400 x 100% = 1%. Klasa W1 dopuszcza do 1% skrzywienia podluznego, wiec ta kloda moze byc W1 (pod warunkiem spelnienia pozostalych wymagan).'},

  {cat:'B', q:'Czym rozni sie sek zdrowy od seka suchego?',
   opts:['Zdrowy jest scisle zespolony z otaczajacym drewnem, suchy jest slabo zespolony i moze wypadac','Zdrowy ma kolor ciemny, suchy jasny','Zdrowy pochodzi z galezie zywych, suchy z obumarle — nie ma roznicy jakosciowej','Suchy jest dopuszczalny, zdrowy nie'],
   ans:0, exp:'Sek zdrowy (zywy) jest scisle zroslety z drewnem — bardziej pozadany. Sek suchy (martwy) jest luznie osadzony, moze wypadac przy obrobce — bardziej problematyczny.'},

  {cat:'B', q:'Co to jest sinizna drewna?',
   opts:['Niebiesko-szare zabarwienie bielu przez grzyby sinizniaki — nie obnizynajaca wytrzymalosci','Rodzaj zgnilizny brunatnej','Objaw zaawansowanego rozkladu celulozy','Plamy z kondensacji wilgoci'],
   ans:0, exp:'Sinizna to zabarwienie bielu drewna iglastego przez grzyby sinizniaki (Ceratocystis). Nie obniza wytrzymalosci mechanicznej — jest wada estetyczna. Ogranicza zastosowania wymagajace czystosci wizualnej.'},

  {cat:'B', q:'Jaka jest norma zbiezystosci dla klasy W1?',
   opts:['Max 1 cm/m dlugosci klody','Max 2 cm/m','Max 0,5 cm/m','Brak limitu zbiezystosci w W1'],
   ans:0, exp:'Klasa W1 dopuszcza zbiezystosc max 1 cm/m (roznica srednicy koniec/poczatek na 1 m dlugosci). Zbyt duza zbiezystosc powoduje straty materialu przy obrzynaniu.'},

  // ─── KATEGORIA C: Pomiar drewna ────────────────────────────────────────
  {cat:'C', q:'Jaka metoda liczymy objetosc klody uzywajac tylko jednego pomiaru srednicy?',
   opts:['Metoda srodkowa','Metoda czopowa (Hubnera)','Metoda Newtonowska','Metoda stoplowa'],
   ans:0, exp:'Metoda srodkowa: V = (pi/4) x d² x L, gdzie d to srednica mierzona dokladnie w polowie dlugosci klody. Jeden pomiar srednicy — szybko i prosto.'},

  {cat:'C', q:'Gdzie mierzymy srednice klody metoda srodkowa?',
   opts:['Dokladnie w polowie dlugosci klody, prostopadle do osi, bez kory','Na grubszym koncu','Na cienszym koncu','Na obu koncach — bierzemy srednia'],
   ans:0, exp:'Metoda srodkowa: srednica mierzona w polowie dlugosci (punkt srodkowy), prostopadle do osi podluznej, bez uwzglednienia kory.'},

  {cat:'C', q:'Czy kora wlicza sie do miazszosci handlowej drewna okraglego?',
   opts:['Nie — srednica mierzona jest bez kory','Tak — mierzy sie z kora','Tak, ale tylko polowa grubosci kory','Zalezy od gatunku'],
   ans:0, exp:'Miazszos handlowa (objetosc) drewna okraglego obliczana jest na podstawie srednicy bez kory. Przy grubej korze (stara sosna, dab) nalezy odliczyc szacunkowa grubosc kory.'},

  {cat:'C', q:'Kloda ma srednice srodkowa 30 cm i dlugosc 4 m. Jaka jest jej objetosc (metoda srodkowa)?',
   opts:['Okolo 0,28 m³','Okolo 0,14 m³','Okolo 0,56 m³','Okolo 3,14 m³'],
   ans:0, exp:'V = pi/4 x d² x L = 0,7854 x 0,09 x 4 = 0,283 m³. Zaokraglamy do ok. 0,28 m³.'},

  {cat:'C', q:'Jak obliczamy zbiezystosc klody?',
   opts:['(Srednica grubszego konca - srednica cienszego) / dlugosc klody [cm/m]','Roznica srednicy dzielona przez 2','Stozek - kol x promien','Srednia arytmetyczna obu srednicy'],
   ans:0, exp:'Zbiezystosc = (D_grubszy [cm] - D_cienszy [cm]) / L [m] = wynik w cm/m. Np. kloda 4m, D_gr=35, D_ci=27: (35-27)/4 = 2 cm/m.'},

  {cat:'C', q:'Ile pomiarow srednicy wykonujemy w jednym miejscu klody dla wiarygodnego wyniku?',
   opts:['Dwa, prostopadle do siebie — bierzemy srednia','Jeden — wystarczy do obliczen','Cztery — w czterech kierunkach','Trzy — bierzemy mediane'],
   ans:0, exp:'Dwa pomiary srednicy, prostopadle do siebie. Srednia arytmetyczna z obu daje srednice obliczeniowa. Zapobiega bledowi przy owalizacji klody.'},

  // ─── KATEGORIA D: Klasy LP — szczegoly ────────────────────────────────
  {cat:'D', q:'Jaki jest maksymalny dopuszczalny procent skrzywienia podluznego dla klasy W1?',
   opts:['Max 1%','Max 2%','Max 3%','Brak limitu'],
   ans:0, exp:'W1: skrzywienie podluzne max 1%. W2: max 2%. W3: max 3%. Skrzywienie = strzalka f / dlugosc L x 100%.'},

  {cat:'D', q:'Zgnilizna twarda zajmuje 30% przekroju klody sosny. Jaka jest maksymalna klasa tej klody?',
   opts:['W3','W2','W1','Odrzut — dyskwalifikuje ze wszystkich klas'],
   ans:0, exp:'W2 dopuszcza twardazgnilizne do 1/4 (25%) przekroju. 30% przekracza limit W2, wiec kloda kwalifikuje sie do W3 (limit 1/3 = 33%).'},

  {cat:'D', q:'Co to jest klasa W0 i dla jakich produktow jest przeznaczona?',
   opts:['Drewno szczegolnej jakosci — forniry, instrumenty muzyczne, stolarka artystyczna','Najwyzsza klasa tartaczna do produkcji KW','Drewno do konstrukcji budowlanych specjalnych','Klasa rezerwowa LP nieuzywana w praktyce'],
   ans:0, exp:'W0 to klasa szczegolna. Sluzy do produkcji forniru, instrumentow muzycznych, artykulow dekoracyjnych. Bardzo rzadkie, bardzo wysokie wymagania jakosciowe. Stanowi niewielki ulamek pozysku LP.'},

  {cat:'D', q:'Kloda swierka ma seki zdrowe zajmujace 40% srednicy klody. Jaka jest maksymalna klasa?',
   opts:['W2','W1','W0','W3'],
   ans:0, exp:'W1: seki zdrowe max 1/3 (33%) srednicy klody. 40% przekracza limit W1, wiec kloda kwalifikuje sie maksymalnie do W2 (seki zdrowe do 1/2 srednicy).'},

  // ─── KATEGORIA E: Reklamacja i praktyka polowa ─────────────────────────
  {cat:'E', q:'Jaka jest typowa procedura przy stwierdzeniu rozbieznosci klasy przy odbiorze?',
   opts:['Sporzadzic protokol odbioru, zrobic zdjecia, nie podpisywac WZ bez zastrzezenia','Podpisac WZ i zozyc ustna reklamacje kierowcy','Odeslac caly transport bez dokumentacji','Poczekac na nastepna dostawe i zlozyc zbiorcza reklamacje'],
   ans:0, exp:'Przy rozbieznosci klasy: sporzadzic protokol odbioru ze zdjecia i zapisem wad, wpisac zastrzezenie przy podpisie WZ, nastepnie zlozyc pisemna reklamacje do nadlesnictwa.'},

  {cat:'E', q:'Jakie zdjecia sa najwazniejsze przy dokumentowaniu wad do reklamacji?',
   opts:['Zblizenie wady + kloda z calej dlugosci + tabliczka WZ lub nr rejestracyjny pojazdu','Tylko wada z bliska','Tylko cala kloda','Zdjecia sasa niepotrzebne — wystarczy opis slowny'],
   ans:0, exp:'Optymalnie: tabliczka WZ lub nr rejestracyjny (identyfikacja), kloda z calej dlugosci, czolow klody, zblizenie wady. Zdjecia z metadanymi GPS sa bardzo mocnym dowodem.'},

  {cat:'E', q:'W jakim terminie zazwyczaj nalezy zlozyc reklamacje jakosciowa do nadlesnictwa?',
   opts:['7-14 dni od daty odbioru (wg umowy)','30 dni od daty odbioru','60 dni — termin ustawowy','Brak terminu — mozna zlozyc kiedykolwiek'],
   ans:0, exp:'Typowy termin to 7-14 dni od daty odbioru, wg umowy kupna-sprzedazy z LP. Przekroczenie terminu moze byc podstawa odrzucenia reklamacji przez nadlesnictwo.'},

  {cat:'E', q:'Co musi obowiazkow zawierac pisemna reklamacja jakosciowa do nadlesnictwa?',
   opts:['Nr WZ, date dostawy, gatunek i klase deklarowana, klase stwierdzona, opis wad, wniosek (korekta ceny/wymiana)','Tylko nr WZ i date','Tylko opis wad bez danych WZ','Tylko zdjecia — bez opisu slownego'],
   ans:0, exp:'Pismo reklamacyjne musi zawierac: dane identyfikacyjne dostawy (WZ, data), gatunek i klase deklarowana, stwierdzona klase i uzasadnienie, opis konkretnych wad oraz wyraznie sformulowane zadanie.'},
];
