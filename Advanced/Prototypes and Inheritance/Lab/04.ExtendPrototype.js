function Person(name, age) {
    this.name = name;
    this.age = age;
}
Person.prototype.sayHello = function () {
    console.log(`${this.name} says Hello!`);
};

Person.prototype.toString = function () {
    return `${this.name} is a ${this.age} years old person`;
};
function extend(personConstructor) {
    personConstructor.prototype.species = "Human";
    personConstructor.prototype.toSpeciesString = function () {
        return `I am ${
            this.species
        }. ${personConstructor.prototype.toString()}`;
    };
}
const person = new Person("Peter", 37);
console.log(person);
extend(Person);
