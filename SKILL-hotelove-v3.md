---
name: hotelove
description: Monitoring cen 4 hoteli, weekendy Pt→Nd, z obowiązkowym cross-checkiem poza Bookingiem
---

# MONITORING CEN HOTELI — weekendy Pt→Nd

**v3 — po przebiegu 6 (30.08.2026).** Zmiany vs v2: każdy hotel ma własny tor i własny
rekord (nie tylko globalnie najtańszy), cross-check poza Bookingiem jest **obowiązkowy**
dla każdego hotelu, dopisany rejestr obiektów z ID i URL-ami, reguła anty-fałszywie-negatywna,
zgoda na przeglądarkę i screenshoty, poprawione fakty o środowisku.

---

## 0. Stan poprzedni (ZAWSZE PIERWSZY KROK)

Wczytaj **najnowszy** plik `SmallTalk/hotel-monitor/state-*.json`. Jeśli tego samego dnia
jest kilka, obowiązuje sufiks alfabetyczny: `state-2026-08-30.json` < `...30b.json` <
`...30c.json` < `...30d.json`. Bierz ostatni i sprawdź pole `supersedes` — jeśli któryś
plik jest oznaczony jako unieważniony, **nie używaj go jako bazy**.

Bez bazy nie raportuj trendów, tylko oznacz przebieg jako `baseline`.

---

## 1. Parametry stałe

- **Skład:** 2 dorosłych + 1 dziecko (ur. 2021 → **5 lat** w 2026)
- **Wymóg:** śniadanie w cenie, **najtańszy pokój mieszczący trójkę** (dostawka OK)
- **Zakres:** wszystkie weekendy Pt→Nd w oknie **kroczącym: od najbliższego piątku do +120 dni**
- **Waluta:** PLN, cena łączna za 2 noce (Pt + Sb), brutto
- ⚠️ **Uwaga o wieku:** 5 lat to próg graniczny w wielu cennikach („dzieci **do lat 5** gratis"
  zwykle znaczy *poniżej* 5). Zakładaj, że dziecko **jest płatne**, i zawsze doliczaj dostawkę.
  Podawaj cenę w dwóch wariantach, jeśli cennik jest niejednoznaczny.

---

## 2. Rejestr hoteli

**Wszystkie cztery obiekty są równoważne.** Nie szukaj tylko globalnie najtańszego —
dla **każdego** hotelu raportuj jego własną najlepszą cenę w oknie i jego własny rekord.
Bachledka nigdy nie zejdzie do poziomu Mucznego i to jest w porządku; interesuje nas,
czy *dla Bachledki* pojawiła się dobra cena.

| | Hotel | Booking: dokładna nazwa | property_id | Strona własna | Triverna |
|---|---|---|---|---|---|
| **A** | Caryńska Resort & SPA, Dwernik (Bieszczady), 4,9 | `Caryńska Resort & SPA` | 1822553 | `carynska.bieszczady.pl` (silnik Profitroom) | `triverna.pl/hotel/carynska-resort-spa-dwernik` |
| **B** | Grand Hotel**** Bachledka Strachan, Ždiar (SK), 9,5 | `Grand Hotel Bachledka Strachan` | 312697 | `strachanresort.sk` | — |
| **C** | Poziom 511 Jura Wellness, Ogrodzieniec | `Poziom 511 Jura Wellness` | 331218 | `poziom511.pl` | `triverna.pl/hotel/poziom-511-jura-wellness-hotel-spa-ogrodzieniec` |
| **D** | Centrum Promocji Leśnictwa w Mucznem, Lutowiska | `Centrum Promocji Leśnictwa w Mucznem` | 3048540 | `lasybieszczadzkie.pl/oferta/cennik/` | — |

### A. Caryńska Resort & SPA
- Pokój: **„Pokój 2-os. standard" + 1× dostawka** — NIE „Domek 4+2 os."
- Wzór: `cena_Pt + cena_Sb + 300` (dostawka 150 zł/noc) — **niezweryfikowany**
- ⚠️ Na Trivernie zmiana pokoju **resetuje DZIECI do 0** — zawsze ustaw ponownie i sprawdź cenę
- Znany narzut Bookinga vs Triverna w niskim sezonie: **stałe +199,60 zł**
- Rekord historyczny: **1 110 zł** (Triverna, 6 terminów) — nieweryfikowany od przebiegu 3

### B. Grand Hotel Bachledka Strachan
- Wzór: `cena_Pt + cena_Sb` (bez dopłat) — **niezweryfikowany**
- Cross-check tylko na `strachanresort.sk` (brak na Trivernie)
- Ceny w EUR na stronie własnej → przelicz po kursie NBP z dnia przebiegu i zapisz kurs w stanie

