// import posts from "../../../../../reducers/data/posts.json";
import PostItem from "./PostItem";
import {useSelector} from "react-redux";  // to getting posts from the store

const selectAllTweets = (state) => state.postRdc;
const PostList = () => {
    const tweets = useSelector(selectAllTweets);
    return (
            <ul className="list-group">
                {
                tweets.map((tweet) => {
                    return(
                        <PostItem tweet={tweet} key={tweet._id} />
                    );
                    })
                }
            </ul>
); }
export default PostList;





