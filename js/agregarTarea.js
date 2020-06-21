
function añadirEventosTarea(element, evento, funcion) {
  element.addEventListener(evento, funcion);
}

function agregarTarea_env(texto) {
  let metodosEnvio = {
    method: 'GET'
  };
  fetch(`./inc/agregarTarea.php?nuevatarea=${texto}`, metodosEnvio)
    .then(response => response.text())
    .then(respuestados => {
      document.querySelector(".input-agregar-tarea").textContent = "";
      let caja_tar = document.getElementById("lista-tareas")
      caja_tar.insertAdjacentHTML('beforeend', respuestados);
      elmento_ultimo = caja_tar.lastChild;
      element_cajaEdita = elmento_ultimo.querySelector(".tarea-editable");
      añadirEventosTarea(elmento_ultimo.querySelector(".tarea-hamburger"), "click", eliminarTarea);
      añadirEventosTarea(elmento_ultimo.querySelector(".tarea-indicador"), "change", marcarNota);
      añadirEventosTarea(element_cajaEdita, "keypress", validarAgregarTarea);
      añadirEventosTarea(element_cajaEdita, "focus", focusEdition);
      añadirEventosTarea(element_cajaEdita, "paste", validarPegadoEnTarea);
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