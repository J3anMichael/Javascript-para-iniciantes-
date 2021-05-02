// O operador condicional ternário é um atalho para o condicional if.
// O operador condicional é o único operador ternário de JavaScript.

condition ? expr1 : expr2

// condicao é uma expressão que é avaliada como true ou false.
// expr1, expr2 são expressões com valores de qualquer tipo.
// ? = if e : = else.

// Exemplo:

// Normal

var livro = 50;

if(livro < 40){
    console.log("Livro barato")
} else {
    console.log("Livro caro")
}


// Ternário

var preco = 50;
let resultado = preco < 40 ? "livro barato" : "livro nao barato!";
console.log(resultado)




// =================================================================


const car = 50000;
let price = car > 51000 ? "Lets buy the car" : "We cant buy this car";

console.log(price);



// =================================================================


const dono = "Jean";
const prop = dono ? "verdadeiro" : "Falso";

console.log(prop);
