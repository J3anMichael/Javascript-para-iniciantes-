function Retangulo(altura, largura) {
    this.altura = altura;
    this.largura = largura;
    this.area = function () {
        return this.altura * this.largura;
    };
}

var r1 = new Retangulo(3, 4);
var r2 = new Retangulo(7, 2);


terminal: r1.area()
// output: 12



// ======================================================


// Agora utilizando prototype



function RetanguloV2(altura, largura) {
    this.altura = altura;
    this.largura = largura;
}
//  vamos pegar a funcao area e acessar a propiedade prototype e nesse obj vamos definir uma nova propriedade area que vai ser nossa funcao de calcular area
RetanguloV2.prototype.area = function () {
    return this.altura * this.largura;
};

var r3 = new RetanguloV2(3, 4);  // nova instancia 
var r4 = new RetanguloV2(7, 2);  // nova instancia



// ======================================================

function Alunos(nomes){
this.nomes = nomes;
}

Alunos.prototype.novo = function(){
return this.nomes;
}

var aluno1 = new Alunos(['Jean', 'Richard', 'Lunara' ]);

// No terminal: aluno.novo();
// output: ['Jean', 'Richard', 'Lunara' ]



// ======================================================


function Computador(teclado, windows){

this.teclado = teclado;
this.windows = windows;
}

Computador.prototype.Valor = function(){

return console.log("Comprei meu teclado por R$:" + `${this.teclado}` + "e meu windows por R$" + `${this.windows}`)
}

let pc = new Computador(300, 150);

