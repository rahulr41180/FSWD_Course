
/* Every variable in JavaScript (within global / block / or function) has a reference to an object-like data called Lexical enviroment.  */

// 1. Example :

let name = "ABCD";
console.log(name);

// How Lexical Enviroment (Global variable) will create

/*
1. JavaScript compiler run from top to bottom -> 

2. Compiler identify here is a variable with let name -> 
3. Compiler will create a LexicalEnviroment like = name : "ABCD" -> 
4. Now it go down and identify that here is execution where name varibale is printing -> 
5. Compiler search that variable value in current Lexical Enviroment and compiler able to find 
   the value of name after that it will print name value.
*/

/* ---------------------------------------------------------------- */


// 2. Example :

let name1 = "EFGH";

function sayHi(){
  let greet = "hi"
  console.log(greet)
}


sayHi()
console.log(name1, sayHi);

/*
1. JavaScript compiler run from top to bottom ->
2. Compiler identify here is a variable with let name1 ->
3. Compiler will create a LexicalEnviroment1 for global scope and assign this = name1 : "EFGH" in LexicalEnviroment1 ->
2. Compiler identify here is a function say() declaration ->
4. Compiler assign the sayHi : function in LexicalEnviroment1 because it is declared in global scope

5. Compiler identify here is a function execution create a new LexicalEnviroment2 for function say() for create key value of it's variable and function which is present inside of this say() function.
   and we know at every execution of function a new LexicalEnviroment will be creating.
6. Compiler identify here is a variable declaration with let greet
7. Compiler will assign the greet = "hi" in LexicalEnviroment2
8. Compiler identify here is a greet variable execution now compiler search in it's own LexicalEnviroment2 and it can be able to search the value.
9. Now there is nothing after of this.
10. Compiler move to next now Compiler identify here is a name1 execution and sayHi function execution for print.
11. Because name1 and sayHi is execute in global scope so it find in LexicalEnviroment1 because LexicalEnviroment1 is a environment of global. It able to search the value in LexicalEnviroment1.
*/

// 3. Example

let name2 = 'IJKL';

function sayHi(){
  let greet = "hi"
  console.log(name2)
}


sayHi()

/*
1. LexicalEnviroment1 create in global scope.
2. name2 = IJKL assign to LexicalEnviroment1
3. sayHi = function assign to LexicalEnviroment1 because it is declared in global scope.
4. sayHi execution so that LexicalEnviroment2 create for sayHi function.
5. greet = hi assgin to LexicalEnviroment2
6. name2 search in LexicalEnviroment2 because it is execute in sayHi function. But not able to find the value of name2 in LexicalEnviroment2

7. Now it will search in it's parent LexicalEnviroment and it's parent LexicalEnviroment is LexicalEnviroment1 so it will search name2 value in LexicalEnviroment1 and it can be able to find the value of name2 in LexicalEnviroment1.
*/

// Note : Lexical environment did not create at once for variable and function() of whole function() scope.
        // Sometimes It is created at once and sometimes it is being create, change or update in step by step.