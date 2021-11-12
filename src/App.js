import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
// import HelloWorld from "./components/a7/HelloWorld";
import {Practice as A6Practice} from "./components/a6/Practice";
import {Practice as A7Practice} from "./components/a7/Practice";
import Build from "./components/a7/Build";
import A6 from "./components/a6";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HelloWorld from "./components/a6/HelloWorld";





function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path={["/", "/a7", "/a7/practice"]} exact={true}>
                  <A7Practice/>
              </Route>
              <Route path={"/a7/twitter"}>
                  <Build/>
              </Route>
              <Route path={"/a6"} exact={true}>
                  <A6/>
              </Route>
              <Route path={["/a6/twitter", "/a6/twitter/home"]}
                     exact={true} component={HomeScreen}/>
              <Route path="/a6/twitter/explore"
                     exact={true} component={ExploreScreen}/>
              <Route path={"/a6/hello"}
                     exact={true} component={HelloWorld}/>
              <Route path={"/a6/practice"}
                     exact={true} component={A6Practice}/>
          </div>
      </BrowserRouter>
  );
}
export default App;




