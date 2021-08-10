// Desafios


// Desafio - 1

// Escreva uma função que converte Horas em Segundos:

function HourToSeconds(hour){   // horas = número em horas
return horas * 60 * 60            //  1 hora tem 60 minutos e 1 minuto tem 60 segundos 
}

console.log(HourToSeconds(1)) // 3600 segundos


// =========================

// Desafio - 2

// Escreva uma função que converte Semana em Horas

function WeekToHours(time){
return time * 24 
}

console.log(WeekToHours(7)) // 168 horas


// =========================

// Desafio - 3

// Escreva uma função que converte Dias em Horas

function DayToHours(day){
return day * 24 
}

console.log(DayToHours(31))  // 744 horas


// Desafio - 4

// Escreva uma lista de Cidades e seus Estados e retorne no console apenas uma coluna de cidade.


let cidades = [ 
{Cidade: "Curitiba", Estado: "Paraná"},
{Cidade: "Rio de Janeiro", Estado: "Rio de Janeiro"},
{Cidade: "Florianópolis", Estado: "Santa Catarina"},
];

let filtro = cidades.filter(function(element, index){
return element.Estado.includes("de");
});

console.log(filtro); // [{  Cidade: "Rio de Janeiro",Estado: "Rio de Janeiro"}]


// Desafio - 5

// Escreva uma função que retorne números aleatórios entre 0 e 100.

const random = (num) => Math.ceil(Math.random() * num);

console.log(random(100))


// Desafio - 6

// Crie um array de numérico e retorne-o com valores multiplicados


const num = [1, 2, 3, 4, 5];

const double = num.map((number) => number * 2);

console.log(double) // [2, 4, 6, 8, 10]
