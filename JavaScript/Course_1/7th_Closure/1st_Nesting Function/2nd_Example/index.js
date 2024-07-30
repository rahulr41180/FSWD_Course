
function initCounter() {
    let count = 0;// function scope and block scope
    return () => {
        return count++;
    }
}

let counter = initCounter(); // return annonymus function definitation with different scope and their parent scope function variables.
console.log(counter()); // 0;
console.log(counter()); // 1;


let counter1 = initCounter(); // again here we will get returned annonymus function definitation with different scope and their parent scope
                              // function variables.
console.log(counter1()); // 0;
console.log(counter1()); // 1;