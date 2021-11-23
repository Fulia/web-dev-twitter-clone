import React from "react";
import {useDispatch} from "react-redux";
import {deleteTweet}
    from "../../../../../services/tweetService";   // import deleteTweet from service
import {likeTweet} from "../../../../../services/tweetService";


const PostItem = ({tweet}) => {
    const dispatch = useDispatch();
    // handle delete tweet click event
    // notify redux reducer with delete-tweet event and
    // deleted tweet
    const deleteTweetClickHandler = () => {
        // dispatch({type: 'delete-tweet', tweet})
        // don't notify reducer right away, instead
        // // use new deleteTweet function to notify server
        deleteTweet(dispatch, tweet);
    };


    const likeClickHandler = () => {
        // dispatch({type: 'like-tweet', tweet});
        likeTweet(dispatch, tweet);
    };


    return(
        <li className="list-group-item">
            <div className="row justify-content-start">
                <div className="col-1 px-0">
                    <img className="rounded-circle img-fluid" src={tweet.avatar} alt="avatar"/>
                </div>
                <div className="col-11">
                    <span className="fw-bold">{tweet.userName} <i className="fas fa-check-circle"/></span>
                    <span className="gray-text">  @{tweet.handle}  &middot;  {tweet.time}</span>
                    {/*// create new remove icon on top, left corner of*/}
                    {/*// each tweet. Bind click event with click handler*/}
                    <i className="fas fa-times fa-pull-right" onClick={deleteTweetClickHandler} />


                    {/*<span className="float-end gray-text"><i className="fas fa-ellipsis-h"/></span>*/}
                    {/*// dangerously render the link/handle among strings*/}
                    <div className="" dangerouslySetInnerHTML={{__html: tweet.postContent}} />
                    <div className="borderDark b-radius-1 overflow-hidden ">
                        {tweet.postLinkImage !== null && tweet.postLinkImage !== "" ?
                            <img className="img-fluid" src={tweet.postLinkImage} alt="#"/> : ""}
                        {tweet.hasOwnProperty('postLinkTitle') && tweet.postLinkTitle !== null && tweet.postLinkTitle !== "" ?
                            <div className="m-0 p-3 borderDark border-bottom-0 border-start-0 border-end-0">
                                <span>
                                    {tweet.postLinkTitle}
                                </span> <br/>
                                {tweet.hasOwnProperty('postLinkContent') && tweet.postLinkContent !== null && tweet.postLinkContent !== "" ?
                                    <><span className="gray-text">{tweet.postLinkContent}</span><br/></> : ""}
                                {tweet.hasOwnProperty('postLink') && tweet.postLink !== null && tweet.postLink !== "" ?
                                    <a className="gray-text"   href={tweet.postLink}>
                                        <i className="fas fa-link"/>{tweet.postLink}</a>:""}
                            </div> : ""}
                    </div>
                    {/*d-flex justify-content-between pe-5 m-3*/}
                    <div className="row my-3">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <div className="col gray-text" >
                            <span >
                                <i className="far fa-comment-alt"/>
                                <span className="ps-2">{tweet.comment}</span>
                            </span>
                        </div>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <div className="col gray-text" >
                            <span className="">
                                <i className="fas fa-retweet" />
                                <span className="ps-2">{tweet.retweet}</span>
                            </span>
                        </div>
                     
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <div className="col gray-text"
                             onClick={likeClickHandler}>
                            {
                                tweet.liked && <i className="fas fa-heart me-2"
    style={{color: tweet.liked ? "red" : "white"}}/>
                            }
                            {
                                !tweet.liked && <i className="far fa-heart me-2"/>
                            }
                            {tweet.like}

                        </div>
  
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="col gray-text">
                            <span className="">
                                <i className="fas fa-share-alt"/>
                            </span>
                        </a>
                    </div>
                    
                </div>
            </div>
        </li>
    );
}


export default PostItem;