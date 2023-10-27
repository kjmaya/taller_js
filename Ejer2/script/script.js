
function verificar_tipo_dato(valor) {
    valor = valor.trim();
    if (/[a-zA-Z]+/.test(valor) && !/[0-9]+/.test(valor)) {
        return "texto";
    }
    if (!/[a-zA-Z]+/.test(valor) && /[0-9]+/.test(valor)) {
        return "número";
    }
    return "El campo esta vacio";
}
const campo_texto = document.querySelector("#valor");
campo_texto.addEventListener("keyup", function () {
    const valor = campo_texto.value;
    const tipo_dato = verificar_tipo_dato(valor);
    const mensaje = document.querySelector("#mensaje");
    mensaje.innerHTML = `El valor ingresado es de tipo <strong>${tipo_dato}</strong>`;
});
