import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import HelloWorld from "./components/a6/HelloWorld";
import Practice from "./components/a6/Practice";
import Build from "./components/a6/Build";
// import ExploreScreen from "./components/a6/Build/ExploreScreen/ExploreScreen";
import HomeScreen from "./components/a6/Build/HomeScreen/HomeScreen";
import A6 from "./components/a6";



function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path={["/", "/a6", "/a6/hello"]} exact={true}>
                  <HelloWorld/>
              </Route>
              <Route path="/a6/practice" exact={true}>
                  <A6/>
                  <Practice/>
              </Route>
              <Route path="/a6/twitter/explore" exact={true}>
                  <Build/>
              </Route>
              <Route path="/a6/twitter/home" exact={true} component={HomeScreen}>
                  <HomeScreen/>
              </Route>
              {/*<Route path="/a6/twitter/explore" component={ExploreScreen}/>*/}
          </div>
      </BrowserRouter>
  );
}
export default App;




