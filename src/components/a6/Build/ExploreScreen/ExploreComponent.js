import React from "react";
import PostSummaryList from "../PostSummaryList/index";


const ExploreComponent = () => {
    return(
        <>
            <div className="row d-flex align-items-center search-cog mb-2">
                <div className="col-11 form-group has-search">
                    <span className="fa fa-search form-control-feedback font-darker-gray"/>
                    <input type="search" className="form-control border-0 rounded-pill bg-dark-dark-gray font-darker-gray" placeholder="Search Twitter" aria-label="Search"
                           aria-describedby="search-addon"/>
                </div>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="col-1 link-primary float-end">
                    <i className="fas fa-cog fa-lg"/>
                </a>
            </div>
           <ul className="nav mb-2 nav-tabs">
               <li className="nav-item">
                   {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a className="nav-link active" href="#">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-none d-lg-block" href="sports.html">Sports</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link d-none d-xl-block" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <div className="position-relative">
                {/*pay attention to the path/src of the image*/}
                <img className="img-fluid" src="/pics/Starship-Mk1-Day.jpeg" alt="SpaceX Starship"/>
                <span className="text-overlay">SpaceX's Starship</span>
           </div>
           <PostSummaryList/>
    </>
    );
}
export default ExploreComponent;
