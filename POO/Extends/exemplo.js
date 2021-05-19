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
    constructor(dimensao) {
      super(dimensao, dimensao)
    }
}

var r3 = new Quadrado(3);