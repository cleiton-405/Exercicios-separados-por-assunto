const iniciar = () =>{
    let op = 0
    let numeros = []

    do{
        op = parseInt(prompt(" === MENU === "+
            "1- Adicionar número favorito \n"+
            "2- Listar números favoritos \n"+
            "3- Remover número por índice \n"+
            "4- Mostrar maior e menor número \n"+
            "5- Calcular média dos números \n"+
            "0- Sair \n"
        ))

        if(isNaN(op) || op < 0 || op > 5){
            alert(" ! Digite apenas números e positivos ! ")
            continue
        }

        switch(op){
            case 1:
            break

            case 2:
            break

            case 3:
            break

            case 4:
            break

            case 5:
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