

const WhoToFollowListItem = ({who}) => {
    return(
        <li className="list-group-item">
            <div className="row align-items-center">
                <div className="col-3 col-lg-2 p-1">
                    <img className="img-fluid rounded-circle" src={who.avatarIcon} alt="avatar"/>
                </div>
                <div className="col-6 p-0">
                    <div className="d-flex justify-content-start align-content-center">
                        <div className="fw-bold">{who.userName} <i className="fas fa-check-circle fa-1x"></i></div>
                    </div>
                    <div>@{who.handle} </div>
                </div>
                <div className="col-3 col-lg-4 p-1">
                     <button className="float-end btn btn-primary  rounded-pill">Follow</button>
                </div>
            </div>
        </li>
    );
}
export default WhoToFollowListItem;
