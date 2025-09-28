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

function abrirModalAutor(autor) {
  let contenido = "";

  switch (autor) {
    case "autor1":
      contenido = `
        <h2>Melani Vanessa Villacuti M.</h2>
        <br>
        <p>Nacio el 16 de abril de 2008</p>
        <p>La Paz - Murillo</p>
        <p>17 Añoz de edad</p>
        <br>
        <div class="autor" onclick="abrirModalAutor('autor1')">
            <img src="Autor1.jpg" alt="Autor 1">
        </div>
      `;
      break;
    case "autor2":
      contenido = `
        <h2>Andrea Monica Alarcon Ch.</h2>
        <br>
        <p>Nacio el 27 de marzo de 2008</p>
        <p>La Paz - Murillo</p>
        <p>17 Añoz de edad</p>
        <br>
        <div class="autor" onclick="abrirModalAutor('autor2')">
            <img src="Autor2.jpg" alt="Autor 2">
        </div>
      `;
      break;
    default:
      contenido = "<p>No hay información disponible.</p>";
  }

  document.getElementById("modal-texto").innerHTML = contenido;
  document.getElementById("modal").style.display = "block";
}
