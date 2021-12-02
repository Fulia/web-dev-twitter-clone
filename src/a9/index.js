import React from "react";
import {Link} from "react-router-dom";
// import {Link} from "react-router-dom";
// import {Route} from "react-router-dom";
// import Practice from "./Practice";
// import Build from "./Build";

const A9 = () => {
    return(
        <div>
            <h2>Assignment 9</h2>
            {/*// TODO!  */}
            <Link to="/a9/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a9/twitter">
                Build
            </Link> | &nbsp;
            <Link to="/a9/twitter/profile">
                Challenge (Profile)
            </Link> | &nbsp;
            <Link to="/a9/twitter/explore">
                Challenge (Explore)
            </Link> | &nbsp;
            <Link to="/a6">
                A6
            </Link> | &nbsp;
            <Link to="/a7">
                A7
            </Link> | &nbsp;
            <Link to={"/a8"}>
                A8
            </Link>

        </div>
    )
}

export default A9;
