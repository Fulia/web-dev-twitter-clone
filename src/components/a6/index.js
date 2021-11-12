import React from "react";
import {Link} from "react-router-dom";



const A6 = () => {
    return (
        <>
            {/*<Route path={["/a6/twitter", "/a6/twitter/home"]}*/}
            {/*       exact={true} component={HomeScreen}/>*/}
            {/*<Route path="/a6/twitter/explore"*/}
            {/*       exact={true} component={ExploreScreen}/>*/}
            {/*<Route path={"/a6/hello"}*/}
            {/*       exact={true} component={HelloWorld}/>*/}
            {/*<Route path={"/a6/practice"}*/}
            {/*       exact={true} component={Practice}/>*/}

            <h2>Assignment 6</h2>
            <Link to="/a6/hello">
                Hello
            </Link> | &nbsp;
            <Link to="/a6/practice">
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
            </Link>
        </>
    )
};

export default A6;