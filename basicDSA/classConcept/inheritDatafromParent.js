class human {
  constructor(type) {
    this.sex = type;
  }
  printGenderType() {
    console.log(this.sex);
  }
}

class person extends human {
  /**
   *we have to pass all data related to parents class using super keyword
   *we have direct access of all parents data and it's function inside  it's child class
   * @param {string} type
   * @param {string} name
   * @param {number} age
   */
  constructor(type, name, age) {
    super(type);
    this.name = name;
    this.age = age;
  }

  getfullDetails() {
    return `name:${this.name} and age:${this.age} and sex is ${this.sex}`;
  }
}

let p1 = new person('male', 'shanu', 19);

console.log(p1.getfullDetails());

/**
 * here we are calling parents function inside child function
 */
p1.printGenderType();
