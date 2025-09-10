const iniciar = () =>{
    let notas = []

    let op = parseInt(prompt(" Escolha uma opção: 1- Adicionar nota, 2- Ver média das notas e 3- Sair "))

    while(op !== 3){
        switch(op){
            case 1:
                let n1 = parseFloat(prompt(" Digite nota 1: "))
                let n2 = parseFloat(prompt(" Digite nota 2: "))

                if(isNaN(n1) || isNaN(n2) || n1 < 0 || n1 > 10 || n2 < 0 || n2 > 10){
                    alert(" Apenas números! ")
                }else{
                    notas.push(n1, n2)

                    alert("Notas adicionadas: "+ notas.join(" - "))
                }
            break
            case 2:
                if(notas.length === 0){
                    alert(" Nenhuma nota adicionada! ")
                    break
                }

                let soma = 0

                for(let nota of notas){
                    soma += nota
                } // Somando as notas com for

                let media = soma / notas.length

                alert(" Sua média é: "+ media.toFixed(2))
            break
            default:
                alert(" Opção inválida ")
            break
        }

        op = prompt(" Escolha uma opção: 1- Adicionar nota, 2- Ver média das notas e 3- Sair ")
    }

    alert(" Saiu do programa ")
}