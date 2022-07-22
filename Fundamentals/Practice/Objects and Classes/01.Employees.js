function employees(input) {
   let object = {};
   for (const person of input){
       object.name = person;
       object.number = person.length;
       console.log(`Name: ${object.name} -- Personal Number: ${object.number}`);
   }

} employees([

    'Silas Butler',

    'Adnaan Buckley',

    'Juan Peterson',

    'Brendan Villarreal'

]);
