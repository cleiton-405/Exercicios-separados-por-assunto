const iniciar = () =>{
    let arr = []
    op = 0

    do{
        op = parseInt(prompt(" Escolha uma opção: \n"+
            "1- Adicionar usuário \n"+
            "2- Remover usuário \n"+
            "3- Usuários cadastrados \n"+
            "4- Sair \n"
        ))

        switch(op){
            case 1:

            let qtdUsuarios = parseInt(prompt(" Digite o número de usuários que deseja cadastrar: "))
            let i = 0

            if(isNaN(qtdUsuarios) || qtdUsuarios < 0){
                alert(" ! Digite apenas números e positivos ! ")
            }

            do{
                let nome = prompt(" Digite seu nome: ").toLocaleLowerCase()
                let idade = parseInt(prompt(" Digite sua idade: "))

                if(!isNaN(nome) || isNaN(idade) || idade <= 0){
                    alert(" ! Apenas nome (texto) e idade (número válido) por favor ! ")
                }else{
                    
                const usuario ={
                    nome: nome,
                    idade: idade
                }

                arr.push(usuario)

                alert(`Nome: ${usuario.nome}, idade: ${usuario.idade} cadastrado com sucesso`)
                i++
                }
            }while(i < qtdUsuarios)

            break

            case 2:
                if(arr.length === 0){
                    alert(" ! Nenhum usuário cadastrado ! ")
                }

                let removerUsuario = prompt(" Digite o nome do usuário para remover: ").trim().toLowerCase()

                let remover = arr.findIndex((usuario) => usuario.nome.toLowerCase() === removerUsuario)

                if(remover !== - 1){
                    arr.splice(remover, 1)
                    alert(`Usuário "${removerUsuario}" removido com sucesso!`)
                }else{
                    alert(" !Usuário não encontrado!")
                }
            break

            case 3:
                if(arr.length > 0){
                    arr.forEach((usuario, index) =>{
                        alert(`${index + 1} - Nome: ${usuario.nome} \n Idade: ${usuario.idade}`)
                    })
                }else{
                    alert(" ! Nenhum usuário cadastrado ! ")
                }
            break

            case 4:
                alert(" ! Saiu do programa ! ")
            break

            default:
                alert(" ! Opção inválida, tente novamente ! ")
            break
        }

    }while(op !== 4)
}