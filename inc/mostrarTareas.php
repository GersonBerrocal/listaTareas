<?php

include_once 'conexion.php';

$obtenerTareas = $mysqli->query("SELECT * FROM TAREAS");
$obtenerTareas->data_seek(0);
$template = "";
while ($fila = $obtenerTareas->fetch_assoc()) {
  global $template;
  $template = $template .
    '<article class="tarea" spellcheck="false" data-tareasid="' . $fila['id'] . '">
           <input type="checkbox" class="tarea-indicador">
          <div class="tarea-contenido">
            <div contenteditable class="tarea-editable">' . $fila['nota'] . '</div>
           </div>
      </article>';
}
echo $template;
