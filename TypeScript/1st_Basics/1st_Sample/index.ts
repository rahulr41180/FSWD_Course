
// Note : Eventually first we need to convert typeScript code into javaScript code with the help of tsc which is a compiler for typescript to convert
// typeScript code into javaScript code because browser can only understand javaScript not typeScript that's why first we have to convert typeScript
// code into javaScript code other wise typeScript won't run.

// Example :

const a = "Hello World";
console.log("a :", a);

/* 
after compile this code to javaScript here we have got compiled code like :

var a = "Hello World";
console.log("a :", a);

but why compiler compiled the const a = "Hello World" into var a = "Hello World". Eventhough we have declared the variable with const in index.ts file

also at line number 8 we are getting come error after compiled the typeScript into javaScript.

to run this code let's embeded the index.js file code not index.ts file code inside index.html file.
because browser can only understand javaScript code.

and if we execute the index.ts on browser through index.html then we will get error :
Refused to execute script from 'http://127.0.0.1:5500/1st_Basics/1st_Sample/index.ts' because its MIME type ('video/mp2t') is not executable.
*/

const b = "User1";
console.log("b :", b);

/* 
We can't get this content on browser through index.html because it's not compiled yet and index.js file does not have these line of code because
it's compiled yet.
and also we can't use or run ts code directly into browser through .html file. 
We have to compiled it first then we can use the compiled code into browser through .html file.
*/