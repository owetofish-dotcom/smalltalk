# PROMPT DO WKLEJENIA W SCHEDULED TASK (v2 — po przebiegu 29.08.2026)

---

## MONITORING CEN HOTELI — weekendy Pt→Nd

### 0. Stan poprzedni (ZAWSZE PIERWSZY KROK)
Wczytaj najnowszy plik `SmallTalk/hotel-monitor/state-YYYY-MM-DD.json`.
To jest baza do porównania. Bez niej nie raportuj trendów, tylko oznacz przebieg jako `baseline`.

### 1. Parametry stałe
- **Skład:** 2 dorosłych + 1 dziecko (ur. 2021, wiek 5 l.)
- **Wymóg:** śniadanie w cenie, **najtańszy pokój mieszczący trójkę** (dostawka OK)
- **Zakres:** wszystkie weekendy Pt→Nd w oknie **kroczącym: od najbliższego piątku do +120 dni**
- **Waluta:** PLN, cena łączna za 2 noce (Pt + Sb), brutto

### 2. Hotele i konfiguracja (ZWERYFIKOWANE — nie zmieniaj bez powodu)

**A. Caryńska Resort & SPA — Dwernik (Bieszczady), ocena 4,9**
- Pokój: **„Pokój 2-os. standard" + 1× dostawka** — NIE „Domek 4+2 os."
  (domek kosztuje ~2× tyle: 2 340 zł vs 1 110 zł za ten sam termin 20–22.11)
- Wzór: `cena_Pt + cena_Sb + 300` (dostawka 150 zł/noc)
- Procedura w UI: załaduj z parametrem `room=` (dowolnym poprawnym), potem kliknij radio
  „Pokój 2-os. standard" → ustaw **DZIECI = 1** → na monit „Liczba przekracza limit"
  kliknij **„Dodaj 1 dostawkę"**
- ⚠️ Zmiana pokoju **resetuje DZIECI do 0** — zawsze ustaw ponownie i sprawdź cenę

**B. Grand Hotel Bachledka Strachan — Ždiar (SK), 4★**
- Pokój: **„2+1 standard"**, dostawka **gratis**, dziecko do 10 lat gratis
- W cenie: śniadanie **+ obiadokolacja** — przy porównaniu z Caryńską doliczaj
  wartość obiadokolacji (~150–200 zł/os./dzień) po stronie konkurencji
- Wzór: `cena_Pt + cena_Sb` (bez dopłat)
- Wzorzec bazowy: Pt/Sb 915 zł, pozostałe dni 785 zł

**C. Poziom 511 Jura Wellness — Ogrodzieniec — ⛔ WYŁĄCZONY**
- Wszystkie pokoje w obu ofertach Triverny (`room 7604` śniadanie, `offer 16590` HB)
  mają „Możliwe dostawki: **0**". DZIECI=1 → „nie można dobrać takiej liczby osób".
- **Sprawdzaj raz na 30 dni**, nie co przebieg. Jeśli dostawki się pojawią — wróć do rotacji.
- Referencja (2 osoby dorosłe): 1 774 zł / 20–22.11

### 3. Metoda odczytu (KRYTYCZNE)

1. **JavaScript jest zablokowany** — nie próbuj `javascript_tool`, nie buduj skryptu DOM.
   Działa: `navigate` + kliknięcia + `zoom` na screenshotach + `get_page_text`.
2. **Trik kalendarza:** kliknij pole daty **OD** → kalendarz pokazuje ceny nocne
   dla całego miesiąca naraz. Przeklikaj strzałką „w przód" przez kolejne miesiące,
   zrób zoom na siatce. Jeden zrzut = cały miesiąc. Nie ustawiaj par dat pojedynczo.
3. ⚠️ **Komórka kalendarza = najniższa cena nocna NAJTAŃSZEGO pokoju w ofercie**,
   niekoniecznie tego, który mieści trójkę. Dlatego stosuj wzory z sekcji 2,
   a nie surowe liczby z kalendarza.
4. ⚠️ **Licznik „Do zapłaty brutto" animuje się w górę po załadowaniu.**
   Odczekaj **6–8 sekund** przed odczytem (zaobserwowano 20 → 49 → 1191 → 1830).
   Odczyt bez czekania = błędna cena.
