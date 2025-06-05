const { default: makeWASocket, useMultiFileAuthState } = require('@whiskeysockets/baileys');
const express = require('express');
const qrcode = require('qrcode-terminal');
const respuestas = require('./respuestas');
const app = express();

const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => res.send('Bot activo 🚀'));
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));

async function iniciarBot() {
  const { state, saveCreds } = await useMultiFileAuthState('auth');

  const sock = makeWASocket({
    auth: state,
    printQRInTerminal: true,
  });

  sock.ev.on('creds.update', saveCreds);
  sock.ev.on('messages.upsert', async ({ messages }) => {
    const msg = messages[0];
    if (!msg.message || msg.key.fromMe) return;
    const texto = msg.message?.conversation?.toLowerCase() || '';
    const respuesta = respuestas.obtenerRespuesta(texto);
    if (respuesta) await sock.sendMessage(msg.key.remoteJid, { text: respuesta });
  });
}

iniciarBot();
