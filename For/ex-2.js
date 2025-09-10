const iniciar = () =>{
    let op = 0

    do{
        op = parseInt(prompt(" Escolha uma das opções: \n"+
            "1- Contar de 1 até um número escolhido \n"+
            "2- Contar de trás para frente (decrescente) \n"+
            "3- Mostrar os primeiros N números ímpares\n"+
            "0- Sair \n"
        ))

        switch(op){
            case 1:
                let num = parseInt(prompt(" Digite um número: "))
                let resultado = ""

                for(let i = 1; i <= num; i++){
                    resultado += i + "\n"
                }

                alert("Contagem: \n"+resultado)

            break;

            case 2:
                let n1 = parseInt(prompt(" Digite um número: "))
                let result = ""

                for(let i = n1; i >= 0 ;i--){
                    result += i + "\n"
                }

                alert("Contagem decrescente: \n"+result)

            break;

            case 3:
                let numero = parseInt(prompt(" Digite um número: "))
                let contador = 0

                for(let i = 0; i >= numero; i++){
                    if(numero % 2 == 1){
                        contador++
                    }
                }

                alert(`Contador: ${contador}`)

            break;

            case 0:
                alert("Encerrando o programa...")
            break

            default:
                alert(" ! Opção inválida, tente novamente ! ")
            break
        }

    }while(op !== 0)
}