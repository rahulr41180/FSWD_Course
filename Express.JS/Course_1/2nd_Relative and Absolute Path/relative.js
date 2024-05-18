
import express from "express";

const app = express();

app.use(express.static("public"));

// Scenario 1: Using app.use(express.static('public'));

/*
Command: node relative.js
If you run node relative.js from the \Users\rahul.rathore\Documents\GitHub\FSWD_Course\Express.JS\Course_1\2nd_Relative and Absolute Path directory, 
it works because public is a relative path from this directory.

If we run localhost:5000 in browser than we will see index.html in browser.
*/

/*
Command: cd \Users\rahul.rathore\Documents\GitHub\FSWD_Course && node Course_1\2nd_Relative and Absolute Path\server.js
If you run the same command from \Users\rahul.rathore\Documents\GitHub\FSWD_Course directory, 
it won’t work because now public is relative to \Users\rahul.rathore\Documents\GitHub\FSWD_Course, 
and there is no public directory there.

If we run localhost:5000 in browser then we won't be able to see index.html in browser.
*/

/*
Relative Path Issue:

When you use app.use(express.static('public'));, 
the path 'public' is relative to the current working directory from which the Node.js process is started. 
This means if you run your script from a different directory, 
it may not find the public directory.
*/

app.listen(5000, () => {
    console.log("listening on port 5000");
})