// Функция вызывает генератор куплета i количество раз и выводит полученный текст
function generateSongText(){

    for(let i = 99; i > 0; i--){
        let song = generateSingleStanze(i)
        console.log(song)
    }
}

// Функция возврщает готовый текст с number бутылками и заодно корректирует его
function generateSingleStanze(number){
    let corrector = number % 10  // 4
    let text = `` 

    if(number === 1 ) { // крайний случай
        text = `${number} бутылка пива на стене, ${number} бутылка пива!\nВозьми одну, пусти по кругу, нет бутылок пива на стене!`
    } else if (number === 2){
        text = `${number} бутылки пива на стене, ${number} бутылки пива!\nВозьми одну, пусти по кругу, ${number-1} бутылка пива на стене!`
    }else if (number === 11 || number === 12 || number === 13 || number === 14) { // крайние случаи
        text = `${number} бутылок пива на стене, ${number} бутылок пива!\nВозьми одну, пусти по кругу, ${number-1} бутылок пива на стене!`
    } else if (corrector === 1) { // n(51) % 10 = 1, n(1) % 10 = 1 я уже прописал выше 
        text = `${number} бутылка пива на стене, ${number} бутылка пива!\nВозьми одну, пусти по кругу, ${number-1} бутылок пива на стене!`
    } else if (corrector === 5 & number-1 === 14 ) {
        text = `${number} бутылок пива на стене, ${number} бутылок пива!\nВозьми одну, пусти по кругу, ${number-1} бутылок пива на стене!`
    }else if (corrector === 5 ) {
        text = `${number} бутылок пива на стене, ${number} бутылок пива!\nВозьми одну, пусти по кругу, ${number-1} бутылки пива на стене!`
    } else if (corrector === 2 ) {
        text = `${number} бутылки пива на стене, ${number} бутылки пива!\nВозьми одну, пусти по кругу, ${number-1} бутылка пива на стене!`
    } else if (corrector === 2 || corrector === 3 || corrector === 4 ) {
        text = `${number} бутылки пива на стене, ${number} бутылки пива!\nВозьми одну, пусти по кругу, ${number-1} бутылки пива на стене!`
    } else {
        text = `${number} бутылок пива на стене, ${number} бутылок пива!\nВозьми одну, пусти по кругу, ${number-1} бутылок пива на стене!`
    }
    return text
}
 
generateSongText()


// const text = `${number} бутылок пива на стене\n ${number} бутылок пива!\n Возьми одну, пусти по кругу`