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
var user = [Jean, David, Erik];

user.find(user => user.nome === "Jean Michael" ); // Verificar();

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



// Outro exemplo


const array1 = [5, 12, 8, 130, 44];

const found = array1.find(element => element > 9);

console.log(found); 

// output: 12


// Outro exemplo


const carro = {
 marca: "audi",
    ano: 2021,
    cor: "prata",
}
const carro = {
 marca: "bmw",
    ano: 2020,
    cor: "preto",
}
const carro = {
 marca: "ford",
    ano: 2013,
    cor: "vermelho",
}

const carros = ["audi", "bmw", "ford"];

carros.find(carro => carro.marca === "bmw");

// output: bmw 2021 prata



