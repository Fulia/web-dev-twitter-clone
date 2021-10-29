import WhoToFollowListItem from "./WhoToFollowListItem";
import who from "./who.json"
const WhoToFollowList = () => {
    return (
            <ul className="list-group">
                <li className="list-group-item fw-bold">Who to follow</li>
                {
                    who.map((who, key) => {
                        return(
                        <WhoToFollowListItem key={key} who={who}/>
                        )
                    })
                 }
            </ul>
); }
export default WhoToFollowList;