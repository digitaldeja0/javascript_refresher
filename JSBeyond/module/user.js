export default class User {
  constructor(name, email) {
    (this.name = name), (this.email = email);
  }
  greeting() {
    return `hi my name is ${this.name}`;
  }
}
