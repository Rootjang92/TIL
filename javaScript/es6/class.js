class Person {
  constructor(name) {
    this._name = name;
  }
  sayHi() {
    console.log(`Hi! ${this._name}`);
  }
}

const me = new Person('Lee');
me.sayHi(); // Hi! Lee
 
console.log(me instanceof Person); // true

// class Foo {
//   constructor(num) {
//     this._num = num;
//   }
// }
// const foo = new Foo(1);
// console.log(foo); // Foo {_num: 1}

// class Foo1 {
//   constructor(name = '') {
//     this.name = name;
//   }
// }
// const foo1 = new Foo1('Lee');
// console.log(foo1); // Foo1 { name: 'Lee'}

// getter

class Foo {
  constructor(arr = []) {
    this._arr = arr;
  }
  
  get firstElem() {
    return this._arr.length ? this._arr[0] : null;
  }
}

const foo = new Foo([1, 2]);
// firstElem에 접근하면 getter 호출.
console.log(foo.firstElem); // 1

// setter

class Foo1 {
  constructor(arr = []) {
    this._arr = arr;
  }

  get firstElem() {
    return this._arr.length ? this._arr[0] : null;
  }
  
  set firstElem(elem) {
    this._arr = [elem, ...this._arr];
  }
}

const foo1 = new Foo1([1, 2]);
foo1.firstElem = 100;
console.log(foo1.firstElem); // 100

// static

class Foo2 {
  constructor(prop) {
    this.prop = prop;
  }

  static staticMethod() {
    return 'staticMethod';
  }

  prototypeMethod() {
    return this.prop;
  }
}

console.log(Foo2.staticMethod());
const foo2 = new Foo2(123);
// console.log(foo2.staticMethod()); 정적 메서드는 인스턴스로 호출할 수 없다.


// 상속

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getDiameter() {
    return 2 * this.radius;
  }

  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }

  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}

class Cylinder extends Circle {
  constructor(radius, height) {
    super(radius);
    this.height = height;
  }

  getArea() {
    return (this.height * super.getPerimeter()) + (2 * super.getArea());
  }

  getVolume() {
    return super.getArea() * this.height;
  }
}
const cylinder = new Cylinder(2, 10);

console.log(cylinder.getDiameter());