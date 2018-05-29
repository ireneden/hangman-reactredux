export function pickRandomWord(words) {
  return Array.from(words[Math.floor(Math.random()*words.length)]);
}


export function wrongGuessCount(word, guesses) {
  let wrongGuesses = 0;
  guesses.forEach(function (guess) {
    if (word.indexOf(guess) !== -1)
    {
      return wrongGuesses;
  } else {
      return wrongGuesses ++;
  }});
  return wrongGuesses;
}

// console.log('test wrong guesses: ', wrongGuessCount('hello', ['e', 'd', 'x', 'o']) === 2);

export function showGuess(word, guesses) {
  let string = word.toString()
  .split('')
  let newString = string.map(function(element) {
    if (guesses.indexOf(element) !== -1) return element
    return element = "_"
  })
    return newString.join(" ")
  }

// console.log('test show guess 1:', showGuess('hello', ['l']) === '_ _ l l _');
// console.log('test show guess 2:', showGuess('hello', ['l', 'a', 'e']) === '_ e l l _');

export function isWinner(word, guesses) {
  let win;
  let string = showGuess(word, guesses);
  if (string.indexOf("_") === -1) {
      return win = true;
  } else if (wrongGuessCount(word, guesses) > 6) {
      return win = false;
  } else {
      return win
  }
}

// console.log('test winner 1:', !isWinner('hello', ['e', 'x']))
// console.log('test winner 2:', isWinner('hello', ['o', 'l', 'e', 'h']))