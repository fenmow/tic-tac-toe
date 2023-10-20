import nameValidation from './namevalidation.js'
import { player1DOM, player2DOM, arrow } from './main.js'


const startGame = function() {
  let player1, player2
  do {
    player1 = nameValidation(prompt("Informe o nome do jogador(a) 1:").trim())
  } while (!player1)
  do {
    player2 = nameValidation(prompt("Informe o nome do jogador(a) 2:").trim())
  } while (!player2)
  btnStart.classList.add('btnHide')
  document.querySelector('.modal-bg').classList.add('hide')
  player1DOM.innerText += " "+player1
  player2DOM.innerText += " "+player2
  player1DOM.classList.add('current')
  arrow.classList.toggle('showArrow')
}

export default startGame