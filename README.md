[README.md](https://github.com/user-attachments/files/29036323/README.md)
# Verlorene Welten — Upload-Anleitung & Projektstruktur

## Dateistruktur

```
verlorene-welten/          ← Root des GitHub-Repositories
│
├── index.html             ← STARTSEITE (Hero + Weltkarte + Infobereich)
├── detail.html            ← DETAILSEITE (wird für JEDE Art wiederverwendet)
├── README.md              ← Diese Datei
│
├── css/
│   └── style.css          ← Globales Stylesheet (alle Seiten)
│
├── js/
│   └── config.js          ← Supabase-Verbindung (EINZIGE Datenquelle)
│
└── data/                  ← Leer (Daten kommen aus Supabase)
```

---

## Wie hängen die Seiten zusammen?

```
index.html  ──[Klick auf Popup "Mehr erfahren"]──►  detail.html?id=1&typ=tier
                                                      detail.html?id=2&typ=tier
                                                      detail.html?id=101&typ=pflanze
                                                      ...

detail.html ──[Klick "Zurück zur Karte"]──────────►  index.html
```

### Parameter in der URL (`detail.html`)
- `?id=1&typ=tier` → Tier mit art_id=1 (Amur-Leopard)
- `?id=7&typ=tier` → Tier mit art_id=7 (Berggorilla)
- `?id=101&typ=pflanze` → Pflanze mit art_id=101 (Wollemi-Kiefer)

Die Detailseite liest diese Parameter automatisch und lädt die richtigen Daten aus Supabase.

---

## GitHub Upload — Schritt für Schritt

### 1. Repository öffnen
Gehe zu: `https://github.com/celinadittloff-study/verlorene-welten`

### 2. Dateien hochladen
Klicke auf **"Add file" → "Upload files"**

Lade diese Dateien/Ordner hoch:
```
index.html      → direkt ins Root
detail.html     → direkt ins Root
README.md       → direkt ins Root
css/style.css   → in Ordner "css"
js/config.js    → in Ordner "js"
```

**Wichtig für Unterordner:**
- Klicke "Add file" → "Create new file"
- Schreibe `css/style.css` als Dateiname → GitHub erstellt den Ordner automatisch
- Füge den Inhalt ein → "Commit changes"

### 3. Alternativ: Alle auf einmal hochladen
Du kannst auch den ganzen Ordner per **Drag & Drop** ins Upload-Fenster ziehen.

### 4. GitHub Pages prüfen
Nach dem Upload: Gehe zu `https://celinadittloff-study.github.io/verlorene-welten`

---

## Was die Seiten können

### index.html (Startseite)
- Zählt 47.000+ hoch beim Laden
- Toggle oben: Tiere ↔ Pflanzen (ändert Farben + Karte)
- Light/Dark Mode Button (☀️/🌙)
- Dunkle Weltkarte mit farbigen Markern
- Filter nach Region + Bedrohungsstufe
- Popup mit Bild, Name, Bestand, Bedrohung → "Mehr erfahren"
- Infobereich unter der Karte

### detail.html (Detailseite — für alle 24 Arten)
- Großes Titelbild (aus Supabase)
- Botschafter-Zitat
- Vollständiger Steckbrief (Biologie, Verhalten, Ernährung...)
- Interaktive Karte mit Verbreitungsgebiet (historisch + aktuell)
- Populationsgrafik (Balkendiagramm aus echten Daten)
- Bedrohungskarten (alle Bedrohungen mit Schweregrad)
- Schutzprojekt mit direktem Link

---

## Wo kommen die Daten her?

**Supabase-Datenbank**: `https://yszbibfkrmpvoqdrosgz.supabase.co`

Tabellen:
| Tabelle | Inhalt |
|---------|--------|
| `arten` | 24 Arten (12 Tiere, 12 Pflanzen) mit Koordinaten, Bilder, Links |
| `art_details` | Biologie, Ernährung, Verhalten pro Art |
| `bedrohungen` | 53 Bedrohungseinträge mit Schweregrad und Quellen |
| `populationsdaten` | 73 historische Datenpunkte für Grafiken |
| `verbreitung_polygone` | 105 Koordinaten für historische/aktuelle Verbreitung |

Alle Daten sind öffentlich lesbar (kein Login nötig).

---

## Pflanzenseite vs. Tierseite

Die Website ist **eine Seite** für beide. Der Toggle oben wechselt:
- Die Farbe (Tiere: Terrakotta, Pflanzen: Waldgrün)
- Das Hintergrundbild im Hero
- Die Karten-Marker (lädt andere Daten aus Supabase)

---

## Muss ich Pflanzen noch hinzufügen?

Die Pflanzen-Daten sind bereits in Supabase! Die Seite zeigt sie automatisch wenn du auf "Pflanzen" klickst.

---

## Probleme & Lösungen

| Problem | Lösung |
|---------|--------|
| Karte zeigt nichts | Browser-Konsole (F12) öffnen, Fehlermeldung prüfen |
| Bilder laden nicht | Wikimedia-URLs direkt im Browser testen |
| Dark/Light funktioniert nicht | CSS neu hochladen (style.css) |
| Detail-Seite leer | URL prüfen: muss `?id=1&typ=tier` enthalten |

---

## Hero-Bilder (Collage) hochladen

Die Startseite zeigt deine eigenen Bilder:
- **Tiere** → `data/hero-tiere.jpg` (Bild 1 — die Tier-Collage)
- **Pflanzen** → `data/hero-pflanzen.jpg` (Bild 2 — die Pflanzen-Collage)

**So lädst du sie hoch:**
1. Bild speichern als `hero-tiere.jpg` und `hero-pflanzen.jpg`
2. Im Repository auf `data/` Ordner klicken
3. "Add file" → "Upload files" → beide Bilder hochladen
4. Commit

Empfohlene Bildgröße: **1800 × 900 px**, JPG, max 500 KB.
