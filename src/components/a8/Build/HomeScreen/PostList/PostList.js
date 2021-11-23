import PostItem from "./PostItem";
import React, {useEffect} from "react";  // import useEffect to handle load event
import {useDispatch, useSelector} from "react-redux";  // import useDispatch to notify reducer// to getting posts from the store
import {fetchAllTweets} from "../../../../../services/tweetService.js"; // import fetchAllTweets service

const selectAllTweets = (state) => state.postRdc;

const PostList = () => {
    // const state = this.state
    const tweets = useSelector(selectAllTweets);
    const dispatch = useDispatch(); // get dispatch from hook
    useEffect(() => fetchAllTweets(dispatch), [dispatch])  // on load call fetch all tweets // dispatch?
    // console.log("PostList: ", tweets)

    return (
            <ul className="list-group">
                {
                tweets.map(tweet => {
                    return(
                        <PostItem tweet={tweet} key={tweet._id} />
                    );
                    })
                }
            </ul>
    );
}
export default PostList;





