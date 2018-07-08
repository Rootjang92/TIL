export class Person {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  sayhello() {
    return "Hello, " + this.name
  }
}

// const person = new Person('Lee');
// console.log(person.sayhello());