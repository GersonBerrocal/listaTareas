
function agregarTarea_env(texto) {
  let metodosEnvio = {
    method: 'GET'
  };
  fetch(`./inc/agregarTarea.php?nuevatarea=${texto}`, metodosEnvio)
    .then(response => response.text())
    .then(respuestados => {
      mostrarTarea_env();
    }
    );
}


function mostrarTarea_env() {
  fetch("./inc/mostrarTareas.php")
    .then(response => response.text())
    .then(respuestados => {
      document.querySelector(".input-agregar-tarea").textContent = "";
      document.querySelector("#lista-tareas").innerHTML =
        respuestados;
    }
    );
}