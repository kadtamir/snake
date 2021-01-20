'use strict';
import { DOMConfig } from './config';
import { board, resetStore, snake } from './store';
import { terminate } from './app';
import { makeSound } from './sound';

export function generateFruit() {
  const posibilities = board.tiles.filter(
    (undefined, index) => !snake.body.includes(index)
  );
  const fruitPosition =
    posibilities[Math.floor(Math.random() * posibilities.length)];
  const fruit = board.fruits[Math.floor(Math.random() * board.fruits.length)];
  fruitPosition.innerHTML = `<img src="./img/fruits/${fruit}.png" alt="${fruit}">`;
  fruitPosition.classList.add('fruit');
}

export function isEat(addition) {
  if (board.tiles[snake.body[0]].classList.contains('fruit')) {
    board.score += 1;
    board.tiles[snake.body[0]].classList.remove('fruit');
    board.tiles[snake.body[0]].innerHTML = '';
    generateFruit();
    updateScore();
    snake.body.push(addition);
    makeSound('eat');
  }
}

export function updateScore() {
  DOMConfig.currentScore.innerHTML = board.score;
  if (board.score > board.bestScore) {
    board.bestScore = board.score;
    localStorage.setItem('bestScore', JSON.stringify(board.bestScore));
  }
  DOMConfig.bestScore.innerHTML = board.bestScore;
}

export function isLost(nextStep) {
  if (snake.dx > 0 && nextStep % board.cols === 0) return true;
  // Right wall crash
  else if (snake.dx < 0 && (nextStep + 1) % board.cols === 0) return true;
  // Left wall crash
  else if (nextStep > board.cols * board.rows || nextStep < 0) return true; // Top and Bottom wall crash
  if (snake.body.slice(1).some((position) => position === nextStep))
    return true; // Self crash
  return false;
}

export function gameOver() {
  makeSound('lose');
  DOMConfig.playButton.classList.remove('hide');
  resetStore();
  terminate();
  // drawSnake();
}
