import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const primaryPort = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

// Health check endpoint for Cloud Run container probes
app.get('/healthz', (req, res) => {
  res.status(200).send('OK');
});

// Serve static assets from Vite dist build
app.use(express.static(path.join(__dirname, 'dist')));

// Fallback to index.html for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const server = app.listen(primaryPort, '0.0.0.0', () => {
  console.log(`Application running on http://0.0.0.0:${primaryPort}`);
});

server.on('error', (err) => {
  if (err.code === 'EADDRINUSE' && primaryPort !== 3000) {
    console.warn(`Port ${primaryPort} is in use; falling back to port 3000...`);
    app.listen(3000, '0.0.0.0', () => {
      console.log(`Application running on http://0.0.0.0:3000`);
    });
  } else {
    console.error('Server error:', err);
    process.exit(1);
  }
});
