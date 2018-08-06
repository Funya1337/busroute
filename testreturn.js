'use strict';

class User {
  constructor(name) {
    this.name = name;
  }

  sayHi(y) {
  	this.x = y;
  }
  sayHi1() {
  	console.log(this.x);
  }
}

let user = new User("Vasya");
user.sayHi(34);
user.sayHi1();