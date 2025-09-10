const resultado = () =>{
    let numeroSecreto = Math.floor(Math.random() * 10) + 1
    let chute = 0

    while(chute !== numeroSecreto){
        chute = parseInt(prompt("Adivinhe o número entre 1 e 10:"))

        if(chute < numeroSecreto){
            alert("Muito baixo! Tente novamente.")
        }else if(chute > numeroSecreto){
            alert("Muito alto! Tente novamente.")
        }
    }

    alert("Parabéns! Você acertou o número " + numeroSecreto + "!")

}