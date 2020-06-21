<?php

include_once 'conexion.php';

$obtenerTareas = $mysqli->query("SELECT * FROM TAREAS");
$obtenerTareas->data_seek(0);
$template = "";
while ($fila = $obtenerTareas->fetch_assoc()) {
  global $template;
  $chek = $fila['estado'] == 1 ? "checked" : "";
  $template = $template .
    '<article class="tarea" spellcheck="false" data-tareasid="' . $fila['id'] . '">
          <button class="tarea-hamburger"><i class="fa fa-times" aria-hidden="true"></i></button>
           <input type="checkbox" ' . $chek . ' class="tarea-indicador">
          <div class="tarea-contenido">
            <div contenteditable class="tarea-editable">' . $fila['nota'] . '</div>
           </div>
      </article>';
}
echo $template;
