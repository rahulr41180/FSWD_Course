
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
            console.log('intervalId:', intervalId)
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

// The caller
let intervalIdFn = global.setTimeoutFn(showNotification, 2000); // This will work even in environments without native setTimeout support.
console.log('intervalIdFn:', intervalIdFn)

/* 
global.setTimeoutFn = function (callback, delay) {};
As we are checking setTimout in current browser not in old browser that's why we have set property like global.setTimeoutFn();

const intervalId = setInterval(() => {});
Purpose: This line sets up an interval using setInterval. The interval will run the provided function repeatedly every delay milliseconds.
setInterval is generally supported in most JavaScript environments, even older ones. By using it, we can simulate the delay mechanism of setTimeout.

clearInterval(intervalId);
This line clears the interval after the first execution of the callback.
Work : When first time setInterval() and setTimeout() run that time clearInterval() function won't execute because there is no id present which need to clear.
means at first time only callback function execute no clear function execute.
After first run of timer function, the clear() function is always executed first and then callback() function is executed on each run of timer function();
To mimic the behavior of setTimeout, which only executes the callback once after the specified delay. Clearing the interval ensures that the callback is not executed repeatedly.

return intervalId;
Purpose: This line returns the interval ID.
Why: When you use setTimeout natively, it returns a timeout ID that can be used with clearTimeout to cancel the timeout if needed. 
Similarly, this polyfill returns the intervalId, allowing the caller to cancel the interval if necessary.
means if we don't want to clear the interalId of setInterval() inside setTimeoutFn() and we want to clear the intervalId after some condition
then we can clear that setInterval() by using intervalId that we are returing from setTimeoutFn();

The Caller :
In this context, "the caller" refers to the code that calls the setTimeout function or setTimeoutFn, 
whether it's the native implementation or the polyfilled version. 
The caller is the part of your code that invokes setTimeout or setTimeoutFn to schedule a function to run after a specified delay.
*/

let id1;
id1 = setInterval(() => {
    console.log("Here2");
    clearInterval(id1);
    console.log("setInterval after 2 seconds");
},2000);
console.log('id1:', id1)

let id2;
id2 = setTimeout(() => {
    console.log("setTimeout after 2 seconds");
}, 2000);
console.log('id2:', id2)