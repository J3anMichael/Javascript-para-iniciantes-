// O método Array.map permite que você aplique uma transformação para cada elemento do seu array, gerando um novo array como resultado. Imagine que você possui um array com números:

// O seu objetivo, é pegar cada número desse array e multiplicá-lo por 2. O código ficaria da seguinte maneira:

const Numbers = [10, 20, 30, 40, 50]; // Original

const numbersDouble = Numbers.map(double);


function double(element, index, array){
    return element * 2;
}
console.log("ORIGINAL ", Numbers);
console.log("NOVO ARRAY ", numbersDouble);


const Numbers = [10, 20, 30, 40, 50];

const numbersDouble = Numbers.map(double);

function double(element, index, array){
    return element + 10;
}

console.log(numbersDouble);

// output: (5) [20, 30, 40, 50, 60]


// =======================================
// Vamaos retornar os nomes

const test = [{
Nome: "Jean",
sobrenome: "Michael",
idade: 24
},
{
Nome: "Lunara",
sobrenome: "Abreu",
idade: 28
},
{
Nome: "Ahri",
sobrenome: "Abreu",
idade: 1.6
}];

const nomes = test.map(function(element, index){
return element.Nome; 
});


console.log(nomes);

// output: ["Jean", "Lunara", "Ahri"]

// ============================================
// Vamos retornar os Sobrenomes

const test2 = [{
Nome: "Jean",
sobrenome: "Michael",
idade: 24
},
{
Nome: "Lunara",
sobrenome: "Abreu",
idade: 28
},
{
Nome: "Ahri",
sobrenome: "Abreu",
idade: 1.6
}];

const lastName = test2.map(function(element, index){
return element.sobrenome;
});
console.log(lastName);

// output: ["Michael", "Abreu", "Abreu"]
