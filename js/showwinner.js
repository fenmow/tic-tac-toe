import { DOMPositions, player1DOM, player2DOM } from "./main.js"

const showWinner = function(winner) {
  alert(winner+" ganhou!")
  DOMPositions.forEach(function(position) {
    position.classList.add('playedPos')
  })
  player2DOM.classList.remove('current')
  player1DOM.classList.remove('current')
}

export default showWinner