### C. Poziom 511 Jura Wellness
- Wszystkie pokoje w obu ofertach
- Historia: przez 4 przebiegi wykluczony, bo Triverna pokazywała „Możliwe dostawki: 0".
  To było ograniczenie **Triverny, nie hotelu** — Booking wycenia 2+1 normalnie.
- Obecnie ~2 720–2 784 zł, czyli 3,5× Muczne. **Próbka 3–4 weekendów na przebieg**, nie pełne okno.
  Jeśli spadnie poniżej 2 000 zł → wróć do pełnego skanu.

### D. Centrum Promocji Leśnictwa w Mucznem
- Wszystkie pokoje w obu ofertach (**CPL główny** + **Domek Myśliwski**)
- Obiekt Lasów Państwowych → **taryfa publiczna i sztywna**, brak pricingu dynamicznego
- Wzór **zweryfikowany**: `(stawka_sezonowa + 30 zł dopłata weekendowa) × 2 os. × 2 noce + dostawka`
  - niski sezon 30.10–22.12.2026: 160 zł/os./noc → **760 zł**
  - wysoki sezon do 29.10.2026: 200 zł/os./noc → **920 zł**
  - dostawka: 120 zł (jednostka niejasna — per pobyt czy per noc, **do potwierdzenia**)
- Produkt taryfowy nazywa się wprost „Nocleg + Śniadanie" → **śniadanie potwierdzone**
- Brak silnika rezerwacyjnego online. Rezerwacja: tel. **+48 516 824 694**
- **Domek Myśliwski:** 100 zł/os./noc, bez dopłaty weekendowej → ok. 500 zł, ale cennik
  **nie deklaruje śniadania**. Sprawdź, czy da się dokupić — jeśli tak, to absolutny rekord.
- Rekord: **760 zł** na 8 weekendach, potwierdzony dwoma źródłami

---

## 3. Metoda odczytu

**Kanał podstawowy:** konektor MCP Booking.com (już podpięty).

Parametry wywołania:
```
number_of_adults=2, children_ages=[5], number_of_rooms=1,
currency=PLN, user_country_code=pl, user_locale=pl
```

**Optymalizacja wywołań:** pole `hotel_names` jest celem nadrzędnym, a `destination` służy
tylko do ujednoznacznienia. Dzięki temu **jedno wywołanie obejmuje Caryńską (PL) i Bachledkę (SK)**
przy `destination="Bieszczady, Poland"`. Muczne i Poziom 511 wymagają własnego `destination`
(`"Muczne, Poland"`, `"Ogrodzieniec, Poland"`). Koszt pełnego przebiegu: ~17 wywołań na parę
A+B, plus 17 na Muczne, plus 3–4 próbki Poziomu 511.

### ⚠️ REGUŁA ANTY-FAŁSZYWIE-NEGATYWNA (krytyczna)

`not_found` z konektora **NIE oznacza**, że obiekt nie istnieje w inwentarzu.
Tak straciłem Muczne na cztery przebiegi. Zanim wykluczysz jakikolwiek obiekt, wykonaj
**wszystkie trzy** próby:

1. **Pełna nazwa urzędowa z odmianą gramatyczną** — Booking indeksuje pełną zarejestrowaną
   nazwę. „Centrum Promocji Leśnictwa Muczne" → `not_found`;
   „Centrum Promocji Leśnictwa **w Mucznem**" → trafienie.
2. **Współrzędne** z promieniem 10–15 km. Uwaga: wyszukiwanie po współrzędnych bywa
   **niewiarygodne** — Muczne nie wyszło przy promieniu 8 km mimo odległości 3,4 km od punktu.
   Traktuj wynik negatywny jako nierozstrzygający.
3. **Wyszukanie po samym `destination`** i przejrzenie listy obiektów w okolicy.

Dopiero gdy wszystkie trzy zawiodą — i po sprawdzeniu strony własnej hotelu — wolno napisać,
że obiektu nie ma w Bookingu.

### Znane ograniczenie konektora

Zwraca **jedną zbiorczą cenę** (`price.book`), bez nazwy pokoju, bez typu wyżywienia,
bez informacji o dostawce. Test A/B z parametrem `meal_plan=breakfast_included` dał
identyczną cenę → parametr nie filtruje. **Dlatego cross-check z §4 jest obowiązkowy** —
to jedyny sposób, żeby wiedzieć, co ta cena naprawdę zawiera.

---

## 4. CROSS-CHECK POZA BOOKINGIEM (OBOWIĄZKOWY)

Booking bywa droższy (Caryńska: +199,60 zł), ale bywa też **tańszy** (Muczne w wysokim
sezonie: −40 zł) albo w idealnym parytecie (Muczne w niskim sezonie: 0 zł). Bez cross-checku
nie wiadomo, którą sytuację się ogląda, ani jaki pokój Booking w ogóle wystawia.

