# Sito BrainJuice Club

Indirizzo previsto: [https://brainsjuice.github.io](https://brainsjuice.github.io)

Sito statico: HTML, CSS e un piccolo script. Nessuna build, nessuna dipendenza da installare.

## Struttura

```
index.html              tutta la pagina (testi, prossimo evento, archivio)
privacy.html            informativa privacy (bozza da far rivedere)
assets/css/style.css    stile; i colori sono tutti nel blocco :root in cima
assets/js/main.js       date automatiche dell'evento e pulsanti "Copia l'indirizzo"
assets/fonts/           caratteri Figtree e Fraunces, ospitati nel sito, con le loro licenze
assets/img/             logo, immagine di brAIns 2026, icone, immagine per le condivisioni
assets/img/foto/        qui vanno le foto degli incontri
```

## Vederlo in locale

Apri `index.html` nel browser, oppure dalla cartella del sito:

```
python3 -m http.server 8000
```

e vai su http://localhost:8000.

## Aggiornare il prossimo evento

In `index.html` cerca il commento `PROSSIMO EVENTO`.

- `data-deadline="2026-10-10"`: scadenza della call for abstracts. Dal giorno dopo la call sparisce da sola.
- `data-until="2026-10-30"`: giorno dell'evento. Dal giorno dopo spariscono i pulsanti di prenotazione.
- Il link al form di prenotazione compare due volte: nel pulsante in alto e nel riquadro dell'evento.

Quando l'evento è passato, aggiungilo all'archivio e sostituisci il blocco con l'evento successivo.

## Aggiungere un evento all'archivio

Cerca il commento `ARCHIVIO`, copia un `<li>` intero e mettilo in cima alla lista.
Le etichette colorate indicano il formato:

- `chip-pink`: brAIns
- `chip-mint`: BrainJuice Talks
- `chip-lemon`: Spremute

## Aggiungere le foto

1. Metti le foto in `assets/img/foto/` (meglio `.webp` o `.jpg`, lato lungo circa 1200 px).
2. Nella sezione `FOTO` sostituisci ogni `<div class="ph">` con `<img src="assets/img/foto/nome.webp" alt="descrizione della foto">`.
3. Togli l'attributo `hidden` dalla sezione.

Usate solo foto vere dei vostri eventi, e chiedete il consenso a chi è riconoscibile.
Quando aggiungete le foto, aggiungete anche a `privacy.html` un paragrafo su foto e video: come avvisate i partecipanti e come si chiede di non comparire.

## Cambiare i colori

Tutti i colori sono variabili nel blocco `:root` in cima a `assets/css/style.css`.
Ogni formato ha il suo colore: rosa per brAIns, limone per le Spremute, menta per i Talks.
Testo e pulsanti usano prugna e lampone, perché i pastelli da soli non sono leggibili come testo.

## Prima di pubblicare

1. **Nome dell'associazione.** Nel piè di pagina di `index.html` e in `privacy.html` c'è «Brain Juice ODV» con il codice fiscale.
   La sigla ODV vale solo per chi è iscritto al RUNTS in quella sezione. Non usate la sigla ONLUS: non esiste più.
   Se in un anno ricevete 10.000 euro o più da enti pubblici (università comprese), vanno pubblicati sul sito entro il 30 giugno dell'anno dopo.
2. **Privacy.** Fai rivedere `privacy.html`, controlla che ogni frase descriva quello che fate davvero e togli l'avviso giallo in cima.
   La pagina promette di cancellare i dati delle iscrizioni sei mesi dopo l'evento: qualcuno deve farlo davvero.
   Metti il link alla pagina privacy anche nel modulo di iscrizione.
3. **Foto.** Vedi sopra.

Il sito non usa cookie né statistiche e non carica nulla da server esterni (anche i caratteri sono nel sito), quindi non serve un banner cookie.
Se un giorno aggiungete statistiche, video incorporati o mappe, la pagina privacy va aggiornata e può servire il banner.

## Pubblicare

Funziona su qualsiasi hosting statico, GitHub Pages compreso: basta che `index.html` sia nella radice del ramo pubblicato.
Il file vuoto `.nojekyll` dice a GitHub Pages di pubblicare i file così come sono.
In `index.html` i campi `og:url` e `og:image` puntano a `https://brainsjuice.github.io`: se l'indirizzo cambia, aggiornali, altrimenti l'anteprima del link condiviso non funziona.
