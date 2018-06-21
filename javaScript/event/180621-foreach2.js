var todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
// => [3, 2, 1]

function map() {
  return todos.map(function (todo, index, arr) {
    return todo.id;
  });
};
console.log(map());
// console.log(getIds());

// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
// => 3

function getMax(arr){
return Math.max.apply(null, arr);
};
console.log(getMax(map()));


// 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라
// todos = [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

function concat(todo){
  return [todo].concat(todos);
}
console.log(concat({ id: 4, content: 'Test', completed: false }));

// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

function filter(id){
  todos = todos.filter(function (todo, index, arr){
    return todo.id !== 4;
  });
};
filter(4);
console.log(todos);

// 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

// true -> false

function completed(){
 return todos.map(function (todo, index, arr){
  if(todo.id === 3){ 
  todo.completed = true;
  };
   return todos;
 });
};
console.log(completed());
    