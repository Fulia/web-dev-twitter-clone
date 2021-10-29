import React from "react";
import './explore.css';
import NavigationSidebar from "../NavigationSidebar/index";
import WhoToFollowList from "../WhoToFollowList/index";
import ExploreComponent from "./ExploreComponent";

// const active = window.location.pathname;

const ExploreScreen = () => {
    return(
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="explore"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <ExploreComponent/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <WhoToFollowList/>
            </div>
        </div>
    );
};
export default ExploreScreen;


// const ExploreScreen = () => {
//     $('#wd-explore').append(`
//         <div class="row mt-2  mb-2">
//         <div class="col-2 col-md-2 col-lg-1 col-xl-2">
//             ${NavigationSidebar(active)}
//         </div>
//         <div class="col-sm-8 col-lg-6 ">${ExploreComponent()}</div>
//
//         <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
//             ${WhoToFollowList()}
//         </div>
//         </div>
//     `);
// })($);





