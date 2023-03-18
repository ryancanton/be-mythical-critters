class Direwolf {
  constructor(name, home = "Beyond the Wall", size = "Massive") {
    this.name = name;
    this.home = home;
    this.size = size;
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  }

  protect(stark) {
    if (stark.location == this.home && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      this.canHunt()
      stark.safe = true;
    } else if (stark.location == this.home && this.starksToProtect.length >= 2) {
      this.canHunt()
      stark.safe = false;
    }
  }

  canHunt() {
    if (this.starksToProtect.length == 0) {
      this.huntsWhiteWalkers = true;
    } else {
      this.huntsWhiteWalkers = false;
    }
  }

  leave(stark) {
    if (this.starksToProtect.includes(stark)) {
      const index = this.starksToProtect.indexOf(stark);
      this.starksToProtect.splice(index, 1);
      stark.safe = false;
    }
  }
}

module.exports = Direwolf;