const nombre = document.querySelector("input[name='nombre']").value;
const materia = document.querySelector("input[name='materia']").value;
const nota1 = parseFloat(document.querySelector("input[name='nota1']").value);
const nota2 = parseFloat(document.querySelector("input[name='nota2']").value);
const nota3 = parseFloat(document.querySelector("input[name='nota3']").value);
const promedio = (nota1 + nota2 + nota3) / 3;
let mensaje;
if (promedio >= 3.0) {
  mensaje = "Felicitaciones, pasaste la materia!";
} else {
  mensaje = "Lo siento, no pasaste la materia.";
}
document.querySelector("h2").textContent = mensaje;
document.querySelector("p").textContent = `Su nota es: ${promedio}`;
