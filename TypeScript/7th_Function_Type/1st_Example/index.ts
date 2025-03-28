
// Function Type :

/* 
As of now we know that we can specify the function permeter type or return type as well.

We can also set a type of variable as function.

The reason you aren't getting an error when you pass `age: "28"` (a string) to the `greetUser` function, 
even though the type definition specifies `age` as a `number`, is because TypeScript is performing 
*type inference* when you pass `user` to `greetUser`.


### What's happening:
- You defined the `User` type with the `age` field as a `number`, so the `user` object you define 
(`let user = { name: "rahul", age: "28" }`) **should** be considered invalid because `age` is a string, 
but TypeScript is being lenient in this case.
- TypeScript allows you to pass an object that looks like it matches the `User` type, even if the `age` 
field is actually a string. This is because TypeScript performs a *structural type system* check rather than a strict match for types.

### Here's the key point:
In TypeScript, types are **structural**, not *nominal*. This means TypeScript checks if an object **has the same 
structure** as the expected type, rather than checking if it's the exact same type. The object 
`let user = { name: "rahul", age: "28" }` still has a `name` and `age` field, and because of this structural typing, 
TypeScript doesn't flag an error right away.

However, **you should be seeing a warning or error** in strict mode, depending on your TypeScript configuration. 
TypeScript should ideally catch this type mismatch in strict mode (`strict: true`) or if your settings are more lenient.

### How to enforce stricter typing:

1. **Enable strict mode:** Make sure that the `strict` flag is enabled in your `tsconfig.json`:
   ```json
   {
     "compilerOptions": {
       "strict": true
     }
   }
   ```
   This will ensure that TypeScript checks types more thoroughly and would give you an error for passing `"28"` (a string) 
   where a `number` is expected.

2. **Explicitly define types for your variables:**
   In your code, TypeScript will treat `user` as having an implicit `any` type because the `age` is being assigned 
   a string instead of a number. If you explicitly type `user` as a `User` type, TypeScript would flag the mismatch:
   ```ts
   let user: User = { name: "rahul", age: "28" };
   ```
   This will now raise an error saying that `age` must be a `number`, not a `string`.

### Conclusion:
The behavior you're seeing is due to TypeScript's structural typing and possibly because of the `strict` settings not being enabled. 
To avoid such issues, it's a good practice to always enable strict mode in your TypeScript configuration, 
ensuring that type mismatches are caught early.
*/

type User1 = { name: string, age: number };

function greetUser1(user: User1) {
    const greetMsg = "Hello, " + user?.name + " " + user?.age;
    console.log(greetMsg);
}

let greet1;
greet1 = greetUser1;

let user1 = { name: "rahul", age: "28" } // this will not give us error as age is string to know the reason read above content
greet1(user1);
let user2 = { name: 28, age: "rahul" } // this will also not give us error as name is number and age is string 
greet1(user2);

// --------------------------------------------------

type User2 = { name: string, age: number };

function greetUser2(user: User1) {
    const greetMsg = "Hello, " + user?.name + " " + user?.age;
    console.log(greetMsg);
}

let greet2;
greet2 = greetUser2;

// let user3: User2 = { name: "rahul", age: "28" }; // now I will get an error as I have explicity assign the alias type to user3;
// let user4: User2 = { name: 28, age: "rahul" }; // Here I will also get an error
let user5: User2 = { name: "user", age: 28 };
let user6: User2 = { name: "user", age: 29 };
greet2(user5);
greet2(user6);

// --------------------------------------------------

type User3 = { name: string, age: number };

function greetUser3(user: User3) {
    const greetMsg = "Hello, " + user?.name + " " + user?.age;
    console.log(greetMsg);
}

/*
as we haven't assign any type so the type for this variable will be any
means we can assign any type of variable to this greet3 variable
*/
let greet3; 
greet3 = greetUser3;

let user7: User3 = { name: "user", age: 29 };
greet3(user7);

greet3 = 100; // this will be fine
/* 
This will not give us error at compile time instead it will give us error at run time.

We have to avoid this type of issue like by telling to greet3 variable that it should always point to
a function(){};
for that we have to set type of greet3 function as function
*/
// greet3(user7); // TypeError: greet3 is not a function

