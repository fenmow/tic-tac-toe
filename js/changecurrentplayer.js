import { player1DOM, player2DOM } from "./main.js"

const changeCurrentPlayer = function(timesPlayed) {
  if (timesPlayed % 2 === 0) {
    player1DOM.classList.remove('current')
    player2DOM.classList.add('current')
  } else {
    player2DOM.classList.remove('current')
    player1DOM.classList.add('current')
  }
}

export default changeCurrentPlayer