// A sintaxe da atribuição via desestruturação é uma expressão JavaScript que possibilita descompactar valores de arrays ou propriedades de objetos em variáveis distintas. Isto significa, que podemos extrair dados de arrays ou objetos, e atribuir estes dados à variáveis.

// Exemplo de Desestruturaçao:

// Usual

var user = {
    nome: "Jean Michael",
    prof: "Developer",
    faculdade: "Estacio",
    curso: "Sistemas de informacao"
}

var nome = user.nome;
var curso = user.curso;
var frof = user.prof;
var faculdade = user.faculdade

console.log(nome);
console.log(curso);
console.log(faculdade);


///////////////////////////////////////////////////

// Destructuring

var user = {
    nome: "Jean Michael",
    prof: "Developer",
    faculdade: "Estacio",
    curso: "Sistemas de informacao"
}

var { nome } = user;
// ou
var { nome, prof, faculdade, curso } = user;

console.log(nome);
console.log(curso);
console.log(faculdade);

// Output: Jean Michael Developer Estacio Sistemas de informação


// OBS 
// Podem ser usados Var, Let e Const
