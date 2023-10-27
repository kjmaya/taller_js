const inputText = document.getElementById('inputText');
const countButton = document.getElementById('countButton');
const characterCount = document.getElementById('characterCount');

countButton.addEventListener('click', () => {
  const text = inputText.value;
  const characterCountValue = text.length;
  characterCount.textContent = `Cantidad de caracteres: ${characterCountValue}`;
});
