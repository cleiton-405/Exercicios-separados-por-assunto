const iniciar = () =>{
    let op = 0
    let carrinho = []

    do{
        op = parseInt(prompt(`
        =========== MENU INTERATIVO ===========\n
        1- ➕ Cadastrar itens
        2- 👁️ Ver itens cadastrados
        3- ❌ Excluir item
        4- 🔍 Buscar item
        5- ✏️ Editar item
        6- 💾 Total de produtos cadastrados
        0- 🔓 Sair\n
        =======================================
        `))

        if(isNaN(op) || op < 0 || op > 6){
            alert(`❌Escolha apenas entre números e positivos (1-6 ou 0 para sair)❌`)
            continue
        }
        
        switch(op){
            case 1:
                do{
                    let nomeItem = prompt(`➕ Informe o nome do item (s para sair):`)

                    if(nomeItem === null || nomeItem.toUpperCase() === "S"){
                        alert(`🔓Saindo do programa de cadastro...`)
                        break
                    }

                    nomeItem = nomeItem[0].toLowerCase() + nomeItem.slice(1)

                    if(!nomeItem.trim()){
                        alert(`❌Digite um nome para o item❌`)
                        continue
                    }

                    if(!isNaN(nomeItem)){
                        alert(`❌O nome do item deve começar com letras e não números❌`)
                        continue
                    }

                    let itemCadastrado = carrinho.some(item => item.nome.toLowerCase() === nomeItem.toLowerCase())

                    if(itemCadastrado){
                        alert(`❌${nomeItem} já foi cadastrado, informe outro❌`)
                        continue
                    }

                    let precoItem = parseFloat(prompt(`💲 Informe o preço do item:`))

                    if(isNaN(precoItem) || precoItem <= 0){
                        alert(`❌Informe um preço❌`)
                        continue
                    }

                    let qtdItem = parseInt(prompt(`➕ Informe a quantidade do item:`))

                    if(isNaN(qtdItem) || qtdItem <= 0){
                        alert(`❌Informe uma quantidade❌`)
                        continue
                    }

                    let objetoItem = {
                        nome: nomeItem,
                        preco: precoItem,
                        quantidade: qtdItem
                    }

                    carrinho.push(objetoItem)
                    alert(`✔️${objetoItem.nome} foi adicionado com sucesso✔️`)
                    
                }while(true)
            break

            case 2:
                if(carrinho.length === 0){
                    alert(`❌Lista vazia!❌`)
                }else{
                    let listaItens = `💾Lista de itens cadastrados: \n\n`

                    carrinho.forEach((item, i) =>{
                        listaItens += `${i + 1}. ${item.nome} - R$ ${item.preco} - Quantidade: ${item.quantidade}\n`
                    })

                    alert(`${listaItens}\n`)
                }
            break

            case 3:
                if(carrinho.length === 0){
                    alert(`❌Lista vazia!❌`)
                }else{
                    do{
                        let removerItemPorNome = prompt(`🔍Digite o nome do item para excluir (s para sair):`)

                        if(removerItemPorNome === null || removerItemPorNome === "s"){
                            alert(`🔓Saindo do excluir item...`)
                            break
                        }

                        let removerItemPorNomeMinusculo = removerItemPorNome.toLowerCase().trim()

                        if(!removerItemPorNomeMinusculo){
                            alert(`❌Digite um nome para buscar❌`)
                            continue
                        }

                        if(!isNaN(removerItemPorNomeMinusculo)){
                            alert(`❌Digite o nome do item, sem números❌`)
                            continue
                        }

                        const indiceItemListaItens = carrinho.findIndex(itens => itens.nome.toLowerCase().trim() === removerItemPorNomeMinusculo)

                        if(indiceItemListaItens !== -1){
                            carrinho.splice(indiceItemListaItens, 1)
                            alert(`✔️${removerItemPorNomeMinusculo} removido com sucesso✔️`)
                        }else{
                            alert(`❌${removerItemPorNomeMinusculo} não encontrado❌`)
                        }
                    }while(true)
                }
            break

            case 4:
                if(carrinho.length === 0){
                    alert(`❌Lista vazia❌`)
                }else{
                    do{
                        let buscarNomeListaItens = prompt(`🔍Digite o nome para buscar o item (s para sair):`)

                        if(buscarNomeListaItens === null || buscarNomeListaItens === "s"){
                            alert(`🔓Saindo do buscar item...`)
                            break
                        }

                        let buscarNomeListaItensMinusculo = buscarNomeListaItens.toLowerCase().trim()

                        if(!buscarNomeListaItensMinusculo){
                            alert(`❌Digite um nome para buscar❌`)
                            continue
                        }

                        if(!isNaN(buscarNomeListaItensMinusculo)){
                            alert(`❌Digite o nome do item, sem números ou símbolos❌`)
                            continue
                        }

                        const indiceBuscarItemLista = carrinho.findIndex(item => item.nome.toLowerCase() === buscarNomeListaItensMinusculo)

                        if(indiceBuscarItemLista !== -1){
                            const carrinhoItens = carrinho[indiceBuscarItemLista]
                            alert(`✔️Produto encontrado: \n\n${carrinhoItens.nome} - R$ ${carrinhoItens.preco} - Quantidade: ${carrinhoItens.quantidade}✔️`)
                        }else{
                            alert(`❌${buscarNomeListaItens} não encontrado❌`)
                        }
                    }while(true)
                }
            break

            case 5:
                if(carrinho.length === 0){
                    alert(`❌Lista vazia❌`)
                }else{
                    do{
                        let editarItem = prompt(`🔍Digite o nome do item que deseja editar (s para sair):`)

                        if(editarItem === null || editarItem === "s"){
                            alert(`🔓Saindo do programa editar item...`)
                            break
                        }

                        let editarItemMinusculo = editarItem.toLowerCase().trim()

                        if(!editarItemMinusculo){
                            alert(`❌Digite um nome❌`)
                            continue
                        }

                        if(!isNaN(editarItemMinusculo)){
                            alert(`❌Digite o nome do item, sem números ou símbolos❌`)
                            continue
                        }

                        let indice = carrinho.findIndex(item => item.nome.toLowerCase() === editarItemMinusculo)

                        if(indice === -1){
                            alert(`❌${editarItemMinusculo} não encontrado na lista❌`)
                            continue
                        }else{
                            let opEditarItem = 0

                            do{
                                opEditarItem = parseInt(prompt(`
                                =========== EDIÇÃO DO ITEM ===========\n
                                1- ✏️ Editar nome
                                2- ✏️ Editar preço
                                3- ✏️ Editar quantidade
                                0- 🔓 Sair\n
                                =======================================
                                `))

                                if(isNaN(opEditarItem) || opEditarItem < 0 || opEditarItem > 3){
                                    alert(`❌Escolha apenas entre números e positivos (1-3 ou 0 para sair)❌`)
                                    continue
                                }

                                switch(opEditarItem){
                                    case 1:
                                        let editarNewNome = prompt(`➕Informe o novo nome:`)

                                        if(editarNewNome === null || !editarNewNome.trim()){
                                            alert(`❌Nome inválido❌`)
                                            break
                                        }

                                        let editarNewNomeMinusculo = editarNewNome.toLowerCase().trim()

                                        if(!isNaN(editarNewNomeMinusculo)){
                                            alert(`❌Nome inválido❌`)
                                            break
                                        }

                                        const temNumero = /\d/.test(editarNewNomeMinusculo)

                                            if(temNumero){
                                                alert(`❌Nome inválido: não pode conter números❌`)
                                                break
                                            }

                                        carrinho[indice].nome = editarNewNomeMinusculo
                                        alert(`✔️Nome alterado com sucesso para ${editarNewNomeMinusculo}✔️`)
                                    break

                                    case 2:
                                        let editarNewPreco = parseFloat(prompt(`💲Informe o novo preço:`))

                                        if(isNaN(editarNewPreco) || editarNewPreco <= 0){
                                            alert(`❌Informe um preço❌`)
                                            break
                                        }

                                        carrinho[indice].preco = editarNewPreco
                                        alert(`✔️Preço alterado com sucesso para ${editarNewPreco}✔️`)
                                    break

                                    case 3:
                                        let editarNewQtd = parseInt(prompt(`➕ Informe a nova quantidade:`))

                                        if(isNaN(editarNewQtd) || editarNewQtd <= 0){
                                            alert(`❌Informe uma quantidade❌`)
                                            break
                                        }

                                        carrinho[indice].quantidade = editarNewQtd
                                        alert(`✔️Quantidade alterado com sucesso para ${editarNewQtd}✔️`)
                                    break

                                    case 0:
                                        alert(`🔓Saindo do programa editar...`)
                                    break

                                    default:
                                        alert(`❌Opção inválida, tente novamente❌`)
                                    break
                                }
                            }while(opEditarItem !== 0)
                        }
                    }while(true)
                }
            break

            case 6:
                if(carrinho.length === 0){
                    alert(`❌Lista vazia❌`)
                }else{
                    let listaTotalItens = `💾Lista de itens cadastrados: \n\n`

                    carrinho.forEach((item, i) =>{
                        listaTotalItens += `${i + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)} - Quantidade: ${item.quantidade}\n`
                    })

                    alert(`${listaTotalItens}\n\n Total de itens cadastrados: ${carrinho.length}`)
                }
            break

            case 0:
                alert(`🔓Saindo do programa...`)
            break

            default:
                alert(`❌Opção inválida, tente novamente❌`)
            break
        }

    }while(op !== 0)
}