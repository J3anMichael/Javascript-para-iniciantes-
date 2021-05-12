
// this aponta para o contexto onde uma função está sendo executada. Seu valor dentro de uma função
// depende de como a função foi invocada. Em uma mesma função, this pode ter diferentes valores, em
// diferentes momentos, dependendo da invocação.









let person = {
    name: "Jean",
    age: 24,
    speach: function(){
        console.log("Hello World!") 
    },
    sayName: function(){ // metodo 
        console.log("My name is " + this.name);
    },
    birth: function(){ // metodo fazer aniversario 
        this.age += 1; // o this vai acessar o valor ja atribuido a age e em seguida vai atribuir o novo valor
    }
};

person.speach();

person.sayName();

console.log(person.age);

person.birth();

console.log(person.age);
