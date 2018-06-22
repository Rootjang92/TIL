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
// ]

// true -> false

function changeCom(){
  todos = todos.map(function(todo){
    return todo.id === 3 ? Object.assign({}, todo, { completed : !todo.completed }) : todo;
  });
};
changeCom();
console.log(todos);


// object.assign({}, todo, { completed : !todo.completed }); 
// 뒤에 있는 객체(3)와 앞에 있는 개체(2)를 merge하여 빈 배열에 return 한다.


// 6. todos에서 모든 요소의 completed 프로퍼티 값을 true로 설정하는 함수를 작성하라.

 function changeTrue(){
  return todos = todos.map(function(todo){
    return !todo.completed ? Object.assign({}, todo, { completed : true }) : todo;
  });
 };
console.log(changeTrue());

// 7. todos에서 완료한 할일의 갯수를 구하는 함수를 작성하라.

function counterTodo(){
  return todos.filter(function(todo) {
    return todo.completed;
  }).length;
};
console.log(counterTodo());

// todos.filter(function(todo){
//   return todo.completed === true;
// })
 



// 7. todos에서 완료(complted: true)한 할일의 갯수를 구하는 함수를 구하여라.




// todosㅔㅅ = todos.filter(function(todo){
//   return todo.id !== +e.target.parentNode.id;
// });
// console.log('[Result', todos);



// function getNextID(){
//   var ids = todos.map(function (todo){
//     return todo.id;
//   });
//   return todo.length ? Math.max.apply(null, ids) + 1 : 1;
// };

// function addTodo(todo) {
//   if (!todo) return;
//   // list.innerHTML += '<li><span>' + todo + '</span> <button>del</button></li>';
//   // 추가 할 todo 객체
//   // 새로운 true 객체
  
//   todos = [{
//     id: getNextID(),
//     content: todoInput.value,
//     completed: false
//   }];
// };
