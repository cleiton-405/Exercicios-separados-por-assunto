const iniciar = () =>{
    let numeros = []
    let op = 0

    do{
        op = parseInt(prompt(
            "Escolha uma opção:\n"+
            "1 - Adicionar números\n"+
            "2 - Mostrar números pares\n"+
            "3 - Mostrar números ímpares\n"+
            "4 - Mostrar números\n"+
            "5 - Sair"
        ))

        switch(op){
            case 1:
                let qtdNums = parseInt(prompt(" Digite a quantidade de números: "))
                let i = 0
                
                if(isNaN(qtdNums) || qtdNums < 0){
                    alert(" ! Quantidade inválida, digite apenas números positivos")
                }else{
                    while(i < qtdNums){
                        let num = parseInt(prompt(" Digite um número: "))

                        if(isNaN(num) || num < 0){
                            alert(" ! Apenas números positivos ! ")
                            continue
                        }

                        numeros.push(num)
                        alert(" Número adicionado: "+num)
                        i++
                    }
                }
            break

            case 2:
                if(numeros.length > 0){
                    const numerosPares = numeros.filter((num) => num % 2 === 0)
                    if(numerosPares.length > 0){
                        alert("Números pares:\n" +numerosPares.join("-"))
                    }else{
                        alert("Não há números pares na lista.")
                    }
                }else{
                    alert("Lista de números está vazia.")
                }
            break

            case 3:
                if(numeros.length > 0){
                    const numerosImpares = numeros.filter((num) => num % 2 === 1)
                    if(numerosImpares.length > 0){
                        alert("Números pares:\n" +numerosImpares.join("-"))
                    }else{
                        alert("Não há números pares na lista.")
                    }
                }else{
                    alert("Lista de números está vazia.")
                }
            break

            case 4:
                alert(" Números: "+numeros.join("-"))
            break

            case 5:
                alert(" ! Saiu do programa !")
            break

            default:
                alert(" ! Opção inválida, tente novamente !")
            break
        }
    }while(op !== 5)
}