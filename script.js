
function abrirVentana(seccion) {
  let contenido = "";

  switch (seccion) {
    case "que-es":
      contenido = "<h2>¿Qué es la contaminación?</h2><p>Aquí puedes añadir información sobre qué significa la contaminación.</p>";
      break;
    case "detenerlo":
      contenido = "<h2>¿Cómo podemos detenerlo?</h2><p>Aquí puedes añadir estrategias para frenar la contaminación.</p>";
      break;
    case "cuidados":
      contenido = "<h2>Cuidados para prevenir la contaminación</h2><p>Aquí puedes añadir consejos prácticos para prevenirla.</p>";
      break;
    default:
      contenido = "<p>No hay información disponible.</p>";
  }

  // Abrir ventana emergente
  const nuevaVentana = window.open("", "ventanaInfo", "width=500,height=400,scrollbars=yes");
  nuevaVentana.document.write(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>${seccion}</title>
      <style>
        body { font-family: Arial, sans-serif; padding: 20px; line-height: 1.6; }
        h2 { color: #1565c0; }
      </style>
    </head>
    <body>
      ${contenido}
    </body>
    </html>
  `);
}
