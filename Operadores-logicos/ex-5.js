const output = document.getElementById("output")

const resultado = () =>{
    const sp = document.getElementById("sp").value.trim().toLowerCase()
    const sj = document.getElementById("sj").value.trim().toLowerCase()
    const a = document.getElementById("a").value.trim().toLowerCase()

    if((sp !== "sim" && sp !== "não") || (sj !== "sim" && sj !== "não") || (a !== "sim" && a !== "não")){
        alert(" !!! Apenas sim ou não !!! ")
        return
    }

    if((sp === "sim" || sj === "sim") && a === "sim"){
        output.innerHTML = "Alerta ativado"
    }else{
        output.innerHTML = "Tudo seguro"
    }

    document.getElementById("sp").value = ""
    document.getElementById("sj").value = ""
    document.getElementById("a").value = ""
}