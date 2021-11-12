import tweets from './data/tweets.json';

const postReducer = (state = tweets, action) => {
    switch (action.type) {              // add a switch to handle different event types
        case 'like-tweet':
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
        case 'delete-tweet':
            return state.filter(tweet => tweet._id !== action.tweet._id);
        case 'create-tweet':            // handle first event type create-tweet
            const tweet = {                     // create new tweet object with several default
                "_id": (new Date()).getTime() + '',           // values fo _id, topic, userName, etc.
                "topic": "Web Development",
                "userName": "ReactJS",
                "verified": false,
                "handle": "ReactJS",
                "time": "2h",
                "postContent": action.tweet,                            // copy attributes sent from dispatch, including
                "avatar": "/pics/dog-headshot.jpeg",  // whatsHappening attribute
                "postLinkImage": "/pics/taipei.jpeg",
                "comment": 0,
                "retweet": 0,
                "like": 0,
                "liked": false
            };
            // append new tweet object at beginning of
            // array of tweet. Put older tweets at the end
            // of the tweets array
            console.log("new tweet created")
            return ([
                    tweet,
                    ...state // state = tweets  ( should not be state.tweets)
                ]
            );
        // it's a good practice to always have default
        // case returning the current state
        default:
            return(state);
    }

};

export default postReducer;
