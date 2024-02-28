/* var n1 = 10;

var n2 = 2;

var adicao = n1 + n2;
var sub = n1 - n2;
var mul = n1 * n2;
var div = n1 / n2;

console.log(adicao);
console.log(sub);
console.log(mul);
console.log(div); */

// Comentário 1 linha

/* Comentário com mais de uma linha 

var n1 = 10
var n2 = 100.1

if (n1 <= 10) {
    console.log("N1 é menor ou igual a 10")
}

for (var x = 0; x <= 10; x++) {
    console.log(x)
}

var y = 0

while (y <= 10){
    console.log(y)
    y++
}

var z = 0

do {
    console.log(z)
    z++
}while(z <= 10)

*/

var soma = require('./soma.js');
var sub = require('./sub.js');
var mult = require('./mult.js');
var div = require('./div.js');

console.log(soma(10,2));
console.log(sub(10,2));
console.log(mult(10,2));
console.log(div(10,2));




