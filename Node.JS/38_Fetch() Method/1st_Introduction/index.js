
// fetch() method :

// Before fetch() method, what we were using

/* 
    Before fetch() method, we were using "XMLHttpRequest" method to handle APIs request.

But these approach is difficult to create asyncrounus task, tracking the multiple status code.
and callback hell was also a problem.

If we use XMLHttpRequest then all tasks are handled by browser itself means everything is depend on browser.

and Node.JS does not have browser environment.
*/

// fetch() method :

/* 
fetch() is using to fetching a resources from the network. Means fetch() is network based request.

The fetch() method in JavaScript is asynchronous. 
It returns a Promise that resolves to the Response object representing the response to the request. 
This allows you to perform network requests without blocking the main thread, 
making it possible to continue running other scripts while the request is being processed.
*/