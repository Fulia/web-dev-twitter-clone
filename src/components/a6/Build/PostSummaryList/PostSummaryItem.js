import React from "react";


const PostSummaryItem = ({
                             post = {
                                 "topic": "Web Development",
                                 "userName": "ReactJS",
                                 "time": "2h",
                                 "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                 "image": "../../../images/react-blue.png"
                             }
                         }
) => {
    return(
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-10">
                    <div className="gray-text">{post.topic}</div>
                    <div className="d-flex justify-content-start align-content-center">
                        <div className="fw-bold">{post.userName} <i className="fas fa-check-circle fa-1x"></i></div>
                        <span className="gray-text"> - {post.time}</span>
                    </div>
                    <div className="fw-bold">{post.title}</div>
                </div>
                <div className="col-2">
                    <img className="img-fluid rounded" src={post.image} alt="post"/>
                </div>
            </div>
        </li>
    );
}
export default PostSummaryItem;

