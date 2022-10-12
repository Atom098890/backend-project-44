import readlineSync from 'readline-sync';

export function game(name) {
  let count = 2;

   while (count >= 0) {
    let random = Math.floor((Math.random() * 4) * 10);
    console.log(`Question: ${random}`);
    let answer = readlineSync.question('Your answer: ');
    let num = random % 2 === 0 ? 'yes' : 'no';
  
    if (num === answer) {
      console.log('Correct!');
      count -= 1;
    } else {
      console.log('"yes" is wrong answer ;(. Correct answer was "no".');
    }
  }
  
  console.log(`Congratulations, ${name}`);
}