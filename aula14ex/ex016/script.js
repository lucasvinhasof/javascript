var botao = document.querySelector("input#botao")
botao.addEventListener("click", contar)

function contar() {
    let inicio = document.querySelector("input#inicio")
    let fim = document.querySelector("input#fim")
    let passo = document.querySelector("input#passo")
    let resposta = document.querySelector("p#resposta")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resposta.innerHTML = "Impossível contar!"
    } else {
        resposta.innerHTML = "Contando: <br>"
        let ninicio = Number(inicio.value)
        let nfim = Number(fim.value)
        let npasso = Number(passo.value)
        if (npasso <= 0) {
            resposta.innerHTML = "Passo inválido! Considerando Passo = 1: <br>"
            npasso = 1
        }
        if (ninicio < nfim) {
            for(let contador = ninicio; contador <= nfim; contador += npasso) {
                resposta.innerHTML += `${contador} \u{1F449} `
            }
        } else {
            for(let contador = ninicio; contador >= nfim; contador -= npasso) {
                resposta.innerHTML += `${contador} \u{1F449} `
            }
        }
        resposta.innerHTML += `\u{1F3C1}`
    }
}