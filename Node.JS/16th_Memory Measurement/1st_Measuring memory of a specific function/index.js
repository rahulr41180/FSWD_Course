
function createUsers() {
    const users = [];

    for(let i=0;i<100000;i++){
        users.push({
            id:i,
            name:"Rahul"
        });
    }

    return users;
}

const before = (process.memoryUsage().heapUsed)/1024/1024;
console.log('before:', before)

createUsers();

const after = (process.memoryUsage().heapUsed)/1024/1024;
console.log('after:', after)

console.log(after-before);

/* 

Shallow Size vs Retained Size
Closure memory consumption
Async/Await memory retention
Express request-wise memory profiling
Production memory leak debugging using Heap Snapshots.

*/