
const profileReducer = (state = false, action) => {  // initialize the reducer's state
    switch (action.type){
        case "To edit profile":
            return true;
        case "Cancel update":
            return false;
        default:
            return false;
    }                 // return the single static state
};

export default profileReducer;
