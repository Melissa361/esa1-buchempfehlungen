# Zwischen den Zeilen

**Zwischen den Zeilen** ist ein persönliches digitales Bücherregal mit 33 Titeln. Die Sammlung umfasst vollständige Reihen, Einzelbände und kommende Neuerscheinungen. Sie lässt sich nach Titel oder Autor:in durchsuchen sowie nach Reihe und Lesestatus filtern.

Das Projekt entstand als Einsendeaufgabe 1 im Kurs Front-End Development (SED502).

## Funktionen

- Live-Suche nach Titel und Autor:in
- Reihenfilter für Throne of Glass, ACOTAR, Crescent City, Empyrean, Off-Campus und Fae & Alchemy
- Lesestatus für gelesen, aktuell gelesen und vorgemerkte Neuerscheinungen
- Zufälliger Lesetipp aus der aktuellen Auswahl
- Dynamische Darstellung der Ergebnisse mit TypeScript
- Responsives Layout für Desktop, Tablet und Smartphone
- Tastaturbedienung, Skip-Link und Statusmeldungen für Screenreader

## Technische Entscheidungen

Die Webseite verwendet bewusst **Vanilla TypeScript** ohne Framework, weil die Aufgabe die Grundlagen aus Modul 01 und 02 prüft. Vite dient als Entwicklungsserver und erstellt den Produktions-Build.

Die HTML-Struktur besteht aus semantischen Elementen wie `header`, `nav`, `main`, `section`, `article`, `aside`, `figure`, `figcaption` und `footer`. Die Navigation besitzt ein `aria-label`; dynamisch aktualisierte Meldungen verwenden `aria-live`.

Die Buchdaten werden durch das Interface `Book` beschrieben. Suche, Reihen- und Statusauswahl werden mit typisierten Funktionen verarbeitet. Zum Filtern und Erzeugen der Karten kommen unter anderem die Array-Methoden `filter()` und `map()` zum Einsatz. DOM-Inhalte werden mit `textContent` erstellt, nicht mit `innerHTML`.

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
