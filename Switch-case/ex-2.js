const output = document.getElementById("output")

const resultado = () =>{
    const num = document.getElementById("num").value
    const p1 = document.getElementById("p1").value

    if(!num || !p1){
        alert(" !!! Informe uma palavra e escolha um opção !!! ")
    }

    switch(num){
        case "1":
            output.innerHTML = `${p1} - singular`
        break
        case "2":
            output.innerHTML = `${p1 + "s"} - plural`
        break
        case "3":
            output.innerHTML = `${p1.toUpperCase()} - maiúsculas`
        break 
        case "4":
            output.innerHTML = `${p1.toLowerCase()} - minúsculas`
        break
    }

    document.getElementById("num").value = ""
    document.getElementById("p1").value = ""
}