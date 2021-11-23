import React from "react";
import ReduxExamples from "./ReduxExamples/components";
import History from "../../history";
import APIExamples from "./APIExamples";
import A8 from "../A8";




export const Practice = () => {
    return(
        <>
            <A8/>
            <h1>A8 Practice</h1>
            {/* render the new component */}
            <APIExamples/>
            <hr/>
            <h5>A7 Practice</h5>
            <ReduxExamples/>
            <hr/>
            <History/>


        </>

    )
};

export default Practice;
