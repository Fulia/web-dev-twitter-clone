import WhoToFollowListItem from "./WhoToFollowListItem";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {fetchAllWho} from "../../services/who-service";

// import who from "../../../../reducers/data/who.json"  // we moved the data into the reducer instead
const toFollow = (state) => state.whoNew;
const WhoToFollowList = () => {
    const who = useSelector(toFollow)  // retrieve state from store
    const dispatch = useDispatch(); // get dispatch from hook
    useEffect(() => fetchAllWho(dispatch), [dispatch])  // on load call fetch all tweets // dispatch?
    // console.log("PostList: ", tweets)
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