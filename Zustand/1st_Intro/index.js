
// Introduction :

/*
**Zustand** is a small, fast, and scalable state management solution for React. It’s inspired by Redux but is simpler and more lightweight,
with a minimalistic API and less boilerplate. It's particularly useful when you want a straightforward state management 
system that doesn't require complex setups or a steep learning curve.

Let’s walk through **everything** about Zustand, starting from the basics and moving towards more advanced topics.

---
### **1. Basics of Zustand**

#### **Installation**

To get started with Zustand, you first need to install it via npm or yarn.

```bash
npm install zustand
# or
yarn add zustand
```

#### **Creating a Store**

Zustand provides a `create` function that you use to create a store. 
A store holds your app's state, and it's typically used inside your components to manage and access state.

Here's a simple example:

```javascript
import create from 'zustand';
*/

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));

// In a component
const Counter = () => {
  const { count, increase } = useStore();
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
};
// ```

/*
#### **Key Concepts:**

- **Store**: Zustand store is a function that contains state and methods to update it. 
The state is initialized by passing an object to the `create` function.
- **get and set**: Inside the store, you use `set` to update the state. 
The `set` function takes a function that receives the current state and returns the new state.

#### **State Updates**

Zustand uses a function-based approach to state updates, making it more predictable and efficient:
*/
// ```javascript
const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));
// ```

/*
This allows for **functional updates** where you can access and modify the state based on its previous value, 
which is crucial for managing derived states.

---

### **2. Advanced Features of Zustand**

#### **Derived State / Getters**

Zustand also supports derived state, which means you can compute values based on the current store's state. 
This can be done directly in the `useStore` hook:
*/
// ```javascript
const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
  doubledCount: () => get().count * 2, // Derived state
}));

// In a component
const Counter = () => {
  const { count, increase, doubledCount } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <p>Doubled Count: {doubledCount()}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
};
// ```
/*
Here, `doubledCount` is derived from `count` using the `get()` function.

#### **Middleware (Persist, Subscribe, etc.)**

Zustand has built-in middleware to add functionality like persistence or logging:

- **persist**: This middleware allows you to persist your store's state in `localStorage` or `sessionStorage`.


Example:
*/
// ```javascript
import create from 'zustand';
import { persist } from 'zustand/middleware';

const useStore = create(
  persist(
    (set) => ({
      count: 0,
      increase: () => set((state) => ({ count: state.count + 1 })),
    }),
    {
      name: 'counter-storage', // Unique name for localStorage
    }
  )
);
// ```
/*
- **subscribeWithSelector**: This middleware allows you to subscribe to specific slices of state.

Example:
*/
// ```javascript
import { subscribeWithSelector } from 'zustand/middleware';

const useStore = create(
  subscribeWithSelector((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
  }))
);
// ```
/*
- **devtools**: Integrates with Redux DevTools for debugging the store's state changes.

Example:
*/
// ```javascript
import { devtools } from 'zustand/middleware';

const useStore = create(
  devtools((set) => ({
    count: 0,
    increase: () => set((state) => ({ count: state.count + 1 })),
  }))
);
// ```
/*
#### **Complex State and Actions**

Zustand can handle more complex state and logic. 
You can organize actions and state updates using functions that are passed in the store’s creator function.

Example of a store with multiple actions:
*/
// ```javascript
const useStore = create((set) => ({
  count: 0,
  loading: false,
  data: null,
  increase: () => set((state) => ({ count: state.count + 1 })),
  setData: (data) => set({ data }),
  toggleLoading: () => set((state) => ({ loading: !state.loading })),
}));

// In a component
const MyComponent = () => {
  const { count, increase, loading, toggleLoading } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <p>Loading: {loading ? "Yes" : "No"}</p>
      <button onClick={increase}>Increase Count</button>
      <button onClick={toggleLoading}>Toggle Loading</button>
    </div>
  );
};
// ```

// ---
/*
### **3. Working with Async Logic in Zustand**

Zustand is excellent for handling asynchronous actions, like fetching data from an API.

Here's an example of how to handle async logic:
*/
// ```javascript
const useStore = create((set) => ({
  count: 0,
  data: null,
  loading: false,
  fetchData: async () => {
    set({ loading: true });
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      set({ data, loading: false });

    } catch (error) {
      set({ loading: false });
      console.error("Error fetching data:", error);
    }
  },
}));
// ```
/*
In this example, we define an action (`fetchData`) that asynchronously fetches data from an 
API and updates the store's state accordingly.

---

### **4. Zustand vs Redux**

While both Zustand and Redux are state management libraries for React, they have key differences:

- **Zustand** is **simpler** and has a smaller API, making it easier to set up and use. 
It does not require reducers or action types. State updates are made via a simple `set` function.
- **Redux** requires a more structured setup with reducers, actions, and action creators, which adds boilerplate code.

Zustand is great for smaller to medium-sized projects, while Redux might still be useful for large applications 
that need more structure, middleware, and tooling.

---

### **5. Advanced Usage**

#### **Using Zustand with React Context**

Zustand can be used alongside React Context, but you don’t necessarily need Context to use Zustand as 
it already provides a way to share state across components.

That said, if you need to create a higher-level context around your Zustand store, you can combine them like this:
*/
// ```javascript
import { createContext, useContext } from 'react';
import create from 'zustand';

const MyStoreContext = createContext();

const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));

export const StoreProvider = ({ children }) => (
  <MyStoreContext.Provider value={useStore}>{children}</MyStoreContext.Provider>
);

export const useMyStore = () => useContext(MyStoreContext);
// ```
/*
#### **Server-Side Rendering (SSR) with Zustand**

Zustand can be used in SSR scenarios as well, for example in Next.js. Since Zustand uses hooks to manage state, 
you can use it on both the client and server. The state can be hydrated on the client-side after the server renders the page.
*/
// ```javascript
const useStore = create((set) => ({
  count: 0,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));

// In Next.js or a similar framework, use it in your component:
const Counter = () => {
  const { count, increase } = useStore();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increase}>Increase</button>
    </div>
  );
};
// ```

/*

### **Conclusion**

Zustand is a powerful and flexible state management tool for React. It provides an intuitive API with minimal 
boilerplate and can scale from small apps to more complex ones. Whether you're managing simple UI state or dealing 
with complex async operations, Zustand offers a clean and efficient way to handle state in React applications.

Some key takeaways:
- **Simple API**: Just call `create()` to make a store.
- **Efficient**: No need for reducers or action types.
- **State updates via `set`**: Make state updates in a straightforward and predictable way.
- **Middleware**: Easily add features like persistence, devtools, and subscriptions.

I hope this overview gives you a solid understanding of Zustand, from basic usage to more advanced patterns! 
Feel free to ask if you need more examples or clarification on any point.
*/