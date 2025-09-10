const iniciar = () =>{
    let op = 0
    
    do{
        op = parseInt(prompt("Escolha umda das opções: \n"+
            "1- Contar de 1 a 10 \n"+
            "2- Tabuada de um número \n"+
            "3- Contar números pares de 1 a 20 \n"+
            "4- Soma de 3 números informados \n"+
            "5- Imprimir um triângulo com asteriscos \n"+
            "0- Sair \n"
        ))

        if(isNaN(op) || op < 0 || op > 6){
            alert(" ! Escolha apenas entre 1-5 ou 0 para sair ! ")
            continue
        }

        switch(op){
            case 1:
                for(let i = 1; i <= 10; i++){
                    setTimeout(() =>{
                        console.log("Contagem: " + i)
                    }, i * 1000)
                }

            break

            case 2:
                let n1 = parseInt(prompt(" Digite um número para mostrar a tabuada: "))

                for(let i = 0; i <= 10; i++){
                    let tabuada = 0
                    tabuada = n1 * i

                    alert(`${n1} * ${i} = ${tabuada}`)
                }

            break

            case 3:
                alert(" Números pares de 1-20 ")

                let contador = 0

                for(let i = 0; i < 20; i++){
                    if(i % 2 == 0){
                        contador++
                    }
                }
                
                alert(`Contador = ${contador}`)

            break

            case 4:
                let soma = 0
                let entradaValida = true

                for(let i = 0; i < 3; i++){
                    let num = parseFloat(prompt(" Digite um número: "))
                    
                    if(isNaN(num) || num < 0){
                        alert(" ! Apenas números e positivos ! ")
                        entradaValida = false
                        break
                    }

                    soma += num
                }

                if(entradaValida){
                    alert(`Soma: ${soma}`)
                }else{
                    alert("Operação cancelada por entrada inválida.")    
                }

            break

            case 5:
                let linhas = 5
                let linhas2 = 5

                for(let i = 1; i <= linhas; i++){
                    let linha = ""

                for(let j = 1; j <= i; j++){
                    linha += "*"
                }
                    console.log(linha)
                }

                for(let i = linhas2; i >= 1; i--){
                    let linha2 = ""

                for(let j = 1; j <= i; j++){
                    linha2 += "*"
                }
                    console.log(linha2)
                }

            break

            case 0:
                alert(" Encerrando programa...")
            break

            default:
                alert(" ! Opção inválida, tente novamente ! ")
            break
        }

    }while(op !== 0)
}