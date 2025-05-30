# Voicebot Clinique - Starter
Ce dépôt est un point de départ fonctionnel pour connecter SignalWire à Render.

## Déploiement
1. Clonez ce repo
2. Connectez-le à Render (Web Service, Node)
3. Définissez le Start Command: `npm start`
4. Définissez le Build Command: `npm install`
5. Assurez-vous que la route `/voice` soit accessible

## Test
Utilisez Postman ou appelez le numéro SignalWire avec le SWML suivant :
```
---
version: "1.0.0"
sections:
  main:
    - redirect:
        action: https://<ton-app>.onrender.com/voice
        method: POST
```