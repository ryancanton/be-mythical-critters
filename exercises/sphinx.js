class Sphinx {
  constructor() {
    this.riddles = [];
    this.heroesEaten = 0;
  }

  collectRiddle(riddle) {
    this.riddles.push(riddle);
    if (this.riddles.length > 3) {
      this.riddles.shift();
    }
  }


  attemptAnswer(answer) {
    var ogRiddlesLength = this.riddles.length
    for (const riddle of this.riddles) {
      if (riddle.answer == answer) {
        const index = this.riddles.indexOf(riddle)
        this.riddles.splice(index, 1);
      }
    }

    if (this.riddles.length == 0) {
      return `PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS \"${answer}\"???`
    } else if (this.riddles.length < ogRiddlesLength) {
      return 'That wasn\'t that hard, I bet you don\'t get the next one';
    } else {
      this.heroesEaten += 1;
    }
  }
}

module.exports = Sphinx;