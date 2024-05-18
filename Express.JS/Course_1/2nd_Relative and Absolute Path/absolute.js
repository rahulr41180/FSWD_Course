
import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Determine __dirname for ES6 modules
// First take filename path where our node.js file run.
const __filename = fileURLToPath(import.meta.url);
/* 
Explanation of fileURLToPath(import.meta.url)

What is import.meta.url?
In an ES6 module, import.meta is an object that contains metadata about the module.
import.meta.url is a property that provides the URL of the current module file. 
This URL is in the form of a file URL, such as file:///path/to/your/module.mjs.

What is fileURLToPath?
fileURLToPath is a function provided by the url module in Node.js. 
It converts a file URL to a file system path, 
which is useful because many Node.js functions require file paths instead of URLs.

Combining import.meta.url with fileURLToPath:
By using fileURLToPath(import.meta.url), 
you convert the file URL of the current module into an absolute file path.

This conversion is necessary when you need to work with file paths (e.g., reading files, serving static files) in ES6 modules.
*/

// By using filename path we will get directory path means dirname path.
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "public")));

/* 
Scenario 2: Using app.use(express.static(path.join(__dirname, 'public')));
Command: node server.js
This will work as expected.

Command: cd /home/user && node projects/static-files-example/server.js
This will also work because path.join(__dirname, 'public') generates the absolute path /home/user/projects/static-files-example/public.
*/


/*
Absolute Path:

path.join(__dirname, 'public') creates an absolute path to the public directory. 
__dirname is a global variable in Node.js that gives the directory name of the current module. 
This ensures that the path is always correct, no matter where you run your script from.
*/

app.listen(5000, () => {
    console.log("server listening on port 5000");
})