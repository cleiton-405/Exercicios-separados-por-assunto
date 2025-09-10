const output = document.getElementById("output")

const resultado = () =>{
    const n1 = document.getElementById("n1")
    const n1Value = Number(n1.value)

    n1Value >= 10 && n1Value <= 50 ? alert(" !!! TUDO CERTO !!! ") : alert(" !!! TUDO ERRADO !!! ")

    n1.value = ""
}