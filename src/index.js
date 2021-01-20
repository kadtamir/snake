import { startGame } from './app';
import { handleKeyPress } from './movment';
import { DOMConfig } from './config';
import { touchStart, touchEnd, handleKeypad } from './mobileControls';
import { handleMute } from './sound';
import { resetBoard } from './board';
import { updateScore } from './score';

window.onload = () => {
  // Event listeners

  // Desktop keyboard
  document.addEventListener('keydown', handleKeyPress);
  // Mobile arrow keypad
  Array.from(document.querySelectorAll('.arrow')).forEach((arrow) => {
    arrow.addEventListener('click', handleKeyPress);
  });
  DOMConfig.keypadCheckbox.addEventListener('change', handleKeypad);
  // Mobile swipe
  document.addEventListener('touchstart', touchStart);
  document.addEventListener('touchend', touchEnd);
  // Sound
  DOMConfig.soudCheckbox.addEventListener('change', handleMute);
  // Play again
  DOMConfig.playButton.addEventListener('click', startGame);
  // Set up first screen
  resetBoard();
  updateScore();
};
