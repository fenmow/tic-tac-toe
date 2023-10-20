import { DOMPositions, posArr } from "./main.js"
import { timesPlayed } from "./markposition.js"
import changeCurrentPlayer from "./changecurrentplayer.js"

const restartGame = function() {
  DOMPositions.forEach(function(pos) {
    pos.classList.remove('playedPos')
    pos.innerText = ''
    timesPlayed.times = 0
    changeCurrentPlayer()
  })

  for (let i=0;i<posArr.length;i++) {
    for (let j=0; j<posArr[0].length;j++) {
      posArr[i][j] = ''
    }
  }
}

export default restartGame