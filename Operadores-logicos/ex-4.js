const output = document.getElementById("output")

const resultado = () =>{
    const idade = document.getElementById("idade")
    const idadeValue = Number(idade.value)

    const text = document.getElementById("text").value.toLowerCase()

    idadeValue >= 18 && text === "sim" ? alert(" !!! Tudo certo !!! ") : alert(" !!! Tudo errado !!! ")

    idade.value = ""
    text.value = ""
}