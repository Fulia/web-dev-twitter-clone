
import React, {useEffect, useState} from "react"; // to handle local state variables such as hello below


const route = process.env.NODE_ENV === "development" ? "http://localhost:4000/" : "https://twitter-clone-server-node.herokuapp.com/";
const helloAPI = route + "hello";//'http://localhost:4000/hello'
const HelloApiClient = () => {
    const [hello, setHello] = useState(''); // declare local state variable and mutator
    useEffect(() => {  // when the component first loads send an HTTP request to this URL
        fetch(helloAPI)
            .then(response => response.text())  // parse the text in the HTTP response from server
            .then(text => setHello(text));  // set hello state variable with text from server
// don't force re-render because state changed
    }, []);
    return (
        <h1>{hello}</h1>  // render hello message
    );
};
export default HelloApiClient;
