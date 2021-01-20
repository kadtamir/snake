'use strict';
import { boardConfig, snakeConfig } from './config';

const clonedeep = require('lodash.clonedeep');

export let board = clonedeep(boardConfig);
export let snake = clonedeep(snakeConfig);
export const resetStore = () => {
  board = clonedeep(boardConfig);
  snake = clonedeep(snakeConfig);
};
