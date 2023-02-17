//Let arr be an array.
//
// Create a function unique(arr) that should return an array with unique items of arr.
//
// For instance:

function unique(arr) {
    /* your code */
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

alert( unique(values) ); // Hare, Krishna, :-O



//solution
function unique(arr) {
    return Array.from(new Set(arr));
}