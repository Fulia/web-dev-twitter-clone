import React from "react";
import navLinks  from "./navLinks";
import {Link} from "react-router-dom";


// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import{faTwitter} from "@fortawesome/free-brands-svg-icons";



// active = window.location.pathname : path of the current window/file
const NavigationSidebar = ({
                               active = 'explore'
                           }
                        ) => {
                            return(
                                    <>
                                        <div className="list-group">
                                            <Link to="/a6/" className="list-group-item" href="//twitter.com">
                                                <i className="fab fa-twitter"></i>
                                            </Link>
                                            {navLinks.map((navLink, key) => {
                                                return(
                                                // conditionally show active per page
                                                <Link to={navLink.linkPath} key={navLink.linkName} className={`list-group-item ${active === navLink.linkName.toLowerCase() ? 'active':''}`} href={navLink.linkPath} >
                                                    <i className={navLink.icon}/>
                                                    <span className="d-none d-xl-inline-flex ps-2">{navLink.linkName}</span>
                                                </Link>)
                                                })
                                            }

                                        </div>
                                        <div className="d-grid mt-2">
                                            <a href="tweet.html"
                                               className="btn btn-primary btn-block rounded-pill">
                                                Tweet</a>
                                        </div>
                                    </>
                            );
                        }
export default NavigationSidebar;



// <FontAwesomeIcon icon={faTwitter}/>