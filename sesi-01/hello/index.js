//Variabel Declaration
let score = 50;

// Deklarasi Variable dengan let
let playerName = "Budi";
alert(playerName);
playerName = "Andy";
alert(playerName);

//Deklarasi Variabel dengan cost
const pi=3.14;
// pi = 5.12; -> error

//Tipe Data Number
let originalNumb = 23;
let numberToBeAdded = 7;
let newNum = originalNumb + numberToBeAdded;
alert(newNum);

//Tipe Data String
alert("Hello class Modern Javascript!");

let message = 'Welcome!';
alert(message);
message ='Bye, bye';
alert(message);

//cara agar bisa menggunakan petik satu
message = 'She\'s a great person';
alert(message);

//Penggunaan petik dua didalam satu
let htmlSnippet = '<h1 class="header">This is a header</h1>';
htmlSnippet = "<h1 class=\"header\">This is a header</h1>";
alert(htmlSnippet);

//teks manipulasi String
//Menggabungkan String
let visitor = prompt('Siapakah namamu?');
let message1 = 'Halo '+ visitor;
// message1 = message1 + '. Selamat datang di kelas Modern JavaScript!' ;
// message1 += 'Kita senang sekali kamu mau datang berkunjung,';
message1 += visitor + '. Semoga kamu berkenan datang kembali untuk belajar bersama.';
alert (message1);

//Tipe Data Boolean
let isFinished = true;

//Arrays
//DEklarasi Array
// var kode=["React","PHP","rUBY"];
// let kode=["React","PHP","Ruby"];
// const kode=["React","PHP","Ruby"];

//opersai Array
//Menggabungkan 2 buah array
// var fruits=['anggur','melati','apel','jeruk'];
// var buah_buahan=['strawberry','pir','durian'];
// fruits.push.apply(fruits, buah_buahan)
// alert(fruits)


//Menghapus Item
// var fruits=['anggur','melati','apel','jeruk'];
// var index_yang_ingin_dihapus = 1; //karena fruits[1] = melati, kita ingin menghapus melati dari array buah0-buahan ini
// fruits.splice(index_yang_ingin_dihapus, 1)
// alert(fruits)

//Mengkosongkan Array
var fruits=['anggur','melati','apel','jeruk'];
// fruits=[]
fruits.splice(0, fruits.length)
alert(fruits)