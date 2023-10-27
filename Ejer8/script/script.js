document.addEventListener("DOMContentLoaded", function() {
    const identifyButton = document.getElementById("identifyButton");

    identifyButton.addEventListener("click", function() {
        const input = document.getElementById("numbers").value;
        const numbers = input.split(',').map(Number);

        const outputDiv = document.getElementById("output");
        outputDiv.innerHTML = "";

        for (const number of numbers) {
            if (!isNaN(number) && Number.isInteger(number)) {
                if (number % 2 === 0) {
                    outputDiv.innerHTML += `<p>${number} es número par</p>`;
                } else {
                    outputDiv.innerHTML += `<p>${number} es número impar</p>`;
                }
            } else {
                outputDiv.innerHTML += `<p>${number} no es un número entero</p>`;
            }
        }
    });
});
