/*
Build a simple expense tracker application to manage your finances. The application should allow users to add, delete, and view their expenses. The application should also provide a summary of the expenses.

Requirements
Application should run from the command line and should have the following features:

Users can add an expense with a description and amount.
Users can update an expense.
Users can delete an expense.
Users can view all expenses.
Users can view a summary of all expenses.
Users can view a summary of expenses for a specific month (of current year).
Here are some additional features that you can add to the application:

Add expense categories and allow users to filter expenses by category.
Allow users to set a budget for each month and show a warning when the user exceeds the budget.
Allow users to export expenses to a CSV file. 
*/

import finances from './finances.json' assert { type: 'json' }
import Add from './manage/add.js'
import eliminate from './manage/delete.js'
import View from './manage/view.js'
import readline  from 'readline'
import askQuestion from "./manage/question.js"

import rl from './manage/rl.js'
import update from './manage/update.js'




async function main() {

    console.log("-------------------- Bienvenido a tu gestor de finanzas ----------------------");

    let respuesta = '0';

    do {
        console.log("Ingresa una opción: ");
        console.log("1. Añadir compra");
        console.log("2. Eliminar compra");
        console.log("3. Actualizar compra");
        console.log("4. Ver compras");
        console.log("0. Salir");

        respuesta = await askQuestion("Selecciona una opción: ");

        switch (respuesta) {
            case '1':
                await Add();
                break;
            case '2':
                await eliminate();
                break;
            case '3':
                await update()
                
                break;
            case '4':
                await View()
                break;
            case '0':
                console.log("--------------------------GRACIAS POR USAR NUESTRO PROGRAMA------------------------------------");
                console.log("Saliendo...");
                break;
            default:
                console.log("Opción incorrecta. Por favor, elige una opción válida.");
                break;
        }
    } while (respuesta !== '0');

    rl.close();
}

main();
