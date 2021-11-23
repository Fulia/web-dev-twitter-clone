// select route per environment
const route = process.env.NODE_ENV === "development" ? "http://localhost:4000/" : "https://twitter-clone-server-node.herokuapp.com/";
const PROFILE_API =  route + 'api/profile';   // base URL of API

// function to fetch profile and notify reducer
export const fetchProfile = (dispatch) =>{
    // asynchronously sends HTTP GET request to URL
    fetch(PROFILE_API)
        // parse JSON body from response
        .then(response => response.json())
        // parsed profile from server
        .then(profile => {
            // notify reducer
            dispatch({
                // action
                type: 'fetch-profile',
                // send profile from server to reducer
                profile
            })
        })
};


// handle profile update POST
export const updateProfile = (dispatch, newProfileInfo) =>{
    // asynchronously sends HTTP GET request to URL
    fetch(PROFILE_API, {
        method: 'PUT',  // use HTTP POST
        body: JSON.stringify(newProfileInfo),  // embed tweet in body as a string
        headers: {
            'content-type': 'application/json'    // tell server string in body is formatted as JSON
        }
    })
        // parse JSON body from response
        .then(response => response.json())
        // parsed tweets from server
        .then(profile =>
            // notify reducer
            dispatch({
                // action
                type: 'update-profile',
                // send tweets from server to reducer
                profile
            })
        )
};
