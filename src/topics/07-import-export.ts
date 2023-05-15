import { Product, taxCalculation } from './06-functions-destructuring';


const shoppingCart: Product[] = [
    {
        description: "Nokia 1100",
        price: 50.0
    },
    {
        description: "Ipad Ktronixs",
        price: 300.0
    }
];

//Tax = 0.15
const [ total , totalTax] = taxCalculation({
    products: shoppingCart,
    tax: 0.15,
});


console.log( 'Total: ', total);
console.log( 'Tax: ', totalTax );
