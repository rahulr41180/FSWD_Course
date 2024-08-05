
// How fetch() method work.

/* 
We have JS Engine that have Memory Heap and Call Stack
We have global executional context always in Call Stack at bottom side
Whatever function coming to execute from Memory Heap those will put in Call Stack one by one in the top Side

There are some special function like : Async function(), setTimeout(), setInterval(), I/O Operation, fetch() etc.
We have browser API to handle these type of special function.
Means whenever some special function() come while JS Engine scanning the Memory Heap those function alway handle in browser API.


Browser API internally create thread for respective async functione and handle all async function parellel like :  
if setTimeout() come it will handle in seperate thread
if setInterval() come it will handle in seperate thread
if again setTimeout() come it will handle in seperate thread means it will not handle in same thread of setTimeout
if fetch() come it will handle in seperate thread
if IO type request come it will handle in seperate thread.

Each type of async function has their own phase queue to execute callback return by async function and this callback go in callstack of JS Engine to execute with the help of event loop.
Means
if any setTimeout() or setInterval() function will be returned their callback to execute in the "Timer Phase Queue" whenever their event done.
if any IO type request will be returned their callback to execute in the "IO Callback Phase Queue" whenever IO request event done.
if any setImmediate() function will be returned their callback to execute in the "Check Phase Queue" whenever IO task done.
if any fetch() request will be returned their response or reject callback to execute in the "Fetch Phase Queue" whenever fetch() task done.

Note : Each async function handled in seperate thread. 
Note : Each callback of async function are handled in their respetive Callback Queue

Like : 
setTimeout1() will be handled in seperate thread
setInterval() will be handled in seperate thread
setTimeout2() will be handled in seperate thread
setInterva2() will be handled in seperate thread
fetch() will be handled in seperate thread

setTimeout1() callback go in timer phase queue
setTimeout2() callback go in the same timer phase queue
setInterval1() callback go in the same timer phase queue
setInterval2() callback go in the same timer phase queue
fetch() response and reject go in the fetch phase queue or we can say "Micro task Queue"

Event Loop : 
Event loop run always to check all the Callback queue in step by step.
In each loop it execute only one callback at once from all the Callback Phase means if more then one callback present in any callback queue then
In the first loop event loop execute or put only one callback in callstack.
In the second loop event loop execute or put second one callback in callstack.

We have event loop to check all the phase queue in order wise
First Always it will check Fetch Phase Queue if it able to find some response or reject callback in this phase then it will put this callback to execute in top side of callstack of JS Engine
Second it will check IO Phase Queue if it able to find some callback in this phase then it will put this callback to execute in top side of callstack of JS Engine
Third it will check Check Phase Queue if it able to find some callback in this phase then it will put this callback to execute in top side of callstack of JS Engine
Fourth it will check Timer Phase Queue if it able to find some callback in this phase then it will put this callback to execute in top side of callstack of JS Engine
Fifth it will check IO Callback Phase Queue if it able to find some callback in this phase then it will put this callback to execute in top side of callstack of JS Engine

fetch() queue has high priority then other type of phase queue.
means : if callback is present in timer queue to execute and at the same time callback is present in fetch() queue to execute then what will happen
first fetch() queue callback or response go to callstack to execute and then
timer queue callback go to callstack to execute.

Suppose, JS Engine Found setTimeout1() then it does not go directly in call stack first it will go in web api.
Suppose, JS Engine Found setInterval() then it does not go directly in call stack first it will go in web api.
Suppose, JS Engine Found setTimeout2() then it does not go directly in call stack first it will go in web api.
Suppose, JS Engine Found fetch() then it does not go directly in call stack first it will go in web api.

JS Engine :
    Memory Heap
    Call Stack
        So on..
        .
        .
        2. Fn()
        1. Fn()
        Global Executional Context


Browser API / Web API :
    thread 1 : setTimeout1();
    thread 2 : setInterval1();
    thread 3 : setTimeout2();
    thread 4 : setInterval2();
    thread 5 : setImmediate();
    thread 6 : IO();
    thread 7 : fetch();


Event Loop will be checking on every loop each phase one by one and whatever callback is ready to execute that will put on the top side of callstack of JS Engine
Callback Phase :
    Fetch() Phase
        thread 7 : fetch(); request will be handle here.
    I/O Phase
        thread 6 : IO Phase
    Check Phase
        thread 5 : setImmediate() callback;
    Timer Phase
        thread 1 : setTimeout1(); cb
        thread 2 : setInterval1(); cb
        thread 3 : setTimeout2(); cb
        thread 4 : setInterval2(); cb
    IO Callback Phase
        thread 6 : IO callback execute here

JS Engine :
    Call Stack : Each callback is come here at top side of this callstack. Means :
        9. setInterval2();
        8. setTimeout2();
        7. setInterval1();
        6. IO Callback Phase because in each loop it check each phase and it return only one callback from each phase.
        6. setTimeout1();
        5. setImmediate();
        4. IO Callback;
        3. fetch();
        2. Fn();
        1. Fn();
        Global Execution Context
*/