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

const addProduto = () =>{
    const nameProduct = document.getElementById("nameProduct").value.trim().toLowerCase()
    const qtdProduct = Number(document.getElementById("qtdProduct").value.trim())
    const priceProduct = Number(document.getElementById("priceProduct").value.trim())

    if(!nameProduct){
        showAlertError("❌ Please enter a name ❌")
        return
    }

    if(!/^[A-Za-zÀ-ÖØ-öø-ÿ\s]+$/.test(nameProduct)){
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

const deleteProduct = (name) => {
    const index = listProducts.findIndex(product => product.name === name)

    if(index !== -1){
        listProducts.splice(index, 1)
        showAlertSuccess(`✔️${name} deleted successfully ✔️`)
        updateArrayProducts()
    }else{
        showAlertError(`❌ ${name} product not found ❌`)
    }
}

const updateArrayProducts = () =>{  
    if(listProducts.length === 0){
        document.getElementById("list-products").innerHTML = 
        "<p>No products added yet</p>"
        return
    }

    let html = `
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
                <td>R$ ${product.price.toFixed(2)}</td>
                <td>${product.quantity}</td>
                <td>R$ ${totalProducts.toFixed(2)}</td>
                <td>R$ ${totalGeral.toFixed(2)}</td>
                <td>
                <button id="buttonDeleteProduct" onclick="deleteProduct('${product.name}')">❌</button>
                </td>
            </tr>
        `

    })

    html += `</table>`

    document.getElementById("list-products").innerHTML = html
}