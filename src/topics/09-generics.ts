export function whatsMyType<T>( argument: T ): T {

    return argument;
}

const amIString = whatsMyType<string>('Hola Universo');
const amINumber = whatsMyType<number>(1000);
const amIArray  = whatsMyType<number[]>([1,2,3,4,5]);

console.log( amIString.split(' ') );
console.log( amINumber.toFixed() );
console.log( amIArray.join('-') );
