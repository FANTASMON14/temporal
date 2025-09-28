function abrirVentana(seccion) {
  let contenido = "";

  switch (seccion) {
    case "que-es":
      contenido = "<h2>¿Qué es la contaminación?</h2><p>La contaminación es la presencia de sustancias dañinas en el medio ambiente que afectan la salud y el equilibrio natural.</p>";
      break;
    case "detenerlo":
      contenido = "<h2>¿Cómo podemos detenerlo?</h2><p>Reduciendo plásticos, reciclando, usando energías limpias y educando a la población.</p>";
      break;
    case "cuidados":
      contenido = "<h2>Cuidados para prevenir la contaminación</h2><p>Evitar quemar basura, cuidar el agua, plantar árboles y usar transporte sostenible.</p>";
      break;
    default:
      contenido = "<p>No hay información disponible.</p>";
  }

  // Abrir una ventana emergente segura
  const nuevaVentana = window.open("", "_blank", "width=500,height=400,scrollbars=yes,resizable=yes");
  nuevaVentana.document.open();
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
  nuevaVentana.document.close();
}

