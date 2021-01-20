'use strict';
import { board, snake } from './store';

import { isLost, gameOver, isEat } from './score';

function drawSnake() {
  snake.body.forEach((position) =>
    board.tiles[position].classList.add('snake')
  );
}

function undrawSnake() {
  board.tiles.forEach((tile) => tile.classList.remove('snake'));
}

export function moveSnake() {
  undrawSnake();
  snake.nextStep = snake.body[0] + snake.dx + snake.dy;
  // Lost check
  if (isLost(snake.nextStep)) return gameOver();
  // Keep playing
  for (let i = snake.body.length - 1; i > 0; i--) {
    snake.body[i] = snake.body[i - 1];
  }
  snake.body[0] = snake.nextStep;
  isEat(snake.body[snake.body.length - 1]); // Handle snake dialation
  board.moveLock = false;
  drawSnake();
}

export function handleKeyPress(e) {
  if (
    (e.path[0].id === 'arrowLeft' || e.keyCode === 37 || e.keyCode === 65) &&
    !board.moveLock
  ) {
    // Left
    if (snake.dy) {
      snake.dx = -1;
      snake.dy = 0;
      board.moveLock = true;
    }
  } else if (
    (e.path[0].id === 'arrowUp' || e.keyCode === 38 || e.keyCode === 87) &&
    !board.moveLock
  ) {
    // Up
    if (snake.dx) {
      snake.dy = -board.rows;
      snake.dx = 0;
      board.moveLock = true;
    }
  } else if (
    (e.path[0].id === 'arrowRight' || e.keyCode === 39 || e.keyCode === 68) &&
    !board.moveLock
  ) {
    // Right
    if (snake.dy) {
      snake.dx = 1;
      snake.dy = 0;
      board.moveLock = true;
    }
  } else if (
    (e.path[0].id === 'arrowDown' || e.keyCode === 40 || e.keyCode === 83) &&
    !board.moveLock
  ) {
    // Down
    if (snake.dx) {
      snake.dy = board.rows;
      snake.dx = 0;
      board.moveLock = true;
    }
  }
}
