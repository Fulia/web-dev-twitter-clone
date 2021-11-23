import React from "react";
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.css';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import {Practice as A7Practice} from "./components/a7/Practice";
import {Practice as A8Practice} from "./components/a8/Practice";
import {Practice as A6Practice} from "./components/a6/Practice";
import {Build as A6Build} from "./components/a6/Build/index";
import {Build as A7Build} from "./components/a7/Build/index";
import {Build as A8Build} from "./components/a8/Build/index";
// import A8 from "./components/a8/A8";
// import A7 from "./components/a7/A7";
// import A6 from "./components/a6/A6";
// import History from "./components/history"





function App() {
  return (
      <BrowserRouter>
          <div className="container">
              <Route path={"/a8"}>
                  <A8Build/>
              </Route>
              <Route path={"/a7"}>
                  <A7Build/>
              </Route>
              <Route path={"/a6"}>
                  <A6Build/>
              </Route>
              <Route path={["/","/a8","/a8/practice"]} exact={true}>
                  <A8Practice/>
              </Route>
              <Route path={["/a7","/a7/practice"]} exact={true}>
                  <A7Practice/>
              </Route>
              <Route path={["/a6","a6/practice"]} exact={true}>
                  <A6Practice/>
              </Route>

              {/*<A8/>*/}
              {/*<A7/>*/}
              {/*<A6/>*/}
              {/*<hr/>*/}
              {/*<History/>*/}
              {/*<Route path={"/a6"} exact={true}>*/}
              {/*    <A6/>*/}
              {/*</Route>*/}
              {/*<Route path={["/a6/twitter", "/a6/twitter/home"]}*/}
              {/*       exact={true} component={HomeScreen}/>*/}
              {/*<Route path="/a6/twitter/explore"*/}
              {/*       exact={true} component={ExploreScreen}/>*/}
              {/*<Route path={"/a6/hello"}*/}
              {/*       exact={true} component={HelloWorld}/>*/}
              {/*<Route path={"/a6/practice"}*/}
              {/*       exact={true} component={A6Practice}/>*/}
          </div>
      </BrowserRouter>
  );
}
export default App;




