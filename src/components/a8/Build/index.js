import React from "react";
import HomeScreen from "./HomeScreen/HomeScreen";
import whoReducer from "../../../reducers/whoReducer";
import postReducer from "../../../reducers/postReducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import {Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import profileReducer from "../../../reducers/profileReducer";
import profileScreenReducer from "../../../reducers/profileScreenReducer";


// save the state of change through "store"
const reducer = combineReducers({
    postRdc:postReducer,
    whoRdc:whoReducer,
    profileRdc:profileReducer,
    profScrRdc:profileScreenReducer})  // namespaces the states of each reducer under their keys as passed to combineReducers()
const store = createStore(reducer); // create the store from the reducer


export const Build = () => {
    return(
        // provide the store to all child components
        <Provider store={store}>
            <div>
                <Route path={["/a8/twitter", "/a8/twitter/home"]}
                       exact={true} component={HomeScreen}/>
                <Route path="/a8/twitter/explore"
                       exact={true} component={ExploreScreen}/>
                <Route path={"/a8/twitter/profile"}
                       exact={true} component={ProfileScreen}/>
            </div>
        </Provider>
    )

};

export default Build;
