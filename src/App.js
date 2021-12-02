import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Practice as A7Practice} from "./components/a7/Practice";
import {Practice as A8Practice} from "./components/a8/Practice";
import {Practice as A6Practice} from "./components/a6/Practice";

import {HomeScreen as A6HomeScreen} from "./components/a6/Build/HomeScreen/HomeScreen";
import {ExploreScreen as A6ExploreScreen} from "./components/a6/Build/ExploreScreen/ExploreScreen";

import {HomeScreen as A7HomeScreen}  from "./components/a7/Build/HomeScreen/HomeScreen";
import {ExploreScreen as A7ExploreScreen} from "./components/a7/Build/ExploreScreen/ExploreScreen";
import {ProfileScreen as A7ProfileScreen}  from "./components/a7/Build/ProfileScreen/ProfileScreen";
import {HomeScreen as A8HomeScreen} from "./components/a8/Build/HomeScreen/HomeScreen";
import {ExploreScreen as A8ExploreScreen} from "./components/a8/Build/ExploreScreen/ExploreScreen";
import {ProfileScreen as A8ProfileScreen} from "./components/a8/Build/ProfileScreen/ProfileScreen";
import {Provider} from "react-redux";
import profileReducer from "./reducers/profileReducer";
import profileScreenReducer from "./reducers/profileScreenReducer";
import whoReducer from "./reducers/whoReducer";
import postReducer from "./reducers/postReducer";
import {combineReducers, createStore} from "redux";
// import A9 from "./a9";
import HomeScreen from "./a9/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./a9/Build/ExploreScreen/ExploreScreen";
import ProfileScreen from "./a9/Build/ProfileScreen/ProfileScreen";
import Practice from "./a9/Practice";
import whoReducerNew from "../src/a9/reducers/whoReducer";
import postReducerNew from "../src/a9/reducers/postReducer";
import profileReducerNew from "./a9/reducers/profileReducer";
import profileScreenReducerNew from "./a9/reducers/profileScreenReducer";



const reducer = combineReducers({
    postRdc:postReducer,
    postRdcNew:postReducerNew,
    whoRdc:whoReducer,
    whoNew:whoReducerNew,
    profileRdc:profileReducer,
    profileRdcNew:profileReducerNew,
    profScrRdc:profileScreenReducer,
    profScrRdcNew:profileScreenReducerNew})  // namespaces the states of each reducer under their keys as passed to combineReducers()
const store = createStore(reducer); // create the store from the reducer


function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>

                  <Route path={["/","/a9","/a9/practice"]}
                         exact={true} component={Practice}/>
                  <Route path={["/a9/twitter", "/a9/twitter/home"]}
                         exact={true} component={HomeScreen}/>
                  <Route path="/a9/twitter/explore"
                         exact={true} component={ExploreScreen}/>
                  <Route path={"/a9/twitter/profile"}
                         exact={true} component={ProfileScreen}/>

                  <Route path={["/a8","/a8/practice"]} exact={true}>
                      <A8Practice/>
                  </Route>
                  <Route path={["/a8/twitter", "/a8/twitter/home"]}
                         exact={true} component={A8HomeScreen}/>
                  <Route path="/a8/twitter/explore"
                         exact={true} component={A8ExploreScreen}/>
                  <Route path={"/a8/twitter/profile"}
                         exact={true} component={A8ProfileScreen}/>

                  {/*// routes for A7*/}
                  <Route path={["/a7","/a7/practice"]} exact={true}>
                      <A7Practice/>
                  </Route>
                  <Route path={["/a7/twitter", "/a7/twitter/home"]}
                         exact={true} component={A7HomeScreen}/>
                  <Route path="/a7/twitter/explore"
                         exact={true} component={A7ExploreScreen}/>
                  <Route path={"/a7/twitter/profile"}
                         exact={true} component={A7ProfileScreen}/>

                  {/*// routes for A6*/}
                  <Route path={["/a6","a6/practice"]} exact={true}>
                      <A6Practice/>
                  </Route>
                  <Route path={["/a6/twitter", "/a6/twitter/home"]}
                         exact={true} component={A6HomeScreen}/>
                  <Route path="/a6/twitter/explore"
                         exact={true} component={A6ExploreScreen}/>

          </Provider>
      </BrowserRouter>
  );
}
export default App;




