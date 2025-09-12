const iniciar = () =>{
    let op = 0
    let nomes = []

    do{
        op = parseInt(prompt(` === MENU === \n
            1- Adicionar nome
            2- Listar nomes
            3- Procurar nome
            4- Remover nome
            0- Sair`
        ))

        if(isNaN(op) || op < 0 || op > 4){
            alert("!Digite apenas números e positivos!")
            continue
        }

        switch(op){
            case 1:
                do{
                    let nome = prompt(` Digite um nome ou (s para sair):  `)

                    if(!nome){
                        alert(`!Digite algum nome!`)
                        continue
                    }

                    if(!isNaN(nome)){
                        alert(`!Digite apenas nomes!`)
                        continue
                    }

                    if(nome.toLocaleLowerCase() === "s"){
                        alert(`Saindo...`)
                        break
                    }
                    
                    const nomeMinusculo = nome.toLowerCase()

                    if(nomes.includes(nomeMinusculo)){
                        alert(`${nome} já foi adicionado!`)
                        continue
                    }

                    nomes.push(nomeMinusculo)
                    alert(`${nome} adicionado com sucesso!`)

                }while(true)
            break

            case 2:
                alert(`Lista de nomes: \n\n
                    ${nomes.join(" - ")}`)
            break

            case 3:
                let nomeProcurado = prompt(` Digite o nome que deseja saber: `)

                if(!nomeProcurado){
                    alert(`!Digite algum nome!`)
                }else if(!isNaN(nomeProcurado)){
                    alert(`!Digite apenas nomes!`)
                }else if(nomes.includes(nomeProcurado.toLocaleLowerCase())){
                    alert(`${nomeProcurado} está na lista`)
                }else{
                    alert(`${nomeProcurado} não está na lista`)
                }
            break

            case 4:
                if(nomes.length === 0){
                    alert(`!Lista vazia!`)
                    return
                }else{
                    let names = `Lista de nomes:\n\n`

                    nomes.forEach((nome, i) =>{
                        names += `${i} - ${nome}\n`
                    })

                    let indiceStr = prompt(names +`\n Digite o índice do nome que deseja remover:`)

                    if(indiceStr === null || indiceStr.trim() === ""){
                        alert(`Nenhum valor digitado!`)
                        return
                    }

                    let indice = Number(indiceStr)

                    if(!isNaN(indice) && indice >= 0 && indice < nomes.length){
                        let remove = nomes.splice(indice, 1)
                        alert(`${remove[0]} removido com sucesso! \n\n Lista atual: ${nomes.join(" - ")}`)
                    }else{
                        alert(`!Índice inválido. Tente novamente!`)
                    }
                }
            break

            case 0:
                alert(`Encerrando programa principal...`)
            break

            default:
                alert(`!Opção inválida, tente novamente!`)
            break
        }

    }while(op !== 0)
}