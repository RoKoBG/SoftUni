class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString() {
        return Array.from(Person);
    }
}
const person1 = new Person("Anna", "Simpson", 22, "anna@yahoo.com");
console.log(typeof person1);