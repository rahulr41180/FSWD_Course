
// Timer phase : 

/* 
This phase executes callbacks scheduled by setTimeout() and setInterval().
*/

setTimeout(() => {
    let a = 5;
    console.log("Timeout Callback 1");
    console.log("a :", a);
}, 10);

console.log("Start 1st");

setTimeout(() => {
    console.log("Timeout Callback 2");
}, 0)

console.log("Start 2nd");

/* 
In this example, setTimeout schedules a callback to run after 0 milliseconds. However, 
it doesn't run immediately but instead waits for the next iteration of the event loop to enter the timers phase.
*/