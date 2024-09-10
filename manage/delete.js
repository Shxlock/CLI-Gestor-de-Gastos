import askQuestion from "./question.js";
import finances from '../finances.json' assert { type: 'json' };
import rl from './rl.js'

import view from './view.js'


export default async function eliminate() {
    view()
    let id
    do{
        id = await askQuestion(`Ingresa un número entre el 0 y el ${finances.length}: `)        
        if (isNaN(id) || id <= 0 || id > finances.length) {
            console.log("Ingresa un número correcto dentro del rango.");
        }
    }while(isNaN(id) || id <= 0)
    let index = id - 1;

    
    if (index >= 0 && index < finances.length) {
        finances.splice(index, 1);
        console.log(`Elemento en la posición ${id} eliminado correctamente.`);
    } else {
        console.log("El índice no es válido.");
    }
    
  
}