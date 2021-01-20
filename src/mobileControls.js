'use strict';
import { handleKeyPress } from './movment';
import { DOMConfig } from './config';

// Render arrow keypad
let keypad =
  localStorage.getItem('keypad') !== null
    ? JSON.parse(localStorage.getItem('keypad'))
    : true;
// First initialization
DOMConfig.soudCheckbox.checked = keypad;
if (keypad) {
  DOMConfig.keypadIcon.innerHTML = '<i class="fas fa-hand-point-up"></i>';
  DOMConfig.keypad.classList.add('hide');
} else {
  DOMConfig.keypadIcon.innerHTML = '<i class="fas fa-arrows-alt"></i>';
  DOMConfig.keypad.classList.remove('hide');
}

export function handleKeypad(e) {
  keypad = e.target.checked;
  localStorage.setItem('keypad', JSON.stringify(keypad));
  if (keypad) {
    DOMConfig.keypadIcon.innerHTML = '<i class="fas fa-hand-point-up"></i>';
    DOMConfig.keypad.classList.add('hide');
  } else {
    DOMConfig.keypadIcon.innerHTML = '<i class="fas fa-arrows-alt"></i>';
    DOMConfig.keypad.classList.remove('hide');
  }
}

// Swipe logic
const direction = {
  keyCode: null,
  path: [{ id: null }],
};
let startX;
let startY;

export const touchStart = (e) => {
  const touchobj = e.changedTouches[0];
  startX = touchobj.pageX;
  startY = touchobj.pageY;
};

export const touchEnd = (e) => {
  const touchobj = e.changedTouches[0];
  const orthogonal =
    Math.abs(touchobj.pageX - startX) > Math.abs(touchobj.pageY - startY)
      ? 'horizontal'
      : 'vertical';
  if (orthogonal === 'horizontal') {
    direction.keyCode = touchobj.pageX > startX ? 39 : 37;
  } else {
    direction.keyCode = touchobj.pageY > startY ? 40 : 38;
  }
  handleKeyPress(direction);
};
