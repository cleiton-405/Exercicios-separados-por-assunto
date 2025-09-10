const iniciar = () =>{
    let carrinho = []
    let op = 0

    while(op !== 4){

        op = parseInt(prompt("Escolha uma opção:\n"+
            " 1 - Adicionar itens no carrinho\n"+
            " 2 - Remover último item do carrinho\n"+
            " 3 - Mostrar os itens\n"+
            " 4 - Sair do programa"))

        switch(op){
            case 1:
                let qtd = parseInt(prompt("Quantos itens deseja adicionar ao carrinho?"))
                
                if(isNaN(qtd) || qtd <= 0){
                    alert("Quantidade inválida. Por favor, digite um número positivo.")
                }else{
                    let i = 0

                    do{
                        let item = prompt(`Digite o item ${i + 1} para adicionar ao carrinho:`)
                        if(item && item.trim() !== ""){
                            carrinho.push(item)
                            alert("Item adicionado com sucesso: " +item)
                            i++
                        }else{
                            alert("Item inválido. Tente novamente.")
                        }
                    }while(i < qtd)
                }
            break
            case 2:

                if(carrinho.length > 0){
                    let removido = carrinho.pop()
                    alert("Removido o último item: " +removido)
                }else{
                    alert("O carrinho está vazio.")
                }

            break
            case 3:
                
                if(carrinho.length > 0){
                    carrinho.forEach((item, index) => {alert(`Item ${index + 1}: ${item}`)})
                }else{
                    alert("O carrinho está vazio.")
                }

            break
            case 4:
                alert(" Saiu do programa ")
            break
            default:

                alert(" Opção inválida, tente novamente.")

            break
        }
    }
}