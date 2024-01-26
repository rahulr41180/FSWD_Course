
/* ----------------------------------------------------------- */

// 1. this creates a block scope

const a = 1;

{ 
    const a = 2;  
    console.log('a:', a)
}


console.log('a:', a)