
// Controlled access dene ke liye.

class User {

    // #age = 0;
    #age = 1;

    set age(value) {
        console.log('value3333333:', value)

        if(value < 0) {
            throw new Error("Invalid age");
        }

        this.#age = value;
    }

    get age() {
        console.log(444444444444444)
        return this.#age;
    }

    set age(value) {
        console.log('value2:', value)
        console.log(55555555555);
    }

    get age() {
        console.log(66666666666);
        return this.#age;
    }

    // age() {
    //     console.log(77777777)
    // }
}

// Usage:

const user = new User();
console.log(1111111111)
user.age = 25;
console.log(222222222)
console.log(user.age);

// Validation automatically ho rahi hai.

/* 

The Most Important Concept

When you write:

get age() { ... }
set age() { ... }

JavaScript does not create methods named age.

Instead, it creates one property descriptor called "age" on User.prototype.

That descriptor can have:

{
    get: ...,
    set: ...
}

If you define another getter/setter with the same name later, the previous descriptor is overwritten.

So the mental model should be:

Class definition
        ↓
User.prototype
        ↓
Property Descriptor ("age")
        ↓
{
    get: ...,
    set: ...
}

and not:

User.prototype.ageGetter1
User.prototype.ageGetter2
User.prototype.ageSetter1
User.prototype.ageSetter2

There is only one "age" accessor property, and the last definitions win.

*/