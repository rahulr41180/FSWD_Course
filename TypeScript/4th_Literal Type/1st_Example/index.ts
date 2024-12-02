
// Literal Type :

/* 
Literal Type is a type.
If we creating a variable with const and we didn't explicitly defined the type of variable in that case whatever value we have assigned or initialized to that variable that value will be a type of that variable.

In our case as we have not defined any type of const str variable then
the type of const str will be 'Hello, World!' but if we log the typeof str we will get string
*/
const str = "Hello, World!";
console.log('str:', typeof str);

/* 
But If we defined a variable with let and var and we didn't explicitly defined the type of variable in that case whatever value we have assigned or initialized to that variable based on value type the type assigned to
that let variable

In our case as we have not defined any type of let str1 variable then
the type of let str1 will be 'string'
*/

let str1 = "Hello, World!";
console.log('str1:', typeof str1);
// -------------------------------------------------------

function roleMessage(role: string) {
    switch (role) {
        case "admin":
            console.log("You have admin permission on this site.");
            break;
        case "read":
            console.log("You have read permission on this site.");
            break;
        case "read-write":
            console.log("You have read and write permission on this site.");
            break;
        default:
            console.log("You are unAuthorized person!");
    }
}

roleMessage("admin");
roleMessage("admin1");

/* 
In this code we have to send the string as permeter of roleMessage function.
If we are sending another value to role permeter in that case we will get default value from roleMessage.

But this is not working as expected as like Literal Type

Literal type means the type should be equal to value that we are passing.
Means for role we need specific string type value that we can achieve by using literal type.
*/

// ---------------------------------------------------

function roleMessage1(role: "admin" | "read" | "read-write") {
    switch (role) {
        case "admin":
            console.log("You have admin permission on this site.");
            break;
        case "read":
            console.log("You have read permission on this site.");
            break;
        case "read-write":
            console.log("You have read and write permission on this site.");
            break;
        default:
            console.log("You are unAuthorized person!");
    }
}

roleMessage1("admin");
// roleMessage1("abcd"); // we can't send this value because role literal type does not have abcd as it's type value.

/* 
We can achieve this literal type by using union symbol.

Means a literal type says that what type or what value we can accept for a variable or for a function perameter.
*/