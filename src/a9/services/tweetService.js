// const TWEET_API = 'https://twitter-clone-server-node.herokuapp.com/api/tweets';   // base URL of API
const route = process.env.NODE_ENV === "development" ? "http://localhost:4000/" : "https://twitter-clone-server-node.herokuapp.com/";
const TWEET_API =  route + 'rest/tweets';


// function to fetch tweets and notify reducer
export const fetchAllTweets = (dispatch) =>{
    // console.log("fetchALlTweets");
    // asynchronously sends HTTP GET request to URL
    fetch(TWEET_API)
        // parse JSON body from response
        .then(response => response.json())
        // parsed tweets from server
        .then(tweets =>
            // notify reducer
            dispatch({
                // action
                type: 'fetch-All-tweets-new',
                // send tweets from server to reducer
                tweets
            })
        )
};

// process order: front: click create tweet -> send data to backend -> respond with the new tweet -> notify reducer: process
export const postNewTweet = (dispatch, newTweet) =>
    // function to post tweet to server
// send message to tweet API
    fetch(TWEET_API, {
        method: 'POST',  // use HTTP POST
        body: JSON.stringify(newTweet),  // embed tweet in body as a string
        headers: {
            'content-type': 'application/json'    // tell server string in body is formatted as JSON
        }
    })
        .then(response => response.json()) // parse JSON response from server
        .then(tweet =>  // actual tweet stored in server
            dispatch({  // send tweet to reducer
                type: 'create-Tweet-new',  // event to add new tweet at beginning of tweets
                tweet // actual tweet
            })
        );


// function to send HTTP request to delete tweet
export const deleteTweet = (dispatch, tweet) =>
    fetch(TWEET_API + "/" + tweet._id, { // encode tweet ID at end of the URL
        method: 'DELETE'
    }).then(response => dispatch({  // ignore response, just dispatch to reducer
        type: 'delete-Tweet-new',  // send reducer a 'delete-tweet' event
        tweet // pass tweet to be deleted
    }));


export const likeTweet = (dispatch, tweet) =>
    fetch(TWEET_API + "/" + tweet._id +"/like", {
        method: 'PUT'
    })
        .then(response =>
            dispatch({
                type: 'like-Tweet-new',
                tweet
            }));

//
// // function to fetch tweets
// export const fetchAllTweets = () =>
//     // console.log("fetchALlTweets");
//     // asynchronously sends HTTP GET request to URL
//     fetch(TWEET_API)
//         // parse JSON body from response
//         .then(response =>
//         // {
//         //     console.log(response);
//             response.json()
//         // }
//         );
//
//
// // process order: front: click create tweet -> send data to backend -> respond with the new tweet -> notify reducer: process
// export const postNewTweet = (newContent) =>
//     // function to post tweet to server
// // send message to tweet API
//     fetch(TWEET_API, {
//         method: 'POST',  // use HTTP POST
//         body: JSON.stringify(newContent),  // embed tweet in body as a string
//         headers: {
//             'content-type': 'application/json'    // tell server string in body is formatted as JSON
//         }
//     })
//         .then(response => response.json()); // parse JSON response from server
//         // .then(tweets =>  // actual tweet stored in server
//         //     dispatch({  // send tweet to reducer
//         //         type: 'fetch-all-tweets',  // event to add new tweet at beginning of tweets
//         //         tweets // actual tweet
//         //     })
//         // );
//
//
// // function to send HTTP request to delete tweet
// export const deleteTweet = (tweet) =>
//     fetch(TWEET_API + "/" + tweet._id, { // encode tweet ID at end of the URL
//         method: 'DELETE'
//     });
//         .then(response => dispatch({  // ignore response, just dispatch to reducer
//         type: 'delete-tweet',  // send reducer a 'delete-tweet' event
//         response // pass tweet to be deleted
//     }));
//
//
// export const likeTweet = (tweet) =>
//     fetch(TWEET_API + "/" + tweet._id +"/like", {
//         method: 'PUT',
//         body: JSON.stringify(tweet),  // string formatted as JSON
//         headers: {
//             'content-type': 'application/json'
//         }
//     })
//
//         // .then(response => console.log(response.json()));
//         // .then(response =>
//         //     dispatch({
//         //         type: 'like-tweet',
//         //         tweet
//         //     }));
