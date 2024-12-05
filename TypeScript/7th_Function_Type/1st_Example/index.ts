
// Function Type :

/* 
As of now we know that we can specify the function permeter type or return type as well.

We can also set a type of variable as function.
*/

type User = { name: string, age: number };

function greeUser(user: User) {

    const greetMsg = "Hello, " + user.name;
    console.log(greetMsg);
}