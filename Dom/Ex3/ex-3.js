let listProducts = []

/////////////////////////////////////////////////////////////////////////////

/// Função para mensagem de erro ///

const showAlertError = (mensagem) =>{
    const alert = document.getElementById("alert-error-id")
    const alertText = document.getElementById("alert-text-error")

    alertText.innerText = mensagem
    alert.style.display = "block"

    setTimeout(() =>{
        closedAlertError()
    }, 2500)
}

const closedAlertError = () =>{
    document.getElementById("alert-error-id").style.display = "none"
}

/////////////////////////////////////////////////////////////////////////////

/// Função para mensagem de sucesso ///

const showAlertSuccess = (mensagem) =>{
    const alert = document.getElementById("alert-sucess-id")
    const alertText = document.getElementById("alert-text-sucess")

    alertText.innerText = mensagem
    alert.style.display = "block"

    setTimeout(() =>{
        closedAlertSuccess()
    }, 2500)
}

const closedAlertSuccess = () =>{
    document.getElementById("alert-sucess-id").style.display = "none"
}

/////////////////////////////////////////////////////////////////////////////

/// Função para limpar campos ///

const cleanFields = () =>{
    document.getElementById("nameProduct").value = ""
    document.getElementById("qtdProduct").value = ""
    document.getElementById("priceProduct").value = ""
}

/////////////////////////////////////////////////////////////////////////////

const validacao = () =>{
    const nameProduct = document.getElementById("nameProduct").value.trim().toLowerCase()
    const qtdProduct = Number(document.getElementById("qtdProduct").value.trim())
    const priceProduct = Number(document.getElementById("priceProduct").value.trim())

    return {nameProduct, qtdProduct, priceProduct}
}

const addProduct = () =>{
    const {nameProduct, qtdProduct, priceProduct} = validacao()

    if(!nameProduct){
        showAlertError("❌ Please enter a name ❌")
        return
    }

    if(!/^[A-Za-zÀ-ÖØ-öø-ÿ0-9\s\-]+$/.test(nameProduct)){
        showAlertError(`❌ Enter only names, no numbers or symbols ❌`)
        return
    }

    let productRegistered = listProducts.some(product => product.name.toLowerCase() === nameProduct.toLowerCase())

    if(productRegistered){
        showAlertError(`❌ ${nameProduct} already registered, enter another product ❌`)
        cleanFields()
        return
    }

    if(isNaN(qtdProduct) || qtdProduct <= 0){
        showAlertError("❌ Enter a valid quantity greater than zero ❌")
        return
    }

    if(isNaN(priceProduct) || priceProduct <= 0){
        showAlertError(`❌ Enter a valid price greater than zero ❌`)
        return
    }

    let objectProduct = {
        name: nameProduct,
        price: priceProduct,
        quantity: qtdProduct
    }

    listProducts.push(objectProduct)

    showAlertSuccess(`✔️ ${objectProduct.name} added successfully ✔️`)

    cleanFields()
    updateArrayProducts()
}

const updateArrayProducts = () =>{  
    if(listProducts.length === 0){
        document.getElementById("list-products").innerHTML = 
        "<p>No products added yet</p>"
        return
    }

    let html = 
    `
        <table>
            <tr>
                <th><strong>Name</strong></th>
                <th><strong>Price</strong></th>
                <th><strong>Quantity</strong></th>
                <th><strong>Total/qtd</strong></th>
                <th><strong>Total geral:</strong></th>
            </tr>
    `
    let totalGeral = 0

    listProducts.forEach(product =>{
        const totalProducts = product.price * product.quantity
        totalGeral += totalProducts

        html += 
        `
            <tr>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                <td>${product.quantity}</td>
                <td>${totalProducts.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                <td>${totalGeral.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}</td>
                <td>
                <button class="buttonEditProduct" onclick="editProduct('${product.name}')">✏️</button>
                </td>
                <td>
                <button class="buttonDeleteProduct" onclick="deleteProduct('${product.name}')">❌</button>
                </td>
            </tr>
        `

    })

    html += `</table>`

    document.getElementById("list-products").innerHTML = html
}

const editProduct = (productName) =>{
    const product = listProducts.find(p => p.name.toLowerCase() === productName.toLowerCase())

    if(!product){
        showAlertError("❌ Product not found ❌")
        return
    }

    // Preenche os campos de edição com os dados do produto
    document.getElementById("nameProduct").value = product.name
    document.getElementById("qtdProduct").value = product.quantity
    document.getElementById("priceProduct").value = product.price.toFixed(2)

    // Muda o texto do botão para "Atualizar Produto"
    document.getElementById("btnRegister").innerText = "Update Product"
    
    // Atualiza o comportamento do botão
    document.getElementById("btnRegister").onclick = () =>{
        updateProduct(product)
    }
}

const updateProduct = (product) =>{
    const {nameProduct, qtdProduct, priceProduct} = validacao()

    const productExists = listProducts.some(p => p !== product && p.name.toLowerCase() === nameProduct.toLowerCase())

    /*
        p !== product = Verifica se o produto atual do array não é o produto que está sendo editado. Isso evita que o produto seja comparado com ele mesmo, já que ao editar, o nome pode ser alterado para o mesmo nome que já existe.
    */
    
    if(productExists){
        showAlertError(`❌ ${nameProduct} já está cadastrado ❌`)
        return
    }

    if(!nameProduct || isNaN(qtdProduct) || qtdProduct <= 0 || isNaN(priceProduct) || priceProduct <= 0){
        showAlertError("❌ Please enter valid product data ❌")
        return
    }

    // Atualiza os dados do produto
    product.name = nameProduct
    product.quantity = qtdProduct
    product.price = priceProduct

    showAlertSuccess(`✔️ ${product.name} updated successfully ✔️`)

    // Atualiza a tabela e limpa os campos
    updateArrayProducts()
    cleanFields()

    // Restaura o texto e ação do botão de adicionar
    document.getElementById("btnRegister").innerText = "Add Product"
    document.getElementById("btnRegister").onclick = addProduct
}

const deleteProduct = (name) => {
    const index = listProducts.findIndex(product => product.name === name)

    listProducts.splice(index, 1)
    showAlertSuccess(`✔️${name} deleted successfully ✔️`)
    updateArrayProducts()
    
}