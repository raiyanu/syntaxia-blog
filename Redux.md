Process involving using Redux with React

**Redux Store**

- Redux store is a single source of truth
- Redux store is read-only
- Redux store is immutable
- Redux store is updated by pure functions
- Redux store is updated by actions
- Redux store is updated by reducers
- Redux store is updated by dispatching actions
- Redux store is updated by middleware
- Redux store is updated by async actions
- Redux store is updated by thunks
- Redux store is updated by sagas

**Middleware**

**Calling APIs**

**Testing Redux apps**

**Integration With React**

Key to understanding Redux is to understand the following concepts:

- Store
- Functional programming
- Procedural
- Object oriented
- Event-driven

**Process**

- [ ] concept behind redux
- [ ] functional programming
- [ ] Function composition
- [ ] Lodash
- [ ] Currying
- [ ] Pure function

**Function composition:**

```javascript
const compose = (f, g) => (data) => f(g(data));
// or
let input = "  JavaScript  ";
let output = trim(toLowerCase(input));
```

**Lodash:**

```javascript
import { compose, pipe } from "lodash/fp";
let input = "  JavaScript  ";
// order of execution is from right to left
let output = compose(trim, toLowerCase)(input);
// or
// order of execution is from left to right
let output = pipe(toLowerCase, trim)(input);
```

**Currying:**

Normal method for adding two numbers

```javascript
const add = (a, b) => a + b;
add(2, 3); // 5
```

Currying method for adding two numbers

```javascript
const add = (a) => (b) => a + b;
add(2)(3); // 5

// or

function add(a) {
  return function (b) {
    return a + b;
  };
}
add(2)(3); // 5
```

Example of currying

```javascript
const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
const result = pipe(trim, toLowerCase, wrap("div")); // <div>javascript</div>
```

**Pure function**

```javascript
// imPure function
function add(a) {
  return a + Math.random();
}
add(2); // 2.43242342

// Pure function
function add(a, b) {
  return a + b;
}
add(2, 3); // 5
```

Hence, Pure function is a function that returns the same output for the same input. Pure function cannot have side effects. Pure function is predictable. Pure function is testable. Pure function is easy to debug. Pure function cannot mutate the input. pure function cannot mutate the external variable. Pure function cannot have random values, date, time, etc. Pure function cannot have console.log, alert, etc. Pure function cannot have async code, fetch, etc. Pure function cannot have DOM manipulation, document.getElementById, etc. Pure function cannot have network calls, fetch, etc. Pure function cannot have database calls, SQL, etc. Pure function cannot have file system calls, fs, etc. Pure function cannot have global variables, window, etc. Pure function cannot have local storage, session storage, etc. Pure function cannot have cookies, cache, etc. Pure function cannot have browser storage, web storage, etc. Pure function cannot have the navigator object, location object, etc. Pure function cannot have the history object, screen object, etc. Pure function cannot have the console object, alert object, etc. Pure function cannot have the confirm object, prompt object, etc. Pure function cannot have the fetch object, XMLHttpRequest object, etc. Pure function cannot have the WebSocket object, etc.

**Advantage of Pure function :**

1. Self-documenting (since it returns the same output for the same input, also doesn't use any parent scope variables)
2. Easy to test (since it returns the same output for the same input)
3. Easy to debug(we can easily find the bug)
4. Concurrency (since its independent of external variables, it can be run in parallel)
5. Cacheable (since output gonna be same for same input, we can store it in cache and re use that output, saving execution time)

<!-- Pure function cannot mutate the database. Pure function cannot mutate the file system. Pure function cannot mutate the network. Pure function cannot mutate the DOM. Pure function cannot mutate the global object. Pure function cannot mutate the local storage. Pure function cannot mutate the session storage. Pure function cannot mutate the cookies. Pure function cannot mutate the cache. Pure function cannot mutate the browser storage. Pure function cannot mutate the web storage. Pure function cannot mutate the window object. Pure function cannot mutate the document object. Pure function cannot mutate the navigator object. Pure function cannot mutate the location object. Pure function cannot mutate the history object. Pure function cannot mutate the screen object. Pure function cannot mutate the console object. Pure function cannot mutate the alert object. Pure function cannot mutate the confirm object. Pure function cannot mutate the prompt object. Pure function cannot mutate the fetch object. Pure function cannot mutate the XMLHttpRequest object. Pure function cannot mutate the WebSocket -->

<!-- Above trash is generated by GitHub Co-pilot -->

**Advantage of Immutable data**:

1. Predictable
2. Faster Change Detection
3. Concurrency
4. Cacheable
5. Easy to test
6. Easy to debug
7. Self-documenting
8. Easy to maintain
9. Easy to refactor

**Disadvantage of Immutable data**:

1. Memory consumption
2. Performance
3. Complexity

**Editing properties of Object**

```javascript
const person = { name: "John", age: 25 };
const updated = Object.assign({}, person, { age: 26, name: "John Doe" });
// or
const updated = { ...person, age: 26, name: "John Doe" };
// above code is not proper way to update object, if object is nested with another object then it will not work : cuz it performs shallow copy
// Example for shallow copy
const person = {
  name: "John",
  age: 25,
  address: {
    city: "New York",
    country: "USA",
  },
};
const updated = { ...person, age: 26 };
updated.address.city = "New Delhi";
console.log(person.address.city); // New Delhi

// Deep copy 
const updated = {
  ...person,
  address: {
    ...person.address,
    city: "New Delhi",
  },
};
console.log(person.address.city); // New York
```

**Editing properties of Array**

```javascript
const numbers = [1, 2, 3];
// Adding
const added = [...numbers, 4];
// adding element in specific index
const index = numbers.indexOf(2);
const added = [...numbers.slice(0, index), 4, ...numbers.slice(index)];
// added = [1, 4, 2, 3]
```
