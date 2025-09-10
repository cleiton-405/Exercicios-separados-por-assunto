const iniciar = () =>{
    let op = 0
    let tarefas = []

    do{
        op = parseInt(prompt(" === MENU === \n\n"+
            "1 - Adicionar uma tarefa \n"+
            "2 - Listar todas as tarefas \n"+
            "3 - Remover uma tarefa por índice \n"+
            "4 - Editar uma tarefa \n"+
            "0 - Sair \n"
        ))

        if(isNaN(op) || op < 0 || op > 4){
            alert(" ! Digite apenas números e positivos ! ")
            continue
        }

        switch(op){
            case 1:
                let opAdd = 0

                do{
                    opAdd = parseInt(prompt(" Escolha: \n\n"+
                        "1- Digitar tarefa \n"+
                        "0- Sair \n"
                    ))

                    if(isNaN(opAdd) || opAdd < 0 || opAdd > 1){
                        alert(" ! Digite apenas 0 ou 1 ! ")
                        continue
                    }

                    switch(opAdd){
                        case 1:
                            let str = prompt(" Digite uma tarefa")

                            str = str.trim().toLowerCase()

                            if(str === "" || !isNaN(str)){
                                alert(" ! Digite apenas tarefas (sem números isolados)!! ")
                                continue
                            }

                            if (str.length > 0) {
                                str = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
                            }

                            tarefas.push(str)
                            alert(" Tarefa adicionada com sucesso !")

                        break

                        case 0:
                            alert("Encerrando o programa...")
                        break
                    }
                }while(opAdd !== 0)
            break

            case 2:
                alert(`Lista de tarefas: \n
                    ${tarefas.join(" - ")}`)
            break
            
            case 3:
                alert(" ! Digite qual tarefa deseja excluir ! ")

                if (tarefas.length === 0){
                    alert(" ! Não há tarefas para remover ! ")
                    break
                }

                let lista = "Tarefas: \n\n"
                
                for(let i = 0; i < tarefas.length; i++){
                    lista += `${i} - ${tarefas[i]} \n`
                }

                let indice = parseInt(prompt(lista + "\nDigite o índice da tarefa que deseja remover:"))

                if(!isNaN(indice) && indice >= 0 && indice < tarefas.length){
                    let removida = tarefas.splice(indice, 1) // Remove de acordo com o índice
                    alert(` Tarefa removida: ${removida[0]}`)
                }else{
                    alert(" ! Índice inválido. Tente novamente !")
                }

            break

            case 4:
                if (tarefas.length === 0){
                    alert(" ! Não há tarefas para remover ! ")
                    break
                } // Se estiver vazio a lista, não executa essa seção

                let listaTarefas = "Tarefas: \n\n"
                
                for(let i = 0; i < tarefas.length; i++){
                    listaTarefas += `${i} - ${tarefas[i]} \n`
                } // Mostra a lista de tarefas

                let indiceTarefa = parseInt(prompt(listaTarefas + "\nDigite o índice da tarefa que deseja mudar:")) // Digitar o índice para mudar

                if(!isNaN(indiceTarefa) && indiceTarefa >= 0 && indiceTarefa < tarefas.length){ // Verificar se é número, abaixo de zero(não tem negativos) e verifica se o indice está acima do número de tarefas dentro da lista
                    let newTarefa = prompt(" Digite a nova tarefa: ")
                        if(newTarefa.trim() !== ""){ // Verifica se nova tarefa está vazia
                            tarefas[indiceTarefa] = newTarefa // Muda de acordo com o índice

                            alert(` ! Tarefa atualizada com sucesso !`)
                        }else{
                            alert(` ! A nova tarefa não pode ser vazia ! `)
                        }
                    }else{
                        alert(" ! Índice inválido. Tente novamente ! ")
                    }
            break

            case 0:
                alert("Encerrando programa...")
            break

            default:
                alert(" ! Opção inválida, tente novamente ! ")
            break
        }

    }while(op !== 0)
}