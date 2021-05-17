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