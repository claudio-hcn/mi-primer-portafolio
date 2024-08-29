// $(document).ready(function () {
//   var nombre = prompt("Bienvenido a mi página, cuál es tu nombre?");
//   cosa = "tu nombre";
//   nombre=validarNombre(nombre, cosa);
//   nombre = prompt(
//     "Hola " +
//       nombre +
//       ":\n Estás en mi página web, lamentablemente debo verificar \nque seas un ñoño del bootcamp de talento digital \nde lo contrario serás redireccionado a otra página\n\n DEBES ESCRIBIR EL NOMBRE DE UNA DE LAS PROFES DEL CURSO (SOLO EL NOMBRE)"
//   );
//   cosa="un nombre de una de las profes del curso";
//   nombre=validarNombre(nombre, cosa);
//   nombre = nombre.toUpperCase();
//   console.log(nombre);
//   if (nombre == "ELENA" || nombre == "IREMAR") {
//     alert("ahora si, bienvenido a mi sitio");
//   } else {
//     alert("largo de aquí");
//     location.href = "http://www.savewalterwhite.com/";
//   }

//   function validarNombre(nombre, cosa) {
//     while (nombre == "" || nombre == null) {
//         nombre = prompt("Por favor, introduce "+ cosa);
//       }
//       return nombre;
//   }
// });
