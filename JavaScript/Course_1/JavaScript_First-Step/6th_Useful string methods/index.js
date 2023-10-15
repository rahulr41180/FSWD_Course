
// Useful String Methods :

/*
1. includes()
2. startsWith()
3. endsWith()
4. indexOf()
5. slice()
6. toLowerCase()
7. toUpperCase()
*/

// Testing if a string contains a substring :

/*
Sometimes you'll want to find if a smaller string is present inside a larger one 
(we generally say if a substring is present inside a string. 
This can be done using the includes() method, 
which takes a single parameter — the substring you want to search for.
It returns true if the string contains the substring, and false otherwise.
*/

let string = "Mozilla";
if(string.includes("zilla")) {
    console.log(true);
} else {
    console.log(false);
}

/* 
Often you'll want to know if a string starts or ends with a particular substring.

This is a common enough need that there are two special methods for this: startsWith() and endsWith():
*/

let string1 = "Mozilla";
if(string1.startsWith("zilla")) {
    console.log("Yes it's start with zilla");
} else if(string1.endsWith("zilla")) {
    console.log("Yes it's end with zilla");
}

// Finding the position of a substring in a string :

/*
You can find the position of a substring inside a larger string using the indexOf() method. 
This method takes two parameters – the substring that you want to search for, 
and an optional parameter that specifies the starting point of the search.
If the string contains the substring, 
indexOf() returns the index of the first occurrence of the substring.
If the string does not contain the substring, indexOf() returns -1.

*/

let string2 = "MDN - Resources for developers, by developers";
console.log(string2.indexOf("developers"));

/*
This, on the other hand, returns -1 because the character x is not present in the string.
*/


console.log(string2.indexOf("x"));

/*
So now that you know how to find the first occurrence of a substring, 
how do you go about finding subsequent occurrences? 
You can do that by passing in a value that's greater than 
the index of the previous occurrence as the second parameter to the method.
*/


const firstOccurrence = string2.indexOf("developers");
const secondOccurrence = string2.indexOf("developer", firstOccurrence + 1);
console.log(firstOccurrence);
console.log(secondOccurrence);

// Extracting a substring from a string :

/*
You can extract a substring from a string using the slice() method. You pass it:

the index at which to start extracting
the index at which to stop extracting. 
This is exclusive, 
meaning that the character at this index is not included in the extracted substring.
*/

const string3 = "mozilla";
console.log(string3.slice(1, 4));


/*
The character at index 1 is "o", and the character at index 4 is "l". 
So we extract all characters starting at "o" and ending just before "l", 
giving us "ozi".
*/

/* 

If you know that you want to extract all of the remaining characters in a string

after a certain character, you don't have to include the second parameter. 
Instead, you only need to include the character position from where 
you want to extract the remaining characters in a string. Try the following:
*/

let string4 = "mozilla";
console.log(string4.slice(2));

// Changing case :

/*
The string methods toLowerCase() and toUpperCase() take a string and convert all 
the characters to lower- or uppercase, respectively. 
This can be useful for example if you want to normalize all user-entered data 
before storing it in a database.
*/

const string5 = "My NaMe Is AbCd";
console.log(string5.toLowerCase());

console.log(string5.toUpperCase());
console.log(string5);

// Updating parts of a string :

/*
You can replace one substring inside a string with another substring using the replace() method.

In this example, we're providing two parameters — the string we want to replace, 
and the string we want to replace it with:

*/

let string6 = "mizilla";
let string7 = "vanil";

console.log(string6.replace("mizil", string7));

/* 


*/
console.log(string6);