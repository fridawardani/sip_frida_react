//Menggunakan multiple export jika hendak melakukan export lebih dari
// satu modul
class Person{
    constructor (name){
        this._name = name;
    }
    getName(){
        return this._name;
    }
}
class Employee extends Person{
    doWork (){
        return "Complete!";
    }
}
module.exports = { Employee, Person }