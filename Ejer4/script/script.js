document.addEventListener("DOMContentLoaded", function() {
  const calcularButton = document.getElementById("calcular");
  calcularButton.addEventListener("click", function() {
      calcularPromedio();
  });
});

function calcularPromedio() {
  const materia = document.getElementById('materia').value;
  const nota1 = parseFloat(document.getElementById('nota1').value);
  const nota2 = parseFloat(document.getElementById('nota2').value);
  const nota3 = parseFloat(document.getElementById('nota3').value);

  const promedio = (nota1 + nota2 + nota3) / 3;

  const resultadoElement = document.getElementById('resultado');
  resultadoElement.innerHTML = `${materia} <br> su nota es ${promedio.toFixed(2)}.`;

  if (promedio >= 3.0) {
      resultadoElement.innerHTML += ` <br> Felicitaciones pasaste la materia ${materia}.`;
  } else {
      resultadoElement.innerHTML += ` Lo siento, no pasaste la materia ${materia}.`;
  }
}
