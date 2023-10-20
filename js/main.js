import startGame from "./startgame.js"
import markPosition from "./markposition.js"
import restartGame from "./restartgame.js"


export let posArr = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]

const btnStart = document.querySelector('#btnStart')
export const player1DOM = document.querySelector('#player1')
export const player2DOM = document.querySelector('#player2')
export const DOMPositions = document.querySelectorAll('.pos')
export const arrow = document.querySelector('.arrow')

arrow.addEventListener('click', restartGame)

DOMPositions.forEach(markPosition) 

btnStart.addEventListener('click', startGame)