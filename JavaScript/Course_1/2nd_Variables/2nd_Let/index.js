
/*

1. Let will create block scope
*/

let b = 2;

{
    let a = 1;
    let b = 3;
    console.log(a);

    console.log(b); // 3
}

// console.log(a); ReferenceError: a is not defined
console.log(b); // 2

// -------------------------------------------------------------

/*

2. re-declaration in NOT allowed (in same scope)
*/

let c = 4;
// let c = 5; SyntaxError: Identifier 'c' has already been declared

{
    let d = 6;
    // let d = 7; SyntaxError: Identifier 'd' has already been declared

}

// ---------------------------------------------------------------

/*
3. re-assignment is allowed
*/

let e = 8;

e = 9; // Fine

{
    let f = 10;
    f = 11; // Fine
    console.log('f:', f);
}

console.log('e:', e);

/*
4. not must be assigned at declaration time.
*/

let g;
console.log('g:', g); // This will give us undefined

g = 12;


let h;
h = 13;
console.log('h:', h);