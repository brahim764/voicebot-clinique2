const express = require('express');
const app = express();
app.use(express.json());

app.post('/voice', (req, res) => {
  console.log("✅ Appel reçu de SignalWire");
  res.json({
    commands: [
      {
        say: {
          text: "Bonjour, bienvenue à la Clinique Lumière. Merci d’avoir appelé."
        }
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur démarré sur le port ${PORT}`);
});

