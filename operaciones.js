// Añade export a las funciones que faltan
export function multiplicar(a, b) {
    return a * b;
}

export function sumar(a, b) {
  return a + b;
}

export function restar(a, b) {
    return a - b;
}

export function dividir(a, b) {
    if (b === 0) {
        return "Error: División por cero";
    }
    return a / b;
}