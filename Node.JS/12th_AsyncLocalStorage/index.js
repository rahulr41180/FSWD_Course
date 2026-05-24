
/* 

`AsyncLocalStorage` is one of the **most important modern features in backend Node.js systems** because it solves the problem of **maintaining context across asynchronous operations**.

It is part of **Node.js** and internally built on **async_hooks**.

Since you already build **Node.js + MongoDB APIs**, this concept is very useful for **request tracing, logging, authentication context, and distributed systems**.

---

# 1. The Problem AsyncLocalStorage Solves

In Node.js, operations are **asynchronous**.

Example flow:

```
Client Request
   ↓
Express Middleware
   ↓
DB Query
   ↓
Redis Cache
   ↓
External API
   ↓
Response
```

All these steps run **asynchronously**, and normal variables may **lose the request context**.

Example problem:

```javascript
let requestId;

app.get("/user", (req, res) => {
  requestId = req.headers["request-id"];

  setTimeout(() => {
    console.log(requestId);
  }, 100);
});
```

If **multiple users hit the API simultaneously**, the variable gets overwritten.

Example:

```
Request A → id = 100
Request B → id = 200
```

Timeout from request A may print:

```
200 ❌
```

So we lose the **request-specific context**.

---

# 2. What AsyncLocalStorage Does

`AsyncLocalStorage` provides **request-scoped storage**.

Think of it like:

```
Thread Local Storage (Java)
Request Context (Spring)
Zone.js (Angular)
```

But for **Node.js async environment**.

It allows storing data **that travels automatically across async calls**.

---

# 3. Basic Concept

Each request gets its **own isolated store**.

```
Request A → { requestId: 101 }
Request B → { requestId: 102 }
```

Even if async tasks run simultaneously, Node keeps them separated.

---

# 4. Syntax

```javascript
const { AsyncLocalStorage } = require("async_hooks");

const asyncLocalStorage = new AsyncLocalStorage();
```

Main methods:

| Method      | Purpose              |
| ----------- | -------------------- |
| run()       | start a new context  |
| getStore()  | access stored data   |
| enterWith() | set context manually |
| disable()   | stop tracking        |

---

# 5. Basic Example

### Code

```javascript
const { AsyncLocalStorage } = require("async_hooks");

const storage = new AsyncLocalStorage();

function log() {
  const store = storage.getStore();
  console.log("RequestId:", store.requestId);
}

storage.run({ requestId: 101 }, () => {

  setTimeout(() => {
    log();
  }, 100);

});
```

Output:

```
RequestId: 101
```

Even though `setTimeout` is async, the context remains.

---

# 6. Multiple Requests Example

```javascript
const { AsyncLocalStorage } = require("async_hooks");

const storage = new AsyncLocalStorage();

function processRequest(id) {

  storage.run({ requestId: id }, () => {

    setTimeout(() => {
      const store = storage.getStore();
      console.log("Request:", store.requestId);
    }, Math.random() * 100);

  });

}

processRequest(1);
processRequest(2);
processRequest(3);
```

Output (order may vary):

```
Request: 2
Request: 1
Request: 3
```

Each request keeps its own context.

---

# 7. Real World Example (Express Request ID)

Example with **Express.js**.

### Step 1 Create storage

```javascript
const { AsyncLocalStorage } = require("async_hooks");

const storage = new AsyncLocalStorage();
```

---

### Step 2 Middleware

```javascript
app.use((req, res, next) => {

  const requestId = Math.random().toString(36).slice(2);

  storage.run({ requestId }, () => {
    next();
  });

});
```

---

### Step 3 Logger

```javascript
function logger(message) {

  const store = storage.getStore();

  console.log(`[${store.requestId}] ${message}`);

}
```

---

### Step 4 Use Anywhere

```javascript
app.get("/users", async (req, res) => {

  logger("Fetching users");

  await new Promise(resolve => setTimeout(resolve, 100));

  logger("Users fetched");

  res.send("done");

});
```

Output:

```
[xk23ks] Fetching users
[xk23ks] Users fetched
```

Even across async calls.

---

# 8. Real Production Use Cases

### 1️⃣ Request Tracing

Used in distributed systems.

Example:

```
API Gateway
   ↓
Auth Service
   ↓
Order Service
   ↓
Payment Service
```

Every request has a **traceId**.

AsyncLocalStorage keeps the **traceId across async tasks**.

---

### 2️⃣ Logging Systems

Logging libraries automatically attach:

```
requestId
userId
sessionId
traceId
```

Example log:

```
[req-9234] DB query started
[req-9234] Cache miss
[req-9234] External API call
```

Without AsyncLocalStorage this becomes messy.

---

### 3️⃣ Monitoring Tools

Monitoring tools built on top of this concept include:

* OpenTelemetry
* Datadog
* New Relic

They track:

```
API request
DB query
Cache
External API
```

in one **trace**.

---

### 4️⃣ Multi-Tenant Systems

Since you were recently discussing **multi-tenant architecture**, AsyncLocalStorage is often used to store:

```
tenantId
```

Example:

```
Tenant A → DB_A
Tenant B → DB_B
```

Middleware stores tenantId in AsyncLocalStorage.

Later DB layer reads it.

---

# 9. Example Multi-Tenant DB Routing

```javascript
function getDatabase() {

  const store = storage.getStore();

  const tenantId = store.tenantId;

  return databases[tenantId];

}
```

No need to pass `tenantId` everywhere.

---

# 10. How AsyncLocalStorage Works Internally

Internally it uses:

```
async_hooks
```

Node tracks:

```
asyncId
triggerAsyncId
```

Then links async resources to the same context.

Simplified flow:

```
Request
   │
   ▼
AsyncLocalStorage.run()
   │
   ▼
Async Resource Created
   │
   ▼
Context automatically propagated
   │
   ▼
getStore() retrieves context
```

---

# 11. Best Practice

Use it for:

✅ Request ID
✅ Trace ID
✅ User ID
✅ Tenant ID
✅ Logging context

Avoid storing **large objects**.

---

# 12. Real Backend Architecture Example

Typical production backend:

```
Client
   │
   ▼
Express Middleware
   │
   ├── AsyncLocalStorage.run()
   │
   ▼
Controller
   │
   ▼
Service
   │
   ▼
Repository
   │
   ▼
Database
```

Anywhere in this chain:

```
storage.getStore()
```

gives the same request context.

---

# 13. Why It Is Very Important

Before AsyncLocalStorage developers had to **pass context manually everywhere**.

Example:

```
controller(reqId)
service(reqId)
repository(reqId)
logger(reqId)
```

Now:

```
logger()
```

Automatically knows the request.

---

💡 **Since you are learning deep Node.js internals**, the **next powerful concept after AsyncLocalStorage is**:

1️⃣ **executionAsyncId vs triggerAsyncId**
2️⃣ **How Express request lifecycle works internally**
3️⃣ **How logging libraries maintain request context**
4️⃣ **How distributed tracing works in microservices**

If you want, I can also show you **a production-level architecture diagram + code for request tracing used in companies like Uber and Netflix.**
It will make this concept **10x clearer.** 🚀

*/