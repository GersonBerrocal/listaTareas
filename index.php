<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lista de tareas</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
  <link rel="stylesheet" href="css/estilos.css">
  <link rel="stylesheet" href="css/anuncio.css">
</head>

<body>
  <div class="contenedor">
    <div class="nav">
      <div class="nav-tab">
        <i class="fa fa-sun-o" aria-hidden="true"></i>
      </div>
      <div class="nav-tab">
        <i class="fa fa-moon-o" aria-hidden="true"></i>
      </div>
    </div>
    <div class="cuerpo-tareas">
      <header class="section-titulo">
        <h1 class="titulo-principal">Lista de tareas</h1>
      </header>
      <section>
        <div class="agregar-tarea">
          <div contenteditable spellcheck="false" class="input-agregar-tarea"></div>
        </div>
      </section>
      <section id="lista-tareas">
        <?php
        include_once 'inc/mostrarTareas.php';
        ?>
      </section>
    </div>
  </div>
  <div class="baner-anuncio">
    <div class="scrollea-anuncio algo">
      <div class="anuncio">
        <div class="alerta-grid">
          <div class="barra-anuncio">
            <span class="barra-anuncio-titulo"></span><span><i class="fa fa-times anuncio-cerrar" aria-hidden="true"></i></span>
          </div>
          <div class="contenido-anuncio">
          </div>
          <div class="barra-anuncio"></div>
        </div>
      </div>
    </div>
  </div>
  <script src="js/agregarTarea.js"></script>
  <script src="js/editarMarcarTarea.js"></script>
  <script src="js/bajosEstilos.js"></script>
  <script>

  </script>
</body>

</html>