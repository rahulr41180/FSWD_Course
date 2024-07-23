
// CollScan :

/* 
db.user.findOne({user : "user1"});
Suppose we have a mutliple documents in user collections and I want to search a document by a user name like : user1
Then what MongoDB will do MongoDB would scan all the documents by name from first to last document once It has found the one document by name.
This process is called CollScan. 
*/

// let arr = [10, 10, 10, 10, 20, 20, 20, 30, 50];
let arr = [1,1,1,1,2,3,3,3,3,3];

let count = 1; // 5 9

let totalCount = 0; // 2
let track = arr[0]; // 3
for(let i = 1; i<arr.length; i++) {
    if(arr[i] === track && i === arr.length-1) {
        count++;
        totalCount += Math.floor(count/2);
    } else if(arr[i] === track) {
        count++;
    } else if(arr[i] !== track && count === 0) {
        track = arr[i];
        // count++;
    } else if(arr[i] !== track) {
        console.log('Math.floor(count/2):', Math.floor(count/2))
        totalCount += Math.floor(count/2);
        count = 0;
        track = arr[i];
    }
}
console.log('totalCount:', totalCount)