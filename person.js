class Person {
    static count = 0;

    constructor() {
        this._firstName = 'Please provide your first name';
        this._lastName = 'Please provide your last name';
        this._age = 0;
        Person.count += 1;
        this._id = Person.count;
    }

    set firstName(value) {
        this._firstName = value;
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        this._lastName = value;
    }

    get lastName() {
        return this._lastName;
    }

    set age(value) {
        this._age = value;
    }

    get age() {
        return this._age;
    }

    display() {
        console.log(`
        =====Person ID: ${this._id}=====
        First name: ${this._firstName}
        Last name: ${this._lastName}
        Age: ${this._age}
        =========================
        `);
    }
}
export {
    Person 
} 

const person1 = new Person();
person1.firstName = 'Anathi';
person1.lastName = 'Josefu';
person1.age = 25;
person1.display();

const person2 = new Person();
person2.firstName = 'Shawn ';
person2.lastName = 'Louw';
person2.age = 25;
person2.display();




