
// Fetching the data from API by using async and await method.

const getData = async () => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json() // I am using await here because convertion of string data to json data will take time that's why we have to use await here other wise we will get <pending> as result;
        console.log("data1 :", data);
    } catch(error) {
        console.log("error1 :", error);
    }
}

getData();