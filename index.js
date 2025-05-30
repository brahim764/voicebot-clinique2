const express = require("express");
const app = express();
app.use(express.json());

app.post("/voice", (req, res) => {
  console.log("📞 Appel reçu de SignalWire");
  res.setHeader("Content-Type", "application/json");
  res.status(200).json({
    commands: [
      {
        say: {
          text: "Bonjour, ceci est une réponse valide depuis Render.",
          voice: "fr-CA-Wavenet-A"
        }
      }
    ]
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Serveur en ligne sur port ${PORT}`);
});