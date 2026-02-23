# TheDoctorAcademy Website

Sito web professionale per TheDoctorAcademy - La prima Scuola/Noleggio MiniGP ALL-INCLUSIVE.

## 🏁 Caratteristiche

- **Design Moderno e Responsive**: Ottimizzato per tutti i dispositivi (desktop, tablet, mobile)
- **Animazioni Fluide**: Effetti scroll, hover e transizioni professionali
- **Sezioni Complete**:
  - Hero section con call-to-action
  - Presentazione academy
  - Servizi offerti (Corsi, Eventi, Noleggio)
  - Orari e programma
  - Galleria foto
  - Form di contatto
  - Footer con informazioni

## 📁 Struttura File

```
thedoctoracademy/
├── index.html          # Pagina principale HTML
├── styles.css          # Tutti gli stili CSS
├── script.js           # JavaScript per interattività
└── README.md           # Questo file
```

## 🎨 Come Aggiungere le Foto

Il sito ha placeholder preparati per le tue foto. Ecco dove inserirle:

### 1. Hero Section (Immagine Principale)
Sostituisci il background nella classe `.hero-image-placeholder` in `styles.css`:
```css
.hero-image-placeholder {
    background: url('images/hero-background.jpg') center/cover;
}
```

### 2. Sezione About
File: `index.html`, cerca `<div class="about-image">`
```html
<div class="about-image">
    <img src="images/about-academy.jpg" alt="TheDoctorAcademy">
</div>
```

### 3. Card Servizi
Sostituisci i placeholder nelle card servizi:
```html
<div class="service-image">
    <img src="images/corsi-guida.jpg" alt="Corsi di Guida">
</div>
```

### 4. Galleria
Aggiungi le tue foto nella sezione galleria (6 foto):
```html
<div class="gallery-item">
    <img src="images/gallery-1.jpg" alt="Foto 1">
</div>
```

## 🖼️ Foto Consigliate

Prepara queste immagini:

1. **Hero** (1920x1080px): Foto panoramica della pista o azione in pista
2. **About** (800x600px): Foto dell'academy o dei giovani piloti
3. **Servizio 1** (600x400px): Lezioni di guida
4. **Servizio 2** (600x400px): Eventi e feste
5. **Servizio 3** (600x400px): MiniGP in pista
6. **Schedule** (800x600px): Vista della pista
7. **Galleria** (6 foto, 800x800px): Mix di azione, momenti divertenti, piloti

## 🚀 Come Visualizzare il Sito

### Opzione 1: Apri direttamente
1. Fai doppio click su `index.html`
2. Si aprirà nel tuo browser predefinito

### Opzione 2: Live Server (Consigliato)
1. Apri la cartella in VS Code
2. Installa l'estensione "Live Server"
3. Click destro su `index.html` → "Open with Live Server"

## 🎯 Personalizzazioni Rapide

### Cambiare i Colori
Nel file `styles.css`, modifica le variabili CSS:
```css
:root {
    --primary-color: #ff0000;      /* Rosso principale */
    --secondary-color: #000000;    /* Nero */
    --accent-color: #ffd700;       /* Oro */
}
```

### Modificare Testi
Tutti i testi sono nel file `index.html`. Cerca e sostituisci il testo che vuoi modificare.

### Aggiungere Form Backend
Nel file `script.js`, cerca il commento `// Contact Form Handler` e sostituisci l'URL con il tuo endpoint:
```javascript
fetch('https://tuo-api.com/contact', {
    method: 'POST',
    // ... resto del codice
})
```

## 📱 Social Media

Il sito include link a:
- Instagram: @the_doctoracademy_asd
- Pista Caudina: @pista.caudina

Aggiorna questi link nel footer se necessario.

## 🌐 Pubblicazione Online

Per pubblicare il sito:

1. **GitHub Pages** (Gratis):
   - Crea repository su GitHub
   - Carica i file
   - Attiva GitHub Pages nelle impostazioni

2. **Netlify** (Gratis):
   - Registrati su netlify.com
   - Trascina la cartella nel dashboard
   - Ottieni URL immediato

3. **Hosting Tradizionale**:
   - Carica tutti i file via FTP
   - Punta il dominio alla cartella

## ✨ Features JavaScript

- Menu hamburger responsive
- Scroll smooth tra sezioni
- Animazioni all'scroll
- Form di contatto funzionante
- Effetto parallax sull'hero
- Counter animato per statistiche
- Cambio navbar al scroll

## 🎨 Font e Icone

- **Font**: Poppins da Google Fonts
- **Icone**: Emoji Unicode (📍, 📱, ⏰, 🏁)

## 📄 Browser Supportati

- Chrome/Edge (ultimi 2 versioni)
- Firefox (ultimi 2 versioni)
- Safari (ultimi 2 versioni)
- Mobile browsers

## 🔧 Manutenzione

- Testato su Chrome, Firefox, Safari
- Responsive da 320px a 2560px
- Performance ottimizzate
- SEO-friendly

## 📞 Supporto

Per domande o modifiche, il codice è ben commentato e organizzato. Ogni sezione è facilmente identificabile.

---

**Creato per TheDoctorAcademy** | Zero Preoccupazioni. Solo Divertimento. ✌🏻✨🏁
