
// Nested setTimeout : 

/* 
Using setTimeout() inside another setTimeout() can create a delay between each iteration, 
unlike setInterval() which aims to maintain a consistent interval.
*/

let id;
function repeatedMessage() {
    console.log('This message is displayed with a 1-second delay between each call');
    // console.log('id:', id);

    // clearTimeout(id);
    id = setTimeout(repeatedMessage, 1000);
}

id = setTimeout(repeatedMessage, 1000);