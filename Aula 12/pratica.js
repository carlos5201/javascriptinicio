var hora = 12
console.log (`Agora são exatamente ${hora} horas.`)
if (hora >= 6 && hora < 12) {
    console.log("Bom dia")
} else if (hora >= 12 && hora <= 18) {
    console.log("Boa tarde")

} if (hora > 19 && hora <= 00) {
    console.log("Boa noite")

} else if (hora <= 5 && hora >= 00) {
        console.log("Boa madrugada")
    }