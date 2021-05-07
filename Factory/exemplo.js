// Introdução a função FActory em JavaScript
// Uma função FActory ou fábrica é uma função que retorna um novo objeto . O seguinte cria um objeto de pessoa chamado about:



const about = {
firstName: "Jean",
lastName: "Michael",
getFullName(){
return this.firstName + ' ' + this.lastName;
   }
};

console.log(about.getFullName());

// Suponha que você precise criar outro objeto semelhante chamado about2, você pode duplicar o código da seguinte maneira:


const about2 = {
firstName: "John",
lastName: "Cena",
getFullName(){
return this.firstName + ' ' + this.lastName;
   }
};

console.log(about.getFullName());

// O objeto tem as mesmas propriedades e métodos de about.

// Quanto mais objetos você deseja criar, mais código duplicado você precisa copiar.

// Para evitar copiar o mesmo código repetidamente, você pode desenvolver uma função que cria o personobjeto:


function personalObj(firstName, lastName){
return {
fisrtName: firstName,
lastName: lastName,
getFullNAme(){
return firstName + ' ' + lastName
     }
   }
 }



// Quando uma função cria um objeto, ela é chamada de função de fábrica. O createPerson()é uma função de fábrica porque retorna um novo personobjeto.
// O código a seguir usa a personalObj()função de fábrica para criar dois objetos Jean e John:

let Jean = createObj('Jean', 'Michael'),
   John  = createObj('John', 'Cena');

console.log(Jean.getFullName());
console.log(John.getFullName());
