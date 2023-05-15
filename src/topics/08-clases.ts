export class Person {
    // public name: string;
    // public address: string;

    constructor ( 
        public firstName: string, 
        public lastName: string, 
        private address: string = 'No Address'
    ) {}
}

/* export class Hero extends Person {

    constructor(
        public alterEgo: string,
        public age: number, 
        public realName: string,
    ) {------**************************
        super( realName, 'New York' );
    }

} */

export class Hero {

    // public person: Person;

    constructor(
        public alterEgo: string,
        public age: number, 
        public realName: string,
        public person: Person,
    ) {
        
        // this.person = new Person(realName);

    }

}

 
const peter = new Person('Peter', 'Parker', 'New York');
// const spiderman = new Hero('SpiderMan', 22, peter.firstName + ' ' +  peter.lastName, peter);
const spiderman = new Hero('SpiderMan', 22, `${peter.firstName} ${peter.lastName}`, peter);


console.log(spiderman);
console.log(spiderman.realName);