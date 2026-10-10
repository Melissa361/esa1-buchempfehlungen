# Zwischen den Zeilen

**Zwischen den Zeilen** ist eine kleine statische Webseite mit acht Buchempfehlungen. Besucher:innen können die Auswahl nach Titel oder Autor:in durchsuchen, nach Genre filtern und sich per Zufall ein Buch vorschlagen lassen.

Das Projekt entstand als Einsendeaufgabe 1 im Kurs Front-End Development (SED502).

## Funktionen

- Live-Suche nach Titel und Autor:in
- Filter für Roman, Klassiker, Fantasy und Sachbuch
- Zufälliger Lesetipp aus der aktuellen Auswahl
- Dynamische Darstellung der Ergebnisse mit TypeScript
- Responsives Layout für Desktop, Tablet und Smartphone
- Tastaturbedienung, Skip-Link und Statusmeldungen für Screenreader

## Technische Entscheidungen

Die Webseite verwendet bewusst **Vanilla TypeScript** ohne Framework, weil die Aufgabe die Grundlagen aus Modul 01 und 02 prüft. Vite dient als Entwicklungsserver und erstellt den Produktions-Build.

Die HTML-Struktur besteht aus semantischen Elementen wie `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption` und `footer`. Die Navigation besitzt ein `aria-label`; dynamisch aktualisierte Meldungen verwenden `aria-live`.

Die Buchdaten werden durch das Interface `Book` beschrieben. Suche und Genre-Auswahl werden mit typisierten Funktionen verarbeitet. Zum Filtern und Erzeugen der Karten kommen unter anderem die Array-Methoden `filter()` und `map()` zum Einsatz. DOM-Inhalte werden mit `textContent` erstellt, nicht mit `innerHTML`.

## Projekt starten

Voraussetzungen: Node.js 20 oder neuer und npm.

```bash
npm install
npm run dev
```

Vite zeigt danach die lokale Adresse im Terminal an.

## Build prüfen

```bash
npm run build
```

Der fertige Build wird im Ordner `dist/` erzeugt. TypeScript wird dabei im Strict-Modus geprüft.

## Projektstruktur

```text
.
├── public/
│   └── favicon.svg
├── src/
│   ├── books.ts
│   ├── main.ts
│   └── style.css
├── index.html
├── package.json
└── tsconfig.json
```

## Accessibility

Die Seite wurde für gut sichtbare Fokuszustände, ausreichende Farbkontraste, logische Überschriften, beschriftete Formulare und reduzierte Bewegungen bei entsprechender Systemeinstellung optimiert. Das Ergebnis des abschließenden Lighthouse-Accessibility-Audits befindet sich in `lighthouse.png`.
