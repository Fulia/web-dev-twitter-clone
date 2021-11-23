import React from "react";
import {Link} from "react-router-dom";




const A6 = () => {
    return (
        <>


            <h2>Assignment 6</h2>
            <Link to="/a6/hello">
                Hello
            </Link> | &nbsp;
            <Link to="/a6">
                Practice
            </Link> | &nbsp;
            <Link to="/a6/twitter/explore">
                Build
            </Link> | &nbsp;
            <Link to="/a6/twitter/home">
                Challenge
            </Link> | &nbsp;
            <Link to="/a7">
                A7
            </Link> | &nbsp;
            <Link to="/a8">
                A8
            </Link>
        </>
    )
};

export default A6;