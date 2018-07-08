let todos = [];
function addTodo(todo) {
    todos = [...todos, todo];
}
const newTodo = { id: 1, content: 'HTML', completed: false };
addTodo(newTodo);
console.log(todos);
