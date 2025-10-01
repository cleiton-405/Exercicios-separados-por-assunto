const output = document.getElementById("output")

let produtos = []

const adicionarPrdouto = () =>{
    const nameProdutoValue = document.getElementById("nameProduto").value.toLowerCase().trim()
    const precoProdutoValue = Number(document.getElementById("precoProduto").value)
    const qtdProdutoValue = Number(document.getElementById("qtdProduto").value)

    if(!nameProdutoValue){
        alert(`❌Digite um nome❌`)
        return
    }

    if(!/^[a-zA-Z\s]+$/.test(nameProdutoValue)){
        alert(`❌Digite um nome, sem números ou símbolos❌`)
        return
    }

    let produtoCadastrado = produtos.some(produto => produto.nome.toLowerCase() === nameProdutoValue.toLowerCase())

    if(produtoCadastrado){
        alert(`❌${nameProdutoValue} já cadastrado, digite outro produto❌`)

        document.getElementById("nameProduto").value = ""
        document.getElementById("precoProduto").value = ""
        document.getElementById("qtdProduto").value = ""

        return
    }

    if(isNaN(precoProdutoValue) || precoProdutoValue <= 0 ){
        alert(`❌Digite um preço válido❌`)
        return
    }

    if(isNaN(qtdProdutoValue) || qtdProdutoValue <= 0){
        alert(`❌Digite uma quantiade válida❌`)
        return
    }

    let objetoProduto = {
        nome: nameProdutoValue,
        preco: precoProdutoValue,
        quantidade: qtdProdutoValue
    }

    produtos.push(objetoProduto)
    alert(`✔️${objetoProduto.nome} adicionado com sucesso✔️`)

    limparCampos()
    atualizarArrayProdutos()
}

const atualizarArrayProdutos = () =>{
    let html = ""
    let totalGeralProdutos = 0
    let totalProdutosCadastrados = 0

    produtos.forEach(produto =>{
        const totalProduto = produto.preco * produto.quantidade
        totalGeralProdutos += totalProduto
        totalProdutosCadastrados += produto.quantidade

        html += `
        <ul>
            <li><strong>Nome:</strong> ${produto.nome}</li>
            <li><strong>Preço:</strong> R$ ${produto.preco.toFixed(2)}</li>
            <li><strong>Quantidade:</strong> ${produto.quantidade}</li>
        </ul>
        <hr>    
        `
    })

    html += `
    <div style="margin-top: 20px;">
        <p>🧾Total geral: R$ ${totalGeralProdutos.toFixed(2)}</p><br>
        <p>📦Total De produtos cadastrados: ${totalProdutosCadastrados}</p>
    </div>
    `

    output.innerHTML = html
}

const excluirProduto = () =>{
    const nameProdutoValue = document.getElementById("nameProduto").value.toLowerCase().trim()

    if(!nameProdutoValue){
        alert(`❌Digite um nome❌`)
        return
    }

    if(!/^[a-zA-Z\s]+$/.test(nameProdutoValue)){
        alert(`❌Digite um nome, sem números ou símbolos❌`)
        return
    }

    const index = produtos.findIndex(produto => produto.nome.toLowerCase() === nameProdutoValue.toLowerCase())

    if(index !== -1){
        const nomeExcluido = produtos[index].nome
        produtos.splice(index, 1)
        alert(`✔️ ${nomeExcluido} removido com sucesso ✔️`)
        atualizarArrayProdutos()
    }else{
        alert(`❌ ${nameProdutoValue} não encontrado ❌`)
    }

    limparCampos()
}

const editarProduto = () =>{
    const nameProdutoEditarValue = document.getElementById("nameProdutoEditar").value.toLowerCase().trim()

    if(!nameProdutoEditarValue){
        alert(`❌Digite um nome válido❌`)
        return
    }

    if(!/^[a-zA-Z\s]+$/.test(nameProdutoEditarValue)){
        alert(`❌Digite um nome, sem números ou símbolos❌`)
        return
    }

        const indice = produtos.findIndex(produto => produto.nome === nameProdutoEditarValue)

        if(indice === -1){
            alert(`❌${nameProdutoEditarValue} não encontrado na lista❌`)
            return
        }
        
        const precoProdutoEditarValue = Number(document.getElementById("precoProdutoEditar").value)
        const qtdProdutoEditarValue = Number(document.getElementById("qtdProdutoEditar").value)

        if(isNaN(precoProdutoEditarValue) || precoProdutoEditarValue <= 0){
            alert(`❌Digite um preço válido❌`)
            return
        }

        if(isNaN(qtdProdutoEditarValue) || qtdProdutoEditarValue <= 0){
            alert(`❌Digite uma quantidade válida❌`)
            return
        }

        produtos[indice].preco = precoProdutoEditarValue
        produtos[indice].quantidade = qtdProdutoEditarValue

        alert(`✔️Produto ${produtos[indice].nome} atualizado com sucesso✔️`)

        document.getElementById("nameProdutoEditar").value = ""
        document.getElementById("precoProdutoEditar").value = ""
        document.getElementById("qtdProdutoEditar").value = ""

        atualizarArrayProdutos()
}

const limparCampos = ()=>{
    document.getElementById("nameProduto").value = ""
    document.getElementById("precoProduto").value = ""
    document.getElementById("qtdProduto").value = ""
}