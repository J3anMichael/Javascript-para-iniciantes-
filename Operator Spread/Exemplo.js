// O Spread Operator permite definir um número indefinido de parâmetros para uma função, Array ou objeto.
// O Spread Operator nada mais e do que os 3 pontos ..., assim como no exemplo a baixo ...faculdade
var nome = "Jean";
var idade = 24;

var faculdade = {
 nome: "Estacio de Sa",
 cidade: "Curitiba",
 curso: "Sistemas de innformacao"
}

// Json normal

var user = {
    nome,
    idade,
    ...faculdade
}

console.log(user);