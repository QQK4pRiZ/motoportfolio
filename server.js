const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(__dirname));

// Route principale
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Gestione 404
app.use((req, res) => {
    res.status(404).send('Pagina non trovata');
});

// Avvio server
app.listen(PORT, () => {
    console.log('🏁 ========================================');
    console.log('🏁 The Doctor Academy Website Started!');
    console.log('🏁 ========================================');
    console.log(`🌐 Server running at: http://localhost:${PORT}`);
    console.log(`📂 Directory: ${__dirname}`);
    console.log('🏁 ========================================');
    console.log('Press Ctrl+C to stop the server');
});
