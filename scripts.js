let primeiroNumero = Math.floor(Math.random() *6) + 1
let primeiraImagem = `img/dice${primeiroNumero}.png`
console.log(`primeira imagem: ${primeiraImagem}`)
let img1 = document.querySelectorAll('IMG')[0]
img1.setAttribute('src', primeiraImagem)


let segundoNumero = Math.floor(Math.random() *6) + 1
let segundaImagem = `img/dice${segundoNumero}.png`
console.log(`segunda imagem: ${segundaImagem}`)
let img2 = document.querySelectorAll('IMG')[1]
img2.setAttribute('src', segundaImagem)

const h1 = document.querySelector('h1')
if( primeiroNumero > segundoNumero){
    h1.innerText = 'player 1 venceu!🏆'
}

else if (segundoNumero > primeiroNumero){
    h1.innerText = 'Player 2 venceu!🏆'
}

else{
    h1.innerText = 'Deu empate!'
}