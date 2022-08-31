// //Mendefinisikan class
// class Emoployee {
//     doWork(){
//         return"Complete!";
//     }
// }

// let scott = new Emoployee();
// console.log(scott.doWork());

// //Constuctor
// class Emoployee1{
//     constructor (name) {
//         this._name = name;
//     }
//     doWork1(){
//         return "Complete!!";
//     }
//     getName(){
//         return this._name;
//     }
// }
// let scott1 = new Emoployee1("Scott Moss");
// console.log(scott1.getName());

// //Class Inheritance
// class Person{
//     constructor (name1){
//         this._name1 = name1;
//     }
//     getName(){
//         return this._name1;
//     }
// }
// class Emoployee2 extends Person{   
// }

// let scott2 = new Emoployee2("Scott Moss1");
// console.log(scott2.getName());

//kita juga bisa menambahkan fungsi khusus untuk class Employee saja.
class Person1{
    constructor (name2){
        this._name2 = name2;
    }
    getName(){
        return this._name2;
    }
}
class Emoployee3 extends Person1{
    doWork(){
        return this._name2 + " is working";
    }
}
let scott3 = new Emoployee3("Scott Moss2");
console.log(scott3.getName());
console.log(scott3.doWork());
let scott4 = new Person1("Test")
console.log(scott4.getName());


//Method Super
class Employee4 extends Person1{
    constructor(name3, title){
        super(name3); // method penghung antara parents dan child
        this._title = title;
    }
    getTitle(){
        return this._name2 + " is" + " " + this._title;
    }
}

const test1 = new Employee4("Scott Moss", "test");
console.log(test1.getName());
console.log("Employee = " + test1.getTitle()); //assign employee 4
console.log("Employee = " + test1.getName());
