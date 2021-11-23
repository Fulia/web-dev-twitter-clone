import NavigationSidebar from "../NavigationSidebar/index";
import PostSummaryList from "../PostSummaryList/index";
import '../ExploreScreen/explore.css';
import Profile from "./profile/Profile";
import EditProfile from "./profile/EditProfile";
import {useSelector} from "react-redux";
import A8 from "../../A8";

const showEdit = (state) => state.profScrRdc; // global  showEdit: state
const ProfileScreen = () => {
    const show = useSelector(showEdit)  // the value of showEdit state
    return(
        <>
            <A8/>
            <div className="row mt-2">
                <div className="col-2">
                    <NavigationSidebar active="profile"/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    {show ? <EditProfile/> : <Profile/>}
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <PostSummaryList title={"What's happening"}/>   {/* note title attribute */}
                </div>

            </div>
        </>
    );
}

export default ProfileScreen;

