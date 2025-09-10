const output = document.getElementById("output")

const resultado = () =>{
    const password = document.getElementById("password")
    const passwordValue = Number(password.value)

    const login = document.getElementById("login").value.toLowerCase()

    if(login === "admin" && passwordValue === 1234){
        alert(" !!! Acesso concedido !!! ")
    }else{
        alert(" !!! Acesso negado !!! ")
    }

    document.getElementById("password").value = ""
    document.getElementById("login").value = ""
}