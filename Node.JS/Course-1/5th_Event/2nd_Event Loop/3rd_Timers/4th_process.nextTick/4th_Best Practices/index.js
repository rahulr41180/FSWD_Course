
// Best Practices :

/* 
Use Sparingly: Avoid overusing process.nextTick() as it can prevent the event loop from processing other operations and lead to performance issues.

Break Up Long Operations: Use process.nextTick() to break up long-running operations to keep the event loop responsive.

Ensure Execution Order: Use process.nextTick() to ensure certain code runs immediately after the current operation 
but before other asynchronous operations.
*/