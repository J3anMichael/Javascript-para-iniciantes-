// Exemplos de variáveis: Como o proprio node ja diz, pois as variaveis podem variar o valor.

var nome = "Jean";

nome = "Michael"

nome = 14


// Constantes ECMAS6 
// Não podem ter seus valores alterados, pois ao contrario dos valores variáveis, a constante deve ter seu valor único.

const nome = "Jean";

nome = "Michael" // Errado 

nome = 14 // Errado //

// Quando usar constantes?
// Quando for chamar módulos no Node

const express = require("express");

