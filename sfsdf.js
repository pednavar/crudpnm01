let meses = ["enero", "febrero", "lunes", "martes"];
let dias = meses.splice(6);

console.log(dias); // ["lunes"]
console.log(meses); // ["enero", "febrero", "martes"]