
// Example :

let outerCount = 0;
let innerCount = 0;

let outerInterval = setInterval(() => { 
    outerCount++;
    console.log(`Outer interval: ${outerCount}`);

    let innerInterval = setInterval(() => {
        innerCount++;

        console.log(`  Inner interval: ${innerCount}`);
        // Clear the inner interval after it runs 3 times
        if (innerCount === 3) { // Checking everytime when innerInterval run.
            console.log("clearing inter interval after when innerCount has 3 value");
            clearInterval(innerInterval);
            innerCount = 0; // Reset inner count for next outer interval
        }
    }, 2000);

    // Clear the outer interval after it runs 2 times
    if (outerCount === 4) { // checking everytime when outer Interval run.
        console.log("clearing outer interval when outCount is 4");
        clearInterval(outerInterval);
    }
}, 1000);

/* 
    OuterInterval : It will run everytime after 5 seconds eventhough inner interval is also running parellel.
    Whenever it will run it will put everytime innerInterval to run in seperate time phase in event loop.

    Means at same time both interval will run.
*/