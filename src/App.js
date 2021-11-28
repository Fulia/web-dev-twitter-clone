import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Practice as A7Practice} from "./components/a7/Practice";
import {Practice as A8Practice} from "./components/a8/Practice";
import {Practice as A6Practice} from "./components/a6/Practice";
// import {Build as A6Build} from "./components/a6/Build/index";
// import {Build as A7Build} from "./components/a7/Build/index";
// import {Build as A8Build} from "./components/a8/Build/index";
import {HomeScreen as A6HomeScreen} from "./components/a6/Build/HomeScreen/HomeScreen";
import {ExploreScreen as A6ExploreScreen} from "./components/a6/Build/ExploreScreen/ExploreScreen";

import {HomeScreen as A7HomeScreen}  from "./components/a7/Build/HomeScreen/HomeScreen";
import {ExploreScreen as A7ExploreScreen} from "./components/a7/Build/ExploreScreen/ExploreScreen";
import {ProfileScreen as A7ProfileScreen}  from "./components/a7/Build/ProfileScreen/ProfileScreen";
import HomeScreen from "./components/a8/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a8/Build/ExploreScreen/ExploreScreen";
import ProfileScreen from "./components/a8/Build/ProfileScreen/ProfileScreen";
// import A8 from "./components/a8/A8";
// import A7 from "./components/a7/A7";
// import A6 from "./components/a6/A6";
// import History from "./components/history"
import {Provider} from "react-redux";
import profileReducer from "./reducers/profileReducer";
import profileScreenReducer from "./reducers/profileScreenReducer";
import whoReducer from "./reducers/whoReducer";
import postReducer from "./reducers/postReducer";
import {combineReducers, createStore} from "redux";
import A9 from "./a9";



const reducer = combineReducers({
    postRdc:postReducer,
    whoRdc:whoReducer,
    profileRdc:profileReducer,
    profScrRdc:profileScreenReducer})  // namespaces the states of each reducer under their keys as passed to combineReducers()
const store = createStore(reducer); // create the store from the reducer


function App() {
  return (
      <BrowserRouter>
          <Provider store={store}>
                  {/*<Route path={"/a8"}>*/}
                  {/*    <A8Build/>*/}
                  {/*</Route>*/}
                  {/*<Route path={"/a7"}>*/}
                  {/*    <A7Build/>*/}
                  {/*</Route>*/}
                  {/*<Route path={"/a6"}>*/}
                  {/*    <A6Build/>*/}
                  {/*</Route>*/}

                  {/*// routes for A8*/}
                  <Route path={["/a9","/a9/practice"]}>
                      <A9/>
                  </Route>
                  <Route path={["/","/a8","/a8/practice"]} exact={true}>
                      <A8Practice/>
                  </Route>
                  <Route path={["/a8/twitter", "/a8/twitter/home"]}
                         exact={true} component={HomeScreen}/>
                  <Route path="/a8/twitter/explore"
                         exact={true} component={ExploreScreen}/>
                  <Route path={"/a8/twitter/profile"}
                         exact={true} component={ProfileScreen}/>

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


                  {/*<Route path={["/a6/twitter", "/a6/twitter/home"]}*/}
                  {/*       exact={true} component={HomeScreen}/>*/}
                  {/*<Route path="/a6/twitter/explore"*/}
                  {/*       exact={true} component={ExploreScreen}/>*/}
                  {/*<Route path={"/a6/hello"}*/}
                  {/*       exact={true} component={HelloWorld}/>*/}
                  {/*<Route path={"/a6/practice"}*/}
                  {/*       exact={true} component={A6Practice}/>*/}
          </Provider>
      </BrowserRouter>
  );
}
export default App;




