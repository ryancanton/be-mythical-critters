class Fairy {
  constructor(name, dust = 10) {
    this.name = name;
    this.dust = dust;
    this.clothes = { dresses: ['Iris'] };
    this.disposition = "Good natured";
    this.humanWards = [];
  }

  receiveBelief() {
    this.dust += 1;
  }

  believe() {
    this.dust = this.dust * 2;
  }

  makeDresses(dresses) {
    for (const dress of dresses) {
      this.clothes.dresses.push(dress);
    }
  }

  provoke() {
    this.disposition = "Vengeful";
  }

  replaceInfant(infant) {
    if (this.disposition == "Vengeful") {
      infant.disposition = 'Malicious';
      this.humanWards.push(infant)
      this.calmDown()
    } else {
      return infant
    }
  }

  calmDown() {
    if (this.disposition == "Vengeful" && this.humanWards.length % 3 == 0) {
      this.disposition = "Good natured";
    }
  }
}

module.exports = Fairy;