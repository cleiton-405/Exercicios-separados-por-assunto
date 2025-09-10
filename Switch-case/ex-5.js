const output = document.getElementById("output")

const resultado = () =>{
    const p1 = document.getElementById("p1").value.toLowerCase()
    const p2 = document.getElementById("p2").value.toLowerCase()
    const op = document.getElementById("op").value.toLowerCase()

    let resultado = 0

    if((p1 !== "true" && p1 !== "false") || (p2 !== "true" && p2 !== "false")){
        alert(" !!! Apenas true ou false são permitidos !!! ")
        return
    }

    switch(op){
        case "and":
            resultado = p1 && p2
        break
        case "or":
            resultado = p1 || p2
        break
        case "xor":
            resultado = (p1 || p2) && !(a && p2)
        break
        case "nand":
            resultado = !(p1 && p2)
        break
    }

    output.innerHTML = `Resultado = ${resultado}`

    document.getElementById("p1").value = ""
    document.getElementById("p2").value = ""
    document.getElementById("op").value = ""
}