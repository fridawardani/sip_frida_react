const arrayOfWords = ['cucumber', 'tomatos', 'avocado'];
const complicatedArray = ['cucumber', 44, true];
// menerima array dan mereturn new promise guna mengubah array menjadi huruf kapital
const makeAllCaps = (buah) => {
    return new Promise((resolve) => {
      const result = buah.map(data => {
        if (typeof data === "string") {
          return data.toUpperCase()
        } else {
          return data
        }
      })
        resolve(result)
    })
}
// sortWords ini gunanya untuk menerima data (array) dan mereturn new promise yang akan memfilter data tersebut
const sortWords = (buah) => {
    return buah.sort()
}
//Hasilnya 
makeAllCaps(arrayOfWords)
.then(sortWords)
.then((hasil) => console.log(hasil))
.catch(error => console.log(error))

makeAllCaps(complicatedArray)
.then(sortWords)
.then((hasil) => console.log(hasil))
.catch(error => console.log(error))