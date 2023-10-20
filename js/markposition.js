import changeCurrentPlayer from "./changecurrentplayer.js"
import { player1DOM, player2DOM, posArr } from "./main.js"
import { checkEndGame } from "./checkendgame.js"

let currentPlayer
export let timesPlayed = { times: 0 }

const markPosition = (position) => {
  position.addEventListener('click', function(ev) {
    const position = ev.target
    changeCurrentPlayer(timesPlayed.times)
    currentPlayer = timesPlayed.times % 2 === 0 ? player1DOM.innerText.slice(13, player1DOM.length) : 
    player2DOM.innerText.slice(13, player2DOM.length)
    const currentIcon = timesPlayed.times % 2 === 0 ? 'X' : 'O'
    console.log(currentPlayer, position)
    position.innerText = currentIcon
    position.classList.add('playedPos')
    const row = Number(position.dataset.position[0])
    const col = Number(position.dataset.position[2])
    posArr[row][col] = currentIcon
    timesPlayed.times++
    checkEndGame(currentPlayer)
    console.table(posArr)
  })
}

export default markPosition