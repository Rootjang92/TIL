abstract class  Animal {
  abstract makeSound(): void; 
   
  move(): void {
    console.log('roaming the earth...');
  }
}

// 직접 인스턴스 생성 못함.

class Dog extends Animal {
  makeSound() {
    console.log('bowww~~~');
  }
}

const myDog = new Dog();
myDog.makeSound();
myDog.move();
