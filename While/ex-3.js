const output = document.getElementById("output")

const resultado = () =>{
    let senha = ""

    while(senha !== "1234"){
        senha = prompt("Digite a senha:")

        alert(" Acesso negado! ")
    }

    alert(" Acesso autorizado! ")
}