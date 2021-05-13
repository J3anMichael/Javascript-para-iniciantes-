for(let i = 0;
     i < 5; i++) {
    console.log("Working!",i)
}
// O for vai analisar o i, e i e menor que ZERO? Resposta: Sim, i e menor que ZERO
// Entao i vai ser executado uma vez
// o valor de ZERO atribuido a i, corresponde ao valor inicial 
// i++ vai encrimentar por 1, e sempre que i for menor que 5, sera encrementado 1 no valor,
// no nosso caso queremos 5 repeticoes.

for(let nome = 0; nome < 5; nome++){
console.log("meu nome é Jean")
}



// WHILE

let salario = 1500  // valor do nosso salario

while (salario < 2500){  // Enquanto o salario for menor que 2500, acrescentar 250 no valor até chegar a 2500
salario += 250;
  console.log(salario)
} 
