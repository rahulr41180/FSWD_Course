
for(var i=1;i<=5;i++){

    setTimeout(function(){

        console.log(i);

    },1000);

}

// Fix using let:

for(let i=1;i<=5;i++){

    setTimeout(function(){

        console.log(i);

    },1000);

}

// Fix using var with an IIFE:

for(var i = 0; i<5; i++) {
    (function(current) {
        setTimeout(() => {
            console.log('current :', current);
        },1000)
    })(i)
}

var a = 10;

function demo(){

    console.log(a);

    var a = 20;

}

demo();