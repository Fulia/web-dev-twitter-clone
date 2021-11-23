import React, {useEffect, useState} from "react";


// const funcA = (response) => response.json()

// const funcB = (movies) => setM

const route = process.env.NODE_ENV === "development" ? "http://localhost:4000/" : "https://twitter-clone-server-node.herokuapp.com/"
const movieAPI = route + "api/movies"
const MovieApiClient = () => {
    const [movies, setMovies] = useState([]); // declare empty array local state variable movies
    // when the component first loads
// send an HTTP request to this URL
    useEffect(() =>
            // fetch by default method: GET
            fetch(movieAPI)
                .then(response => response.json())  // anonymous function
                // parse the JSON in the HTTP response from server
                // set movies state variable with movies from server
                .then(movies => setMovies(movies))
        , []);  // don't force re-render because state changed

    // handle delete action
    const deleteMovie = (movie) =>
        // fetch movies from API on server
        // use DELETE HTTP method
        fetch( movieAPI +"/"+ movie._id, {
            method: 'DELETE' // change the method
        })
            // parse JSON response from server
            // set local movies with movies from server
            .then(response => response.json())
            .then(movies => setMovies(movies));

    // create
    // initialize local movie state variable
    const [movie, setMovie] = useState({_id: (new Date()).getTime() + "", title: '', rating: 2.5});
    // handle movie title input field change // update local state variable movie's title
    const onMovieTitleChange = (event) => // handle create movie click event
        setMovie({...movie, title: event.target.value});
    const createMovieClickHandler = () =>
        fetch(movieAPI, {  // send HTTP message to server URL /api/movies
            method: 'POST',    // use HTTP POST // embed movie in message body as a string
            body: JSON.stringify(movie),  // tell server string is formatted as JSON
            headers: {
                'content-type': 'application/json'  // parse movies as JSON array from server
            }
        })
            .then(response => response.json())  // response and update local movies array copy
            .then(movies => setMovies(movies)); // the result of line 47 is stored in movies


    // save the any update/change
    const saveMovie = () =>
        fetch(`http://localhost:4000/api/movies/${movie._id}`, {
            method: 'PUT',    // use PUT method
            body: JSON.stringify(movie),
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(movies => setMovies(movies));


    return(
        <div>
            <h2>Movies</h2>
            {/*// declare list*/}
            <ul className="list-group">
                <li className="list-group-item">

                    <input className="form-control"     // movie title text input field
                           value={movie.title}          // value bound to local movie object's title
                           onChange={onMovieTitleChange}  // notify handler when field value changes
                           style={{width: "70%"}}/>

                    <button
                        onClick={createMovieClickHandler}  // create movie button  // notify handler when clicked
                        className="btn btn-success float-end">
                        Create
                    </button>
                    <button
                    onClick={saveMovie}
                    className="btn btn-primary ms-2 float-end">
                    Save
                </button>

                </li>

                {
                    movies.map((movie) =>  // iterate over movies array, for each movie
                        <li className="list-group-item"  // append a list item
                            // use movie's id as element's key
                            key={movie._id}>
                            {/*// render movie's title and stars*/}
                            {movie.title} {movie.rating}

                            {/*Edit update movie*/}
                            <button onClick={() => setMovie(movie)}  // set the 'movie' to be the current
                                    className="btn btn-primary float-end ms-2">
                                Edit
                            </button>

                            {/*// new delete button passes movie handler*/}
                            <button onClick={() => deleteMovie(movie)}
                                    className="btn btn-danger float-end">
                                Delete
                            </button>
                        </li>
                    )
                }
            </ul>
        </div>
    )
};
export default MovieApiClient;
