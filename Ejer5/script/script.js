function esPar(numero) {
    if (numero < 0 || !Number.isInteger(numero)) {
      return false;
    }
    return numero % 2 === 0;
  }
  
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const inputNumero = document.querySelector('input[name="numero"]');
    const resultadoElement = document.getElementById('resultado');
    const numero = parseInt(inputNumero.value);
  
    if (esPar(numero)) {
      resultadoElement.textContent = "El número es par";
    } else {
      resultadoElement.textContent = "El número es impar";
    }
  });
  