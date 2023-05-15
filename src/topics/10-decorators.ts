function classDecorator<T extends { new (...args:any[]): {} }>(
    constructor: T
) {
    return class extends constructor {
        newProperty = 'Propiedad de Decorador';
        hello = 'Hola desde Decorador';
    }
}



@classDecorator
export class SuperClass {


    public myProperty: string = 'Propiedad de SuperClass';

    print() {
        console.log('Hola desde SuperClass')
    }
}


console.log( SuperClass );

const myClass = new SuperClass();
console.log( myClass );
console.log( myClass.print() );
