// O método Array.map permite que você aplique uma transformação para cada elemento do seu array, gerando um novo array como resultado. Imagine que você possui um array com números:

// O seu objetivo, é pegar cada número desse array e multiplicá-lo por 2. O código ficaria da seguinte maneira:

const Numbers = [10, 20, 30, 40, 50]; // Original

const numbersDouble = Numbers.map(double);


function double(element, index, array){
    return element * 2;
}
console.log("ORIGINAL ", Numbers);
console.log("NOVO ARRAY ", numbersDouble);