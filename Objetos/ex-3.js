const iniciar = () =>{
    let op = 0
    let produtos = []

    do{
        op = parseInt(prompt(`
        =========== MENU INTERATIVO ===========\n
        1- Cadastrar produtos
        2- Listar produtos
        3- Buscar produto por nome
        4- Excluir produto
        5- Total de produtos cadastrados
        0- Sair do programa\n
        =======================================
        `))

        if(isNaN(op) || op < 0 || op > 5){
            alert(`!Digite apenas números e positivos!`)
            continue
        }

        switch(op){
            case 1:
                do{
                    let nomeProduto = prompt(`Digite o nome do produto (s para sair)`)

                    if(nomeProduto === null || nomeProduto.toLowerCase() === "s"){
                        alert(`Saindo do cadastrar produto...`)
                        break
                    }
                    
                    if(!nomeProduto.trim()){
                        alert(`!Digite um nome para o produto!`)
                        continue
                    }

                    if(!isNaN(nomeProduto)){
                        alert(`!Não pode iniciar com número!`)
                        continue
                    }

                    let itemExistente = produtos.some(item => item.nome.toLowerCase() === nomeProduto.toLowerCase())

                    if(itemExistente){
                        alert(`O produto (${nomeProduto}) já está cadastrado !!!`)
                        continue
                    }

                    let precoProduto = parseFloat(prompt(`Digite o preço do produto:`))

                    if(isNaN(precoProduto) || precoProduto <= 0){
                        alert(`!Digite um preço válido, maior que zero e sem letras!`)
                        continue
                    }

                    let quantidadePreco = parseInt(prompt(`Digite a quantidade de produtos:`))

                    if(isNaN(quantidadePreco) || quantidadePreco <= 0){
                        alert(`!Digite uma quantidade válida, maior que zero e sem letras!`)
                        continue
                    }

                    let objetoProduto = {
                        nome: nomeProduto,
                        preco: precoProduto,
                        quantidade: quantidadePreco
                    }

                    produtos.push(objetoProduto)

                    alert(`${objetoProduto.nome} adicionado com sucesso !`)

                }while(true)
            break

            case 2:
                if(produtos.length === 0){
                    alert(`Nenhum produto cadastrado ainda!`)
                }else{
                    let listaProdutos = `Lista de produtos:\n\n`

                    produtos.forEach((produto, i) =>{
                        listaProdutos += `${i + 1}. ${produto.nome} - R$ ${produto.preco.toFixed(2)} - Quantidade: ${produto.quantidade} \n`
                    })

                    alert(listaProdutos)
                }
            break

            case 3:
                if(produtos.length === 0){
                    alert(`Nenhum produto cadastrado ainda!`)
                }else{
                    do{
                        let nomeProdutoBuscado = prompt(`Digite o nome que deseja ver (S para sair):`)

                        if(nomeProdutoBuscado === null || nomeProdutoBuscado.toLowerCase() === "s"){
                            alert(`Saindo do programa de buscar por nome...`)
                            break
                        }

                        let nomeProdutoBuscadoEmMinusculo = nomeProdutoBuscado.toLowerCase().trim()

                        if(!nomeProdutoBuscadoEmMinusculo){
                            alert(`!Digite um nome para buscar!`)
                            continue
                        }

                        if(!isNaN(nomeProdutoBuscadoEmMinusculo)){
                            alert(`!Digite apenas nomes!`)
                            continue
                        }

                        const indiceEncontrado = produtos.findIndex(produto => produto.nome.toLowerCase() === nomeProdutoBuscadoEmMinusculo)

                        if(indiceEncontrado !== -1){
                            const produto = produtos[indiceEncontrado]
                            alert(`Produto encontrado: ${produto.nome} - R$ ${produto.preco.toFixed(2)} - Quantidade: ${produto.quantidade}`)
                        }else{
                            alert(`Produto "${nomeProdutoBuscado}" não encontrado na lista.`)
                        }

                        /* 
                        
                        const produtoEncontrado = produtos.filter(produto => produto.nome.toLowerCase().includes(nomeProdutoBuscadoEmMinusculo))

                        if(produtoEncontrado.length > 0){
                            let listaProdutoEncontrado = produtoEncontrado.map(produto => `${produto.nome} - R$ ${produto.preco.toFixed(2)} - Quantidade: ${produto.quantidade}`)
                            alert(`Produto encontrado:\n\n${listaProdutoEncontrado}`)
                        }else{
                            alert(`Produto "${nomeProdutoBuscado}" não está na lista!`)
                        }

                        */

                    }while(true)
                }
            break

            case 4:
                if(produtos.length === 0){
                    alert(`Lista vazia!`)
                }else{
                    do{
                        let listaProdutos = `Produtos cadastrados: \n\n`

                        produtos.forEach((produto, i) =>{
                            listaProdutos += `${i + 1}. ${produto.nome} - R$ ${produto.preco} - Quantidade: ${produto.quantidade} \n`
                        })

                        alert(listaProdutos)

                        let nomeProdutoExcluir = prompt(`\n Digite o nome do produto para excluir:`)

                        if(nomeProdutoExcluir === null || nomeProdutoExcluir === "s"){
                            alert(`Saindo do programa excluir produto...`)
                            break
                        }

                        let nomeProdutoExcluirMinusculo = nomeProdutoExcluir.toLowerCase().trim()

                        if(!nomeProdutoExcluirMinusculo){
                            alert(`!Digite um nome!`)
                            continue
                        }

                        if(/^\d+$/.test(nomeProdutoExcluirMinusculo)){
                            alert(`!O nome não pode ser um número!`)
                            continue
                        }

                        let index = produtos.findIndex(produto => produto.nome.toLowerCase() === nomeProdutoExcluirMinusculo)

                        if(index !== -1){
                            produtos.splice(index, 1)
                            alert(`Produto "${nomeProdutoExcluir}" removido com sucesso!`)
                        }else{
                            alert(`Produto "${nomeProdutoExcluir}" não encontrado.`)
                        }

                        if(produtos.length === 0){
                            alert("Todos os produtos foram removidos. Encerrando.")
                            break
                        }
                    }while(true)
                }
            break

            case 5:
                if(produtos.length === 0){
                    alert(`Lista vazia!`)
                }else{
                    let listaProdutos = `Produtos cadastrados: \n\n`

                    produtos.forEach((produto, i) =>{
                        listaProdutos += `${i + 1}. ${produto.nome} - R$ ${produto.preco} - Quantidade: ${produto.quantidade} \n`
                    })

                    const totalProdutos = produtos.reduce((qtdTotal, produto) => qtdTotal + produto.quantidade, 0)

                    alert(`${listaProdutos} \n Total de produtos: ${totalProdutos}`)
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