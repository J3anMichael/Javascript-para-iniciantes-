// A criação de uma arrow function consistem em 3 “passos”:

// Os parênteses, que é por onde a função recebe os argumentos (assim como na function tradicional);
// A “seta” => - responsável pelo nome “arrow” function;
// E as chaves: o bloco de código que representa o corpo da função.


// Função normal

function soma(a, b) {
    console.log(a + b);
}

var mult = function(a, b){
    console.log(a * b);
}

// Arrow function

var mult3 = a => {
    console.log(a*2);
}
