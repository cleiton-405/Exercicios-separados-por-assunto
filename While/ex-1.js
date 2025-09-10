const output = document.getElementById("output")

const resultado = () =>{
    let i = 1

    while(i <= 10){
        output.innerHTML += `Número: ${i} <br>`
        i++
    }
}