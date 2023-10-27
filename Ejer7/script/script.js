class DivisibilidadChecker {
    constructor() {
        this.init();
    }

    init() {
        const verificarBtn = document.getElementById("verificarBtn");
        verificarBtn.addEventListener("click", () => this.verificarDivisibilidad());
    }

    verificarDivisibilidad() {
        const num1 = parseInt(document.getElementById("num1").value);
        const num2 = parseInt(document.getElementById("num2").value);
        const resultadoElement = document.getElementById("resultado");

        if (isNaN(num1) || isNaN(num2)) {
            resultadoElement.textContent = "Por favor, ingrese números enteros.";
        } else if (num1 <= 0 || num2 <= 0) {
            resultadoElement.textContent = "Los números deben ser enteros positivos.";
        } else {
            if (num1 % num2 === 0) {
                resultadoElement.textContent = `El número ${num1} es divisible entre el número ${num2}.`;
            } else {
                resultadoElement.textContent = `El número ${num1} no es divisible entre el número ${num2}.`;
            }
        }
    }
}

const divisibilidadChecker = new DivisibilidadChecker();
