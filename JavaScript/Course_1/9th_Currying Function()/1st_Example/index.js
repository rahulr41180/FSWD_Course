
// Currying Function() :

/* 
Currying is also a part of closure.
Currying return multiple function() means it's chaining multiple function();

Also currying function expression will be called by chaining.
*/

function sum(a) {
    return function(b) {

        return function(c) {
            console.log(a, b, c);
            return a + b + c;
        }
    }
}

console.log(sum(1)(2)(3));

/* 
sum(1) will be returned : function(b) { .... } 
    So sum(1) will be function(b) { .... } 
    So we can call this function immediate as it is annonymous function()
After that function(b) will be returned : function(c) { ... }
    So function(b) will be function(c) { ... }
    So we can call this function immediate as it is annonymous function();
After that function(c) will be returned : a + b + c
*/