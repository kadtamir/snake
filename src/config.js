'use strict';

export const boardConfig = {
  rows: 21,
  cols: 21,
  tile: [],
  fruits: [
    'avocado',
    'apple',
    'banana',
    'berry',
    'grape',
    'pear',
    'pineapple',
    'strawberry',
  ],
  moveLock: false,
  score: 0,
  bestScore: !localStorage.getItem('bestScore')
    ? 0
    : JSON.parse(localStorage.getItem('bestScore')),
};

export const snakeConfig = {
  body: [199, 200, 201],
  dy: 0,
  dx: -1,
  speed: 120,
  nextStep: 198,
};

export const DOMConfig = {
  soudCheckbox: document.getElementById('mute'),
  muteIcon: document.getElementById('volume-state'),
  keypadCheckbox: document.getElementById('arrows'),
  keypadIcon: document.getElementById('keypad-state'),
  keypad: document.getElementById('keypad'),
  playButton: document.getElementById('play'),
  currentScore: document.getElementById('score'),
  bestScore: document.getElementById('best'),
  arrows: Array.from(document.querySelectorAll('.arrow')),
};

export const controlsConfig = {
  sound:
    localStorage.getItem('playSound') !== null
      ? JSON.parse(localStorage.getItem('playSound'))
      : true,
  keypad:
    localStorage.getItem('keypad') !== null
      ? JSON.parse(localStorage.getItem('keypad'))
      : true,
};

DOMConfig.keypadCheckbox.checked = controlsConfig.keypad;
DOMConfig.soudCheckbox.checked = controlsConfig.sound;
