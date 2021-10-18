const WhoToFollowListItem = (who) => {
    return(`
        <li class="list-group-item">
            <div class="row align-items-center">
                <div class="col-3 col-lg-2 p-1">
                    <img class="img-fluid rounded-circle" src="${who.avatarIcon}" alt="Java Logo">
                </div>
                <div class="col-6 p-0">
                    <div class="d-flex justify-content-start align-content-center">
                        <div class="fw-bold">${who.userName} <i class="fas fa-check-circle fa-1x"></i></div>
                    </div>
                    <div>@${who.handle} </div>
                </div>
                <div class="col-3 col-lg-4 p-1">
                     <button class="float-end btn btn-primary  rounded-pill">Follow</button>
                </div>
            </divrow>
        </li>
    `);
}
export default WhoToFollowListItem;
