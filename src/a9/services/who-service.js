const route = process.env.NODE_ENV === "development" ? "http://localhost:4000/" : "https://twitter-clone-server-node.herokuapp.com/";
const WHO_API =  route + 'rest/who';


// function to fetch tweets and notify reducer
export const fetchAllWho = (dispatch) =>{
    // console.log("fetchALlTweets");
    // asynchronously sends HTTP GET request to URL
    fetch(WHO_API)
        // parse JSON body from response
        .then(response => response.json())
        // parsed tweets from server
        .then(who =>
            // notify reducer
            dispatch({
                // action
                type: 'fetch-all-who',
                // send tweets from server to reducer
                who
            })
        )
};