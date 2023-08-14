function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var correo = document.getElementById('correo').value;
    var telefono = document.getElementById('telefono').value;
    var contrasena = document.getElementById('contrasena').value;
  
    // Validar los campos según tus criterios de validación
    if (nombre === "" || correo === "" || telefono === "" || contrasena === "") {
      alert("Por favor, complete todos los campos");
      return false;
    }
  
    // Enviar los datos al archivo PHP
    var xhr = new XMLHttpRequest();
    var url = "procesar.php";
    var params = "nombre=" + nombre + "&correo=" + correo + "&telefono=" + telefono + "&contrasena=" + contrasena;
    xhr.open("POST", url, true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        document.getElementById("mensaje").innerHTML = "Te has registrado con éxito";
      }
    };
    xhr.send(params);
  
    return false; // Evitar que el formulario se envíe de forma predeterminada
  }
  