# Portfolio — Raf Quaden

Statische site: alleen HTML, CSS en wat plaatjes. Geen build, geen dependencies,
geen npm. Je bewerkt een bestand, je pusht, en binnen een minuut staat het live.

---

## 1. Online zetten met GitHub Pages

Omdat je GitHub-account `rafezak` is, kun je een **user site** maken. Die krijgt de
URL `https://rafezak.github.io` — korter en netter dan een projectpagina.

1. Maak op GitHub een nieuwe **publieke** repository met exact deze naam:
   `rafezak.github.io`
2. Zet de inhoud van deze map erin (dus `index.html` in de hoofdmap, niet in een submap):

   ```bash
   cd portfolio
   git init
   git add .
   git commit -m "Eerste versie portfolio"
   git branch -M main
   git remote add origin https://github.com/rafezak/rafezak.github.io.git
   git push -u origin main
   ```

3. Ga in de repo naar **Settings → Pages**. Zet *Source* op **Deploy from a branch**,
   branch `main`, map `/ (root)`. Opslaan.
4. Wacht een minuut en ga naar https://rafezak.github.io

Vanaf dan is elke `git push` genoeg om de site bij te werken.

> Wil je liever `rafezak.github.io/portfolio`? Noem de repo dan gewoon `portfolio`
> en zet Pages op dezelfde manier aan. Werkt precies zo, alleen de URL is langer.

**Lokaal bekijken** voor je pusht:

```bash
python3 -m http.server 8000
# open http://localhost:8000
```

---

## 2. Bestanden

| Bestand | Wat het is |
|---|---|
| `index.html` | Homepage: intro, drie projectkaarten, over mij |
| `childjourney.html` | Case: serious game (je sterkste stuk) |
| `platform-fighter.html` | Case: Unity platform fighter |
| `tuzzle.html` | Case: Unreal puzzelgame |
| `style.css` | Alle styling, met kleurvariabelen bovenaan |
| `404.html` | Pagina voor kapotte links |
| `assets/` | Hier komen je afbeeldingen en je cv |

---

## 3. Afbeeldingen toevoegen

Overal waar nu een gestreept vlak staat, zit dit in de HTML:

```html
<div class="ph ph--hero">assets/childjourney-hero.png<br>1920 × 1080</div>
```

Vervang die regel door:

```html
<img src="assets/childjourney-hero.png" alt="Beschrijf kort wat er te zien is">
```

De bestandsnaam en het formaat staan in het vlak zelf, dus je hoeft niks te
onthouden. Wat je nodig hebt:

| Bestand | Formaat | Waar |
|---|---|---|
| `childjourney-card.png` | 1600 × 1000 | kaart op de homepage |
| `childjourney-hero.png` | 1920 × 1080 | bovenaan de case |
| `childjourney-1.png`, `-2.png` | 1600 × 800 | in de tekst |
| `platformfighter-card.png` | 1600 × 1000 | kaart op de homepage |
| `platformfighter-hero.png` | 1920 × 1080 | bovenaan de case |
| `platformfighter-1.png` | 1600 × 800 | in de tekst |
| `tuzzle-card.png` | 1600 × 1000 | kaart op de homepage |
| `tuzzle-hero.png` | 1920 × 1080 | bovenaan de case |
| `tuzzle-1.png` | 1600 × 800 | in de tekst |
| `CV-Raf-Quaden.pdf` | — | knop op de homepage |

Exacte maten zijn niet verplicht, de verhouding wel — anders gaat de layout
springen. Comprimeer je screenshots even (bijvoorbeeld via squoosh.app);
een portfolio dat traag laadt werkt tegen je.

Voor de platform fighter is een **gif of korte clip** beter dan een screenshot.
Combat laat zich niet stilstaand uitleggen.

---

## 4. Wat er nog ingevuld moet worden

- [ ] **Toestemming vragen** voor het tonen van Childjourney. Zie de waarschuwing
      bovenin `childjourney.html`. Doe dit vóór je pusht, niet erna.
- [ ] De drie blokken **"Wat ik eruit heb geleerd"** — één per case. Die staan nu
      als opvallende notitie in de pagina en moeten door jou geschreven worden.
      Dit is het stuk waar een werkgever het langst bij stilstaat: schrijf het in
      je eigen woorden, ook als het houterig klinkt.
- [ ] Afbeeldingen erin zetten (zie hierboven).
- [ ] Je cv als `assets/CV-Raf-Quaden.pdf` neerzetten.
- [ ] Eventueel een `og.png` (1200 × 630) voor de linkpreview in WhatsApp en
      LinkedIn — zie de meta-tags bovenin `index.html`.

---

## 5. Kleuren aanpassen

Bovenin `style.css` staan de variabelen:

```css
--accent: #b3261e;   /* het rood, ook gebruikt in je cv */
```

Verander die ene regel en de hele site gaat mee. Er staat een aparte set voor
donkere modus eronder; die volgt automatisch de systeeminstelling van de bezoeker.
