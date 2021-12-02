import React, {useEffect, useState} from "react";
import service from './service';// import the movie service

const Movies = () => {
    const [movies, setMovies] = useState([]);// create a local movies state variable
    const [movie, setMovie] = useState({title: ''});
    useEffect(() =>// on load
        service.findAllMovies()// retrieve all movies from database
            .then(movies => setMovies(movies)),[]);// save movies from server to local movies state variable; // without dependency, it won't sto

    // handle delete movie button click
    const deleteMovie = (movie) =>
        service.deleteMovie(movie._id) // notify server
            .then(() => setMovies( // after response, filter out the movie from local copy
                movies.filter(m => m !== movie)));  // deleted in db (callBackWithoutResult), then res status? should change to findAllMovies?


    const createMovie = () =>  // handle create movie button click
        service.createMovie({title: 'New Movie'}) // send POST message to server with new movie in bod
            .then(actualMovie => // server responds with movie inserted into database
                setMovies([  // append movie at beginning of movies
                    actualMovie, ...movies
                ]));


    // add event handler for new Edit button
    const findMovieById = (movie) =>  // add event handler for new Edit button
        service.findMovieById(movie._id) // use service to fetch movie from server
            .then(movie => setMovie(movie));  // update local movie state variable

    // save text input changes
    // in the local movie state variable
    const updateMovie = (event) =>
        setMovie({...movie, title: event.target.value});

    // when user clicks save button
    // send local movie state variable to server
    // when server responds
    // replace updated movie
    const saveMovie = () =>
        service.updateMovie(movie)
            .then(() => setMovies(
                movies.map(m => m._id === movie._id ? movie : m)
            ));


    return(
        <div>
            {/*// new button movie to create new movie*/}
            {/*// notify createMovie when button is clicked*/}
            <button
                onClick={createMovie}
                className="btn btn-success float-end">
                Create
            </button>

            <h2>Movies</h2>
            <ul className="list-group">
                {/*// add a new list item at the top of the list*/}
                {/*// including an input field to display*/}
                {/*// the title of the movie from the server*/}
                <li className="list-group-item">
                    {/*// add Save button*/}
                    {/*// notify saveMovie when clicked*/}


                    <input
                        onChange={updateMovie}  // update local changes in movie state variable
                        defaultValue={movie.title}
                        className="form-control"/>
                    <button
                    onClick={saveMovie}
                    className="btn btn-primary float-end">
                    Save
                    </button>
                </li>

                {
                    movies.map(movie =>// render array of movies as an HTML unordered list
                        <li key={movie._id}// iterate over movies array from database
                            // render each movie as a list item
                            className="list-group-item">

                            <button
                                className="btn btn-danger float-end"
                                onClick={() => deleteMovie(movie)}>
                                Delete
                            </button>

                            <button
                                onClick={() => findMovieById (movie)} // … add a new Edit button to
                                                                     // retrieve the movie from the server
                                className="btn btn-warning float-end ms-2">
                                Edit
                            </button>
                            {movie.title}{/*// render movie's title*/}
                        </li>
                    )
                }
            </ul>
        </div>
    )
};

export default Movies;

