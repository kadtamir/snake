'use strict';
import { DOMConfig, controlsConfig } from './config';
const biteSound = new Audio('./sounds/bite.mp3');
const loseSound = new Audio('./sounds/lose.mp3');

export function handleMute(e) {
  controlsConfig.sound = e.target.checked;
  localStorage.setItem('playSound', JSON.stringify(controlsConfig.sound));
  if (controlsConfig.sound) {
    DOMConfig.muteIcon.innerHTML = '<i class="fas fa-volume-off"></i>';
  } else {
    DOMConfig.muteIcon.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

export const makeSound = (sound) => {
  if (sound === 'lose') {
    controlsConfig.sound && loseSound.play();
  } else if (sound === 'eat') {
    controlsConfig.sound && biteSound.play();
  }
};
