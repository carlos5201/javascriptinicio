function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {

        window.alert("ERRO - Verifique os dados novamente")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `Idade calculada: ${idade}`
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var sexo = ''
        if (fsex[0].checked) {
            sexo = 'Homem'

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bgaroto.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jgaroto.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'agaroto.png')
            } else {
                //Velho
                img.setAttribute('src', 'vgaroto.png')
            } 
        } else if (fsex[1].checked) {
            sexo = "Mulher"

            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'bmulher.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'jmulher.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'amulher.png')
            }  else {
                //Adulto
                img.setAttribute('src', 'vmulher.png')
            }
        }
        res.innerHTML = `Detectamos um(a) ${sexo} com ${idade} anos.`
        res.appendChild(img)
    }
}