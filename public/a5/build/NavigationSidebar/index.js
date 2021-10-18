import navLinks  from "./navLinks.js";

// actice = window.location.pathname : path of the current window/file
const NavigationSidebar = (active) => {
    return(`
            <div class="list-group">
                <a class="list-group-item" href="/">
                    <i class="fab fa-twitter"></i></a>
                ${navLinks.map(navLink => {
                    return(
                    // conditionally show active per page
                    `<a class="list-group-item ${active.includes(navLink.linkName) ? 'active':''}" href=${navLink.linkPath} >
                        <i class="${navLink.icon} pe-2"></i>
                        <span class="d-none d-xl-inline-flex">${navLink.linkName}</span>
                    </a>`)
                }).join('')
                }

            </div>
            <div class="d-grid mt-2">
                <a href="tweet.html"
                   class="btn btn-primary btn-block rounded-pill">
                    Tweet</a>
            </div>
    `);
}
export default NavigationSidebar;
