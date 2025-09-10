const output = document.getElementById("output")

const resultado = () =>{
    const op = document.getElementById("op").value
    const peso = Number(document.getElementById("peso").value)

    let resultado = 0

    if(!op || !peso){
        alert(" !!! Preecha os campos !!! ")
    }

    switch(op){
        case "1":
            resultado = peso * 12
        break
        case "2":
            resultado = peso * 10
        break
        case "3":
            resultado = peso * 8
        break 
        case "4":
            resultado = peso * 15
        break
    }

    output.innerHTML = `Total do frete: R$ ${resultado.toFixed(2)}`

    document.getElementById("op").value = ""
    document.getElementById("peso").value = ""
}