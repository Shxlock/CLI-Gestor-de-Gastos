import finances from '../finances.json' assert { type: 'json' }

export default async function View() {
    finances.forEach(product => {
        console.log(`
            ---------------------------------------

            Descripcion: ${product.description}
            Total:       ${product.amount}
            
            ---------------------------------------
            `
        );
        
    });
}