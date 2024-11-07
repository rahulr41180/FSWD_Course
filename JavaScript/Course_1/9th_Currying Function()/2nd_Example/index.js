
/* 
If a function take one argument.
That function does not have any logic inside only it is returning the value with some expression or with some calculation so we can write that
function invoked another way like :

first write in normal way :
*/

let add1 = (a) => {
    return a*2;
}

console.log("add1(1) :", add1(1));

// --------------------------------------

let add2 = a => a*2;

console.log("add2(2) :", add2(2));

/* 
both is doing same just here we written that function in short but the condition only function only take one argument and just return the value.
There is no logic or present just return
if it return another that also fine.
*/

// -----------------------------------------

let add3 = a => b => a + b

console.log("add3 :", add3(2)(3))

// ---------------------------------------

let add4 = a => b => c => {
    console.log(a, b, c);
    return a + b + c
}

console.log("add4 :", add4(1)(2)(3));

// -----------------------------------

let add5 = a => b => c => a + b + c

console.log("add5 :", add5(2)(2)(4));