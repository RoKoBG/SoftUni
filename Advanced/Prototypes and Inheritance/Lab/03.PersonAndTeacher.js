function personAndTeacher(){

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    toString(){
        return `Name: ${this.name}, Email: ${this.email}`
    }
}

class Teacher extends Person {
    constructor(name, email, subject) {
        super(name, email);
        this.subject = subject;
    }
    toString(){
        return `${super.toString()}, Subject: ${this.subject}`
    }
}
return{
    Person,
    Teacher
}
}
