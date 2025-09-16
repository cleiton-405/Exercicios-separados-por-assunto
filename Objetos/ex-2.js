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
                        alert(`Saindo do adicionar aluno...`)
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

                    let notas = []

                    for(let i = 1; i < 3; i++){
                        let notaAluno = parseFloat(prompt(`Digite a nota ${i}:`))

                        if(isNaN(notaAluno) || notaAluno < 0 || notaAluno > 10){
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
                let lista = `Lista alunos: \n\n`

                if(alunos.length === 0){
                    alert(`Lista vazia!`)
                }else{
                    alunos.forEach((aluno, i) =>{
                        lista += `${i + 1}. ${aluno.nome} - Notas: ${aluno.notas.join(" - ")}\n`
                    })

                    alert(lista)
                }
            break

            case 3:
                if(alunos.length === 0){
                    alert(`Lista vazia!`)
                }else{
                    do{
                        let encontrarNome = prompt(`\n Digite o nome do aluno para buscar (s para sair): `)

                        if(encontrarNome === null || encontrarNome.toLocaleLowerCase() === "s"){
                            alert(`Saindo do buscar aluno...`)
                            break
                        }

                        let encontrarNomeMinusculo = encontrarNome.toLowerCase().trim()

                        if(!encontrarNomeMinusculo){
                            alert(`!Digite um nome!`)
                            continue
                        }

                        if(!isNaN(encontrarNomeMinusculo)){
                            alert(`!O nome não pode ser um número!`)
                            continue
                        }

                        const encontrados = alunos.filter(aluno => aluno.nome.toLowerCase() === encontrarNomeMinusculo)
                        // Filtrando o array alunos para achar os alunos com o nome procurado

                        if(encontrados.length > 0){
                            let nomesEncontrados = encontrados.map(aluno => `Nome: ${aluno.nome} - Notas: ${aluno.notas.join(" - ")}`).join("\n")
                            alert(`Aluno(s) encontrado(s):\n${nomesEncontrados}`)
                        }else{
                            alert(`Não está na lista!`)
                        }

                    }while(true)
                }
            break

            case 4:
                if(alunos.length === 0){
                    alert(`Lista vazia!`)
                }else{
                    let listaAlunos = `Lista dos alunos: \n\n`

                    alunos.forEach((aluno, i) =>{
                        listaAlunos += `${i + 1}. Nome: ${aluno.nome} - Notas: ${aluno.notas.join(" - ")}\n`
                    })

                    alert(listaAlunos)

                    let nomeParaRemover = prompt(`Digite o nome que deseja remover: `)

                    if(nomeParaRemover === null || nomeParaRemover.trim() === ""){
                        alert(`Nenhum aluno digitado!`)
                        return
                    }

                    let index = alunos.findIndex(aluno => aluno.nome.toLowerCase() === nomeParaRemover.toLowerCase())

                    if(index !== -1){
                        alunos.splice(index, 1)
                        alert(`Aluno "${nomeParaRemover}" removido com sucesso.`)
                    }else{
                        alert(`Aluno "${nomeParaRemover}" não encontrado.`)
                    }
                }
            break

            case 5:
                if(alunos.length === 0){
                    alert(`Lista vazia!`)
                }else{
                    let somaNotas = 0
                    let totalNotas = 0

                    alunos.forEach(aluno =>{ 
                        aluno.notas.forEach(nota =>{
                            somaNotas += nota
                            totalNotas++
                        })
                    })

                    let mediaGeral = somaNotas / totalNotas
                    alert(`Média geral das notas: ${mediaGeral.toFixed(2)}`)
                }
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