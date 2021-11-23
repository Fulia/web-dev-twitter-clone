import React from "react";
import HelloReduxExampleComponent
    from "./HelloReduxExampleComponent";
import hello from "../reducers/hello";  // import reducer that calculates/generates the data
import Todos from "./Todos";
import todos from "../reducers/todos";
import {createStore, combineReducers} from "redux";
import {Provider} from "react-redux";   // import Provider which will deliver the data
const reducers = combineReducers({hello, todos})  // import the combineReducers function
// combine all reducers into a single reducer
const store = createStore(reducers); // create data storage  // import createStore to store data from reducers


const ReduxExamples = () => {
    return(
        // The Provider delivers the content of the store to all its child components.
        <Provider store={store}>
            <div>
                <h2>Redux Examples</h2>
                <Todos/>
                <HelloReduxExampleComponent/>
            </div>
        </Provider>
    );
};
export default ReduxExamples;
