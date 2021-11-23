import React from "react";
import HelloApiClient from "./HelloApiClient";
import MovieApiClient from "./MovieApiClient";  // load HelloApiClient declared above



const APIExamples = () => {
    return(
        <div>
            {/* just render HelloApiClient for now, more to come*/}
            <HelloApiClient/>
            {/*// render list of movies from the server*/}
            <MovieApiClient/>
        </div>
    );
};
export default APIExamples;
