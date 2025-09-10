const output = document.getElementById("output")

const resultado = () =>{
    const n1 = Number(document.getElementById("n1").value)

    if(isNaN(n1) || n1 < 0 || n1 > 100){
        alert(" !!! Apenas notas entre 0 - 100 !!! ")
        return
    }

    let conceito

    switch(Math.floor(n1 / 10)){
        case 10:
            conceito = "A"
        break
        case 9:
            conceito = "A"
        break
        case 8:
            conceito = "B"
        break
        case 7:
            conceito = "C"
        break
        case 6:
            conceito = "D"
        break
        default:
            conceito = "F"
    }

    output.innerHTML = `Nota: ${n1} <br>
    Conceito: ${conceito}`

    document.getElementById("n1").value = ""
}