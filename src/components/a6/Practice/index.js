import React from "react";
import Classes from "./Classes";
import Styles from "./Styles";
import ConditionalOutput from "./ConditionalOutput/index";
import TodoList from "./Todo/TodoList";
import A6 from "../index";



export const Practice = () => {
    return(
        <>
            <A6/>
            <h1>Practice</h1>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>

        </>

    )
};

export default Practice;