// Destructuring Object
const user ={};
user.name = 'Frida Eka Wardani';
user.handle = '@frdwrdn';
user.location = 'Jakarta, Indonesia';
//extraction
const name = user.name;
const handle = user.handle;
const location = user.location;
console.log(name,handle)

//menambahkan properti banyak sekaligus pakai object literal notation
const user1 = {
name1 :'Frida Eka Wardani',
handle1 : '@frdwrdn',
location1 : 'Jakarta, Indonesia'
}
//extraction
const name1 = user.name1;
const handle1 = user.handle1;
const location1 = user.location1;
console.log( name1, handle1, location1)

//penggunaan destructuring untuk melakukan banyak ekstraksi
const { name2, handle2, location2 }=user2;
console.log(name2, handle2, location2);

//Destructuring Function Result
//destructuring dari hasil return sebuah pungsi (getUser)
const getuser = () =>{
    return{
        name3 :'Frida Eka Wardani',
        handle3 : '@frdwrdn',
        location3 : 'Jakarta, Indonesia'
    };
}
//extraction
const { name3, handle3, location3 } = getuser();
console.log(name3, handle3, location3);

// Destructuring Array
const csv = "1997,Ford,F350,Must Sell!";

const [year, make, model, description]=
csv.split(",");

//Aliansi Object Proprties
const user4 = {
        n :'Frida Eka Wardani',
        h : '@frdwrdn',
        l : 'Jakarta, Indonesia'
}
// //extraction
const { n: name4, h :handle4, l: location4 } = user4;
console.log(name4, handle4, location4);


//Arrow function and bind (this)
//sintaks yang lebih pendek
//function declaration
function add(a, b){
    return a + b;
}
//function expression
const add = function(a, b){
    return a + b;
}

// //arrow function
const add = (a, b) => {
    return a + b;
}

//Implicit Retrun
function add(a, b){
    return a + b;
}
function squere (x){
    return x * x;
}
function three(){
    return 3;
}

//IMPLICIT  return arrow function
const add = (a, b) => a+b;
const square = x => x * x;
const three = () => 3;

//Mengembangkan arrow function  menggunakan {}
const add = (a, b) => {
    const temp = a+b ;
    return temp;
}

// Manajemen this keyword 
// untuk memudahkan memahami this keyword degan tidak "memperdulikan" this
// Masih ada error (NaN) karena this di dalam setInterval sudah ngga mengenal this dan this.age
function Person () {
    this.age = 0;

    setInterval(function(){
        this.age++;
        console.log(this.age);
    }, 1000);
}
const p = new Person();
//cara pertama perbaikan mengenai permasalahan di atas
function Person () {
    this.age = 0;

    const that = this;
    setInterval(function(){
        this.age++;
        console.log(this.age);
    }. bind(this), 1000);
}
const p1 = new Person();
//cara kedua, menambahkan method bind 
function Person () {
    this.age = 0;

    setInterval(function(){
        this.age++;
        console.log(this.age);
    }. bind(this), 1000);
}
const p2 = new Person();
// cara yang terakhir menggunakan arrow function 
function Person () {
    this.age = 0;

    setInterval(() => {
        this.age++;
        console.log(this.age);
    }, 1000);
}
const p3 = new Person();