// A bit functional side of javascript 
// Higher-Order Function
// Meriview penggunaan setInterval
setInterval(() => {
    console.log("Tick");
}, 1000);



const printTick = () => {
    console.log("Tick 1");
}
setInterval(printTick, 1000);