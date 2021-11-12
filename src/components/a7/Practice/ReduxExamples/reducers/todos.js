const data = [
    {
        _id: "123",
        do: "Accelerate the world's transition to sustainable energy",
        done: false
    },
    {
        _id: "234",
        do: "Reduce space transportation costs to become a spacefaring civilization",
        done: false
    },
];

const todos = (state=data, action) => {
    switch (action.type) {
        case 'update-todo':
            return state.map(todo => {
                 // if the current t'odo is the one updated, use the new one; otherwise remain same
                return todo._id === action.todo._id ? action.todo : todo;
            });
        case 'delete-todo':   // the todos reducer handles 'delete-t'odo' event
            return state.filter(todo => todo !== action.todo);  // new state is deleted t'odo filtered out from todos
        case 'create-todo':   // handle create-t'odo action type
            const newTodo = {   // create a unique id for the newly added t'odo  ( id comparison required in update action)
                ...action.todo,
                _id: (new Date()).getDate() + ""
            };
            return [     // create new state as array
                ...state,    // containing old todos
                newTodo     // return new state
            ]
        default:
            return state;
    }
}

export default todos;
