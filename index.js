const express = require('express');
const app = express();
app.use(express.json());

app.post('/voice', (req, res) => {
  console.log('📞 Appel reçu de SignalWire');
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    commands: [
      {
        say: {
          text: "Bonjour, bienvenue à la Clinique Lumière. Merci d’avoir appelé.",
          voice: "fr-CA-Wavenet-A"
        }
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
});


