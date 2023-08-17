
/*

Note : 

----------------------------------------------------------------------
Execution Environment : 
When you load a web page in your browser, 
you are running your code (the HTML, CSS, and JavaScript) inside an execution environment (the browser tab).
Each browser tab has its own separate bucket for running code in 
(these buckets are called "execution environments" in technical terms) — this means that in most cases the code in each tab is run completely separately, 
and the code in one tab cannot directly affect the code in another tab — or on another website.

------------------------------------------------------------------------

Types Of API :
Browser APIs : Browser APIs are built into your web browser, 
and are able to expose data from the surrounding computer environment.
Ex : DOM API
Third party APIs : Third party APIs are not built into the browser by default, 
and you generally have to grab their code and information from somewhere on the Web.
Ex : Twitter API

--------------------------------------------------------------------------

JavaScript Use : 
A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, 
via the Document Object Model API (as mentioned above). 

Script loading strategies :
Errors may occur if JavaScript is loaded and run before the HTML and CSS that it is intended to modify.
----------------------------------------------------------------------------

Interpreted Code :
In interpreted languages, the code is run from top to bottom 
and the result of running the code is immediately returned. 
You don't have to transform the code into a different form before the browser runs it. 
The code is received in its programmer-friendly text form and processed directly from that.

Compiled Code :
Compiled languages on the other hand are transformed (compiled) into another form before they are run by the computer. 
For example, C/C++ are compiled into machine code that is then run by the computer. 

The program is executed from a binary format, which was generated from the original program source code.

JavaScript : 
JavaScript is a lightweight interpreted programming language. 
The web browser receives the JavaScript code in its original text form and runs the script from that. 
From a technical standpoint, most modern JavaScript interpreters actually use a technique called "just-in-time" compiling to improve performance; 
the JavaScript source code gets compiled into a faster, binary format while the script is being used, 
so that it can be run as quickly as possible. 
However, JavaScript is still considered an interpreted language, since the compilation is handled at run time, 

rather than ahead of time.

-----------------------------------------------------------------------------


Client-side : 
Client-side code is code that is run on the user's computer — when a web page is viewed, 
the page's client-side code is downloaded, then run and displayed by the browser.


Server-side : 
Server-side code on the other hand is run on the server, then its results are downloaded and displayed in the browser.

------------------------------------------------------------------------------

*/