'use strict';
import { handleKeyPress } from './movment';
import { DOMConfig, controlsConfig } from './config';

export function handleKeypad(e) {
  controlsConfig.keypad = e.target.checked;
  localStorage.setItem('keypad', JSON.stringify(controlsConfig.keypad));
  if (controlsConfig.keypad) {
    DOMConfig.keypadIcon.innerHTML = '<i class="fas fa-hand-point-up"></i>';
    DOMConfig.keypad.classList.remove('hide');
    // Mobile swipe
    document.removeEventListener('touchstart', touchStart);
    document.removeEventListener('touchend', touchEnd);
  } else {
    DOMConfig.keypadIcon.innerHTML = '<i class="fas fa-arrows-alt"></i>';
    DOMConfig.keypad.classList.add('hide');
    // Mobile swipe
    document.addEventListener('touchstart', touchStart);
    document.addEventListener('touchend', touchEnd);
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
