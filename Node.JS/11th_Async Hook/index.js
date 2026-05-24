
/* 

In **Node.js**, `async_hooks.createHook()` is an **advanced low-level API** used to **track the lifecycle of asynchronous resources** (Promises, timers, HTTP requests, etc.). It is mainly used for **debugging, monitoring, request tracking, and performance tooling**.

Since you already work with **Node.js backend**, understanding this helps when building **request context tracking, logging systems, or APM tools**.

---

# 1. What is `async_hooks`?

`async_hooks` is a **core module** that lets you track **async operations created by Node.js**.

Example async operations:

* `setTimeout`
* `Promise`
* `HTTP requests`
* `fs operations`
* `database queries`

Every async operation has a **lifecycle** that Node internally manages.

---

# 2. Syntax

```javascript
const async_hooks = require("async_hooks");

const hook = async_hooks.createHook({
  init(asyncId, type, triggerAsyncId, resource) {},
  before(asyncId) {},
  after(asyncId) {},
  destroy(asyncId) {},
  promiseResolve(asyncId) {}
});
```

Then enable it:

```javascript
hook.enable();
```

---

# 3. Async Resource Lifecycle

Every async operation goes through stages:

```
init → before → after → destroy
```

Example lifecycle for `setTimeout`:

```
init (timer created)
before (callback about to execute)
after (callback finished)
destroy (resource cleaned)
```

---

# 4. Parameters Explained

## 1️⃣ `init(asyncId, type, triggerAsyncId, resource)`

Called when **a new async resource is created**.

### Parameters

| Parameter      | Meaning                            |
| -------------- | ---------------------------------- |
| asyncId        | unique id of async resource        |
| type           | type of async operation            |
| triggerAsyncId | asyncId that created this resource |
| resource       | actual resource object             |

Example types:

```
Timeout
PROMISE
TCPWRAP
HTTPINCOMINGMESSAGE
```

---

## 2️⃣ `before(asyncId)`

Called **just before the async callback executes**.

Example:

```
setTimeout(() => {
 console.log("run");
}, 1000)
```

Before running the callback, `before()` triggers.

---

## 3️⃣ `after(asyncId)`

Called **right after the async callback finishes execution**.

---

## 4️⃣ `destroy(asyncId)`

Called when the async resource is **destroyed or garbage collected**.

Example:

* timer cleared
* promise resolved
* http request finished

---

## 5️⃣ `promiseResolve(asyncId)`

Called when a **Promise resolves**.

---

# 5. Basic Example

### Code

```javascript
const async_hooks = require("async_hooks");
const fs = require("fs");

const hook = async_hooks.createHook({

  init(asyncId, type, triggerAsyncId) {
    fs.writeSync(1, `INIT: ${asyncId} Type: ${type} Trigger: ${triggerAsyncId}\n`);
  },

  before(asyncId) {
    fs.writeSync(1, `BEFORE: ${asyncId}\n`);
  },

  after(asyncId) {
    fs.writeSync(1, `AFTER: ${asyncId}\n`);
  },

  destroy(asyncId) {
    fs.writeSync(1, `DESTROY: ${asyncId}\n`);
  }

});

hook.enable();

setTimeout(() => {
  console.log("Timeout executed");
}, 100);
```

---

# 6. Example Output (Simplified)

```
INIT: 2 Type: Timeout Trigger: 1
BEFORE: 2
Timeout executed
AFTER: 2
DESTROY: 2
```

Explanation:

```
Timeout created → init
Callback about to run → before
Callback executed → after
Timer cleaned → destroy
```

---

# 7. Example with Promise

```javascript
const async_hooks = require("async_hooks");

const hook = async_hooks.createHook({
  init(id, type) {
    console.log("INIT:", id, type);
  },
  promiseResolve(id) {
    console.log("PROMISE RESOLVED:", id);
  }
});

hook.enable();

Promise.resolve().then(() => {
  console.log("Promise finished");
});
```

Output:

```
INIT: 5 PROMISE
PROMISE RESOLVED: 5
Promise finished
```

---

# 8. Real Use Case (Request Context Tracking)

In backend APIs we often want something like:

```
Request ID
User ID
Trace ID
```

But async operations break normal variable scope.

Example:

```
Request → DB query → Redis → API call
```

To **track the same request across async operations**, Node tools use `async_hooks`.

Example tools built using this concept:

* **AsyncLocalStorage**
* **New Relic**
* **Datadog**
* **OpenTelemetry**

---

# 9. Simplified Flow Diagram

```
HTTP Request
     │
     ▼
init (async resource created)
     │
     ▼
before (callback about to run)
     │
     ▼
callback executes
     │
     ▼
after (callback finished)
     │
     ▼
destroy (resource cleaned)
```

---

# 10. Important Warning ⚠️

`async_hooks` is **low-level and expensive**.

So production apps normally use:

👉 **AsyncLocalStorage**

which internally uses `async_hooks`.

---

# 11. Real Backend Example

Track request id across async calls.

```javascript
const async_hooks = require("async_hooks");

let store = new Map();

const hook = async_hooks.createHook({
  init(id, type, triggerId) {
    if (store.has(triggerId)) {
      store.set(id, store.get(triggerId));
    }
  }
});

hook.enable();

store.set(async_hooks.executionAsyncId(), { requestId: 1 });

setTimeout(() => {
  console.log(store.get(async_hooks.executionAsyncId()));
}, 100);
```

Output:

```
{ requestId: 1 }
```

The **context is preserved across async calls**.

---

# 12. When You Actually Use This

Use `async_hooks` when building:

* Request tracing
* Logging frameworks
* Performance monitoring
* Async context propagation
* APM tools

Most developers never use it directly.

---

✅ Since you are already a **Full Stack Developer working with Node.js**, the **next important concept after `async_hooks` is**:

* **AsyncLocalStorage (real production usage)**
* **executionAsyncId vs triggerAsyncId**
* **How Express request context works internally**

If you want, I can also show you:

**“How Express request ID tracking works internally using async_hooks”** — which is a **very powerful backend concept used in production systems.** 🚀

*/