function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 14//data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >=0 && hora > 12) {
        // BOM DIA
        img.src = 'fotomanha.png'
        document.body.style.background = '#e6d2ad'
    }else if (hora >= 12 && hora < 1) {
        // BOA TARDE
        img.src = 'fototarde.png'
        document.body.style.background = '#d27a36'
    }else {
        //BOA NOITE
        img.src = 'fotonoite.png'
        document.body.style.background = '#183356'
    }
}

