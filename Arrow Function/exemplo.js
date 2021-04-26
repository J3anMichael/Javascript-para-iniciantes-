// Feature 


// A criação de uma arrow functions consistem em alguns “passos”:

// Os parênteses, que é por onde a função recebe os argumentos (assim como na function tradicional);
// A “seta” => - responsável pelo nome “arrow” function;
// E as chaves: o bloco de código que representa o corpo da função.


1- Var, Let ou Const
2- Nome da variável 
3- =
4- (argumentos)
5- =>
6- {} 

const num = (numero1, numero2) => {
 return numero1 + numero2;   
}
console.log(num(25,25));

// Função normal sem Arrow function


function soma(a, b) {
    console.log(a + b);
}

var mult = function(a, b){
    console.log(a * b);
}

// Com Arrow function

var mult3 = a => {
    console.log(a*2);
}


const mult4 = (a,b) => {
    return 5 * 15;
};




// Forma Implícita

const person = () => ({
    return {
        name: "Jean Michael",
        lastName: "Claudino",
        age: 24,
        college: "Estacio"
    });



// com this

const carro = {
    modelo: "Ka", 
    fabricante: "Ford",
    nomeCompleto: function(){
        return ´${this.fabricante} ${this.modelo}´
    }
};
    
    console.log(carro.nomeCompleto());

// output: Ford Ka 



const formatName = user => ({

        firstName: `${user.firstName} `,
        lastName: `${user.lastName}`
    }); 
    console.log(formatName({
        firstName:"Jean",
    lastName:"Michael"
    }));
// output: { firstName: 'Jean ', lastName: 'Michael' }



// ==================================================


const FormatName = user => ({
 
 fistName:`${user.firstName}`,
 lastName:`${user.lastName}`
 });
console.log(FormatName({
firstName: "Jean",
 lastName: "Michael"
}));
