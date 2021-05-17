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


// ==================================================   

let meuObj = {
    a: 1,
    b: 2
}

const novoObjeto = Object.create(meuObj)

 novoObjeto.novaPropriedade = 5

console.log(meuObjeto.b)

// meuObj.__proto__-->Object.prototype --> null

const meuArray = [1, 2, 3, 4, 5]

// meuArray.__proto__-->Array.prototype --> Object.prototype --> null

function minhaFuncao() {
    return 1 * 2
}

// minhaFuncao.__proto__--> Functon

function SalaAula(alunos){
    this.alunos = alunos
}
SalaAula.prototype = {               // Prototype basicamente  add novas propriedades/metodos ao nosso novo Obj
    adicionarAlunos: function(aluno){
        this.alunos.push(aluno)
    }
}

const minhaSala = new SalaAula(['Jean', 'Lunara'])

minhaSala.adicionarAlunos('Richard')

console.log(minhaSala.alunos)