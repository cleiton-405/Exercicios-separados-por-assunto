const iniciar = () =>{
    let op = 0
    let numeros = []

    do{
        op = parseInt(prompt(" === MENU === \n\n"+
            "1- Adicionar número \n"+
            "2- Listar números \n"+
            "3- Remover número por índice \n"+
            "4- Mostrar maior e menor número \n"+
            "5- Calcular média dos números \n"+
            "0- Sair \n"
        ))

        if(isNaN(op) || op < 0 || op > 5){
            alert("!Digite apenas números e positivos!")
            continue
        }

        switch(op){
            case 1:
                let opCase1 = 0

                do{
                    opCase1 = parseInt(prompt(" === MENU === \n\n"+
                        "1- Adicionar número \n"+
                        "0- Sair \n"
                    ))

                    if(isNaN(opCase1) || opCase1 < 0 || opCase1 > 1){
                        alert("!Digite apenas números e positivos!")
                        continue
                    }

                    switch(opCase1){
                        case 1:
                            let num = parseInt(prompt("Digite um número:"))

                            if(isNaN(num) || num < 0){
                                alert("Digite apenas números positivos!")
                                break
                            }

                            if(numeros.includes(num)){
                                alert(`${num} já foi adicionado!`)
                                break
                            }
                            
                            numeros.push(num)
                            alert(`${num} adicionado com sucesso!`)

                        break

                        case 0:
                            alert("Encerrando menu adicionar número...")
                        break 

                        default:
                            alert("!Opção inválida, tente novamente!")
                        break
                    }

                }while(opCase1 !== 0)
            break

            case 2:
                numeros.length === 0 
                ? alert(" Lista está vázia") 
                : alert(` Lista de números: \n ${numeros.join(" - ")}`)
            break

            case 3:
                if(numeros.length === 0){
                    alert(" Lista está vázia")
                    break
                }

                let numbers = "Lista: \n\n"

                for(let i = 0; i < numeros.length; i++){
                    numbers += `${i} - ${numeros[i]} \n`
                }

                let indice = parseInt(prompt(numbers + "\n Digite o índice do número que deseja remover:" ))

                if(!isNaN(indice) && indice >= 0 && indice < numeros.length){
                    let remove = numeros.splice(indice, 1)
                    alert(` Tarefa removida: ${remove[0]} \n
                    Lista: ${numeros.join(" - ")}`)
                }else{
                    alert(" ! Índice inválido. Tente novamente !")
                }
            break

            case 4:
                let maiorNumero = Math.max(...numeros)
                let menorNumero = Math.min(...numeros)

                alert(`${maiorNumero} é o maior número \n ${menorNumero} é o menor número`)
            break

            case 5:
                if(numeros.length === 0){
                    alert("Lista está vázia")
                    
                }else{
                    const soma = numeros.reduce((acc, valor) => acc + valor, 0)
                    const media = soma / numeros.length

                    alert(`Média dos números: ${media.toFixed(2)}`)
                }
            break

            case 0:
                alert(" Encerrando menu principal... ")
            break

            default:
                alert(" ! Opção inválida, tente novamente ! ")
            break
        }

    }while(op !== 0)
}