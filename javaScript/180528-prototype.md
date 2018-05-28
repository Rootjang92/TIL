## Prototype 이해하기

- Javascript는 객체지향 언어.
- class라는 개념이 없기 때문에 prototype이 중요.
- prototype link 와 prototype object를 잘 알아야 한다.
- 모든 객체의 조상은 function! 
- 해당 함수에 constructor(생성자)를 부여해서 객체를 만들어 낼 수 있게 된다.
- 함수를 생성하면 함수와 prototype object도 같이 생성.
- _proto_ -> 모든 객체가 빠짐없이 가지고 있는 속성.
- 객체가 생성될 때 조상이었던 함수의 prototype object를 가리킨다.
https://cdn-images-1.medium.com/max/800/1*mwPfPuTeiQiGoPmcAXB-Kg.png
- 모든 객체는 object의 자식.
- 하지만 자바스크립트는 Class 가 존재하지 않는다. 그래서 자바스크립트에서는 객체의 원형인 프로토타입을 이용한 클로닝(Cloning: 복사)과 객체특성을 확장해 나가는 방식을 통해 새로운 객체를 생성
- 어떠한 객체가 만들어지기 위해 그 객체의 모태가 되는 녀석을 프로토타입
- 하위 객체는 상위 객체의 속성과 메소드를 상속 받는 것이 아니라 그것을 공유






ㄴ