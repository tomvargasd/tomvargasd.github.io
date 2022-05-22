---
title: Llenar una tabla con php
description: Desde la base de datos a tu página web con php
date: 2020-05-22
draft: false
slug: /pensieve/llenar-una-tabla-con-php
tags:
  - tutorial
  - PHP
---

# 1. Obteniendo los registros de tu base de datos con PHP
 <img alt="opciones de depuración usb" src="preview.png" >
 <br>
Lo primero es establecer una conexión con la base de datos, para ello se puede crear una conexión cada vez que se vaya a utilizar, pero una forma más práctica de hacerlo es crear un archivo creando esta conexión.

Para crear el archivo de conexión o la sentencia para establecerla basta con escribir este código utilizando tus propios datos.

#### conexion.php
```php
<?php 
	$servername = 'localhost'; // tu host
	$username = 'root'; // tu usuario
	$password = ''; // tu contraseña
	$database = 'db-name'; // tu base de datos
	
	// crea la conexión
	$conn= mysqli_connect($servername, $username, $password, $database);
	// Solo si falla la conexión muestra el error con la causa
	if (!$conn){
		die("Conexion fallida: ".mysqli_connect_error());
	}
?>
```

Puedes crear este archivo y llamarlo por ejemplo `conexion.php`, luego en la página donde vas a incluir tu tabla vas a llamar esta conexión a la base de datos con: `require 'database.php';`

Luego de eso, para obtener los datos debes tener en mente tu consulta *SQL*, la cual debe ser de tipo *SELECT*, es decir que te vaya a devolver datos.

#### index.php
```php
$id = 1; // un dato quemado que uso para ejemplo (simula un ID de un registro)
$sql = "SELECT USR_ID , USR_NOMBRE, USR_PASS, USR_TIPO FROM usuario WHERE USR_ID  = $id";
$values=mysqli_query($conn, $sql);
$ROW = mysqli_fetch_array($values);
```

Cuando ya tenemos la consulta solo basta con crear una variable, en esta caso `$values` y usar el método `mysqli_query` para ejecutar una consulta, como se observa se le adjunta la conexión `$conn` y la consulta `$sql` Para finalizar se crea la variable `$ROW` y obtenemos un array con los valores obtenidos.

Entonces, cada fila va a representar un registro con todos los datos, entonces ya tendríamos nuestros datos almacenados en la variable `$ROW` 

---

# 2. Insertando datos en PHP

## Tablas

Para insertar datos en una tabla basta con tener un array, en este caso usamos la que obtuvimos de la base de datos, suponiendo que obtenemos registros de la consulta ejecutada, nuestro array de datos va a estar lleno, es decir si la consulta SQL nos da 3 registros, nuestro array va a tener 3 filas con n columnas (numero de columnas en la tabla) entonces solo nos queda mostrar esos datos en nuestra página.

Para ello debemos escribir fuera de la etiqueta `<?php ?>` la estructura de la tabla de esta manera:

```html
<table>            
  <tr>
    <th>Id</th>
    <th>Nombre</th>
    <th>Contraseña</th>
    <th>Tipo</th>
  </tr>
	<!-- Contenido de php -->
</table>
```

una vez escrita la estructura de la tabla lo que haremos es abrir una etiqueta `<?php ?>` antes de cerrar la etiqueta `table` y creamos un bucle `while` para correr mientras nuestro array contenga datos, para ello vamos a volver con nuestra variable `$values` que está antes de crear nuestro array `$ROW` pero lo que haremos es instanciarlo en el bucle de esta manera:

#### index.php
```php
<table>            
  <tr>
    <th>Id</th>
    <th>Nombre</th>
    <th>Contraseña</th>
    <th>Tipo</th>
  </tr>
  <?php 
    while ($ROW = mysqli_fetch_array($values)){
      // dentro de las comillas se escribe el mismo nombre de la columna de la BD
      $Id = $ROW['USR_ID'];
      $Nombre = $ROW['USR_NOMBRE'];
      $Contrasenia = $ROW['USR_PASS'];
      $Tipo = $ROW['USR_TIPO'];
			
      // Imprimir en cada iteración del bucle la fila de datos correspondiente
      echo "<tr>";
      echo "<th>$Id</th>";
      echo "<th>$Nombre</th>";
      echo "<th>$Contrasenia</th>";
      echo "<th>$Tipo</th>";                     
      echo "</tr>";
    }
  ?>
</table>
```

Si nuestra consulta devuelve por ejemplo 10 registros, nuestra página al cargar imprimirá 10 filas en la tabla.

<br><hr>

<span style="color:#93ddfb">@author </span>Tomás Vargas

> Si te gustó este contenido no dudes en seguirme en mis redes sociales, puedes instalar mi página como si de una app se tratase y estar al día de las nuevas publicaciones ☝️