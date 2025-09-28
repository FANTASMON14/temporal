function abrirModal(seccion) {
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

  document.getElementById("modal-texto").innerHTML = contenido;
  document.getElementById("modal").style.display = "block";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

// Cerrar modal si se hace clic fuera
window.onclick = function(event) {
  const modal = document.getElementById("modal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
