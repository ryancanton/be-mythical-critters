class Centaur {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.activityCount = 0;
  }

  shoot() {
    if (this.activityCount < 3 && this.standing == true) {
      this.activityCount += 1;
      this.isCranky();
      return "Twang!!!";
    } else {
      return "NO!";
    }
  }

  isCranky() {
    if (this.activityCount >= 3) {
      this.cranky = true;
    } else {
      this.cranky = false;
    }
  }

  run() {
    if (this.activityCount < 3 && this.standing == true) {
      this.activityCount += 1;
      this.isCranky();
      return "Clop clop clop clop!!!";
    } else {
      return "NO!";
    }
  }

  sleep() {
    if (this.standing == true) {
      return "NO!";
    } else {
      this.activityCount = 0;
      this.isCranky();
      return 'ZZZZ';
    }
  }

  layDown() {
    this.standing = false;
    this.layingDown = true;
  }

  standUp() {
    this.layingDown = false;
    this.standing = true;
  }

  drinkPotion() {
    if (this.standing == true && this.cranky == true) {
      this.activityCount = 0;
      this.cranky = false;
    } else if (this.standing != true) {
      return "Not while I\'m laying down!";
    } else if (this.cranky == false && this.standing == true) {
      this.activityCount = 3;
      this.isCranky()
    }
  }
}

module.exports = Centaur;