// import tweets from './data/tweets.json';  // an array of object

const postReducerNew = (state= [], action) => {
    switch (action.type) {              // add a switch to handle different event types
        case 'fetch-All-tweets-new':
            // console.log("fetch-all-tweets",action.tweets)
            return(
                action.tweets // assign to state
            )

        case 'like-Tweet-new':
            return state.map(tweet => {
                if(tweet._id === action.tweet._id) {
                    if(tweet.liked === true) {
                        tweet.liked = false;
                        tweet.like--;
                    } else {
                        tweet.liked = true;
                        tweet.like++;
                    }
                    return tweet;
                } else {
                    return tweet;
                }
            });
        case 'delete-Tweet-new':
            return state.filter(tweet => tweet._id !== action.tweet._id);
            // state.filter(tweet => tweet._id !== action.tweet._id);
        case 'create-Tweet-new': {          // handle first event type create-tweet
            state = [
                ...state, // state = tweets  ( should not be state.tweets)
                action.tweet
            ];
            // state = [action.tweet, ...state]
            return (state);
        }
        // it's a good practice to always have default
        // case returning the current state
        default:
            return(state);
    }

};

export default postReducerNew;
