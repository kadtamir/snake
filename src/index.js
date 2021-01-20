import { startGame } from './app';
import { handleKeyPress } from './movment';
import { DOMConfig, controlsConfig } from './config';
import { handleKeypad } from './mobileControls';
import { handleMute } from './sound';
import { resetBoard } from './board';
import { updateScore } from './score';

window.onload = () => {
  DOMConfig.playButton.innerHTML = 'Play';
  // Event listeners

  // Desktop keyboard
  document.addEventListener('keydown', handleKeyPress);
  // Mobile arrow keypad
  DOMConfig.arrows.forEach((arrow) => {
    arrow.addEventListener('click', handleKeyPress);
  });
  DOMConfig.keypadCheckbox.addEventListener('change', handleKeypad);
  handleKeypad({ target: { checked: controlsConfig.keypad } });
  // Sound
  DOMConfig.soudCheckbox.addEventListener('change', handleMute);
  handleMute({ target: { checked: controlsConfig.sound } });
  // Play again
  DOMConfig.playButton.addEventListener('click', startGame);
  // Set up first screen
  resetBoard();
  updateScore();
};
