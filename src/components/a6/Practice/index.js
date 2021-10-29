import React from "react";
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput/index";
import TodoList from "./Todo/TodoList";



const Practice = () => {
    return(
        <>
            <h1>Practice</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>

        </>

    )
};

export default Practice;