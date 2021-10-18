import TodoItem from "./TodoItem.js";
import todos from "./todos.js";
const TodoList = () => {
    return(`
        <ul>
        ${
        // todo: content element from todos array
        todos.map(todo => {
            return(TodoItem(todo));
        }).join('')
        // remember to join 
    }
        </ul>
    `);
}
export default TodoList;

