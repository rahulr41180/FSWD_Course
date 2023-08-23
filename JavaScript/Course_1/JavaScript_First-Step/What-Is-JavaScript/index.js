
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
Script loading strategies : 
There are a number of issues involved with getting scripts to load at the right time.

1. Your code won't work if the JavaScript is loaded and parsed before the HTML 
You are trying to do something to.

In the above code examples, 
In the internal and external examples the JavaScript is loaded and run in the head of the document, 
before the HTML body is parsed. 
This could cause an error, 
so we've used some constructs to get around it.


In the internal example, you can see this structure around the code:
document.addEventListener("DOMContentLoaded", () => {
  // …
});
This is an event listener, which listens for the browser's DOMContentLoaded event, 
which signifies that the HTML body is completely loaded and parsed. 
The JavaScript inside this block will not run until after that event is fired, 
therefore the error is avoided.


defer :
In the external example, we use a more modern JavaScript feature to solve the problem, 
the defer attribute, 
which tells the browser to continue downloading the HTML content once the <script> tag element has been reached.
<script src="script.js" defer></script>
In this case both the script and the HTML will load simultaneously and the code will work.
In the external case, 

Note :

we did not need to use the DOMContentLoaded event because the defer attribute solved the problem for us. 
We didn't use the defer solution for the internal JavaScript example because defer only works for external scripts.

Note :
An old-fashioned solution to this problem 
used to be to put your script element right at the bottom of the body 
(e.g. just before the </body> tag), 
so that it would load after all the HTML has been parsed. 
The problem with this solution is that loading/parsing of the script is completely blocked 

until the HTML DOM has been loaded. 
On larger sites with lots of JavaScript, this can cause a major performance issue, 
slowing down your site.
---------------------------------------------------------------------
async and defer :
There are actually two modern features we can use to bypass the problem of the blocking script 
— async and defer (which we saw above). 
Let's look at the difference between these two.


async :
Scripts loaded using the async attribute will download the script without blocking the page 
or without blocking the rendering process of content.
while the script is being fetched complete. 
However, once the script has been downloaded complete, the script will execute, 
And at the time of script execution the content page rendering process stop. 
You get no guarantee that scripts will run in any specific order due to async. 
It is best to use async when the scripts in the page run independently from each other 
and depend on no other script on the page.

defer :
Scripts loaded with the defer attribute will load in the order they appear on the page. 
They won't run until the page content has all loaded
means if the script has downloaded complete but script won't execute until an unless 
the content rendering process is done. Once the content rendering process done after that execution 
process of script will be happened.
which is useful if your scripts depend on the DOM being in place 
(e.g. they modify one or more elements on the page).


Here is a visual representation of the different script loading methods 
and what that means for your page :
https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/What_is_JavaScript/async-defer.jpg

Example for async :

<script async src="js/vendor/jquery.js"></script> Here we are importing jQuery library.

<script async src="js/script2.js"></script> Here we are using script file-2

<script async src="js/script3.js"></script> Here we are using script file-3

In the above example, We can't rely on the which order the scripts will load in.
jquery.js may load before or after the script2.js and script3.js and if this is the case, 
any functions in those scripts depending on jquery will produce an error

because jquery will not be defined at the time the script runs.

Note :

async should be used when we have a bunch of background scripts to load in, 
and you just want to get them in place as soon as possible.

Example for defer :
Scripts loaded using the defer attribute (see below) will run in the order they appear in the page 
and execute them as soon as the script and content both are downloaded complete :
<script defer src="js/vendor/jquery.js"></script>

<script defer src="js/script2.js"></script>

<script defer src="js/script3.js"></script>
In the second example, 
We can be sure that jquery.js will load before script2.js and script3.js 
and that script2.js will load before  the script3.js. 
They won't run until the page content has all loaded complete, 
Which is useful if your scripts depend on the DOM being in place 
(e.g. they modify one of more elements on the page).

If your scripts should be run immediately and they don't have any dependencies, then use async.

If your scripts need to wait for parsing and depend on other scripts and/or the DOM being in place, 
load them using defer and put their corresponding <script> elements in the order 
We want the browser to execute them.
*/