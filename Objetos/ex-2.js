const iniciar = () =>{
    let op = 0
    let alunos = []

    do{
        op = parseInt(prompt(`==== MENU ==== \n
        1 - Cadastrar aluno
        2 - Listar todos os alunos
        3 - Buscar aluno por nome
        4 - Remover aluno por nome
        5 - Ver média geral das notas
        0 - Sair
        `))

        if(isNaN(op) || op < 0 || op > 5){
            alert(`!Digite apenas números e positivos!`)
            continue
        }

        switch(op){
            case 1:
                do{
                    let nomeAluno = prompt(`Digite o nome do aluno (s para sair):`)
                
                    if(nomeAluno === null || nomeAluno.toLocaleLowerCase() === "s"){
                        alert(`Saindo...`)
                        break
                    }

                    if(!isNaN(nomeAluno)){
                        alert(`!Não pode ser um número!`)
                        continue
                    }

                    if(!nomeAluno.trim()){
                        alert(`Digite um nome`)
                        continue
                    }

                    let itemExistente = alunos.some(
                        (item) => item.nome.toLocaleLowerCase() === nomeAluno.toLowerCase())

                    if(itemExistente){
                        alert(`O aluno "${nomeAluno}" já está na lista!`)
                        continue
                    }

                    let notas = []

                    for(let i = 1; i < 3; i++){
                        let notaAluno = parseFloat(prompt(`Digite a nota ${i}:`))

                        if(isNaN(notaAluno) || notaAluno < 0){
                            alert(`!Digite notas válidas e positivas!`)
                            i--
                            continue
                        }

                        notas.push(notaAluno)
                    }

                    let objeto = {
                        nome: nomeAluno.trim(),
                        notas: notas
                    }

                    alunos.push(objeto)
                    alert(`${objeto.nome} adicionado com sucesso!`)

                }while(true)
            break

            case 2:
                if(alunos.length === 0){
                    alert(`Lista vazia!`)
                }else{
                    let lista = `Lista alunos: \n\n`

                    alunos.forEach((item, i) =>{
                        lista += `${i + 1}. ${item.nome} - Notas: ${item.nota.join(" - ")}`
                    })

                    alert(lista)
                }
            break

            case 3:
            break

            case 4:
            break

            case 5:
            break

            case 0:
                alert(`Saindo do programa principal...`)
            break

            default:
                alert(`!Opção inválida, tente novamente!`)
            break
        }

    }while(op !== 0)
}