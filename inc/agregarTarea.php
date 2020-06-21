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

echo "consultacorrecta";
