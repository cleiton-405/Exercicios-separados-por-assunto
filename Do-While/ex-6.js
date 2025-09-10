const iniciar = () =>{
    let op = 0

    do{
        op = parseInt(prompt(" Escolha uma opção: \n\n"+
            "1- Calcular idade a partir do ano de nascimento \n"+
            "2- Verificar se um número é par ou ímpar \n"+
            "3- Subdesafio: Jogo de adivinhação \n"+
            "0- Sair \n"
        ))

        switch(op){
            case 1:
                let anoDeNascimento

                do{
                    anoDeNascimento = parseInt(prompt(" Digite o seu ano de nascimento (0 para sair): "))

                    let calcularIdade = 0

                    if(anoDeNascimento === 0){
                        alert(" Encerrando o programa...")
                        break
                    }

                    if(isNaN(anoDeNascimento) || anoDeNascimento < 0){
                        alert(" ! Digite apenas números e positivos ! ")
                        continue
                    }

                    const dataAtual = new Date()
                    const anoAtual = dataAtual.getFullYear()

                    calcularIdade = anoAtual - anoDeNascimento

                    alert(`${calcularIdade} anos`)

                }while(true)

            break

            case 2:
                do{
                    let n1 = parseInt(prompt(" Digite um número (0 para sair) : "))

                    if(isNaN(n1)){
                        alert(" ! Digite apenas números ! ")
                        continue
                    }

                    if(n1 === 0){
                        alert("Encerrando o programa...")
                        break
                    }

                    if(n1 < 0){
                        alert("! Digite apenas números maiores que zero !")
                        continue
                    }

                    if(n1 % 2 == 0){
                        alert(` ${n1} par `)
                    }else{
                        alert(` ${n1} ímpar `)
                    }

                }while(true)

            break

            case 3:
                let num

                do{
                    num = parseInt(prompt(" Tente adivinhar o número (entre 1 e 10) ou digite 0 para sair: "))

                    if(isNaN(num) || num < 0 || num > 10){
                        alert(" ! Digite apenas números e positivos ! ")
                        continue
                    }

                    if(num === 0){
                        alert(" Encerrando o programa...")
                        break
                    }

                    const numRandom = Math.floor(Math.random() * 10) + 1
                    
                    if(num === numRandom){
                        alert(" ! Parabéns, você acertou o número ! ")
                        break
                    }else{
                        alert(" ! Não é esse o número, Tente novamente ! ")
                    }

                }while(true)

            break

            case 0:
                alert(" ! Saiu do programa ! ")
            break

            default:
                alert(" ! Opção inválida, tente novamente ! ")
            break
        }

    }while(op !== 0)
}