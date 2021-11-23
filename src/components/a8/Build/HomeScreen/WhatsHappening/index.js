import React, {useState} from "react"; // get the useState hook
import {useDispatch} from "react-redux";   // import the useDispatch redux hook
import {postNewTweet} from "../../../../../services/tweetService"; // import postNewTweet service




const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');  // create whatsHappening state variable
    const dispatch = useDispatch();                 // use the hook to get a dispatcher
    const tweetClickHandler = () => {       // handle tweet button click
        // dispatch(
        //     {
        //         type: 'create-tweet',
        //         tweet: whatsHappening           // use the dispatcher to notify reducer of new
        //                                     // tweet including text written in textarea
        //                                     // saved in whatsHappening state variable
        //     }
        // );
        postNewTweet(dispatch, {postContent: whatsHappening})

    }
    return(

        <div className="row mx-0 mb-3 pe-0 ">
            <div className="col-1 px-0">
                <img className="rounded-circle img-fluid" src={"../../../pics/dog-headshot.jpeg"} alt="avatar"/>
            </div>
            <div className={"col-11 pe-0"}>
                <textarea className={"container-fluid from-control bg-black text-white ps-0 border-0"}
                    value={whatsHappening}  // show current whatsHappening in textarea
                    placeholder={"What's happening?"}
                    onChange={(event) =>  // if it changes, update whatsHappening with text area's value
                        setWhatsHappening(event.target.value)}>
                </textarea>
                <span>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#"><i className="far fa-image me-3"/></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#"><i className="far fa-chart-bar me-3"/></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#"><i className="far fa-smile me-3"/></a>
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                            <a href="#"><i className="far fa-calendar me-3"/></a>
                </span>
                <button className={"btn btn-primary rounded-pill float-end"} onClick={tweetClickHandler}>
                    Tweet
                </button>
            </div>
        </div>
);
}
export default WhatsHappening;
