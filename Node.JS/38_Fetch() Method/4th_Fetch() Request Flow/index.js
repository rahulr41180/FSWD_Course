
// Fetch Request Flow :

const response = fetch("http://localhost:8080");

/* 
How this fetch() method is working :

Whenever we are called the fetch() method to fetch some data then fetch() method will seperate their work in two part.

First Part :
    In the first part it goes to browser API/Node APIs to handle their browser based or Node based APIs request.
    
Second Part :
    In second part it goes to memory to reserve some space for storing data for response and rejected data.
        It will create two space first for onFulFilled with empty array and second for onRejected with empty array
            1. Data property
            2. onFulfilled : []
            3. onRejected : []

2. onFulFilled : [] it will store the promise resolved value
    onFulfilled : [] array have function. Which will be responsibled to fulfilled the data with resolved value and resolved value could be success value or error value
    Note : we can't push the data in onFulFilled array means the data will internally push by fetch() method.
3. onRejected : [] it will store the promise rejected value
    onRejected : [] array have function. Which will be responsibled to fulfilled the data with rejected value. That rejected value occured before request will reach to network/server
    Note : we can't push the data in onRejected array means the data will internally push by fetch() method.
*/

/* 
First Part :
    A network request send
        we can't directly send network request we need some resource in between to send network request.
            that resource is providing by either browser APIs or either Node APIs
            
    Now we have a network request
        There are two condition
            1. Either request will go to server/network
            2. Either request will not go to server/network

    1. Either request will go to server/network
        If request will go to server/network
            So there are two possible response
                1. Either Request come with fulfilled data with success value with code : 200, 201, 300, 301 etc.
                2. Either Request come with fulfilled data with error value code : 404, 502 etc.
                    Both type of Request data will push into onFulfilled [] array
                        fulfilled data with success value code will push into onFulfilled []
                        fulfilled data with error value code will push into onRejected []

        2. onFulFilled : [] it will store the promise resolved value
            Both type of Request data(success data or error data) will push into onFulfilled [] array
                fulfilled data with success value code will push into onFulfilled []
                fulfilled data with error value code will push into onRejected []

    2. Either request will not go to server/network
        If request did not went to server/network means network has error before reached to server/network
            this is because of network connection or some other that could be occured before network reached to server/network

        3. onRejected : [] it will store the promise rejected value
            Whatever error is occured before reaching the request to network/server. That will be pushed into onRejected value
*/

/* 
Second Part :
    Initialy both the onFulfilled and onRejected array are empty/undefined
    Inside these array we have function() and that function are reponsible to fulfilled the data.
    
    Once the request response(response could be fullfilled or rejected) from network/server will be returned.
        Whatever value returned from network those value will be pushed into their respective array.
        and we know that inside that array we have function to fulfilled the 1. data property

    We have data property into our memory
        This data property will be fulfilled either by onFulfilled : [] function() or by onRejected : [] function()
        Now data property has fulfilled value
*/

/* 
Once the data property has fulfilled value
    that value will be returned to response variable that we have declared while we were fetching the request
    const response = fetch("http://localhost:8080");

    and this response variable present inside our callstack of JS Engine
*/