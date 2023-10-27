function buscarCoincidencias() {
  const texto = document.getElementById('texto').value;
  const textoABuscar = document.getElementById('textoABuscar').value;
  const textoConCoincidencias = resaltarPalabra(textoABuscar, texto);
  document.getElementById('resultado').innerHTML = textoConCoincidencias;
}

function resaltarPalabra(palabraABuscar, texto) {
  const regex = new RegExp(palabraABuscar, "g");
  const textoResaltado = texto.replace(regex, `<b>${palabraABuscar}</b>`);
  return textoResaltado;
}

