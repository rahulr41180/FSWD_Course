
/* */

let a = 1;

{
    console.log(a); // It will print 1 because block is a child scope of global scope and
    // let a = 1; is declared in global scope so we will get 1.
}

/* --------------------------------------------------------------- */


{
    let b = 2;
}

// console.log(b); It will give us error like : ReferenceError: b is not defined
// Because let b = 2; is declared in block and because of let have block scope so we
// could not get the value from child scope to global scope

/* ----------------------------------------------------------------- */

let c = 3;

{
    let c = 4;
    console.log(c); // It will give us 4 because we are printing the console.log(c); in block scope
    // So always JavaScript compiler first check the c value in it's own scope then it will go to it's parent scope;
}

/* ---------------------------------------------------------------- */

let d = 5;

{
    // console.log(d); It will give us error like : ReferenceError: Cannot access 'd' before initialization
    // Because JavaScript first check the d value in it's own scope and it will observe that we have
    // declared the variable after log so it will throught error. It will not go it's perent scope.
    // This is happened because of "Temperal Dead Zone"

    // The above part of the initialization of let variable of it's own scope that will be called as
    
    // Temperal Dead Zone.
    let d = 6;

}

/* --------------------------------------------------------------- */

{
    // TDZ starts 

    const say = () => console.log(msg); // It will give us "hi" because function is calling after declaration
    // and Initialization.
  
    let msg = 'hi'; 
    say(); 
}

/* --------------------------------------------------------------------- */


{
    // TDZ starts 

    const say = () =>  { //  console.log(msg); It will give us error like : ReferenceError: Cannot access 'msg' before initialization
                        // because function is calling before declaration and Initialization.
    } 
    say(); 
    let msg = 'hi'; 
}