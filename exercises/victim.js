
class Victim {
  constructor(name) {
    this.name = name;
    this.alive = true;
  }

  isDead() {
    this.alive = false;
  }
}

module.exports = Victim;