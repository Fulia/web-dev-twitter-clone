

const profileReducerNew = (state = {}, action) => {  // initialize the reducer's state
    switch (action.type){
        case "update-profile-new":
            return action.ProfileInfo;
        case "fetch-profile-new":
            // console.log("fetch", action.profile)
            return (action.profile)[0];
        default:
            return state; // remember to return state not default profileData
    }                 // return the single static state
};

export default profileReducerNew;
