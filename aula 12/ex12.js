var hora = new Date()
var horario = hora.getHours()
console.log(`Agora são ${horario} horas.`)
if (horario < 12) {
    console.log('Bom dia!')
} else if (horario <= 18){
    console.log('Boa tarde!')
} else {
    console.log('Boa noite!')
}