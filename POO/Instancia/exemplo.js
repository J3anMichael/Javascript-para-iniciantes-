var Cliente = function(){
    this.nome = "";
    this.telefone = "";
    this.cpf = "";
}

Cliente // chamando nossa classe Cliente

var Cliente = function(){
    this.nome = "";
    this.telefone = "";
    this.cpf = "";

    this.Mostrar = function(){                    // vamos modificar os valores
        alert("Nome:" + this.nome);
        alert("Telefone:" + this.telefone);
        alert("CPF:" + this.cpf);
        
    }
}

var c = new Cliente();  // Criando instancia

c.Mostrar(); 