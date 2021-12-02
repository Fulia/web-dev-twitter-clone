// import whoJson from './data/who.json';  // import data from JSON file


const whoReducerNew = (state = [], action) => {  // initialize the reducer's state
    switch (action.type) {              // add a switch to handle different event types
        case 'fetch-all-who':
            // console.log("fetch-all-tweets",action.tweets)
            return (
                action.who // assign to state
            )

        default:
            return (state);                  // return the single static state
    }
};

export default whoReducerNew;

