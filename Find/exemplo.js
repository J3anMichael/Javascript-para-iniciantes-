// O método find () é usado para obter o valor do primeiro elemento na matriz
// que satisfaça a condição fornecida. Ele verifica todos os elementos do array e
// qualquer que seja o primeiro elemento que satisfaça a condição, ele será impresso. 



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


const carro1 = {
 marca: "audi",
    ano: 2021,
    cor: "prata",
}
const carro2 = {
 marca: "bmw",
    ano: 2020,
    cor: "preto",
}
const carro3 = {
 marca: "ford",
    ano: 2013,
    cor: "vermelho",
}

const carros = ["audi", "bmw", "ford"];

carros.find(carro => carro.marca === "bmw");

// output: bmw 2021 prata



