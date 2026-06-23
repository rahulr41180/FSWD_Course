
/* 

* * * *
* * * *
* * * *
* * * *

*/

for (let i = 0; i < 4; i++) {
    let res = ''
    for (let j = 0; j < 4; j++) {
        res += "* "
    }
    console.log(res);
    console.log("=================================")
}

/* 

*
* *
* * *
* * * *

*/

for (let i = 0; i < 4; i++) {
    let res = ""
    for (let j = 0; j <= i; j++) {
        res += "* "
    }
    console.log(res);
    console.log("=================================")
}

/* 

* * * *
* * *
* *
*

*/

for (let i = 4; i > 0; i--) {
    let res = ""
    for (let j = 0; j < i; j++) {
        res += "* "
    }
    console.log(res);
    console.log("=================================")
}

/*
  
      *
    * * *
  * * * * *
* * * * * * *

*/

let n = 4;
for (let i = 1; i <= n; i++) {

    let res = "";

    for (let j = 0; j < n - i; j++) {
        res += "  "
    }

    for (let k = 1; k <= (2 * i - 1); k++) {
        res += "* "
    }
    console.log(res)
    // console.log("=================================")
}

/* 

* * * * * * *
  * * * * *
    * * *
      *

*/

let b = 4;
for (let i = 1; i <= b; i++) {

    let res = "";
    for (let j = 1; j < i; j++) {
        res += "  ";
    }

    for (let k = 0; k < ((b - i) * 2 + 1); k++) {
        res += "* "
    }

    console.log(res);
}