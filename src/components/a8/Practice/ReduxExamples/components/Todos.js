import React, {useState} from "react"; // import useState to work with local state
import {useSelector, useDispatch} from "react-redux"; // import useSelector

const Todos = () => {
    const todos = useSelector(state => state.todos); // retrieve todos from reducer state and assign to local todos constant
    const [todo, setTodo] = useState({do: '', done: false}); // create t'odo local state variable initialized; added done property;
    const dispatch = useDispatch(); // create a dispatch
    const createTodoClickHandler = () => {  // handle create click event
        const action = {  // create action object
            type: 'create-todo',   // required action type
            todo                    // payload
        };
        dispatch(action);
    }
    // create new action with type 'delete-t'odo'
    const deleteTodoClickHandler = (todo) => {
        const action = {
            type: 'delete-todo',
            todo
        };
        dispatch(action);  // send action to all reducers
    }

    // create new action with type 'update-t'odo'
    const updateTodoClickHandler = (todo) => {
        const action = {
            type: 'update-todo',
            todo
        };
        dispatch(action);
    }


    const todoChangeHandler = (event) => {  // // handle keystroke changes in input field
        const doValue = event.target.value;  // get data from input field
        const newTodo = {   // create new t'odo object instance
            do: doValue  // setting the t'odo's do property
        };
        setTodo(newTodo);    // change local state t'odo variable
    }


    return(
        <>
            <h3>Todos</h3>
            <ul className="list-group">

                <li className="list-group-item"> {/*// add a new line item at the top*/}
                    <input     // containing an input field to type t'odo
                        onChange={todoChangeHandler}  // handle keystrokes to update component state
                        value={todo.do}   // update field with latest state value
                        className="form-control"/>
                    <button onClick={createTodoClickHandler}     // create button notifies event handler when clicked to
                        // create a new t'odo
                            className="btn btn-primary">
                        Create New Todo
                    </button>

                </li>

                { // iterate over todos array and render a line item element for each t'odo object
                    // display the do property containing the t'odo text
                    todos.map(todo =>
                        <li key={todo._id} className="list-group-item">
                            <input checked={todo.done}   // create a checkbox, show checked if done=true
                            onChange={(event) =>  // if checkbox changes, update done with
                                       updateTodoClickHandler(
                                           {...todo,   // copy old state
                                               done: event.target.checked})}  // overwrite done with target.checked
                                   type="checkbox"/>

                            {todo.do}
                            <button onClick={() => // if user clicks on Delete button
                                deleteTodoClickHandler(todo)}  // call event handler passing t'odo instance
                                    className="btn btn-danger float-end">
                                Delete
                            </button>

                        </li>
                    )
                }
            </ul>
        </>
    );
};
export default Todos;

