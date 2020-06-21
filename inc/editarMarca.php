<?php

include_once 'conexion.php';
$tareaMarcarId = $_GET['tareamarcarid'];

if (!($sentencia_editar = $mysqli->prepare('UPDATE TAREAS SET estado=IF((SELECT estado FROM TAREAS WHERE id=?)="0","1","0") WHERE id=?'))) {
  echo "fallo la preparacion";
}
if (!($sentencia_editar->bind_param("ss", $tareaMarcarId, $tareaMarcarId))) {
  echo "fallo la vinculacion";
}
if (!($sentencia_editar->execute())) {
  echo "fallo la ejecucion";
}
echo "Marcado Completada";
