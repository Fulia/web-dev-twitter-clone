import posts from "./posts.json";
import PostItem from "./PostItem";

const PostList = () => {
    return (
            <ul className="list-group">
                {
                posts.map((post,key) => {
                    return(
                        <PostItem key={key} post={post}/>
                    );
                })
                }
            </ul>
); }
export default PostList;