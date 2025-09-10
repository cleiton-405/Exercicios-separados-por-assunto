const iniciar = () =>{
    let op = 0
    let n1 = 0
    let n2 = 0

    do{
        op = parseInt(prompt(" Escolha uma opção: \n"+
            "1- Cálculo \n"+
            "2- Sair \n"
        ))

        switch(op){
            case 1:

                let op2 = 0
                let resultado = 0

                do{
                    let n1 = parseFloat(prompt(" Digite o primeiro número "))
                    let n2 = parseFloat(prompt(" Digite o primeiro número "))

                    if(isNaN(n1) || isNaN(n2)){
                        alert(" ! Apenas números ! ")
                        break
                    }

                    alert(" Números para o cálculo: "+n1+" e "+n2)

                    do{
                        op2 = parseInt(prompt(" Escolha uma opção: "+
                                "1- + \n"+
                                "2- - \n"+
                                "3- * \n"+
                                "4- / \n"
                        ))

                            if(isNaN(op2) || op2 <= 0){
                                alert(" !Apenas números e positivos!")
                            }else if(![1, 2, 3, 4].includes(op2)){
                                alert(" !Opção inválida, tente novamente! ")
                            }

                    }while(isNaN(op2) || op2 <= 0 || ![1, 2, 3, 4].includes(op2))

                        switch(op2){
                        case 1:
                            resultado = n1 + n2
                            alert(" Soma: "+resultado.toFixed(2))
                        break

                        case 2:
                            resultado = n1 - n2
                            alert(" Subtração: "+resultado.toFixed(2))
                        break

                        case 3:
                            resultado = n1 * n2
                            alert(" Multiplicação: "+resultado.toFixed(2))
                        break

                        case 4:
                            if(n2 === 0){
                                alert(" ! Não podemos fazer a divisão de um número negativo ! ")
                            }else{
                                resultado = n1 / n2
                                alert(" Divisão: "+resultado.toFixed(2))
                            }
                        break
                    }

                }while(isNaN(n1) || isNaN(n2))

            break       

            case 2:
                alert(" ! Saiu do programa! ")
            break

            default:
                alert(" ! Opção inválida ! ")
            break
        }

    }while(op !== 2)
}