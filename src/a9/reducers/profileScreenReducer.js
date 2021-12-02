
const profileScreenReducerNew = (state = false, action) => {  // initialize the reducer's state
    switch (action.type){
        case "open-edit-profile-new":
            return true;
        case "close-edit-profile-new":
            return false;
        default:
            return state;
    }                 // return the single static state
};

export default profileScreenReducerNew;