5. **Zawsze zachowaj poprawny parametr `room=` w URL.** Bez niego widget się nie
   inicjalizuje: dropdown OSÓB pokazuje „-", brak listy pokoi, brak ceny.
6. **Walidacja:** dla min. 1 weekendu na hotel załaduj pełną stronę i sprawdź,
   czy wzór zgadza się z „Do zapłaty brutto". Rozbieżność → przelicz wzór od nowa
   i zapisz to w state.
7. Legenda kalendarza: zielony = najniższa cena, szary = wyższa,
   kreskowany = pokoje są, ale pobyt nie może się tego dnia zacząć, blady = brak.

### 4. Współrzędne UI (Triverna, okno domyślne — weryfikuj przed użyciem)
```
pole daty            (541, 164)
kalendarz ▶          (644, 208)
kalendarz ◀          (440, 208)
zoom siatki          [428, 195, 660, 410]
pierwszy pokój radio (434, 290)
dropdown DZIECI      (511, 254)
opcja „1"            (507, 308)
„Dodaj 1 dostawkę"   (541, 397)
zoom ceny            [420, 500, 670, 600]
```

### 5. Wyjście

**Zapisz** `SmallTalk/hotel-monitor/state-YYYY-MM-DD.json` — ten sam schemat co
poprzedni plik (hotels → weekends → cena; formula; formula_verified; notes; watch_next_run).

**Raportuj tylko zmiany i okazje.** Konkretnie:
- Spadek ≥ **10%** względem poprzedniego przebiegu → zgłoś
- Cena ≤ **1 200 zł** za weekend → zgłoś jako okazja
- Zmiana dostępności (pojawienie się / zniknięcie terminu) → zgłoś
- Nowy rekord minimum w całym oknie → zgłoś
- **Brak zmian → w odpowiedzi jedno zdanie: „Bez zmian względem [data]."**
  (ale publikację z sekcji 6 wykonaj mimo to — nota musi mieć dzisiejszą datę)

Przy zmianach dodaj w tabeli kolumnę **Δ vs poprzedni przebieg**. Podsumowanie: max 5 zdań.

### 6. PUBLIKACJA (OBOWIĄZKOWA — bez niej zadanie NIE jest ukończone)

Sesja scheduled **nie ma mountu MiniAPPki** → wszystkie operacje na plikach i git rób
przez `mcp__Control_your_Mac__osascript` (`do shell script`). Repo:
`/Users/maczek/Desktop/MiniAPPki/SmallTalk`

**1. Zapisz stan i notę**
- `SmallTalk/hotel-monitor/state-YYYY-MM-DD.json` — pełne dane (schemat z sekcji 5)
- `SmallTalk/hotelove.html` — **czysty fragment HTML** (bez `<html>`, `<head>`, `<body>`),
  jasny theme spójny z `todo.html`, styl prosty, zero frameworków.
  Zawartość: data przebiegu → 2–4 najlepsze okazje jako kafelki (hotel, termin, cena, Δ)
  → kompaktowa tabela wszystkich weekendów per hotel → jednolinijkowe notatki.
  **PRZED napisaniem odczytaj poprzednią wersję `hotelove.html`**, żeby zachować ciągłość
  ocen i poprawnie policzyć Δ vs poprzedni przebieg.
- **Brak zmian:** i tak nadpisz `hotelove.html` z aktualną datą i adnotacją
  „Bez zmian względem [data]" — plik ma zawsze pokazywać dzisiejszą datę.

**2. Podepnij sekcję w `todo.html`**
W `todo.html` jest (lub będzie) sekcja **„Hotele — weekendy Pt→Nd"**, która ładuje
`hotelove.html`. Jeśli sekcji jeszcze nie ma, dopisz ją **przed `</body>`**, bezpośrednio
za istniejącym blokiem `.nato-sec` — dokładnie w tym samym wzorcu:

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
Hotelove jest **osobną, niezależną sekcją** — nie mieszaj jej z notą NATO.

**3. Wypchnij**
`git add` + `commit` + `push` na `main` w `/Users/maczek/Desktop/MiniAPPki/SmallTalk`
(pre-approved, bez pytania). **Bez pusha zadanie NIE jest ukończone.**

**4. Zweryfikuj**
Po ~1 min sprawdź `curl` (na hoście, przez osascript), że
`https://owetofish-dotcom.github.io/smalltalk/hotelove.html` zwraca **dzisiejszą datę**.

