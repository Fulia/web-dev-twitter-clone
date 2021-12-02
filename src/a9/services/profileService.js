// select route per environment
const route = process.env.NODE_ENV === "development" ? "http://localhost:4000/" : "https://twitter-clone-server-node.herokuapp.com/";
const PROFILE_API =  route + 'rest/profile';   // base URL of API

// function to fetch profile and notify reducer
export const fetchProfile = (dispatch) =>{
    // asynchronously sends HTTP GET request to URL
    fetch(PROFILE_API)
        // parse JSON body from response
        .then(response => response.json())
        // parsed profile from server
        .then(profile => {
            // notify reducer
            // console.log(profile)  used to check type
            dispatch({
                // action
                type: 'fetch-profile-new',
                // send profile from server to reducer
                profile
            })
        })
};


// handle profile update POST
export const updateProfile = (dispatch, ProfileInfo) =>{
    // asynchronously sends HTTP GET request to URL
    fetch(PROFILE_API, {
        method: 'PUT',  // use HTTP POST
        body: JSON.stringify(ProfileInfo),  // embed tweet in body as a string
        headers: {
            'content-type': 'application/json'    // tell server string in body is formatted as JSON
        }
    })

        // parsed tweets from server
        .then(response =>
            // notify reducer
            dispatch({
                // action
                type: 'update-profile-new',
                // send tweets from server to reducer
                ProfileInfo
            })
        )
};
