
let num = 19;

let half = Math.floor(num / 2);
// console.log(half);
let count = 0;
const checkPrime = (num, half) => {
    console.log(num, half);
    if (num === 1 || num % 2 === 0) {
        return "No";
    } else {
        for (let i = half; i > 0; i--) {

            console.log(i)
            if (num % i === 0) {
                count++
                console.log('count1:', count)
            }
            if (num % (i * 2) === 0) {
                count++;
                console.log('count2:', count)
            }

            if (num % ((i * 2) + 1) === 0) {
                count++;
                console.log('count4:', count)
            }
        }
        // if (num % (half + 1)) {
        //     count++;
        // }
    }

    if(count === 2) {
        return "Yes";
    } else {
        return "No";
    }
    console.log(count);
}
console.log(checkPrime(num, half));