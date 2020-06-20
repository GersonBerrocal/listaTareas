let limitCaracterTarea = 140;
let inputAgregarTarea = document.querySelector(".input-agregar-tarea");
let cajaEditableTarea = document.getElementsByClassName("tarea-editable");
for (const element_limit of cajaEditableTarea) {
  element_limit.addEventListener("keypress", validarAgregarTarea);
  element_limit.addEventListener("paste", validarPegadoEnTarea);
}
// eventos
inputAgregarTarea.addEventListener("keypress", validarAgregarTarea);
inputAgregarTarea.addEventListener("paste", validarPegadoEnTarea);

// Funciones

function validarAgregarTarea(event) {
  if (inputAgregarTarea_Contador(this)) {
    event.preventDefault();
    lanzarAlertaHtml("Alerta", "solo pueden ir 140 caracteresen una nota");
  }
  if (event.charCode == 13)
    event.preventDefault();
}
function inputAgregarTarea_Contador(elemento) {
  let limita = elemento.textContent.length >= limitCaracterTarea ? true : false;
  return limita;
}

// SOBRE EL PEGADO, PARA QUE NO EXCEDA EL LIMITE DE CARACTERES
// alertas
function lanzarAlertaHtml(titulo = "Alerta", contenido = "Ocurrio algun error.") {
  let padreTotal = document.querySelector(".baner-anuncio");
  let fondoOscuro = document.querySelector(".scrollea-anuncio");
  let anuncioTitulo = fondoOscuro.querySelector(".barra-anuncio-titulo");
  let anuncioContenido = fondoOscuro.querySelector(".contenido-anuncio");
  anuncioTitulo.innerHTML = titulo;
  anuncioContenido.innerHTML = contenido;
  padreTotal.style.display = "block";
  fondoOscuro.addEventListener("click", anuncioClose);
}
function anuncioClose(event) {
  let punto = event.target;
  if (punto.classList.contains("scrollea-anuncio") ||
    punto.classList.contains("anuncio-cerrar")) {
    document.querySelector(".baner-anuncio").style.display = "none";
    document.querySelector(".scrollea-anuncio").removeEventListener("click", anuncioClose);
  }
}

// PARA CUANDO EL USUARIO COPIA Y PEGA ALGO QUE SOBREPASA LOS LIMITES DE LA NOTA
function validarPegadoEnTarea(event) {
  let paste = (event.clipboardData || window.clipboardData).getData('text');
  let valorFinal = this.textContent + paste;
  if (valorFinal.length > limitCaracterTarea) {
    lanzarAlertaHtml("Alerta", "Solo se permiten 140 caracteres, el texto que quiere pegar es demasiado largo,");
    event.preventDefault();
  }
}