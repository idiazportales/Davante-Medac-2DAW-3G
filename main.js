// --- LÍNEA DE CONFLICTO (Alumno 5 escribe esto) ---
import { sumar, restar, multiplicar, dividir } from './operaciones.js'; 

// Selección de elementos de la interfaz (DOM)
const input1 = document.getElementById('n1');
const input2 = document.getElementById('n2');
const displayResultado = document.getElementById('resultado');

// Selección de botones
const btnSumar = document.getElementById('btn-sumar');
const btnRestar = document.getElementById('btn-restar');
const btnMulti = document.getElementById('btn-multi');
const btnDivi = document.getElementById('btn-divi');

// Función auxiliar para obtener los números y mostrar el resultado
const calcular = (operacion) => {
    const n1 = parseFloat(input1.value);
    const n2 = parseFloat(input2.value);
    
    if (isNaN(n1) || isNaN(n2)) {
        displayResultado.innerText = "Error: Introduce números";
        return;
    }
    
    const res = operacion(n1, n2);
    displayResultado.innerText = `Resultado: ${res}`;
};

// --- EVENTOS (Conexión entre botones y funciones) ---

btnSumar.addEventListener('click', () => calcular(sumar));

btnRestar.addEventListener('click', () => calcular(restar));

btnMulti.addEventListener('click', () => calcular(multiplicar));

btnDivi.addEventListener('click', () => {
    // Aquí el Alumno 4 podría haber gestionado un Issue sobre la división por cero
    calcular(dividir);
});