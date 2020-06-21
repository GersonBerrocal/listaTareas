<?php

include_once 'conexion.php';

$nuevaTarea = $_GET['nuevatarea'];

if (!($sentencia = $mysqli->prepare("INSERT INTO TAREAS(nota,estado) VALUES (?,0)"))) {
  echo "Falló la preparación: (" . $mysqli->errno . ") " . $mysqli->error;
}
if (!$sentencia->bind_param("s", $nuevaTarea)) {
  echo "Falló la vinculación de parámetros: (" . $sentencia->errno . ") " . $sentencia->error;
}

if (!$sentencia->execute()) {
  echo "Falló la ejecución: (" . $sentencia->errno . ") " . $sentencia->error;
}


$sentencia_encontrarID = $mysqli->query("SELECT id FROM TAREAS  ORDER BY id DESC LIMIT 1");
$resultado_ID = $sentencia_encontrarID->fetch_row();
$sentencia_encontrarID->close();
$template_agr = '<article class="tarea" spellcheck="false" data-tareasid="'  . $resultado_ID[0] . '">
          <button class="tarea-hamburger"><i class="fa fa-times" aria-hidden="true"></i></button>
           <input type="checkbox" class="tarea-indicador">
          <div class="tarea-contenido">
            <div contenteditable class="tarea-editable">' . $nuevaTarea . '</div>
           </div>
      </article>';
echo $template_agr;
