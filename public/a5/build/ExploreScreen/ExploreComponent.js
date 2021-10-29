import PostSummaryList from "../PostSummaryList/index.js";


const ExploreComponent = () => {
    return(`
            <!--search icon within the search input-->
            <div class="row d-flex align-items-center search-cog mb-2">
                <div class="col-11 form-group has-search">
                    <span class="fa fa-search form-control-feedback font-darker-gray"></span>
                    <input type="search" class="form-control border-0 rounded-pill bg-dark-dark-gray font-darker-gray" placeholder="Search Twitter" aria-label="Search"
                           aria-describedby="search-addon">
                </div>
                <a class="col-1 link-primary float-end">
                    <i class="fas fa-cog fa-lg"></i>
                </a>
            </div>
           <ul class="nav mb-2 nav-tabs">
               <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link d-none d-lg-block" href="sports.html">Sports</a>
                </li>
                <li class="nav-item ">
                    <a class="nav-link d-none d-xl-block" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <div class="position-relative">
                <img class="img-fluid" src="../../../pics/Starship-Mk1-Day.jpeg" alt="SpaceX Starship">
                <span class="text-overlay">SpaceX's Starship</span>
           </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
