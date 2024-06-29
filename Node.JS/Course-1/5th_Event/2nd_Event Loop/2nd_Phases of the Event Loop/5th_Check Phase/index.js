
// Check Phase :

/* 
This phase executes callbacks scheduled by setImmediate().
*/

setImmediate(() => {
    console.log('Immediate callback');
});

console.log('Start');  

/* 
The setImmediate function schedules a callback to be executed in the check phase, which runs after the poll phase.
*/