# Sito di presentazione · Chiara Grillo

Sito vetrina/portfolio personale come sviluppatrice freelance. HTML/CSS/JS vanilla, nessun framework. Pensato per il deploy su Netlify.

## Struttura

```
index.html            homepage
style.css             foglio di stile del sito
script.js             logica dell'anello interattivo in hero
progetti/
  padel.html           case study "Pinea Padel" (gestionale campi da padel)
  frida.html           case study "Frida" (gestionale rifugio LIDA Catania)
  ponti.html            case study "Fondazione Ponti" (sito no-profit, progetto di pratica)
screenshot/
  padel/               screenshot del gestionale padel
  frida/               screenshot dell'app Frida
  ponti/                screenshot del sito Fondazione Ponti
img/
  chiara.jpg            foto reale per la sezione "Chi sono"
```

## Design

Tema scuro (indaco, non nero puro) con quattro colori d'accento bilanciati caldo/freddo. Tipografia: Space Grotesk per i titoli, Inter per il corpo del testo, JetBrains Mono per gli accenti "da sviluppatrice". Bottoni squadrati, ombre morbide scure, texture di grana leggera sullo sfondo.

L'hero include un anello SVG interattivo a quattro spicchi con alcune statistiche scherzose (caffè bevuti, bug schiacciati, ecc.), pensato per restare leggibile e funzionante anche senza JavaScript.

## Stato attuale

**Presente:**
- Homepage completa: header, hero, servizi, portfolio, chi sono, contatti, footer.
- Case study dedicato al progetto padel, collegato dalla relativa card in portfolio.
- Case study dedicato a Frida (gestionale rifugio LIDA Catania), collegato dalla relativa card in portfolio.
- Menu di navigazione a hamburger sotto i 780px (index e case study): pannello a tendina con i link e il CTA "Richiedi un preventivo", apertura/chiusura via click sull'icona, un link, Esc o click fuori dal pannello. Desktop resta invariato.
- Case study dedicato a Fondazione Ponti (sito per fondazione umanitaria fittizia), collegato dalla relativa card in portfolio.
- Sezione "Linguaggi e strumenti" in home (tra "Chi sono" e "Contatti"): carosello a scorrimento automatico (loop infinito, pausa al passaggio del mouse) con i loghi di HTML5, CSS3, JavaScript, PHP, MySQL, Bootstrap 5, Git, React, Vue.js, WordPress, tutti allo stesso livello (nessuna distinzione tra competenze consolidate e in apprendimento — sostituisce una prima versione a due gruppi di tag testuali, mai andata online).
- Foto reale nella sezione "Chi sono" (`img/chiara.jpg`), al posto del placeholder.
- Link a GitHub (`ChiaraInMiniatura`) nel footer di tutte e 4 le pagine e come link "Altri progetti ed esperimenti su GitHub" sotto la griglia portfolio in home.

**Da completare:**
- Tag stack tecnico della card LIDA in home ancora "React": da valutare se aggiornarlo a "Next.js" per coerenza con la case study.

**Note di presentazione:**
- Gli screenshot di Frida sono catture da mobile (l'app è mobile-first): nella case study sono mostrati in formato telefono, non a piena larghezza come quelli desktop del gestionale padel. L'anteprima della card LIDA in home usa il logo dell'app invece di uno screenshot, per lo stesso motivo di proporzioni; il logo è dimensionato più grande (68% del box) con angoli arrotondati e ombra morbida, per leggersi come scheda intenzionale sullo sfondo scuro della card invece che come ritaglio isolato.
- La hero della home non fa più riferimento a un pubblico "giovane"/"vent'anni": il messaggio si concentra su siti e gestionali su misura per attività locali, senza inquadratura generazionale.
- Fondazione Ponti è un progetto di pratica personale, non un cliente reale: costruito per allenarsi prima di un incarico vero con un'agenzia, non è online e non ha scopo commerciale. Lo dichiara anche il case study stesso, per trasparenza.
- I loghi del carosello "Linguaggi e strumenti" sono in gran parte da Simple Icons (simpleicons.org); il logo CSS3 viene invece da Wikimedia Commons ("CSS3 logo.svg", licenza Creative Commons Attribution 3.0) — scelta consapevole senza nota di attribuzione visibile in pagina, segnalata qui per lasciarne traccia.
