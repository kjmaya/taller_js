
function validarEdad() {
    const nombre = document.getElementById("nombre").value;
    const edad = document.getElementById("edad").value;
    if (edad < 18) {
      document.getElementById("mensaje").innerHTML =
        "Hola " + nombre + ", no eres mayor de edad";
    } else if (edad > 115) {
      document.getElementById("mensaje").innerHTML =
        "La edad máxima es 115 años";
    } else {
      document.getElementById("mensaje").innerHTML =
        "Hola " + nombre + ", eres mayor de edad";
    }
  }