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

// =============================================

function Alunos(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.add = function(){
    return this.nome, this,idade;
      }
    }
    
    var aluno = new Alunos('Jean', 24);

    function AlunosV2(nome, idade){
        this.nome = nome;
        this.idade = idade;
        }
        AlunosV2.prototype.add = function(){
     return  this.nome,
             this.idade
        };

        var aluno2 = new AlunosV2('Lunara', 28)
