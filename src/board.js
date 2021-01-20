'use strict';
import { board } from './store.js';
const boardEL = document.getElementById('board');

export function resetBoard() {
  boardEL.innerHTML = '';
  for (let i = 0; i < board.rows * board.cols; i++) {
    const tileEL = document.createElement('div');
    boardEL.appendChild(tileEL);
  }
  board.tiles = Array.from(document.querySelectorAll('#board div'));
}
