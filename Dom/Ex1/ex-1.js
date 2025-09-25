let produtos = []

const adicionarItem = ()=>{
    const nameValue = document.getElementById("name").value.toLowerCase().trim()
    const precoValue = Number(document.getElementById("preco").value)
    const qtdValue = Number(document.getElementById("qtd").value)

    if(!nameValue){
        alert(`❌Digite um nome❌`)
        return
    }

    if(!/^[a-zA-Z\s]+$/.test(nameValue)){
        alert(`❌Digite apenas nomes, sem números ou símbolos❌`)
        return
    }

    let itemCadastrado = produtos.some(item => item.nome.toLowerCase() === nameValue.toLowerCase())

    if(itemCadastrado){
        alert(`❌${nameValue} já adicionado, cadastre outro produto❌`)
        return
    }

    if(isNaN(precoValue) || precoValue <= 0){
        alert(`❌Digite um preço válido❌`)
        return
    }

    if(isNaN(qtdValue) || qtdValue <= 0){
        alert(`❌Diigte uma quantidade válida❌`)
        return
    }

    let objetoItem = {
        nome: nameValue,
        preço: precoValue,
        quantidade: qtdValue
    }

    produtos.push(objetoItem)
    alert(`✔️${objetoItem.nome} adicionado com sucesso✔️`)

    atualizarTabela()

    document.getElementById("name").value = ""
    document.getElementById("preco").value = ""
    document.getElementById("qtd").value = ""
}

const atualizarTabela = () =>{
    const tbody = document.querySelector("#tabelaProdutos tbody")
    tbody.innerHTML = ""

    //Lista para mostrar em uma tabela
    produtos.forEach(produto =>{
        const tr = document.createElement("tr")

        const tdNome = document.createElement("td")
        tdNome.textContent = produto.nome
        tr.appendChild(tdNome)

        const tdPreco = document.createElement("td")
        tdPreco.textContent = `R$ ${produto.preço.toFixed(2)}`
        tr.appendChild(tdPreco)

        const tdQtd = document.createElement("td")
        tdQtd.textContent = produto.quantidade
        tr.appendChild(tdQtd)

        //Botão criado dinamicamente para remover um produto
        const tdAcao = document.createElement("td")
        const btnRemover = document.createElement("button")
        btnRemover.classList.add("btnRemover")

        btnRemover.textContent = "❌" //Texto do botão
        btnRemover.onclick = () => excluirProduto(produto.nome)//Ao clicar ele remove o item

        tdAcao.appendChild(btnRemover)
        tr.appendChild(tdAcao)

        tbody.appendChild(tr)
    })
}

const excluirProduto = (nome) =>{ //Função para remover um produto
    const index = produtos.findIndex(p => p.nome === nome) //Busca pelo nome do item

    if(index !== -1){
        produtos.splice(index, 1)
        alert(`✔️ ${nome} removido com sucesso ✔️`)
        atualizarTabela()
    }else{
        alert(`❌ ${nome} não encontrado ❌`)
    }
}