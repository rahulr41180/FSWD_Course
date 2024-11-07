
/* ----------------------------------------------------------- */

// 1. This creates a block scope

const a = 1;

{ 
    const a = 2;  
    console.log('a:', a);
}


console.log('a:', a);

/* ------------------------------------------------------------- */

// 2. re-declaration in NOT allowed

const b = 3;
// const b = 4; SyntaxError: Identifier 'b' has already been declared


{
    const c = 5;
    // const c = 6; SyntaxError: Identifier 'c' has already been declared
}

/* -------------------------------------------------------------- */

// 3. re-assignment is NOT allowed


const d = 6;
// d = 7; TypeError: Assignment to constant variable.

{
    const e = 8;
    // e = 9; TypeError: Assignment to constant variable.
}

/* ------------------------------------------------------------ */

// 4. must be assigned at declaration time.

// const f; SyntaxError: Missing initializer in const declaration
// f = 10;
// console.log('f:', f)

// const g; SyntaxError: Missing initializer in const declaration
// console.log('g:', g);
// g = 11;