### Zakres
Dla **każdego z czterech hoteli**, w każdym przebiegu:
- **minimum jeden weekend na każdy miesiąc** objęty oknem,
- zawsze zaczynając od **najtańszego terminu danego hotelu** na Bookingu,
- plus każdy termin, który przekroczył próg z §5.

### Źródło
Strona własna hotelu z tabeli w §2, a gdy jej nie ma lub nie da się z niej wycenić —
oferta na Trivernie. Dla Mucznego wystarczy cennik PDF/HTML, bo taryfa jest sztywna
i cenę można odtworzyć arytmetycznie.

### Zgoda na przeglądarkę
**Masz pełną zgodę** na wchodzenie na strony tych czterech hoteli i na Trivernę, na
wypełnianie formularzy wyszukiwania (daty, 2 dorosłych, dziecko 5 lat) oraz na robienie
**screenshotów w celu weryfikacji ceny**. Używaj `mcp__Claude_in_Chrome__*`
(`navigate`, `form_input`, `get_page_text`, `computer` do screenshotów) albo
`mcp__Control_Chrome__*`. Nie klikaj nigdy przycisku finalizującego rezerwację ani nie
podawaj danych osobowych i płatniczych — zatrzymaj się na ekranie z ceną.

Jeśli screenshot pokazuje **nazwę pokoju i typ wyżywienia** — zapisz je w stanie. To jedyna
droga do postawienia `formula_verified: true`.

### Zapis
Dla każdego cross-checku zanotuj w stanie: cenę Bookingu, cenę ze źródła własnego, różnicę
w zł i %, nazwę pokoju (jeśli widoczna), czy śniadanie jest w cenie, oraz werdykt
(`parytet` / `Booking drożej` / `Booking taniej` / `outlier — inny pokój`).

---

## 5. Progi raportowania

### Globalne
- **Nowy rekord absolutny** całego monitora → zgłoś
- Cena ≤ **1 200 zł** za weekend → zgłoś jako okazja

### Per hotel (NOWE — najważniejsza zmiana v3)
Dla **każdego** z czterech hoteli osobno:
- Spadek ≥ **10%** względem poprzedniego przebiegu → zgłoś
- **Nowy rekord tego hotelu** w całej historii monitora → zgłoś
- Cena w granicach **+5% jego historycznego minimum** → zgłoś jako „blisko rekordu"
- Zmiana dostępności (pojawienie się / zniknięcie terminu) → zgłoś
- Rozjazd Booking vs źródło własne **> 10%** → zgłoś, bo to zwykle znaczy inny pokój

### Brak zmian
Jedno zdanie w odpowiedzi: **„Bez zmian względem [data]."** — ale publikację z §7 wykonaj
mimo to, nota musi mieć dzisiejszą datę.

⚠️ Jeśli poprzedni przebieg był **tego samego dnia**, identyczne wyniki dowodzą tylko
determinizmu konektora, **nie stabilności cen**. Napisz to wprost, nie udawaj pomiaru trendu.

---

## 6. Wyjście — plik stanu

`SmallTalk/hotel-monitor/state-YYYY-MM-DD[sufiks].json`, schemat jak w `state-2026-08-30d.json`:

```
run_date, run_seq, run_type, headline, window, party, currency, source
hotels: { <klucz>: {
    name, location, booking_property_id, own_site, triverna_url,
    formula, formula_verified, formula_verification,
    weekends_booking: { "YYYY-MM-DD": cena|null },
    delta_vs_previous_run,
    cross_check_vs_own_site: { "<data>": {booking, own_site, delta, delta_pct, room_name, breakfast, verdict} },
    hotel_record: { value, dates, set_on_run },
    best_in_window: { value, dates }
} }
thresholds_triggered: { global: {...}, per_hotel: { <klucz>: {...} } }
cheapest_overall_any_channel
notes, watch_next_run, methodology, supersedes
```

Podsumowanie w odpowiedzi: **max 5 zdań**. Przy zmianach dodaj kolumnę **Δ vs poprzedni przebieg**.

---

## 7. PUBLIKACJA (OBOWIĄZKOWA — bez niej zadanie NIE jest ukończone)

Repo: `/Users/maczek/Desktop/MiniAPPki/SmallTalk`

**Środowisko — sprawdź, nie zakładaj.** W sesjach scheduled folder `SmallTalk` bywa
zamontowany i wtedy zwykłe `Read`/`Write`/`Edit` działają normalnie. Sprawdź to najpierw.
Git wymaga hosta → zawsze przez `mcp__Control_your_Mac__osascript` (`do shell script`).

