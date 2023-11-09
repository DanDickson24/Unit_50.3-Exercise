function guessingGame() {
    const secretNumber = Math.floor(Math.random() * 100); 
    let attempts = 0;
    let hasEnded = false;
  
    return function(guess) {
      if (hasEnded) {
        return "The game is over, you already won!";
      }
  
      attempts++;
  
      if (guess < secretNumber) {
        return guess + " is too low!";
      } else if (guess > secretNumber) {
        return guess + " is too high!";
      } else {
        hasEnded = true;
        const result = `You win! You found ${secretNumber} in ${attempts} guess${attempts === 1 ? '' : 'es'}.`;
        return result;
      }
    };
  }

module.exports = { guessingGame };
