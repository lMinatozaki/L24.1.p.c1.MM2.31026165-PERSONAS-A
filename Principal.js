/**
 * PERSONAS-A
 * Sea el nombre y el sexo de varias personas (F-M). Se necesita un programa que lea estos datos y reporte al final: el porcentaje de mujeres procesadas y si hay más hombres, más mujeres o ambos por igual.
Se tienen las siguientes personas: Luisa, Ana, José, Carmen, Rosa, José, María, Luz, Rafael, Liz, Marcos y Leo; la salida requerida presenta el siguiente formato:
''' Porcentaje de mujeres procesadas: 58.33%
Hay más mujeres '''
 */

import CL_Persona from "./CL_Persona.js";

let salida = document.getElementById("salida");
let persona = new CL_Persona();

let persona1 = new CL_Persona("Luisa", "F");
let persona2 = new CL_Persona("Ana", "F");
let persona3 = new CL_Persona("José", "H");
let persona4 = new CL_Persona("Carmen", "F");
let persona5 = new CL_Persona("Rosa", "F");
let persona6 = new CL_Persona("José", "H");
let persona7 = new CL_Persona("María", "F");
let persona8 = new CL_Persona("Luz", "F");
let persona9 = new CL_Persona("Rafael", "H");
let persona10 = new CL_Persona("Liz", "F");
let persona11 = new CL_Persona("Marcos", "H");
let persona12 = new CL_Persona("Leo", "H");

persona.procesarPersona(persona1);
persona.procesarPersona(persona2);
persona.procesarPersona(persona3);
persona.procesarPersona(persona4);
persona.procesarPersona(persona5);
persona.procesarPersona(persona6);
persona.procesarPersona(persona7);
persona.procesarPersona(persona8);
persona.procesarPersona(persona9);
persona.procesarPersona(persona10);
persona.procesarPersona(persona11);
persona.procesarPersona(persona12);

salida.innerHTML = `
Porcentaje de mujeres procesadas: ${persona.calcularPorcentajeMujeres().toFixed(2)}%
<br>
${persona.compararCantidad()}
`;