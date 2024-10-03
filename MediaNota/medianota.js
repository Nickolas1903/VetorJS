let media = 0, mediaGeral = 6, nota, aluno, i = 1, c = 0
let notas = []
let alunos = []

while(i<=5){
    aluno = prompt("Digite o nome do aluno:")
    alunos.push(aluno)
    nota = parseFloat(prompt("Digite a nota do aluno:"))
    notas.push(nota)
    i++
    media = media + nota
}

media = media / 5

while(i<=5){
    if(notas < media){
        console.log(notas[nota])
    }
}