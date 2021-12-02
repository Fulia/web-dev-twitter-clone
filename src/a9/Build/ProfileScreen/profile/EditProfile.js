import React, {useEffect, useState} from "react";  // useState to deal with local changes
import {useDispatch, useSelector} from "react-redux";
import moment from "moment";
import { updateProfile} from "../../../services/profileService";
import {fetchProfile} from "../../../services/profileService";
 // to getting posts from the store

const profData = (state) => state.profileRdcNew;


const EditProfile = () => {
    const profile = useSelector(profData)  // before update
    // console.log("Fetched from reducer", profile)
    const [profileInfo, setProfileInfo] = useState(profile);
    // if (profile !== profileInfo) {
    //     setProfileInfo(profile)
    // }
    // setProfileInfo(profile)// initialState: profile (to be updated)
    // console.log("profileInfo state 1", profileInfo)
    const dispatch = useDispatch();  // send action object to reducer
    useEffect(() => fetchProfile(dispatch), [dispatch])
    // console.log("profileInfo state 2", profileInfo)

    // handle delete tweet click event
    // notify redux reducer with delete-tweet event and
    // deleted tweet
    const saveProfileEditClickHandler = () => {
        console.log("saveHandler", profileInfo)
        updateProfile(dispatch, profileInfo)
        closeEditProfileClickHandler()
        // dispatch({  // action object
        //     type: 'Updated profile', // needs to be unique
        //     profileInfo
        // })
    };

    const closeEditProfileClickHandler = () =>{
        dispatch({
            type: "close-edit-profile-new",
        })
    }

    const nameChangeHandler = (event) => {  // // handle keystroke changes in input field
        const name = event.target.value;  // get data from input field
        const newProfile = {   // create new profile object instance
            ...profileInfo,
            Name: name,  // overwrite the profile name property
            // lastName: name[1]
        };
        setProfileInfo(newProfile);    // change local state name variable
    }
    const bioChangeHandler = (event) => {  // // handle keystroke changes in input field
        const bio = event.target.value;  // get data from input field
        const newProfile = {   // create new profile object instance
            ...profileInfo,
            bio: bio
        };
        setProfileInfo(newProfile);    // change local state name variable
    }
    const websiteChangeHandler = (event) => {  // // handle keystroke changes in input field
        const website = event.target.value;  // get data from input field
        const newProfile = {   // create new profile object instance
            ...profileInfo,
            website: website
        };
        setProfileInfo(newProfile);    // change local state name variable
    }

    // dobChangeHandler
    return(
        <>
            <div className={"row align-items-center py-2"}>
                {/*// onclick -> profile*/}
                <i className="col-1 fas fa-times" onClick={closeEditProfileClickHandler}/>
                <span className={"col-9 fw-bold"}>Edit profile</span>
                <button className={"col-2 float-end rounded-pill btn btn-outline-dark"} onClick={saveProfileEditClickHandler}>Save</button>
            </div>
            <label htmlFor={"bannerPic"}>
                <i className="fas fa-camera position-relative"
                   style={{"left": "310px", "top": "150px", "color": "white"}}/>
                <input type={"file"} id={"bannerPic"} style={{"display": "none"}}/>
            </label>
            <img className={"img-fluid px-0"} src={profile.bannerPicture} alt={"profile banner"}/>
            {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}

            <img className={"rounded-circle position-relative "}
                 style={{"left":"20px", "top":"-80px", "border":"solid black",
                     "marginBottom": "-50px"}}
                 width={"150px"}
                 height={"150px"}
                 src={profile.profilePicture} alt={"profile"}/>
            <label htmlFor={"profilePic"}>
                <i className="fas fa-camera position-relative" style={{"left": "-60px", "top": "-50px", "color": "white"}}/>
                <input type={"file"} id={"profilePic"} style={{"display": "none"}}/>
            </label>

            <div className={"rounded mb-3 pt-2"} style={{"border":" solid thin #333333"}}>
            <span className={"ps-3 text-muted"}>Name</span>
            <input
                type={"text"}
                onChange={nameChangeHandler}  // handle keystrokes to update component state
                value={profileInfo.Name}   // update field with latest state value
                className="form-control bg-black text-white"/>
            </div>
            <div className={"rounded mb-3 pt-2"} style={{"border":" solid thin #333333"}}>
                <span className={"ps-3 text-muted"}>Bio</span>
                <input
                    onChange={bioChangeHandler}  // handle keystrokes to update component state
                    value={profileInfo.bio}   // update field with latest state value
                    className="form-control bg-black text-white overflow-auto"/>
            </div>
            <div className={"rounded mb-3 pt-2"} style={{"border":" solid thin #333333"}}>
                <span className={"ps-3 text-muted"}>Website</span>
                <input
                    onChange={websiteChangeHandler}  // handle keystrokes to update component state
                    value={profileInfo.website}   // update field with latest state value
                    className="form-control bg-black text-white "/>
            </div>
            <div className={"mb-3 pt-2"}>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                Birth date &middot; <a href={"#"}>Edit</a><br/>
                {/*// moment is a module to convert time*/}
                <span className={"text-white"}>{moment(profileInfo.dateOfBirth, "MM/DD/YYYY").format("MMMM D, YYYY")}</span>

            </div>


        </>
    );
}


export default EditProfile;