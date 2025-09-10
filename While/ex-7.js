const iniciar = () =>{
    let saldo = 1000
    let op = prompt(" Escolha uma das opções: 1- Ver saldo, 2- Sacar dinheiro ou 3- Sair ")

    while(op !== "3"){

        switch(op){
            case "1":
                alert(" Saldo na conta: " + saldo)
            break
            case "2":
                let saque = parseFloat(prompt(" Digite um valor de saque: "))

                if(isNaN(saque) || saque <= 0){
                    alert(" Valor inválido para saque ")
                }else if(saque > saldo){
                    alert(" Saldo insuficiente ")
                }else{
                    saldo -= saque
                    alert(" Valor sacado: "+saque)
                    alert(" Novo valor em saldo: "+saldo)
                }
            break
            default:
                alert(" Opção inválida ")
            break
        }

        op = prompt(" Escolha uma das opções: 1- Ver saldo, 2- Sacar dinheiro ou 3- Sair ")
    }

    alert(" Saiu do programa ")
}