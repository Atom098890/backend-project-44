#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { hello } from "../src/cli.js";
import { game } from '../src/game.js';

console.log("Welcome to the Brain Games!");
const name = readlineSync.question('May I have your name? ');
hello(name)
console.log('Answer "yes" if the number is even, otherwise answer "no".');
game(name);
