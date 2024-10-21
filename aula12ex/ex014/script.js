function carregar () {
    var msg = window.document.querySelector("div#msg")
    var img = window.document.querySelector("img#imagem")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas!`
    if (hora >= 0 && hora < 12) {
        img.src = "imagens/manha.png"
        document.body.style.background = "#eebc31ad"
    } else if (hora >= 12 && hora < 18) {
        img.src = "imagens/tarde.png"
        document.body.style.background = "#598bd4"
    } else {
        img.src = "imagens/noite.png"
        document.body.style.background = "#00000073"
    }
}
