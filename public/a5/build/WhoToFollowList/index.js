import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
            <ul class="list-group">
                <li class="list-group-item fw-bold"">Who to follow</li>
                ${
                    who.map(user => {
                        return(WhoToFollowListItem(user));
                    }).join('')
                 }
            </ul>
`); }
export default WhoToFollowList;