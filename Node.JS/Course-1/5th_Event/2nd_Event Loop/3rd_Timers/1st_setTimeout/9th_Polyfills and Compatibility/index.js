
// Polyfills and Compatibility :

/* 
For environments that do not support setTimeout(), polyfills can be used to ensure compatibility.

A polyfill is a piece of code (usually JavaScript on the web) used to provide modern functionality on older browsers or environments 
that do not natively support it. Polyfills allow developers to use newer features while maintaining compatibility with older environments.
*/

if (typeof setTimeout === 'undefined') {
    global.setTimeout = function (callback, delay) {

        // Simple polyfill implementation
        return setInterval(callback, delay);
    };
}

/* 
global.setTimeout = function (callback, delay) :

Purpose: This line defines a polyfill function for setTimeout and assigns it to the global object. 
This is a simple implementation that uses setInterval to mimic the behavior of setTimeout.

return setInterval(callback, delay) :
Purpose: This line returns the result of setInterval(callback, delay), effectively mimicking the behavior of setTimeout.
Why: While setTimeout is designed to run a function once after a specified delay, setInterval runs a function repeatedly at specified intervals. 
This simple polyfill uses setInterval to execute the callback after the specified delay,
although it will continue to run at the specified interval until cleared.

The polyfill uses setInterval as a workaround to simulate setTimeout. 
setInterval is generally supported in even the most limited JavaScript environments. 
However, it's important to note that this polyfill is not perfect: setInterval will repeatedly call the callback function 
at the specified delay until explicitly stopped, 
whereas setTimeout is meant to call the callback only once.

In real-world usage, if you strictly need to simulate setTimeout's single execution behavior, 
you would need to clear the interval immediately after the first execution. Here’s an improved version of the polyfill:
*/

if (typeof setTimeoutFn === 'undefined') {
    global.setTimeoutFn = function (callback, delay) {
        const intervalId = setInterval(() => {
            console.log("Here");
            clearInterval(intervalId);
            callback();
        }, delay);
        return intervalId;
    };
}

/* 
Why I have set global.setTimeoutFn instead of global.setTimeout because current browsers are already have setTimeout() and 
I am testing it in new browser that's why I have add property to global like : global.setTimoutFn and that function could be have any name

Suppose your application has a feature to show a notification message after 5 seconds. 
Using setTimeout, you can implement this easily. 
However, if the target environment doesn't support setTimeout, the polyfill ensures that this feature still works correctly.
*/

function showNotification() {
    console.log("Notification : 5 seconds have passed.");
}

global.setTimeoutFn(showNotification, 2000); // This will work even in environments without native setTimeout support.
// console.log('global:', global);