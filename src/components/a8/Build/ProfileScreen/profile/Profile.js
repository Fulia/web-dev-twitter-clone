
import {useSelector, useDispatch} from "react-redux";
import moment from "moment";
import {useEffect} from "react";
import {fetchProfile} from "../../../../../services/profileService";  // to getting posts from the store

const profData = (state) => state.profileRdc;
const Profile = () => {
    const profile = useSelector(profData);  // initial state: array; reducer returned array; index 0: only one element
    const dispatch = useDispatch();
    useEffect(() => fetchProfile(dispatch), [dispatch])

    const editProfileHandler = () => {
        dispatch({
            type: 'open-edit-profile'
        })
    }
    return (
        <>
            <div className={"row d-flex align-items-center"}>
                <i className="col-1 fas fa-arrow-left"/>
                <div className={"col-11"}>
                    <span className={"fw-bold"}>{profile.Name}</span><br/>
                    <span className={"text-muted"}>{profile.tweets} Tweets</span>
                </div>
            </div>
                <img className={"img-fluid px-0"} src={profile.bannerPicture} alt={"profile banner"}/>
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                <img className={"rounded-circle position-relative "}
                     style={{"left":"20px", "top":"-80px", "border":"solid black",
                         "marginBottom": "-80px"}}  // margin-bottom to narrow the distance of the next element
                     width={"150px"}
                     height={"150px"}
                     src={profile.profilePicture} alt={"profile"}/>
                <button className={"mt-3 me-3 float-end rounded-pill btn btn-outline-dark fw-bold"}
                        onClick={editProfileHandler} >Edit Profile</button>
            <h5 className={"m-0"}>{profile.Name}</h5>
            <span className={"text-muted"}>@{profile.handle}</span>
            <div className={"my-2"}>{profile.bio}</div>
            <div className={"my-2"}>{profile.website}</div>
            <div className={"row text-muted"}>
                <div className={"col"}><i className="fas fa-map-marker-alt"/>  {profile.location}</div>
                <div className={"col"}><i className="col fas fa-birthday-cake"/>  {moment(profile.dateOfBirth, "MM/DD/YYYY").format("MMMM D, YYYY")}</div>
                <div className={"col"}><i className="col fas fa-calendar-alt"/>  Joined {moment(profile.dateJoined, "MM/DD/YYYY").format("MMMM, YYYY")}</div>
            </div>
            <div>
                <p className={"text-muted"}><b className={"text-white"}>{profile.followingCount}</b> Following   <span className={"ps-2"}><b className={"text-white"}>{profile.followersCount}</b> Followers</span> </p>
            </div>



        </>
    ); }
export default Profile;
