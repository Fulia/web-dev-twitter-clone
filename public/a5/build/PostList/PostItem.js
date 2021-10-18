const PostItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row justify-content-start">
                <div class="col-1 px-0">
                    <img class="rounded-circle img-fluid" src="${post.avatar}" alt="avatar">
                </div>
                <div class="col-11">
                    <span class="fw-bold">${post.userName} <i class="fas fa-check-circle"></i></span>
                    <span class="gray-text">  @${post.handle}  &middot;  ${post.time}</span>
                    <span class="float-end gray-text"><i class="fas fa-ellipsis-h"></i></span>
                    <div class="">${post.postContent}
                    </div>
                    <div class="borderDark b-radius-1 overflow-hidden ">
<!--                    conditional rendering element-->
                        ${post.postLinkImage !== null && post.postLinkImage !== '' ? `<img class="img-fluid" src="${post.postLinkImage}" alt="#">` : ``}
                        ${post.postLinkTitle !== null && post.postLinkTitle !== '' ? `
                        <div class="m-0 p-3 borderDark border-bottom-0 border-start-0 border-end-0">
                            <span class="">
                                ${post.postLinkTitle}
                            </span> <br>
                        ${post.postLinkContent !== null && post.postLinkContent !== '' ? `
                            <span class="gray-text">${post.postLinkContent} </span> <br>`:``}
                        ${post.postLink !== null && post.postLink !== '' ? `
                            <a class="gray-text"   href="https://www.jsonline.com/story/news/2021/10/02/milwaukee-and-across-u-s-womens-march-focuses-abortion-rights/5972749001/?utm_campaign=snd-autopilot&cid=undefined_js_newswatch">
                                <i class="fas fa-link"></i>${post.postLink}</a>`:``}
                        </div>`:``}
                    </div>
                    
                    <div class="d-flex justify-content-between pe-5 m-3">
                        <a class="gray-text" href="#">
                            <span class="">
                                <i class="far fa-comment-alt"></i>
                                <span>${post.comment}</span>
                            </span>
                        </a>
                        <a class="gray-text" href="#">
                            <span class="">
                                <i class="fas fa-retweet" ></i>
                                <span>${post.retweet}</span>
                            </span>
                        </a>
                     
                        <a class="gray-text" href="#">
                            <i class="far fa-heart"></i>
                            <span>${post.like}</span>
                        </a>
  
                        <a class="gray-text" href="#">
                            <span class="">
                                <i class="fas fa-share-alt"></i>
                            </span>
                        </a>
                    </div>
                    
                </div>
            </div>
        </li>
    `);
}


export default PostItem;