// --- LÍNEA DE CONFLICTO (Alumno 5 escribe esto) ---
import { sumar, restar, multiplicar, dividir } from './operaciones.js'; 

// Selección de la pantalla y botones del HTML
const pantalla = document.getElementById('result');
const botonesNumeros = document.querySelectorAll('.number');
const btnSuma = document.getElementById('add');
const btnResta = document.getElementById('subtract');
const btnMulti = document.getElementById('multiply');
const btnDivi = document.getElementById('divide');
const btnIgual = document.getElementById('equals');
const btnBorrar = document.getElementById('clear');

// Variables de estado para la calculadora
let valorActual = '';
let valorAnterior = '';
let operacionPendiente = null;

// 1. Lógica para escribir números en la pantalla
botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => {
        valorActual += boton.innerText;
        pantalla.value = valorActual;
    });
});

// 2. Lógica para elegir la operación (El "Menú de selección")
const prepararOperacion = (tipo) => {
    if (valorActual === '') return;
    valorAnterior = valorActual;
    valorActual = '';
    operacionPendiente = tipo;
    pantalla.value = ''; // Limpiamos pantalla para el segundo número
};

btnSuma.addEventListener('click', () => prepararOperacion('sumar'));
btnResta.addEventListener('click', () => prepararOperacion('restar'));
btnMulti.addEventListener('click', () => prepararOperacion('multiplicar'));
btnDivi.addEventListener('click', () => prepararOperacion('dividir'));

// 3. Lógica del botón "=" (Integración final)
btnIgual.addEventListener('click', () => {
    if (!operacionPendiente || valorActual === '' || valorAnterior === '') return;

    const n1 = parseFloat(valorAnterior);
    const n2 = parseFloat(valorActual);
    let resultado = 0;

    // Conexión con las funciones de operaciones.js
    if (operacionPendiente === 'sumar') resultado = sumar(n1, n2);
    if (operacionPendiente === 'restar') resultado = restar(n1, n2);
    if (operacionPendiente === 'multiplicar') resultado = multiplicar(n1, n2);
    if (operacionPendiente === 'dividir') resultado = dividir(n1, n2);

    pantalla.value = resultado;
    valorActual = resultado.toString();
    operacionPendiente = null;
});

// Botón de limpiar (C)
btnBorrar.addEventListener('click', () => {
    valorActual = '';
    valorAnterior = '';
    operacionPendiente = null;
    pantalla.value = '';
});