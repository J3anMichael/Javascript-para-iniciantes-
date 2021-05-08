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


const Dobrar = (x) => x * 2;
console.log(Dobrar(6));

// output: 12


// ==================================================

// Ternary 

const Avaliar = (x, y, z) => x < 10 ? y + z : y * z;

console.log(Avaliar(30, 15, 75));

// output: 1125


// ==================================================

const ModelCar = car => ({
carModel: `${car.carModel}`,
carYear: `${car.carYear}`
});

console.log(ModelCar({
carModel: "BMW",
carYear: 2018
}));

// ==================================================

var semafaro = (verde) === verde ? "Pode passar" : "PARE!"

console.log(semafaro);

// ==================================================

<body>

<button id="btn">
click
</button>

<script>

const botao = document.querySelector("#btn");

botao.addEventListener('click', (e) => {
return window.alert("Welcome!")
});

</script>

</body>
