//Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.
//
// The function must be case-insensitive:
//
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false





//solution
//To make the search case-insensitive, let’s bring the string to lower case and then search:

function checkSpam(str) {
    let lowerStr = str.toLowerCase();

    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

alert( checkSpam('buy ViAgRA now') );
alert( checkSpam('free xxxxx') );
alert( checkSpam("innocent rabbit") );
