<?php

include_once 'conexion.php';

$tareaEliminaId = $_GET['tareeliminaid'];

if (!($sentencia_elimina = $mysqli->prepare('DELETE FROM TAREAS WHERE id=?'))) {
  echo "fallo la preparacion";
}
if (!($sentencia_elimina->bind_param("s", $tareaEliminaId))) {
  echo "fallo la vinculacion";
}
if (!($sentencia_elimina->execute())) {
  echo "fallo la ejecucion";
}
echo "Eliminacion Completada";
