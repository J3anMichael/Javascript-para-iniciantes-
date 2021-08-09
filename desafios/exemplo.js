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
