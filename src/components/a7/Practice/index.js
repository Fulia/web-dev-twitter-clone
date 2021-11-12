import React from "react";
// import Classes from "./Classes";
// import Styles from "./Styles";
// import ConditionalOutput from "./ConditionalOutput/index";
// import TodoList from "./Todo/TodoList";
import {Link} from "react-router-dom";
import ReduxExamples from "./ReduxExamples/components";
import History from "../../history";
import A7 from "../A7";



export const Practice = () => {
    return(
        <>
            <A7/>
            <h1>Practice</h1>
            <ReduxExamples/>
            <hr/>
            <History/>


        </>

    )
};

export default Practice;
