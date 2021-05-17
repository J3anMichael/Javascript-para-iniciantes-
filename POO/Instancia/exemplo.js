// Uma instância de uma classe é um novo objeto criado dessa classe, com o operador new. Instanciar uma
// classe é criar um novo objeto do mesmo tipo dessa classe. Uma classe somente poderá ser utilizada após ser instanciada.






var Cliente = function(){  // Classe a ser instanciada
    this.nome = "";
    this.telefone = "";
    this.cpf = "";
}

Cliente // Chame a classe pelo Console do seu navegador

var Cliente = function(){  // Será apresentado nossa classe Cliente, em seguida vamos add a função Mostrar();
    this.nome = "Jean"; 
    this.telefone = "4199999-9999";
    this.cpf = "88888888888";

    this.Mostrar = function(){                    // Vamos chamar como alert, você pode add os valores que você quiser.
        alert("Nome:" + this.nome);
        alert("Telefone:" + this.telefone);
        alert("CPF:" + this.cpf);
        
    }
}

var c = new Cliente();  // Criando instancia

c.Mostrar(); // Chamamos nossa classe com os valores atribuídos 

