const output = document.getElementById("output")

const resultado = () =>{
    const idade = document.getElementById("idade")
    const idadeValue = Number(idade.value)

    const estaAcompanhado = document.getElementById("text1").value.toLowerCase()
    const temIngresso = document.getElementById("text2").value.toLowerCase()

    if((temIngresso !== "sim" && temIngresso !== "não") || (estaAcompanhado !== "sim" && estaAcompanhado !== "não")){
        alert(" !!! Apenas sim ou não !!! ")
        return
    }

    if(temIngresso === "sim" && idadeValue >= 18){
        return output.innerHTML = " !!! Pode entrar !!! "
    }

    if (temIngresso === "sim" && idadeValue < 18 && estaAcompanhado === "sim") {
        return output.innerHTML = "!!! Pode entrar !!!"
    }

    output.innerHTML = "!!! Não pode entrar !!!"

    idade.value = ""
    document.getElementById("text1").value = ""
    document.getElementById("text2").value = ""
}