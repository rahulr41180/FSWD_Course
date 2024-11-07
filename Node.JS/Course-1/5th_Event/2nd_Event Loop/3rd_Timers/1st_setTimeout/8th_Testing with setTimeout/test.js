
// Unit Testing :

/* 
Writing tests to ensure that individual units of code (functions, methods, etc.) work as expected.

Mocking Timers
Definition: Mocking timers involves simulating the behavior of timer functions (setTimeout, setInterval, etc.) without waiting for real-time delays.
*/

jest.useFakeTimers();


test("delayed execution", () => {
    console.log("test");
    const callback = jest.fn();

    setTimeout(callback, 1000);
    jest.advanceTimersByTime(1000);

    expect(callback).toHaveBeenCalled();
})