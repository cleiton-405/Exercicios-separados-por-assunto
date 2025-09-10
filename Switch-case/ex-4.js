const output = document.getElementById("output")

const resultado = () =>{

    const op = document.getElementById("op").value
    const n1 = Number(document.getElementById("n1").value)
    const n2 = Number(document.getElementById("n2").value)
    
    let resultado = 0

    if(isNaN(n1) || isNaN(n2)){
        alert(" !!! Preencha apenas com números !!! ")
        return
    }

    switch(op){
        case "+":
            resultado = n1 + n2
        break
            
        case "-":
            resultado = n1 - n2
        break

        case "*":
            resultado = n1 * n2
        break

        case "/":
            resultado = (n2 === 0) ? output.innerHTML = " !!! Não têm divisão por zero !!! " : n1 / n2
        break

        case "^":
            resultado = Math.pow(n1, n2) // resultado = n1 ** n2
        break

        case "%":
            resultado = n1 % n2
        break
    }

    output.innerHTML = `Resultado da ${op}: ${resultado}`

    document.getElementById("n1").value = ""
    document.getElementById("n2").value = ""
    document.getElementById("op").value = ""
}