class Medusa {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name) {
    this.name = name;

    this.statues = [];
  }

  stare(victim) {
    this.statues.push(victim);
    victim.isStoned();
    while (this.statues.length > 3) {
      const firstVictim = this.statues.shift();
      firstVictim.notStoned();
    }
  }

  says(textToSay){
    var textToSayFormatted = `**;* ${textToSay} *;**`;
    return textToSayFormatted;
  }
}


// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Medusa;