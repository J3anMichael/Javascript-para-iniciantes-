
// Exemplo de Escopo

let nome = "Jean"; // Global, Local e de Bloco{}

var sobrenome = "Michael"; // Global e Local

///////////////////////////////////////////////////////////////


// ESCOPO GLOBAL     

var nome = "Jean Michael"; // Variavel declarada fora das funcoes(){...}

function func1() {
    console.log("Oi " + nome);
}

function func2() {
    console.log("Oi " + nome);
}

// Chamando funcoes

func1();
func2();

// Acessando a variavel fora de qualquer funcao

console.log("Oi " + nome);


/////////////////////////////////////////////////////////////////

// EXEMPLO DE ESCOPO LOCAL

var nome = "Jean Michael";

function func1() {
    sobrenome = "Moura"; // Variavel declarada dentro do escopo e declarada Local e nao pode ser usada fora de seu escopo.
    console.log("Oi " + nome + " " + sobrenome);
}

function func2() {
    console.log("Oi " + nome + " " + sobrenome); // ERRO CAUSADO PELA VARIAVEL "SOBRENOME".
}



func1();
func2();

// Acessando a variavel fora de qualquer funcao

console.log("Oi " + nome + " " + sobrenome); // ERRO CAUSADO PELA VARIAVEL "SOBRENOME".

/////////////////////////////////////////////////////////////////

// EXEMPLO UTILIZANDO LET GLOBAL

var nome = "Jean Michael";
let sobrenome2 = "Claudino";

function func1() {
    console.log("Oi " + nome);
}

function func2() {
    console.log("Oi " + nome + " " + sobrenome2);
}

// Chamando funcoes

func1();
func2();

// Acessando a variavel fora de qualquer funcao

console.log("Oi " + nome + " " + sobrenome2);

////////////////////////////////////////////////////////////////////

// EXEMPLO UTILIZANDO LET LOCAL

var nome = "Jean Michael";


function func1() {
    let sobrenome2 = "Claudino";
    console.log("Oi " + nome + " " + sobrenome2);
}

function func2() {
    console.log("Oi " + nome + " " + sobrenome2); // ERRO CAUSADO PELA VARIAVEL LET, POIS FOI DELACARADA NO ESCOPO DA VARIAVEL FUNC1
}

// Chamando funcoes

func1();
func2();

// Acessando a variavel fora de qualquer funcao

console.log("Oi " + nome + " " + sobrenome2);

// Global: Todo mundo pode chamar essa variavel

// Local: So a funcao onde foi declarado, pode usa-lo.

// VAR => Global e Local
// LET => Global, Local e Bloco