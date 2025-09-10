const iniciar = () =>{
    let op = 0

    do{
        op = parseInt(prompt(" Escolha uma opção: \n\n"+
            "1- Contar de 10 a 1 (decrescente) \n"+
            "2- Verificar se número é primo \n"+
            "3- Calcular média de 3 notas \n"+
            "4- Contar vogais em uma palavra \n"+
            "5- Gerar sequência de Fibonacci até N termos \n"+
            "0- Sair \n"
        ))

        if(isNaN(op) || op < 0 || op > 5){
            alert(" ! Escolha entre 1-5 (0 para sair) ! ")
            continue
        }

        switch(op){
            case 1:
                let n = 10
                
                for(let i = n; i >= 0; i--){
                    alert("Contagem: "+i)
                }

            break
////////////////////////////////////////////////////////////////////////////////////////////
            case 2:
                let op2 = 0

                do{
                    op2 = parseInt(prompt(" Escolha uma opção: \n\n"+
                       "1- Digite o número \n"+
                       "0- Sair \n"
                    ))

                    if(isNaN(op2) || (op2 !== 1 && op2 !== 0)){
                        alert(" ! Escolha apenas 1 ou 0 (para sair) ! ")
                        break
                    }

                    if(op2 === 1){
                        let n1 = parseInt(prompt(" Digite um número: "))

                        if(isNaN(n1) || n1 <= 0){
                            alert(" ! Digite apenas números e maior que 0 ! ")
                            continue
                        }

                        if(n1 === 1){
                            alert(" ! Não é número primo, pois possui apenas um divisor (ele mesmo) ! ")
                            continue
                        }

                        if(n1 === 2){
                            alert(" É primo: "+n1)
                            continue
                        }

                        if(n1 % 2 === 0){
                            alert(" ! Não é primo (é par e diferente de 2) ! ")
                            continue
                        }

                        let primo = true

                        for(let i = 3; i <= Math.sqrt(n1); i += 2){
                            if(n1 % i === 0){
                                primo = false
                                break
                            }
                        }

                        primo ? alert(" É primo: " + n1) : alert(" Não é primo.")
                    }

                }while(op2 !== 0)

            break
////////////////////////////////////////////////////////////////////////////////////////////
            case 3:
                let op3 = 0

                do{
                    op3 = parseInt(prompt(" Escolha uma opção: \n\n"+
                        "1- Calcular \n"+
                        "0 - Sair"
                    ))

                    if(isNaN(op3) || (op3 !== 1 && op3 !== 0)){
                        alert(" ! Escolha apenas 1 ou 0 (sair)")
                        continue
                    }

                    if(op3 === 1){
                        let notas = []
                        let i = 0

                        while(i < 3){
                            let nota = parseFloat(prompt(`Digite a ${i + 1}ª nota:`))

                            if(isNaN(nota) || nota < 0){
                                alert("! Digite apenas números válidos e maiores ou iguais a 0 !")
                                continue
                            }
                            notas.push(nota)
                                alert(` Nota (${nota}) adicionada com sucesso`)
                            i++
                        }

                        alert(" Notas digitadas: "+notas.join(" - "))

                        const somaNotas = notas.reduce((acc, valor) => acc + valor, 0)
                        const media = somaNotas / notas.length

                        alert(" Soma das notas: "+somaNotas.toFixed(2))
                        alert(" Média das notas: "+media.toFixed(2))
                    }

                }while(op3 !== 0)

            break
////////////////////////////////////////////////////////////////////////////////////////////
            case 4:
                let op4 = 0

                do{
                    op4 = parseInt(prompt(" Escolha uma opção: \n\n"+
                        "1- Digitar palavra \n"+
                        "0- Sair"
                    ))

                    if(isNaN(op4) || (op4 !== 1 && op4 !== 0)){
                        alert(" ! Escolha apenas entre 1 ou 0 (sair) ! ")
                        continue
                    }

                    if(op4 === 1){
                        let palavra = prompt(" Digite uma palavra: ")

                        if(!/^[a-zA-Z]+$/.test(palavra)){
                            alert(" ! Digite apenas letras, sem espaços, números ou símbolos. ! ")
                            continue
                        }

                        let vogais = palavra.toLowerCase().match(/[aeiouAEIOU]/g)

                        vogais ? alert(" A palavra contém " + vogais.length + " vogais ") : alert(" A palavra não contém vogais ")
                    }

                }while(op4 !== 0)
                
            break
////////////////////////////////////////////////////////////////////////////////////////////
            case 5:
                let num = parseInt(prompt("Digite quantos termos da sequência Fibonacci deseja ver:"))

                if(isNaN(num) || num <= 0){
                    alert("Digite um número válido e maior que zero.")
                    break
                }

                let fibonacci = [0, 1]

                for(let i = 2; i < num; i++){
                    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2])
                }

                alert("Sequência de Fibonacci:\n" + fibonacci.slice(0, num).join(", "))

            break
////////////////////////////////////////////////////////////////////////////////////////////
            case 0:
                alert(" ! Saiu do programa ! ")
            break

            default:
                alert(" ! Opção inválida, tente novamente ! ")
            break
        }

    }while(op !== 0)
}