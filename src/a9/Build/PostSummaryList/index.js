import posts from "./posts.json";
import PostSummaryItem from "./PostSummaryItem.js";

const PostSummaryList = () => {
    return (
            <ul className="list-group">
                <li className={"list-group-item fs-5 fw-bold"}>What's happening</li>
                {posts.map((post, key) => {
                        return(
                        <PostSummaryItem key={key} post={post}/>
                        );
                    })
                }

            </ul>
); }
export default PostSummaryList;

