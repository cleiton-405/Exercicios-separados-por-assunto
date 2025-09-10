const iniciar = () =>{
    let carrinho = []
    let op = 0

    do{
        op = parseInt(prompt(" Escolha uma opção:\n"+
            "1 - Adicionar item\n"+
            "2 - Remover item (pelo nome)\n"+
            "3 - Mostrar itens\n"+
            "4 - Sair" ))

        switch(op){
            case 1:
                let qtdItens = parseInt(prompt(" Digite quantos itens você quer adicionar ao carrinho: "))
                
                if(isNaN(qtdItens) || qtdItens <= 0){
                    alert(" !Quantidade inválida. Digite apenas números positivos! ")
                }else{
                    let i = 0

                    do{
                        let item = prompt(`Digite o item ${i + 1} para adicionar ao carrinho: `)

                        if(item && item.trim() !== ""){
                            carrinho.push(item)
                            alert(" Item adicionado com sucesso: " +item)
                            i++
                        }else{
                            alert(" !Item inválido. Tente novamente! ")
                        }
                    }while(i < qtdItens)
                }
            break

            case 2:
                if(carrinho.length === 0){
                    alert(" !Carrinho vazio!")
                }
                
                let itemParaRemover = prompt(" Digite o nome do item para remover: ")
                let itemRemover = carrinho.indexOf(itemParaRemover)

                if(itemRemover !== -1){
                    carrinho.splice(itemRemover, 1)
                    alert(`Item "${itemParaRemover}" removido com sucesso!`)
                }else{
                    alert(" !Item não encontrado!")
                }

                if(carrinho.length > 0){
                    alert(" Carrinho atualizado: "+carrinho.join(" - "))
                }else{
                    alert(" O carrinho agora está vazio")
                }
            break

            case 3:
                if(carrinho.length > 0){
                    alert(" Itens no carrinho: "+carrinho.join(" - "))
                }else{
                    alert(" !Carrinho Vazio, nenhum item adicionado!!")
                }
            break

            case 4:
                alert(" ! Saiu do programa !")
            break

            default:
                alert(" ! Opção inválida, tente novamente ! ")
            break
        }

    }while(op !== 4)
}