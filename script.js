function abrirModal(seccion) {
  let contenido = "";

  switch (seccion) {
    case "que-es":
      contenido = `
        <h2>¿Qué es la contaminación?</h2>
        <p>
          La <strong>contaminación</strong> es la presencia o acumulación de sustancias dañinas en el 
          medio ambiente que alteran su equilibrio natural. 
          Puede afectar al aire, el agua, el suelo y la salud de los seres vivos.
        </p>
        <p>
          Existen diferentes tipos de contaminación:
        </p>
        <ul>
          <li><b>Contaminación del aire:</b> gases tóxicos, humo de fábricas, automóviles.</li>
          <img src="ContaminacionAire.jpeg" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
          <li><b>Contaminación del agua:</b> desechos industriales, plásticos y químicos en ríos y mares.</li>
          <img src="ContaminacionAgua.jpg" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
          <li><b>Contaminación del suelo:</b> uso excesivo de pesticidas, basura y residuos sólidos.</li>
          <img src="ContaminacionDelSuelo.jpg" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
          <li><b>Contaminación sonora:</b> ruidos excesivos que afectan la salud y bienestar.</li>
          <img src="ContaminacionSonora.jpg" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
        </ul>
      `;
      break;

    case "detenerlo":
      contenido = `
        <h2>¿Cómo podemos detenerlo?</h2>
        <p>
          Para frenar la contaminación es necesario un compromiso conjunto entre ciudadanos, empresas 
          y gobiernos. Algunas acciones claves son:
        </p>
        <ul>
          <li>Reducir, reutilizar y reciclar materiales.</li>
          <img src="Reciclaje1.jpeg" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
          <li>Usar energías limpias como solar o eólica.</li>
          <img src="Reciclaje2.jpeg" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
          <li>Disminuir el consumo de plásticos de un solo uso.</li>
          <img src="Reciclaje3.png" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
          <li>Fomentar el uso de transporte público, bicicletas o autos eléctricos.</li>
          <img src="Reciclaje4.jpeg" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
          <li>Implementar leyes ambientales más estrictas contra las industrias contaminantes.</li>
          <img src="Reciclaje5.jpeg" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
        </ul>
        <p>
          Con pequeños cambios diarios, se logra un gran impacto positivo en el medio ambiente.
        </p>
      `;
      break;

    case "cuidados":
      contenido = `
        <h2>Cuidados para prevenir la contaminación</h2>
        <p>
          La prevención comienza con los <strong>hábitos cotidianos</strong> de cada persona. 
          Algunos cuidados importantes son:
        </p>
        <ul>
          <li>No arrojar basura en la calle, ríos o mares.</li>
          <img src="Cuidado1.webp" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
          <li>Ahorra energía apagando luces y aparatos que no uses.</li>
          <img src="Cuidado2.jpeg" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
          <li>Utiliza focos de bajo consumo o LED.</li>
          <img src="Cuidado3.jpg" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
          <li>Cuidar el agua cerrando la llave al cepillarse o lavar.</li>
          <img src="Cuidado4.jpeg" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
          <li>Plantar árboles y cuidar las áreas verdes.</li>
          <img src="Cuidado5.jpg" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
          <li>Evitar quemar basura y reducir el uso de químicos tóxicos en el hogar.</li>
          <img src="Cuidado6.jpeg" alt="Contaminación" style="width:100%; height:auto; margin: 10px 0;">
        </ul>
        <p>
          Estos cuidados simples ayudan a proteger nuestra salud y la del planeta para las 
          futuras generaciones.
        </p>
      `;
      break;

    default:
      contenido = "<p>No hay información disponible.</p>";
  }

  document.getElementById("modal-texto").innerHTML = contenido;
  document.getElementById("modal").style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}

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
        <p>Nació el 16 de abril de 2008</p>
        <p>La Paz - Murillo</p>
        <p>17 años de edad</p>
        <p>63219040</p>
        <br>
        <div class="autor">
            <img src="Autor1.jpg" alt="Autor 1">
        </div>
      `;
      break;
    case "autor2":
      contenido = `
        <h2>Andrea Monica Alarcon Ch.</h2>
        <br>
        <p>Nació el 27 de marzo de 2008</p>
        <p>La Paz - Murillo</p>
        <p>17 años de edad</p>
        <p>77543336</p>
        <br>
        <div class="autor">
            <img src="Autor2.jpg" alt="Autor 2">
        </div>
      `;
      break;
    default:
      contenido = "<p>Error: autor no encontrado</p>";
  }

  document.getElementById("modal-texto").innerHTML = contenido;
  document.getElementById("modal").style.display = "flex";
}
