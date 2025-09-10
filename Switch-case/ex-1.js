const output = document.getElementById("output")

const resultado = () =>{
    const n1 = Number(document.getElementById("n1").value)
    const unidade = document.getElementById("unidade").value

    let resultado = 0

    switch(unidade){
        case "1":
            output.innerHTML = `${resultado = n1} segundos`
        break
        case "2":
            output.innerHTML = `${resultado = n1 * 60} segundos`
        break
        case "3":
            output.innerHTML = `${resultado = n1 * 3600} segundos`
        break
        case "4":
            output.innerHTML = `${resultado = n1 * 86400} segundos`
        break
    }

    document.getElementById("n1").value = ""
    document.getElementById("unidade").value = ""
}