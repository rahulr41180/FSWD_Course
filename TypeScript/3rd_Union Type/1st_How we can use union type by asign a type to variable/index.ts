
// Union :

let user: { name: string, age: number } | null = null;

function getUser() {
    const userName = "john";
    const userAge = 20;
    user = { name: userName, age: userAge};
    return user;
}


getUser();