const iniciar = () =>{
    let op = 0
    let carrinho = []

    do{
        op = parseInt(prompt(`==== MENU ==== \n
        1 - Adicionar item ao carrinho
        2 - Ver itens do carrinho
        3 - Remover item do carrinho
        4 - Ver total de itens e valor total
        0 - Sair    
        `))

        if(isNaN(op) || op < 0 || op > 4){
            alert(`!Digite apenas números e positivos!`)
            continue
        }

        switch(op){
            case 1:
                do{
                    let nome = prompt(`Digite o nome (s para sair):`)

                    if(nome === null || nome.toLocaleLowerCase() === "s"){
                        alert(`Saindo...`)
                        break
                    }

                    if(!nome.trim()){
                        alert(`!Digite um item!`)
                        continue
                    }

                    if(!isNaN(nome)){
                        alert(`!O nome não pode ser um número!`)
                        continue
                    }

                    let itemJaExiste = carrinho.some(item => item.nome.toLowerCase() === nome.toLowerCase())

                    if(itemJaExiste){
                        alert(`O item "${nome}" já está no carrinho!`)
                        continue
                    }

                    let preco = parseFloat(prompt(`Digite o valor:`))

                    if(isNaN(preco) || preco <= 0){
                        alert(`!Digite valores e maior que zero!`)
                        continue
                    }

                    let objeto = {
                        nome: nome.trim(),
                        preco: preco
                    }

                    carrinho.push(objeto)

                    alert(`${objeto.nome} adicionado com sucesso!`)

                }while(true)
            break

            case 2:
                if(carrinho.length === 0){
                    alert(`Lista vazia!`)
                }else{
                    let mensagem = "Itens no carrinho:\n\n"

                    carrinho.forEach((item, i) =>{
                        mensagem += `${i + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}\n`
                    })

                    alert(mensagem)
                }
            break

            case 3:
                if(carrinho.length === 0){
                    alert(`Lista vazia!`)
                }else{
                    let itens = "Itens no carrinho:\n\n"

                    carrinho.forEach((item, i) =>{
                        itens += `${i + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}\n`
                    })                    

                    let indice = prompt(itens +`\n Digite o índice do objeto que deseja excluir:`)

                    if(indice === null || indice.trim() === ""){
                        alert(`Nenhum item digitado!`)
                        return
                    }

                    let removerIndiceObjeto = Number(indice)

                    if(!isNaN(removerIndiceObjeto) && removerIndiceObjeto > 0 && removerIndiceObjeto <= carrinho.length){
                        let remover = carrinho.splice(removerIndiceObjeto - 1, 1)

                        let listaAtualizada = "Lista atual:\n\n"
                        
                        carrinho.forEach((item, i) =>{
                            listaAtualizada += `${i + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}\n`
                        })

                        alert(`${remover[0].nome} removido com sucesso!\n\n${listaAtualizada}`)
                    }else{
                        alert(`!Índice inválido. Tente novamente!`)
                    }
                }
            break

            case 4:
                if(carrinho.length === 0){
                    alert(`Lista vazia!`)
                }else{
                    const total = carrinho.reduce((acc, item) => acc + item.preco, 0)

                    let mensagem = ""

                    carrinho.forEach((item, i) =>{
                        mensagem += `${i + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}\n`
                    })

                    mensagem += `\n${carrinho.length} itens no carrinho \n\nTotal: R$ ${total.toFixed(2)}`

                    alert(mensagem)    
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