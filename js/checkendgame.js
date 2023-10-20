import { posArr, player1DOM, player2DOM } from "./main.js"
import showWinner from "./showwinner.js"

export const checkEndGame = function(currentPlayer){
  if (posArr[0][0] !== '' && posArr[0][0] === posArr[0][1] && posArr[0][1] === posArr[0][2]) {
    showWinner(currentPlayer)
  } else if (posArr[1][0] !== '' && posArr[1][0] === posArr[1][1] && posArr[1][1] === posArr[1][2]) {
    showWinner(currentPlayer)
  } else if (posArr[2][0] !== '' && posArr[2][0] === posArr[2][1] && posArr[2][1] === posArr[2][2]) {
    showWinner(currentPlayer)
  } else if (posArr[0][0] !== '' && posArr[0][0] === posArr[1][0] && posArr[1][0] === posArr[2][0]) {
    showWinner(currentPlayer)
  } else if (posArr[0][1] !== '' && posArr[0][1] === posArr[1][1] && posArr[1][1] === posArr[2][1]) {
    showWinner(currentPlayer)
  } else if (posArr[0][2] !== '' && posArr[0][2] === posArr[1][2] && posArr[1][2] === posArr[2][2]) {
    showWinner(currentPlayer)
  } else if (posArr[0][0] !== '' && posArr[0][0] === posArr[1][1] && posArr[1][1] === posArr[2][2]) {
    showWinner(currentPlayer)
  } else if (posArr[0][2] !== '' && posArr[0][2] === posArr[1][1] && posArr[1][1] === posArr[2][0]) {
    showWinner(currentPlayer)
  } else if (!posArr[0].includes('') && !posArr[1].includes('') && !posArr[2].includes('')) {
    alert("EMPATE!")
    player2DOM.classList.remove('current')
    player1DOM.classList.remove('current')
  }
}