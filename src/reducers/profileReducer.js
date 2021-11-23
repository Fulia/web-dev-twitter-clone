

let profileData = {
    Name: 'Simon Kjær',
    tweets: 1780,
    handle: 'simonkjaer1989',
    profilePicture: '/pics/kjaer.jpg',
    bannerPicture: '/pics/Simon-Kjaer.jpeg',
    bio: 'I am Simon Kjær, and this is my official Twitter account. Happy to play football with \n' +
        '@acmilan\n' +
        ' + proud captain of \n' +
        '@dbulandshold\n' +
        '.',
    website: 'acmilan.com/it',
    location: 'Horsens, Denmark',
    dateOfBirth: '3/26/1989',
    dateJoined: '12/2011',
    followingCount: 100,
    followersCount: "249K"
}

const profileReducer = (state = profileData, action) => {  // initialize the reducer's state
    switch (action.type){
        case "update-profile":
            return action.profile;
        case "fetch-profile":
            // console.log("fetch", action.profile)
            return action.profile;
        default:
            return state; // remember to return state not default profileData
    }                 // return the single static state
};

export default profileReducer;
