import React from "react";


const PostItem = (
    {
        post = {
            "userName": "Elon Musk",
            "time": "23h",
            "avatar": "../../../pics/elonmusk_avatar.jpeg",
            "handle": "elonmusk",
            "postContent": "Amazing show about <a class=\"fg-color-blue\" href=\"@inspiration4x\">@Inspiration4x</a> mission!",
            "postLinkImage": "../../../pics/elonmusk_linkimage.jpeg",
            "postLinkTitle": "Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "postLinkContent":"From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space...",
            "postLink":"netflix.com",
            "comment": "4.2K",
            "retweet":"3.5K",
            "like": "37.5K"
        }
    }
    ) => {
    return(
        <li className="list-group-item">
            <div className="row justify-content-start">
                <div className="col-1 px-0">
                    <img className="rounded-circle img-fluid" src={post.avatar} alt="avatar"/>
                </div>
                <div className="col-11">
                    <span className="fw-bold">{post.userName} <i className="fas fa-check-circle"/></span>
                    <span className="gray-text">  @{post.handle}  &middot;  {post.time}</span>
                    <span className="float-end gray-text"><i className="fas fa-ellipsis-h"/></span>
                    {/*// dangerously render the link/handle among strings*/}
                    <div className="" dangerouslySetInnerHTML={{__html: post.postContent}} />
                    <div className="borderDark b-radius-1 overflow-hidden ">
                        {post.postLinkImage !== null && post.postLinkImage !== "" ?
                            <img className="img-fluid" src={post.postLinkImage} alt="#"/> : ""}
                        {post.postLinkTitle !== null && post.postLinkTitle !== "" ?
                            <div className="m-0 p-3 borderDark border-bottom-0 border-start-0 border-end-0">
                                <span>
                                    {post.postLinkTitle}
                                </span> <br/>
                                {post.postLinkContent !== null && post.postLinkContent !== "" ?
                                    <><span className="gray-text">{post.postLinkContent}</span><br/></> : ""}
                                {post.postLink !== null && post.postLink !== "" ?
                                    <a className="gray-text"   href={post.postLink}>
                                        <i className="fas fa-link"/>{post.postLink}</a>:""}
                            </div> : ""}
                    </div>
                    <div className="d-flex justify-content-between pe-5 m-3">
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="gray-text" href="#">
                            <span >
                                <i className="far fa-comment-alt"/>
                                <span className="ps-2">{post.comment}</span>
                            </span>
                        </a>
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="gray-text" href="#">
                            <span className="">
                                <i className="fas fa-retweet" />
                                <span className="ps-2">{post.retweet}</span>
                            </span>
                        </a>
                     
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="gray-text" href="#">
                            <i className="far fa-heart"/>
                            <span className="ps-2">{post.like}</span>
                        </a>
  
                        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                        <a className="gray-text" href="#">
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