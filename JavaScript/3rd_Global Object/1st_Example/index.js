
window.a = 1; // this will store in global object

console.log(a);

// -------------------------------------------------------

var b = 2; // Any variable that is declared in global scope. That will store in global object
console.log('b:', b); // 2
console.log("window.b :", window.b); // 2

// -------------------------------------------------------

function say(text) { // Any Normal function which is declared in global scope. That will store in global object.
    console.log("Say :", text);
    
    // return "Say";
}

say("Say is calling by say()");
window.say("Say is calling by window.say()");