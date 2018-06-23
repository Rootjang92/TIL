var todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false }
];

// 1. todos의 각 요소 중, id 프로퍼티의 값만을 추출한 배열을 생성하는 함수를 작성하라.
// => [3, 2, 1]

function newId(){
  return todos.map(function(todo) {
    return todo.id;
  });
};
console.log(newId());

// 2. 1에서 생성한 배열의 최대값을 구하는 함수를 작성하라.
// => 3

function MaxId(arr){
  return Math.max.apply(null, arr);
 };
 console.log(MaxId(newId()));

// 3. todos에 선두에 새로운 요소로서 객체 { id: 4, content: 'Test', completed: false }를 추가하는 함수를 작성하라
// todos = [
//   { id: 4, content: 'Test', completed: false },
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

function newArr(todo){
  return [todo].concat(todos);
};
console.log(newArr({ id: 4, content: 'Test', completed: false }));


// 4. todos에서 id가 4인 요소를 삭제하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: false },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ];

function deleteArr(id){
  todos = todos.filter(function(todo){
    return todo.id !== 4;
  })
};
deleteArr(4);
console.log(todos);


// 5. todos에서 id가 3인 요소의 completed 프로퍼티 값을 반전하는 함수를 작성하라
// todos = [
//   { id: 3, content: 'HTML', completed: true },
//   { id: 2, content: 'CSS', completed: true },
//   { id: 1, content: 'Javascript', completed: false }
// ]

function changeCom(){
 return todos = todos.map(function(todo){
    return todo.id === 3 ? Object.assign({}, todo, { completed :!todo.completed }) : todo;
  })
};
console.log(changeCom());


// 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라.

function changeAll(){
  return todos = todos.map(function(todo) {
    return !todo.completed ? Object.assign({}, todo, { completed : true}) : todo;
  })
};
console.log(changeAll());


// 7. todos에서 완료한 할일의 갯수를 구하는 함수를 작성하라.

function todoCom(){
  return todos = todos.filter(function(todo) {
    return todo.completed;
  }).length;
};
console.log(todoCom());