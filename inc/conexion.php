<?php
$servidor = "127.0.0.1";
$usuario = "root";
$password = NULL;

$mysqli = new mysqli($servidor, $usuario, $password, "LISTADETAREAS");

if ($mysqli->connect_errno) {
  echo "hubo error al conectarse con la base de datos";
  die();
}
