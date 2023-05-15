export interface Product {
    description: string;
    price: number;
}

/* const phone: Product = {
    description: "Nokia 1100",
    price: 50.0
}

const tablet: Product = {
    description: "Ipad Air",
    price: 500.0
} */

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

//function taxCalculation( options: TaxCalculationOptions ): [number, number] {
//function taxCalculation( { tax, products }: TaxCalculationOptions ): [number, number] {
export function taxCalculation( options: TaxCalculationOptions ): [number, number] {

    const { tax, products } = options;

    let total = 0;

    products.forEach( ({ price }) => {
        total += price;
    });

    return [ total, total * tax ];
}

/*
const shoppingCart = [ phone, tablet ];
const tax = 0.15;

const [ total , totalTax] = taxCalculation({
    products: shoppingCart,
    tax: tax,
});


console.log( 'Total: ', total);
console.log( 'Tax: ', totalTax );
*/

 







export{};
