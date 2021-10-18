import NavigationSidebar from "../NavigationSidebar/index.js";
// import ExploreComponent from "./ExploreComponent.js";
import PostList from "../PostList/PostList.js";
import PostSummaryList from "../PostSummaryList/index.js";

const active = window.location.pathname;

(function ($) {
    $('#wd-home').append(`
        <div class="row mt-2  mb-2">
        <div class="col-2 col-md-2 col-lg-1 col-xl-2">
            ${NavigationSidebar(active)}
        </div>

        <div class="col-sm-8 col-lg-6 ">${PostList()}</div>
        <div class="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
            ${PostSummaryList()}
        </div>
        </div>
    `);
})($);

console.log(window.location.pathname)

