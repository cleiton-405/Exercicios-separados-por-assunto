const iniciar = () =>{
    let alunos = []
    let op = 0

    while(op !== 4){

        op = parseInt(prompt(" Escolha uma opção: \n"+
            "1- Adicionar um aluno\n"+
            "2- Remover o último aluno\n"+
            "3- Mostrar todos os alunos\n"+
            "4- Sair\n"
        ))

        switch(op){
            case 1:
                let qtdAlunos = parseInt(prompt(" Digite a quantidade de alunos: "))
                let i = 0

                if(isNaN(qtdAlunos) || qtdAlunos <= 0){
                    alert(" ! Quantidade iválida, digite apenas números positivos")
                }

                do{
                    let aluno = prompt(" Digite o nome do aluno: ")

                    if(!isNaN(aluno)){
                        alert(" ! Sem números, apenas nomes !")
                    }

                    if(aluno && aluno.trim() !== ""){
                        alunos.push(aluno)
                        alert(" Aluno adicionado: "+aluno)
                        i++
                    }else{
                        alert(" ! Nome inválido, tente novamente !")
                    }

                }while(i < qtdAlunos)
            break

            case 2:
                if(alunos.length > 0){
                    let alunoRemovido = alunos.pop()
                    alert(" Aluno removido: "+alunoRemovido)
                }else{
                    alert(" ! Nenhum aluno adicionado !")
                }
            break

            case 3:
                if(alunos.length > 0){
                    alunos.forEach((aluno) => {alert(`Alunos: ${aluno}`)})
                }else{
                    alert(" ! Lista vazia ! ")
                }
            break

            case 4:
                alert(" Saiu do prgrama ")
            break

            default:
                alert(" ! Opção inválida, tente novamente !")
            break
        }
    }

}