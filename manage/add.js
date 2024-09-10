import askQuestion from "./question.js";
import finances from '../finances.json' assert { type: 'json' };
import rl from './rl.js'

export default async function add() {
    let description
    let amount
    do{
        description = await askQuestion("Ingresa la descripcion de la compra: ")
        amount = await askQuestion("Ingresa el total de la compra: ")        
        if (description != "" && isNaN(amount) || amount <= 0) {
            console.log("Debe haber una descripcion y la cantidad debe ser positiva");
        }
    }while(description != "" && isNaN(amount) || amount <= 0)
    console.log(`Descripcion: ${description}`);
    console.log(`amount: ${amount}`);
    const purchase = {
        description: description,
        amount: amount
    }
    finances.push(purchase);
    console.log("Tarea creada exitosamente:");
}