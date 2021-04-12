var Jean = {
    nome: "Jean Michael",
    faculdade: "Estacio",
    salario: 1500,
} // Verificar(); => True;

var David = {
    nome: "David Silva",
    faculdade: "Uni Brasil",
    salario: 1300,
} // Verificar(); => False;

var Erik = {
    nome: "Erik Costa",
    faculdade: "Pucpr",
    salario: 750,
} // Verificar(); => False;

// Array
var users = [Jean, David, Erik];

users.find(user => user.nome === "Jean Michael" ); // Verificar();

console.log(user); // Output: Jean Michael Estacio 1500

// Outro exemplo 

var Jean = {
    nome: "Jean Michael",
    faculdade: "Estacio",
    salario: 1500,
} // Verificar(); => True;

var David = {
    nome: "David Silva",
    faculdade: "Uni Brasil",
    salario: 1300,
} // Verificar(); => False;

var Erik = {
    nome: "Erik Costa",
    faculdade: "Pucpr",
    salario: 750,
} // Verificar(); => False;

// Array
var users = [Jean, David, Erik];

users.find(user => user.nome === user.salario >= 1400 ); // Verificar();

console.log(user); // Output: Jean Michael Estacio 1500