**5. Na koniec podaj w odpowiedzi PEŁNĄ treść noty** (będzie relacjonowana w Dispatch).

### 7. Do sprawdzenia w najbliższym przebiegu
- Caryńska **25–27.09** — cena piątku nieodczytana (data była preselektowana w pickerze)
- Bachledka **13–15.11** — brak dostępności (12–13.11 wyprzedane), może wrócić
- Oba hotele miały baner „Oferta kończy się za 2–3 dni" → spodziewaj się przeceny
- Poziom 511 — kolejne sprawdzenie dostawek: **28.09.2026**

### 8. Linki
- Caryńska: https://www.triverna.pl/hotel/carynska-resort-spa — **pokój, nie domek**
- Bachledka: https://www.triverna.pl/hotel/grand-hotel-bachledka-strachan
- Poziom 511: https://www.triverna.pl/hotel/poziom-511-jura-wellness-hotel-spa — wyłączony do 28.09

*(Wklej pełne URL-e z parametrami z obecnego prompta — zachowaj `room=`, `adults=2`,
`children=1`, `child_age=5`.)*

---

# CO ZMIENIŁEM WZGLĘDEM TWOJEGO OBECNEGO PROMPTA

| # | Było | Jest | Dlaczego |
|---|------|------|----------|
| 1 | „Monday–Sunday", „next three months" + tabela 53 weekendów do 09.2027 | Jedno okno: **Pt→Nd, +120 dni krocząco** | Trzy sprzeczne definicje zakresu w jednym prompcie. 53 weekendy × 3 hotele to kilka godzin klikania na przebieg. |
| 2 | „zbuduj skrypt jeśli możesz" | „JavaScript zablokowany — nie próbuj" | Zmarnowałem ~15 min na próby `javascript_tool`. Hook blokuje. |
| 3 | Brak wskazania pokoju | Jawnie **„Pokój 2-os. standard + dostawka"** + wzór +300 zł | Twój link celował w Domek 4+2 = 2× cena. Sam dopisałeś „pokój nie domek" — to za mało, bo zmiana pokoju resetuje DZIECI. |
| 4 | Poziom 511 w rotacji | Wyłączony, recheck co 30 dni | Fizycznie nie da się zarezerwować dla trójki („dostawki: 0"). Marnuje ~1/3 przebiegu. |
| 5 | Brak | **Czekaj 6–8 s na licznik ceny** | Odczytałem 1191 zł zamiast 1830 zł. Jedyny najgroźniejszy błąd systematyczny. |
| 6 | „użyj kalendarza" | + ostrzeżenie: kalendarz = najtańszy pokój, nie twój | Bez tego dane z kalendarza są cicho zaniżone. |
| 7 | Brak | **Zawsze zachowaj `room=` w URL** | Usunięcie psuje inicjalizację widgetu — pusty dropdown, brak ceny. |
| 8 | „Wyświetlaj tylko dobre promocje" | Progi liczbowe: −10%, ≤1 200 zł, zmiana dostępności, nowy rekord | „Dobre" było nieoperacyjne. Teraz brak zmian = jedno zdanie, zero HTML. |
| 9 | „zapisuj w jakimś pliku" | Konkretna ścieżka + schemat + `formula_verified` | Pozwala następnemu przebiegowi ufać wzorom zamiast wyprowadzać je od zera. |
| 10 | Brak | Sekcja „do sprawdzenia" + współrzędne UI | Przenosi otwarte wątki i wiedzę operacyjną między przebiegami. |
| 11 | Brak publikacji | **Sekcja 6: hotelove.html + osobna sekcja w todo.html + push + weryfikacja curl** | Wzorzec z nato-risk, ale własny plik i własny blok `.hotel-sec`. Nota NATO zostaje nietknięta. |

**Jeden warty rozważenia dodatek:** Bachledka ma w cenie obiadokolację. Przy 2 dniach
to realnie ~600–800 zł wartości dla trójki — czyli nominalnie droższe 1 830 zł jest
w praktyce tańsze niż Caryńska 1 110 zł + jedzenie na mieście. Jeśli chcesz porównanie
„koszt całkowity pobytu", dopisz to jako regułę; teraz jest tylko notatką.
