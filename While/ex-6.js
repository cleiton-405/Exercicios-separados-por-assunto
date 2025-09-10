const resultado = () =>{
    let num = parseInt(prompt(" Digite um número entre 1-100: "))

    while(isNaN(num) || num < 1 || num > 100){
        num = parseInt(prompt(" Valor inválido! Digite um número entre 1 e 100: "))
    }

    alert(" Número válido: "+ num)
}