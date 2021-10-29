import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (
            <ul className="list-group">

                {posts.map((post, key) => {
                        return(
                        <PostSummaryItem key={key} post={post}/>
                        );
                    })
                }

            </ul>
); }
export default PostSummaryList;

