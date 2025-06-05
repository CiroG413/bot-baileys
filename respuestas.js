const respuestasMap = {
  "a": "👋 Bienvenido/a. Elegí un servicio:\n1. Netflix\n2. Disney+\n3. Prime Video",
  "b": "🔁 Para renovar tu cuenta, decinos el número del servicio.",
  "c": "📸 Enviá una captura y tu nombre/apellido para el reclamo.",
  "1": "🎬 Netflix Premium: 17.000 Gs / VIP: 25.000 Gs",
  "2": "📺 Disney+: 15.000 Gs",
  "3": "🎥 Prime Video: 16.000 Gs",
  "forma de pago": "💳 *Formas de Pago:*\n- Titular: Juan Pérez\n- Banco: Itaú\n- N° Cuenta: 000-123456"
};

function obtenerRespuesta(texto) {
  const clave = texto.trim().toLowerCase();
  return respuestasMap[clave] || null;
}

module.exports = { obtenerRespuesta };
