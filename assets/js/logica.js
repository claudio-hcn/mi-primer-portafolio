document.addEventListener('DOMContentLoaded', function () {
  var nombre = prompt("Bienvenido a mi página, cuál es tu nombre?");
  cosa = "tu nombre";
  nombre=validarNombre(nombre, cosa);
  nombre = prompt(
    "Hola " +
      nombre +
      ":\n Estás en mi página web, lamentablemente debo verificar \nque seas un ñoño del bootcamp de talento digital \nde lo contrario serás redireccionado a otra página\n\n DEBES ESCRIBIR EL NOMBRE DE UNA DE LAS PROFES DEL CURSO (SOLO EL NOMBRE)"
  );
  cosa="un nombre de una de las profes del curso";
  nombre=validarNombre(nombre, cosa);
  nombre = nombre.toUpperCase();
  console.log(nombre);
  if (nombre == "ELENA" || nombre == "IREMAR" || nombre == "ELENA " || nombre == "IREMAR ") {
    alert("ahora si, bienvenido a mi sitio");
  } else {
    alert("largo de aquí");
    location.href = "http://www.savewalterwhite.com/";
  }

  function validarNombre(nombre, cosa) {
    while (nombre == "" || nombre == null) {
        nombre = prompt("Por favor, ingresa "+ cosa);
      }
      return nombre;
  }

  document.getElementById('guestBookForm').addEventListener('submit', function(event) {
    // Evitar el comportamiento por defecto del formulario
    event.preventDefault();
    
    var rut = document.getElementById('rut').value;
    if (!validarRUT(rut)) {
      document.getElementById('rutError').textContent = "RUT inválido. Por favor, ingrese un RUT válido.";
      document.getElementById('rut').classList.add('is-invalid');
      return false; // Detener el proceso si el RUT es inválido
    } else {
      document.getElementById('rutError').textContent = ""; // Limpiar mensaje de error
      document.getElementById('rut').classList.remove('is-invalid');
      document.getElementById('rut').classList.add('is-valid');
    }

    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var comment = document.getElementById('comment').value;

    var newComment = `
      <div class="comment-box bg-light p-3 rounded shadow-sm mb-3">
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>RUT:</strong> ${rut}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Comentario:</strong></p>
        <p>${comment}</p>
      </div>
    `;

    document.getElementById('commentsSection').innerHTML += newComment;

    // Limpiar el formulario después de agregar el comentario
    document.getElementById('guestBookForm').reset();
    document.querySelectorAll('#guestBookForm .is-valid').forEach(function(el) {
      el.classList.remove('is-valid');
    });

    // Mostrar el mensaje de confirmación
    confirmSubmission();
  });

  function validarRUT(rut) {
    // Eliminar puntos y guion
    rut = rut.replace(/\./g, '').replace(/-/g, '');
    
    // Extraer cuerpo y dígito verificador
    var cuerpo = rut.slice(0, -1);
    var dv = rut.slice(-1).toUpperCase();
    
    // Validar largo mínimo
    if (cuerpo.length < 7) { return false; }
    
    // Calcular dígito verificador
    var suma = 0;
    var multiplo = 2;
    for (var i = 1; i <= cuerpo.length; i++) {
      var index = multiplo * rut.charAt(cuerpo.length - i);
      suma += index;
      multiplo = multiplo < 7 ? multiplo + 1 : 2;
    }
    var dvEsperado = 11 - (suma % 11);
    dvEsperado = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();
    
    // Validar que el dígito verificador coincida
    return dv === dvEsperado;
  }

  function confirmSubmission() {
    alert('Formulario enviado.');
    console.log('Formulario enviado.');
  }
});

