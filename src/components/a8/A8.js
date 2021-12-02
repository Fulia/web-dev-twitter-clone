import React from "react";
import {Link} from "react-router-dom";



const A8 = () => {
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

            <h2>Assignment 8</h2>
                                              {/*// TODO!  */}
            <Link to="/a8/practice">
                Practice
            </Link> | &nbsp;
            <Link to="/a8/twitter">
                Build
            </Link> | &nbsp;
            <Link to="/a8/twitter/profile">
                Challenge
            </Link> | &nbsp;
            <Link to="/a6">
                A6
            </Link> | &nbsp;
            <Link to="/a7">
                A7
            </Link> | &nbsp;
            <Link to="/a9">
                A9
            </Link>

        </>
    )
};

export default A8;