// O método  filter() vai percorrer cada elemento de um array e colocar, em um novo array,
// os elementos que retornam TRUE, de acordo com a função especificada no nosso filtro.

// Para ficar mais claro, vamos usar um exemplo. Imagine o seguinte array:



const livros = [
    {titulo: "Aprenda React", autor: "desconhecido"},
    {titulo: "Javascript para iniciantes", autor: "desconhecido"},
    {titulo: "CSS para leigos", autor: "desconhecido"}
];

const filtragem1 = livros.filter((livro) => livro.titulo === "Aprenda React");
const filtragem2 = livros.filter((livro) => livro.autor === "desconhecido");
const filtragem3 = livros.filter((livro) => livro.titulo.includes("para"));


console.log(filtragem3);

// ====================================================================


const carros = [
    {marca: "BMW", cor: "Prata", ano: 2019, tipo: "Carro de Luxo"},
    {marca: "Audi", cor: "Preto", ano: 2021, tipo: "Carro de Luxo"},
    {marca: "Fiat", cor: "branco", ano: 2015, tipo: "Carro Popular"}
];

const filtro1 = carros.filter((carro) => carro.ano === 2021);
const filtro2 = carros.filter((carro) => carro.tipo.includes("Luxo"));

console.log(filtro2);


// ====================================================================

const cursos = [
    {curso: "Sistemas de Informacao", faculdade: "Estacio", modalidade: "EAD", valor: 278},
    {curso: "Direito", faculdade: "UniBrasil", modalidade: "Presencial", valor: 1500},
    {curso: "Ed Fisica", faculdade: "PUCPR", modalidade: "EAD", valor: 200}
];
const details = cursos.filter((about) => about.curso.includes("Ed"));

console.log(details);

// =======================================================================


const endereco = [
    {pais: "Brasil", cidade: "Curitiba", bairro: "Batel"},
    {pais: "Irlanda", cidade: "Dublin", bairro: "D08"},
    {pais: "Holland", cidade: "Amsterdam", bairro: "Center"}
];

const filt = endereço.filter((address) => address.cidade === Amsterdam);

console.log(filt);
