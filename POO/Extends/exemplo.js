class Retangulo {
    constructor(altura, largura) {
      this.altura = altura;
      this.largura = largura;
    }

    area(){
        return this.altura * this.largura;
    }
}

var r1 = new Retangulo(3, 4); 
var r2 = new Retangulo(3, 8);

class Quadrado extends Retangulo {
    constructor(dimensao) {   // constructor e uma sub-Classe
      super(dimensao, dimensao) // chamamos o construtor da nossa super classe, passando os parametros que ele precisa.
    }
}

var r3 = new Quadrado(3);
