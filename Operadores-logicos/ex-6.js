const output = document.getElementById("output")

const resultado = () =>{
    const clienteVIP = document.getElementById("cVIP").value.trim().toLocaleLowerCase()
    const totalCompras = document.getElementById("tc").value.trim().toLocaleLowerCase()
    const cuponValido = document.getElementById("cv").value.trim().toLocaleLowerCase()

    if((clienteVIP !== "sim" && clienteVIP !== "não") || (cuponValido !== "sim" && cuponValido !== "não")){
        return output.innerHTML = " !!! Apenas sim ou não !!! "
    }

    clienteVIP === "sim" && (totalCompras > 500 && cuponValido === "sim") ? output.innerHTML = " !!! Promoção válida !!! " : output.innerHTML = " !!! Sem promoção !!! "

    document.getElementById("cVIP").value = ""
    document.getElementById("tc").value = ""
    document.getElementById("cv").value = ""
}

// Regras:
// A promoção é válida se:
// - O cliente for VIP
// - OU tiver feito compras acima de 500 E o cupom for válido

// Pergunta:
// Verifique se a promoção é válida e imprima "Promoção aplicada" ou "Sem promoção"