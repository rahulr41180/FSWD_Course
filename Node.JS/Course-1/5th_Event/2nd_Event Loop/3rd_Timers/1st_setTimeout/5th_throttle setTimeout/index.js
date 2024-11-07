
// throttle setTimeout :

/* 
Browsers may throttle setTimeout() and other timer functions (like setInterval()) for tabs that are inactive or 
in the background to improve performance and save resources like battery power. 
This throttling can lead to timer functions running less frequently than specified, or being delayed significantly.

Why Throttling Happens
1. Performance Optimization
2. Battery Conservation
3. User Experience

How Throttling Works
When a tab becomes inactive (e.g., the user switches to another tab or minimizes the browser), 
the browser may start throttling timer-based functions.

Lower Priority:
Timer functions like setTimeout() and setInterval() are given a lower priority in the execution queue.

Reduced Frequency:
The frequency of execution for these functions is reduced. For example, instead of running every 100ms, 
a timer might run every second or less frequently.

Delayed Execution:
Execution of these functions can be delayed significantly, particularly if the tab remains inactive for an extended period.

Animations and Updates:
Animations or real-time updates relying on setTimeout() or setInterval() may become less smooth or frequent when the tab is inactive.

Background Tasks:
Long-running background tasks like data polling or state synchronization can be delayed, 
affecting the application’s responsiveness when the user returns to the tab.

Timers for UI Updates:
Timers used to update UI elements periodically might not function as expected, 
leading to outdated information being displayed when the user switches back to the tab.

Mitigating Throttling Effects :
Visibility API:
Use the Page Visibility API to detect when a tab becomes inactive and adjust your timer-based tasks accordingly.

Service Workers:
For background tasks that need to run reliably, consider using Service Workers, which are less likely to be throttled.

Web Workers:
For offloading intensive tasks, use Web Workers. However, they might also be subject to throttling when the tab is inactive.
*/

function logTime() {
    console.log("Timer :", new Date().toLocaleTimeString());
    setTimeout(logTime, 1000);
}

logTime();