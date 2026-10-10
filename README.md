# Zwischen den Zeilen

Für meine erste Einsendeaufgabe im Kurs Front-End Development wollte ich keine beliebige Liste mit Buchempfehlungen erstellen, sondern ein Bücherregal, das wirklich zu mir passt. **Zwischen den Zeilen** zeigt deshalb 33 Bücher, die ich bereits gelesen habe, gerade lese oder unbedingt noch lesen möchte.

Mit dabei sind unter anderem die Reihen *Throne of Glass*, *ACOTAR*, *Crescent City*, *Fourth Wing*, *Off-Campus* und *Fae & Alchemy*. Ergänzt wird das Regal durch einige Einzelbände, die mir ebenfalls wichtig sind.

## Was man auf der Seite machen kann

- nach einem Titel oder einer Autorin beziehungsweise einem Autor suchen
- die Bücher nach Reihe und Lesestatus filtern
- auf einen Blick sehen, was gelesen, aktuell begonnen oder vorgemerkt ist
- sich per Zufall einen Lesetipp aus der aktuellen Auswahl geben lassen
- die Seite am Computer, Tablet oder Smartphone verwenden

Bei der Gestaltung habe ich mich für tiefe Blautöne in Kombination mit warmem Rot, Koralle und Gold entschieden. Die Farben erinnern mich an einen Sonnenaufgang beziehungsweise Sonnenuntergang und greifen gleichzeitig die Stimmung meiner liebsten Fantasy-Reihen auf.

## Wie die Seite entstanden ist

Die Webseite wurde mit HTML, CSS und TypeScript umgesetzt. Ich habe bewusst kein Framework verwendet, weil ich bei dieser Aufgabe vor allem die Grundlagen aus den ersten beiden Modulen anwenden und besser verstehen wollte. Vite unterstützt mich beim lokalen Entwickeln und beim Erstellen der fertigen Version.

Die Buchkarten werden aus einer gemeinsamen Datensammlung erzeugt. Dadurch musste ich das Aussehen einer Karte nur einmal gestalten und kann neue Bücher später leichter ergänzen. Auch Suche und Filter greifen direkt auf diese Daten zu.

Mir war außerdem wichtig, dass die Seite nicht nur schön aussieht, sondern auch gut bedienbar ist. Deshalb gibt es unter anderem deutlich sichtbare Fokuszustände, beschriftete Eingabefelder, eine sinnvolle Überschriftenstruktur und Statusmeldungen für Screenreader.

## Projekt lokal ansehen

Benötigt werden Node.js 20 oder neuer und npm. Nach dem Herunterladen des Projekts können im Terminal diese beiden Befehle ausgeführt werden:

```bash
npm install
npm run dev
```

Anschließend zeigt Vite im Terminal die lokale Adresse der Webseite an.

## Fertige Version prüfen

```bash
npm run build
```

Dabei wird TypeScript überprüft und die fertige Version im Ordner `dist` erstellt. Die abschließende Accessibility-Prüfung mit Lighthouse erreichte 100 von 100 Punkten; der Nachweis liegt im Projekt als `lighthouse.png`.