### 1. Zapisz stan i notę
- `SmallTalk/hotel-monitor/state-*.json` — pełne dane wg §6
- `SmallTalk/hotelove.html` — **czysty fragment HTML** (bez `<html>`, `<head>`, `<body>`),
  jasny theme spójny z `todo.html`, prosty styl, zero frameworków.
  Polskie znaki jako encje HTML (`&#322;` itd.) — tak jest w dotychczasowych plikach.
  Zawartość: data przebiegu → 2–4 najlepsze okazje jako kafelki → **tabela dla każdego
  z czterech hoteli** (Muczne dodatkowo z kolumną „taryfa własna" i „werdykt") →
  jednolinijkowe notatki.
  **PRZED napisaniem odczytaj poprzednią wersję**, żeby zachować ciągłość ocen i policzyć Δ.
- Klasy CSS do ponownego użycia (nie wymyślaj nowych bez potrzeby):
  `.ht-wrap .ht-date .ht-lede .ht-cards .ht-card .ht-new .ht-tag .ht-tag-alt .ht-hotel
  .ht-when .ht-price .ht-note .ht-tbl-head .ht-tbl .ht-good .ht-na .ht-flat .ht-up
  .ht-down .ht-info .ht-notes`
- **Brak zmian:** i tak nadpisz plik z aktualną datą i adnotacją „Bez zmian względem [data]".

### 2. Sekcja w `todo.html`
Blok `.hotel-sec` z `#hotel-body` i `fetch('hotelove.html?v=' + Date.now())` **już istnieje**
(ok. linii 398–410). Zgrepuj `hotel-sec|hotel-body|hotelove` i **nie dodawaj drugi raz**.
Jeśli zniknął, odtwórz przed `</body>`, bezpośrednio za blokiem `.nato-sec`:

```html
<div class="hotel-sec">
  <div class="hotel-head">Hotele — weekendy Pt→Nd</div>
  <div id="hotel-body"><span class="hotel-empty">Ładowanie noty...</span></div>
</div>
<style>
  .hotel-sec { max-width: 720px; margin: 0 auto; padding: 16px 20px 32px; border-top: 1px solid var(--border); }
  .hotel-head { font-size: 0.68rem; font-weight: 700; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.09em; padding-bottom: 6px; }
  .hotel-empty { font-size: 0.7rem; color: var(--text-muted); display: block; padding: 6px 2px; }
</style>
<script>
(function () {
  var box = document.getElementById('hotel-body');
  fetch('hotelove.html?v=' + Date.now())
    .then(function (r) { if (!r.ok) throw new Error(r.status); return r.text(); })
    .then(function (t) { box.innerHTML = t; })
    .catch(function () { box.innerHTML = '<span class="hotel-empty">Brak noty na dzi\u015b</span>'; });
})();
</script>
```

⚠️ **Nie ruszaj** logiki todos, sekcji wydarzeń ani bloku `.nato-sec`.

### 3. Wypchnij
`git add` + `commit` + `push` na `main` (pre-approved, bez pytania).
**Bez pusha zadanie NIE jest ukończone.**

### 4. Zweryfikuj
`curl` przez osascript na `https://owetofish-dotcom.github.io/smalltalk/hotelove.html`
— musi zwrócić **dzisiejszą datę**. GitHub Pages przebudowuje się ok. 1,5–2 min.
Uwaga: `do shell script` z `sleep` powyżej ~40 s wywala się na timeout — rób krótkie
`sleep` i ponawiaj, zamiast jednego długiego.

### 5. Na koniec podaj w odpowiedzi PEŁNĄ treść noty
(będzie relacjonowana w Dispatch).

---

## 8. Do sprawdzenia w najbliższym przebiegu

- **PRIORYTET 1** — Muczne, telefon **+48 516 824 694**: czy dostawka 120 zł jest za pobyt
  czy za dobę, i czy 5-latek wypada z progu „do lat 5 bezpłatnie". Różnica 880 vs 1 000 zł.
- **PRIORYTET 2** — Muczne, Domek Myśliwski: czy da się dokupić śniadanie i za ile.
  Baza 500 zł byłaby absolutnym rekordem monitora.
- **PRIORYTET 3** — Triverna nieczytana od przebiegu 3. Zweryfikuj rekord Caryńskiej 1 110 zł
  i odliczania wygasających ofert.
- Outliery Mucznego 2–4.10 (1 600 zł) i 9–11.10 (1 200 zł) vs taryfa 920 zł — sprawdź
  screenshotem, czy Booking wystawia apartament zamiast pokoju wieloosobowego.
- Zastosuj regułę anty-fałszywie-negatywną do **wszystkich** hoteli — czy Caryńska,
  Bachledka i Poziom 511 nie mają alternatywnych wpisów w Bookingu pod inną nazwą.
- Ustal kurs EUR/PLN dla Bachledki i zapisz go w stanie.
- Okno przesuwa się do 01.01.2027 — weekend 4–6.09 wypada z zakresu.

<tu dopisuj kolejne notatki>
