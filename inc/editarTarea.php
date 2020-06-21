<?php
$tareaEditarId = $_GET['tareaeditarid'];
$tareaEditarNota = $_GET['textoEditado'];

include_once 'conexion.php';

if (!($sentencia_editar = $mysqli->prepare("UPDATE TAREAS SET nota=? WHERE id=?"))) {
  echo "fallo la preparacion";
}
if (!($sentencia_editar->bind_param("ss", $tareaEditarNota, $tareaEditarId))) {
  echo "fallo la vinculacion";
}
if (!($sentencia_editar->execute())) {
  echo "fallo la ejecucion";
}
echo "Edicion Completada";
