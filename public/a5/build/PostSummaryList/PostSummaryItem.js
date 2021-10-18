const PostSummaryItem = (post) => {
    return(`
        <li class="list-group-item">
            <div class="row align-items-center">
                <div class="col-10">
                    <div class="gray-text">${post.topic}</div>
                    <div class="d-flex justify-content-start align-content-center">
                        <div class="fw-bold">${post.userName} <i class="fas fa-check-circle fa-1x"></i></div>
                        <span class="gray-text"> - ${post.time}</span>
                    </div>
                    <div class="fw-bold">${post.title}</div>
                </div>
                <div class="col-2">
                    <img class="img-fluid rounded" src="${post.image}" alt="${post.userName}">
                </div>
            </div>
        </li>
        
    `);
}
export default PostSummaryItem;

