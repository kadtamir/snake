'use strict';
import { DOMConfig } from './config';
const biteSound = new Audio('./sounds/bite.mp3');
const loseSound = new Audio('./sounds/lose.mp3');

let playSound =
  localStorage.getItem('playSound') !== null
    ? JSON.parse(localStorage.getItem('playSound'))
    : true;
// First initialization
DOMConfig.soudCheckbox.checked = playSound;
if (playSound) {
  DOMConfig.muteIcon.innerHTML = '<i class="fas fa-volume-off"></i>';
} else {
  DOMConfig.muteIcon.innerHTML = '<i class="fas fa-volume-mute"></i>';
}

export function handleMute(e) {
  playSound = e.target.checked;
  localStorage.setItem('playSound', JSON.stringify(playSound));
  if (playSound) {
    DOMConfig.muteIcon.innerHTML = '<i class="fas fa-volume-off"></i>';
  } else {
    DOMConfig.muteIcon.innerHTML = '<i class="fas fa-volume-mute"></i>';
  }
}

export const makeSound = (sound) => {
  if (sound === 'lose') {
    playSound && loseSound.play();
  } else if (sound === 'eat') {
    playSound && biteSound.play();
  }
};
