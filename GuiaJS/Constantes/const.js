// Examplos de Variaveis: Como o proprio node ja diz, as variaveis podem variar o valor.

var nome = "Jean";

nome = "Michael"

nome = 14


// Constantes ECMAS6 
// Nao podem ter seus valores alterados, pois ao contrario dos valores variaveis, a constante deve ter seu valor unico.

const nome = "Jean";

nome = "Michael" // Errado 

nome = 14 // Errado //

// Quando usar constantes?
// Quando for chamar modulos no Node

const express = require("express");

