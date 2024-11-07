
// 1. var

for(var i = 0; i<5; i++) {
    setTimeout(() => {
        console.log("i", i); // Everytime we will get 5 because var has function or global scope so it will 
        // overwrite same variable with update value
    },1000)
}


// 2. let

for(let j = 0; j<5; j++) {
    setTimeout(() => {
        console.log("j", j); // Everytime we will get new value because let has block scope so it will
        // create new block scope with new value.
    },1000)
}


// 3. const

// for(const k = 0; k<5; k++) {
    // console.log("k :", k); TypeError: Assignment to constant variable.

// }

// 4. 

for(let l = 0; l<5; l++) {
    console.log("l :", l);

}