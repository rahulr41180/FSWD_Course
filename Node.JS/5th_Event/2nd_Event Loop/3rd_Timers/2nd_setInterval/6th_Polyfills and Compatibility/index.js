
// Polyfills and Compatibility :

/* 
For environments that do not support setInterval(), polyfills can be used to ensure compatibility.

A polyfill is a piece of code (usually JavaScript on the web) used to provide modern functionality on older browsers or environments 
that do not natively support it. Polyfills allow developers to use newer features while maintaining compatibility with older environments.
*/

if (typeof setInterval === 'undefined') {
    global.setInterval = function (callback, delay) {
        
        // Simple polyfill implementation
        return setTimeout(callback, delay);
    };
}

if (typeof setIntervalFn === 'undefined') {
    global.setIntervalFn = function (callback, delay) {
        const timeoutId = setTimeout(() => {
            // console.log('timeoutId:', timeoutId)
            console.log("Here");
            global.setIntervalFn(showNotification, 2000);
            callback();
        }, delay);
        return timeoutId;
    };
}

function showNotification() {
    console.log("Notification : 5 seconds have passed.");
}

// The caller
let timeoutIdFn = global.setIntervalFn(showNotification, 2000); 
console.log('timeoutIdFn:', timeoutIdFn);
console.log('global:', global)