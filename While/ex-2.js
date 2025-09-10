const output = document.getElementById("output")

let soma = 0

const resultado = () =>{
   let soma = 0
    let num = 0

    while(num >= 0){
        num = parseFloat(prompt("Digite um número (negativo para sair):"))

        if(num >= 0){
            soma += num
        }
    }

    output.innerHTML = `Soma: ${soma}`
}