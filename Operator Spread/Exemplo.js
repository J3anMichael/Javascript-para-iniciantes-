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
