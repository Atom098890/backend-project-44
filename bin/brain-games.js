#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { hello } from "../src/cli.js";

console.log("Welcome to the Brain Games!");
const name = readlineSync.question('May I have your name? ');
hello(name);

