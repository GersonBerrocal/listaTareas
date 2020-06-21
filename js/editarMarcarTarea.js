
function focusEdition() {

  let textoAntes = this.textContent;

  this.addEventListener("blur", function () {
    guardarEdicionTarea(textoAntes, this);
  });
}
function guardarEdicionTarea(textoAnterior, elemento) {
  elemento.removeEventListener("blur", guardarEdicionTarea.caller);
  if (elemento.textContent == textoAnterior) {
  } else {
    // establecer conexion
    let datosid = elemento.parentElement.parentElement.getAttribute("data-tareasid");
    fetch(`./inc/editarTarea.php?textoEditado=${elemento.textContent}&tareaeditarid=${datosid}`, {
      method: 'GET'
    })
      .then(response => response.text())
      .then(respuestados => {
        console.log(respuestados);
      }
      );
  }
}
function marcarNota() {
  tareaID = this.parentElement.getAttribute("data-tareasid");
  fetch(`./inc/editarMarca.php?tareamarcarid=${tareaID}`, {
    method: 'GET'
  })
    .then(response => response.text())
    .then(respuestados => {
      console.log(respuestados);
    }
    );
}

function eliminarTarea() {
  tareaElement = this.parentElement;
  elementoID = tareaElement.getAttribute("data-tareasid");
  fetch(`./inc/eliminarTarea.php?tareeliminaid=${elementoID}`, {
    method: 'GET'
  })
    .then(response => response.text())
    .then(respuestados => {
      // mostrarTarea_env();
      tareaElement.parentElement.removeChild(tareaElement);
      console.log(respuestados);
    }
    );
}