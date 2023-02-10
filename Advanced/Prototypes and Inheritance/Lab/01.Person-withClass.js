class createPerson {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + " " + this.lastName;
    }
    set fullName(name) {
        [this.firstName, this.lastName] = name.split(" ");
    }
}

const person = new createPerson("John", "Smith");
console.log(person.fullName);
person.lastName = 'Peterson';
console.log(person.fullName);
person.fullName = 'Peter Johnson';
console.log(person);
