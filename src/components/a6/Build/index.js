import React from "react";
// import {Link} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import {Route} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import HelloWorld from "../HelloWorld";
// import HomeScreen from "./HomeScreen/HomeScreen";


export const Build = () => {
    return(
        <>

            <Route path={["/a6/twitter", "/a6/twitter/home"]}
                   exact={true} component={HomeScreen}/>
            <Route path="/a6/twitter/explore"
                   exact={true} component={ExploreScreen}/>
            <Route path={"/a6/hello"}
                   exact={true} component={HelloWorld}/>

            {/*<HomeScreen/>*/}

            {/*<A6/>*/}
            {/*<ExploreScreen />*/}

        </>

    )
};

export default Build;
