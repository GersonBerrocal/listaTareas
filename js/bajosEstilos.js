let limitCaracterTarea = 140;
let inputAgregarTarea = document.querySelector(".input-agregar-tarea");
let cajaEditableTarea = document.getElementsByClassName("tarea-editable");
let tareaIndicador = document.getElementsByClassName("tarea-indicador");
let indicador = 0;
for (const element_limit of cajaEditableTarea) {
  element_limit.addEventListener("keypress", validarAgregarTarea);
  element_limit.addEventListener("focus", focusEdition);
  element_limit.addEventListener("paste", validarPegadoEnTarea);
  if (tareaIndicador[indicador]) {
    tareaIndicador[indicador].addEventListener("change", marcarNota);
    indicador += 1;
  }
}
// eventos
inputAgregarTarea.addEventListener("keypress", validarAgregarTarea);
inputAgregarTarea.addEventListener("paste", validarPegadoEnTarea);

// Funciones
// funcion para agregar tarea
function validarAgregarTarea(event) {
  if (inputAgregarTarea_Contador(this)) {
    event.preventDefault();
    lanzarAlertaHtml("Alerta", "solo pueden ir 140 caracteres en una tarea");
  }
  if (event.charCode == 13) {
    if (this.className == "input-agregar-tarea") {
      if (this.textContent != "") {
        agregarTarea_env(this.textContent)
      }
    } else {
    }
    event.preventDefault();
  }
}
function inputAgregarTarea_Contador(elemento) {
  let limita = elemento.textContent.length >= limitCaracterTarea ? true : false;
  return limita;
}

// funcion para lanzar una alerta html
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

// funcion cuando el usuario va a pegar texto que sobrepasa el limite
function validarPegadoEnTarea(event) {
  let paste = (event.clipboardData || window.clipboardData).getData('text');
  let valorFinal = this.textContent + paste;
  if (valorFinal.length > limitCaracterTarea) {
    lanzarAlertaHtml("Alerta", "Solo se permiten 140 caracteres, el texto que quiere pegar es demasiado largo,");
    event.preventDefault();
  }
}