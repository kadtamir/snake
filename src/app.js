'use strict';
import { snake, resetStore } from './store.js';
import { DOMConfig } from './config';
import { resetBoard } from './board';
import { moveSnake } from './movment';
import { updateScore, generateFruit } from './score';

let timer;
export const terminate = () => clearInterval(timer);
export function startGame() {
  terminate();
  resetStore();
  resetBoard();
  DOMConfig.playButton.classList.add('hide');
  updateScore();
  timer = setInterval(moveSnake, snake.speed);
  generateFruit();
}
