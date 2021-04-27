// O Spread Operator permite definir um número indefinido de parâmetros para uma função, Array ou objeto.
// O Spread Operator nada mais é do que os 3 pontos ..., assim como no exemplo a baixo ...faculdade

var faculdade = {                     // Spread Operator
 nome: "Estacio de Sa",                   
 cidade: "Curitiba",
 curso: "Sistemas de informacao"
}
var user = {                          
 firstName: "Jean",                      
 lastName: "Michael",
 ...faculdade
};
// Json encurtado

var user = {
 firstName,
 lastName,
 ...faculdade
}
console.log(user);
// output: Jean Michael Estacio Curitiba Sistemas de informacao



// Exemplo com array

var arr = [5,6];  // Spread Operator

var array = [1,2,3,4,...arr];

console.log(array);

// output: 1,2,3,4,5,6



// ================================================


var Livros1 = ["Javascript", "PHP", "React"];
var Livros2 = ["Java", "Node", "C#"];
var Preco = [100, 50, 85, 125, 70, 95]
var Livros = [...Livros1, ...Livros2, ...Preco];
console.log(Livros)

// output: ["Javascript", "PHP", "React", "Java", "Node", "C#", 100, 50, 85, 125, 70, 95]




var Livros1 = ["Javascript", "PHP", "React"];
var Livros2 = ["Java", "Node", "C#"];
var Preco = [100, 50, 85, 125, 70, 95]
var Livros = [...Livros1, ...Livros2, ...Preco];
var precoMaximo = Math.max(...Preco);
console.log(precoMaximo); // output: 125
console.log(Livros)

