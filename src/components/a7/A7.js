import React from "react";
import {Link} from "react-router-dom";



const A7 = () => {
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

            <h2>Assignment 7</h2>
            <Link to="/a7">
                Practice
            </Link> | &nbsp;
            <Link to="/a7/twitter/home">
                Build
            </Link> | &nbsp;
            <Link to="/a7/twitter/profile">
                Challenge
            </Link> | &nbsp;
            <Link to="/a6">
                A6
            </Link>
        </>
    )
};

export default A7;