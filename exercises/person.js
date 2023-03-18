class Person {
  // Think of a constructor as being similar to initialize in Ruby
  // Instead of setting attributes like @name = name in JavaScript we say this.name = name
  constructor(name) {
    this.name = name;
    this.stoned = false;
  }

  isStoned() {
    this.stoned = true;
  }

  notStoned() {
    this.stoned = false;
  }
}


// Notice here we are exporting our class.
// In order for our test or any other file to be able to know about it we must export it.
module.exports = Person;