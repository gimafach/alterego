const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 4000;

// Middleware per parsing JSON (per future API)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve i file statici dalla cartella dist
app.use(express.static(path.join(__dirname, 'dist')));

// API placeholder per future funzionalità (demo request, etc.)
app.post('/api/demo-request', (req, res) => {
  // TODO: Implementare la gestione delle richieste demo
  console.log('Demo request received:', req.body);
  res.json({ success: true, message: 'Demo request received' });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Gestisce React Router (SPA) - deve essere l'ultimo
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`AlterEgo server running on port ${port}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});

module.exports = app;