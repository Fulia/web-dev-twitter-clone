import NavigationSidebar from "../NavigationSidebar/index";
import PostSummaryList from "../PostSummaryList/index";
import '../ExploreScreen/explore.css';
import Profile from "./profile/Profile";
import EditProfile from "./profile/EditProfile";
import {useSelector} from "react-redux";
import A9 from "../../index";


const showEdit = (state) => state.profScrRdcNew; // global  showEdit: state
const ProfileScreen = () => {
    const show = useSelector(showEdit)  // the value of showEdit state
    return(
        <>
            <A9/>
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

