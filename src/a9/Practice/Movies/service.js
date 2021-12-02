const URL = 'http://localhost:4000/rest/movies';  // declare URL to service

export const findAllMovies = () => // declare function to retrieve data from database
    fetch(URL) // send HTTP GET to URL
        .then(response =>
            // console.log("movie service", response);
            response.json()); // parse JSON in body from server response

// implement function to delete movie by its ID
// send HTTP DELETE to URL including movie's ID
export const deleteMovie = (id) =>
    fetch(`${URL}/${id}`, {
        method: 'DELETE',
    });

// implement function to create a new movie in the database
export const createMovie = (movie) =>
    fetch(URL, {
        method: 'POST', // send a POST request to the URL
        body: JSON.stringify(movie), // convert movie object into a string and embed in request body
        headers: {  // tell server string is formatted as JSON
            'content-type': 'application/json'
        }
    }).then(response => response.json());


// implement function to retrieve movie by its ID
export const findMovieById = (id) =>  // send HTTP GET to URL including movie's ID
    fetch(`${URL}/${id}`)
        .then(response => response.json()); // parse movie from response's body


// send new movie
// include movie's ID in the URL
export const updateMovie = (movie) =>
    fetch(`${URL}/${movie._id}`, {
        method: 'PUT',  // use HTTP PUT method for update
// include movie updates in body as string
        body: JSON.stringify(movie),  // string formatted as JSON
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json());  // parse status response from server as JSON


// eslint-disable-next-line import/no-anonymous-default-export
export default {  // export findAllMovies function to use elsewhere
    findAllMovies, deleteMovie, createMovie, findMovieById, updateMovie // export deleteMovie function to use elsewhere
};
