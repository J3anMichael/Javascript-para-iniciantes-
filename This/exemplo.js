
// this aponta para o contexto onde uma função está sendo executada. Seu valor dentro de uma função
// depende de como a função foi invocada. Em uma mesma função, this pode ter diferentes valores, em
// diferentes momentos, dependendo da invocação.









let person = {
    name: "Jean",
    age: 24,
    speech: function(){
        console.log("Hello World!") 
    },
    sayName: function(){ // metodo 
        console.log("My name is " + this.name);
    },
    birth: function(){ // metodo fazer aniversario 
        this.age += 1; // o this vai acessar o valor ja atribuido a age e em seguida vai atribuir o novo valor
    }
};

person.speech(); // Chamando a função speech

person.sayName(); // Chamando a função sayName

console.log(person.age); // Chamando o age do nosso objeto

person.birth(); // Fez aniversario 

console.log(person.age); // Novo valor 
