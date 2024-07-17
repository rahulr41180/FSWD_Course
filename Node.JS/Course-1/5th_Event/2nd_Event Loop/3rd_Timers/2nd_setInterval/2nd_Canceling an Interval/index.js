
// Canceling an Interval :

const intervalId = setInterval(() => {
    console.log("Interval cleared after 5 seconds");
}, 1000);

// Cancel the interval after 10 seconds

setTimeout(() => {
    clearInterval(intervalId);
    console.log("Interval has been cleared");

},11000)

/* 
Important Considerations :
Avoiding Memory Leaks: Ensure that intervals are cleared when they are no longer needed, 
especially in applications with long lifetimes or complex state management.

Performance: Avoid setting intervals with very short durations as it can cause performance issues.

Nested Intervals: Avoid using nested intervals as they can lead to unexpected behavior and are difficult to manage.
*/