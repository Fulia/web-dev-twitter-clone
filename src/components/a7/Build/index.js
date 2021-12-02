import React from "react";
import {Provider} from "react-redux";
// import profileReducer from "../../../reducers/profileReducer";
// import profileScreenReducer from "../../../reducers/profileScreenReducer";
// import whoReducer from "../../../reducers/whoReducer";
// import postReducer from "../../../reducers/postReducer";
// import {combineReducers, createStore} from "redux";
import HomeScreen from "./HomeScreen/HomeScreen";
// import {Route} from "react-router-dom";
import ExploreScreen from "./ExploreScreen/ExploreScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";



// save the state of change through "store"
// const reducer = combineReducers({
//     postRdc:postReducer,
//     whoRdc:whoReducer,
//     profileRdc:profileReducer,
//     profScrRdc:profileScreenReducer})  // namespaces the states of each reducer under their keys as passed to combineReducers()
// const store = createStore(reducer); // create the store from the reducer
//

export const Build = () => {
    return(
        // provide the store to all child components
        // <Provider store={store}>
            <div>
                <ExploreScreen/>
                <HomeScreen/>
                <ProfileScreen/>
            </div>
        // </Provider>
    )

};

export default Build;