// --------------------------------------------------

/* 
As we have resolved the problem but still we have a problem like
*/

type User4 = { name: string, age: number };

function greetUser4(user: User4) {
    const greetMsg = "Hello, " + user?.name + " " + user?.age;
    console.log(greetMsg);
}

/* 
As we have assign the type of greet4 variable as Function that means we will only be able to assign a function 
to greet4 we won't be able to assign any type of variable because now greet4 type is Function. 
*/
let greet4: Function; 
greet4 = greetUser4;

let user8: User4 = { name: "user", age: 29 };
greet4(user8);

// greet4 = 100; // Here I will get error : Type 'number' is not assignable to type 'Function'.

// ----------------------------------------------------------------------

type User5 = { name: string, age: number };

function greetUser5(user: User5) {
    const greetMsg = "Hello, " + user?.name + " " + user?.age;
    console.log(greetMsg);
}

/* 
As we have assigned the type of greet5 variable as Function so we can assign any Function to this variable.
*/
let greet5: Function; 
greet5 = greetUser5;

let user9: User5 = { name: "user", age: 29 };
greet5(user9);

function sum(num1: number, num2: number) {
  return num1 + num2;
}

/* 
As we have assigned the sum function to greet5 variable that means if we will call the greet5 variable then we have
to passed num1 and num2 value as we have decalared sum function with two perameter that's why

but what we are doing we are passing user9 object into greet5() function that means it should throw us compiled error because greet5 storing
sum function and sum function takin two peramter not an object but it is not throwing us a compiled error this is the problem

if we will compiled this code to JavaScript it will not throw us any error.

after successful compiled we know if we do this in JavaScript then it will work
like user9 is and object and sum fn taking two perameter that means num1 will have this user9 object and as we are not passing any
second perameter so num2 will become undefined.

How we can resolve this issue.
What is happening right now we can assign any Function to greet5 variable.
But to resolve this issue we should tell to TypeScript that only specific type of function or given signature function can be assigned to this greet5 variable to 
resolve this issue that we are facing right now.

How we can do this.
*/
greet5 = sum;
console.log(greet5(user9)); // [object Object]undefined

// ------------------------------------------------------------

type User6 = { name: string, age: number };

function greetUser6(user: User6) {
    const greetMsg = "Hello, " + user?.name + " " + user?.age;
    console.log(greetMsg);
}

/* 
Instead of assign a Function as a type 
we have to assign a arrow function and the return type of that arrow function means which value or what this arrow function
will return and also we can add signature like this arrow function can take a user perameter by defining it's type also for example

let greet6: () => void; // it will return nothing
let greet6: (uesr: User6) => void // it will return nothing and it will take one perameter and it's type will be User6

Here the signature of greet6 variable is 
we can assign only those function to greet6 variable which will return nothing and which will take one perameter and type of that peramter will be User6 Alias.

Here we have assign a function signature type as a type to greet6 variable.
*/
let greet6: (user: User6) => void;

greet6 = greetUser6; // Here we will not get error because greetUser6 function is fullfiling the greet6: function signature type.

let user10: User6 = { name: "user", age: 29 };
greet6(user10);

function sum1(num1: number, num2: number) {
  return num1 + num2;
}

/* 
This line of code will throw us error like :

Type '(num1: number, num2: number) => number' is not assignable to type '(user: User6) => void'.
  Target signature provides too few arguments. Expected 2 or more, but got 1.ts(2322)
let greet6: (user: User6) => void
*/
// greet6 = sum1; // Here we will get error because sum1 function is not fullfiling the greet6: function signature type.
console.log(greet6(user10));

// -----------------------------------------------------------

type User7 = { name: string, age: number };

function greetUser7(user: User7) {
    const greetMsg = "Hello, " + user?.name + " " + user?.age;
    console.log(greetMsg);
}

let greet7: (user: User7) => void;

greet7 = greetUser7; 
let user11: User7 = { name: "user", age: 29 };
greet7(user11);

function sum2(num1: number, num2: number) {
  return num1 + num2;
}

function isEligible(user: User7) {
  console.log(user?.age >= 10);
}

// Here we will not get error because isEligible function is fullfiling the greet6: function signature type.
greet7 = isEligible;
greet7(user11)