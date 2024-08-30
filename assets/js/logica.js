$(document).ready(function () {
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

$("#guestBookForm").submit(function(event) {
  event.preventDefault();
  
  var rut = $("#rut").val();
  if (!validarRUT(rut)) {
      $("#rutError").text("RUT inválido. Por favor, ingrese un RUT válido.");
      $("#rut").addClass("is-invalid");
      return false;
  } else {
      $("#rutError").text(""); // Limpiar mensaje de error
      $("#rut").removeClass("is-invalid").addClass("is-valid");
  }


  var name = $("#name").val();
  var email = $("#email").val();
  var comment = $("#comment").val();

  var newComment = `
      <div class="comment-box bg-light p-3 rounded shadow-sm mb-3">
          <p><strong>Nombre:</strong> ${name}</p>
          <p><strong>R.U.T.:</strong> ${rut}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Comentario:</strong></p>
          <p>${comment}</p>
      </div>
  `;
  
  $("#commentsSection").append(newComment);
  
  $("#guestBookForm")[0].reset();
  $("#guestBookForm .is-valid").removeClass("is-valid");
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
      if (multiplo < 7) {
          multiplo += 1;
      } else {
          multiplo = 2;
      }
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

})
