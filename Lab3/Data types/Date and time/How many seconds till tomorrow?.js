//Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
//
// For instance, if now is 23:00, then:
getSecondsToTomorrow() == 3600


//solution

function getSecondsToTomorrow() {
    let now = new Date();

    // tomorrow date
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);

    let diff = tomorrow - now; // difference in ms
    return Math.round(diff / 1000); // convert to seconds
}
