const iniciar = () =>{
    let op = 0
    let carrinho = []

    do{
        op = parseInt(prompt(` === MENU === \n
        1- Adicionar produto ao carrinho
        2- Remover produto do carrinho
        3- Ver carrinho
        0- Finalizar compra (sair)`))

        if(isNaN(op) || op < 0 || op > 3){
            alert(`!Digite apenas números e positivos!`)
            continue
        }

        switch(op){
            case 1:
                do{
                    let itemCarrinho = prompt(`Digite um item para o carrinho (s para sair):`)

                    if(!isNaN(itemCarrinho)){
                        alert(`!Apenas itens, sem números!`)
                        continue
                    }

                    if(!itemCarrinho){
                        alert(`!Digite um item!`)
                        continue
                    }

                    if(itemCarrinho.toLocaleLowerCase() === "s"){
                        alert(`Saindo...`)
                        break
                    }

                    const itemEmMinusculo = itemCarrinho.toLocaleLowerCase()

                    if(carrinho.includes(itemEmMinusculo)){
                        alert(`${itemCarrinho} já foi adicionado, coloque outro item!`)
                        continue
                    }

                    carrinho.push(itemEmMinusculo)
                    alert(`${itemEmMinusculo} adicionado com sucesso!`)

                }while(true)
            break

            case 2:
                if(carrinho.length === 0){
                    alert(`Lista vazia!`)
                    return
                }else{
                    let itens = `Lista:\n\n`

                    carrinho.forEach((item, i) =>{
                        itens += `${i} - ${item}\n`
                    })

                    let indiceStr = prompt(`\n Digite o índice do item que deseja excluir:`)

                    if(indiceStr === null || indiceStr.trim() === ""){
                        alert(`Nenhum item digitado!`)
                        return
                    }

                    let indice = Number(indiceStr)

                    if(!isNaN(indice) && indice >= 0 && indice < carrinho.length){
                        let removerItem = carrinho.splice(indice, 1)
                        alert(`${removerItem[0]} item removido com sucesso \n\n Lista atual: ${carrinho.join(" - ")}`)
                    }else{
                        alert(`!Índice inválido. Tente novamente!`)
                    }
                }
            break

            case 3:
                let itens = ""

                carrinho.forEach((item, i) =>{
                    itens += `Lista: ${i} - ${item} \n`
                })

                alert(carrinho.join(" - "))
            break

            case 0:
                if(carrinho.length === 0){
                    alert(`Encerrando programa \n\n Carrinho vazio`)
                }else{
                    alert(`Encerrando programa \n\n Carrinho: ${carrinho.join(" - ")}`)
                }
            break
        }

    }while(op !== 0)
}