import NavigationSidebar from "../NavigationSidebar/index";
import PostList from "./PostList/PostList";
import PostSummaryList from "../PostSummaryList/index";
import '../ExploreScreen/explore.css';
import WhatsHappening from "./WhatsHappening";
import A7 from "../../A7";




const HomeScreen = () => {
    return(
        <>
            <A7/>
        <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                <NavigationSidebar active="home"/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                 style={{"position": "relative"}}>
                <WhatsHappening/>
                <PostList/>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                <PostSummaryList title={"What's happening"}/>   {/* note title attribute */}
            </div>
        </div>
        </>
    );
}

export default HomeScreen;

