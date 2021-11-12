import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";  // import hook to retrieve state from reducer
// import who from "../../../../reducers/data/who.json"  // we moved the data into the reducer instead
const toFollow = (state) => state.whoRdc;
const WhoToFollowList = () => {
    const who = useSelector(toFollow)  // retrieve state from store
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