[Node JS Cheat Sheet + PDF | Zero To Mastery](https://zerotomastery.io/cheatsheets/node-js-cheat-sheet/#running-node-js)

https://gist.github.com/paulfranco/9f88a2879b7b7d88de5d1921aef2093b

https://github.com/Gauthamjm007/Backend-NodeJS-Golang-Interview_QA

https://github.com/Mohamed-Hashem/nodejs-interview-questions

[Express](https://www.notion.so/Express-ec3a38b6bf8949bc9d6fabbaf5a2c743?pvs=21)

1. **Write a code to start a Node server:**

   Code Example:

   ```jsx
   const http = require("http");
   const server = http.createServer((req, res) => {
     res.end("Hello, World!");
   });
   server.listen(3000, () => {
     console.log("Server started on port 3000");
   });
   ```

   **Explanation**: This code creates a basic Node.js server that listens on port 3000 and responds with "Hello, World!" when accessed.

2. **What is ECMAScript and ES6:**

   **Explanation**: ECMAScript (ES) is a scripting-language specification, and ES6, also known as ECMAScript 2015, is a major update to the ECMAScript standard. ES6 introduced many new features and enhancements to JavaScript, including arrow functions, template literals, and classes.

3. **What is middleware:**

   **Explanation**: Middleware in the context of web development is software that sits between a web application and the server. It can handle tasks like authentication, logging, and more. In Express.js, middleware functions are used to process incoming HTTP requests.

4. **Why do we use Express.js, and what are the advantages of Express.js:**

   **Explanation**: Express.js is a popular web application framework for Node.js. It simplifies the development of web applications by providing a robust set of features, such as routing, middleware support, and template engines. Advantages include speed, flexibility, and a large community.

5. **How do you manage error handling:**

   **Explanation**: Error handling in Node.js can be managed using try-catch blocks, using the `throw` statement, or by implementing error-handling middleware. Proper error handling is essential for robust applications.

6. **What is callback hell and how can we overcome it with promises:**

   **Explanation**: Callback hell, also known as "Pyramid of Doom," occurs when you have deeply nested callbacks, making the code hard to read and maintain. Promises provide a cleaner way to handle asynchronous operations, allowing you to chain them and avoid callback hell.

7. **What is the difference between promises and async/await:**

   **Explanation**: Promises are a way to handle asynchronous operations using `.then()` and `.catch()`. Async/await is a more recent syntax that provides a cleaner way to work with promises, making asynchronous code appear more synchronous.

8. **Output prediction question:**

   This question would require a specific code example to provide an output prediction.

9. **How does Node.js work behind the scenes, explaining the event loop:**

   **Explanation**: Node.js is built around an event loop, which allows it to handle multiple concurrent tasks efficiently. The event loop continuously checks for pending events and executes associated callbacks, making Node.js non-blocking and highly performant.

10. **Explain call, bind, and apply:**

    **Explanation**: `call`, `bind`, and `apply` are methods in JavaScript for manipulating the `this` context of a function. `call` and `apply` invoke a function with a specific context, while `bind` creates a new function with a fixed context.

11. **What is the difference between REST API and SOAP API:**

    **Explanation**: REST (Representational State Transfer) and SOAP (Simple Object Access Protocol) are two different approaches to building web services. REST is based on stateless communication and uses HTTP methods, while SOAP relies on XML and has more rigid standards.

12. **What is routing in Node.js:**

    **Explanation**: Routing in Node.js refers to the process of determining how an application responds to a specific client request based on the requested URL. Express.js, for example, provides a routing system to handle this.

13. **Write a function to extract the index number of capital letters in a string:**

    Code Example:

    ```jsx
    function findCapitalIndexes(str) {
      const indexes = [];
      for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase() && str[i] !== " ") {
          indexes.push(i);
        }
      }
      return indexes;
    }

    const str = "ArpAn waDdEwaR";
    const capitalIndexes = findCapitalIndexes(str);
    console.log(capitalIndexes);
    ```

    **Explanation**: This code defines a function that finds the indexes of capital letters in the given string.

14. **What is the Node process model:**

    **Explanation**: The Node process model refers to how Node.js manages processes and concurrency. It uses a single-threaded, event-driven architecture to handle multiple concurrent requests efficiently.

15. **What is async.parallel and async.series:**

    **Explanation**: `async.parallel` and `async.series` are functions from the "async" library used for handling asynchronous operations in a controlled manner. `parallel` runs tasks in parallel, while `series` runs tasks one after the other.

16. **What are Promise.all and Promise.allSettled:**

    **Explanation**: `Promise.all` is a method that takes an array of promises and returns a new promise that fulfills when all the input promises fulfill or rejects when any of them rejects. `Promise.allSettled` is similar but doesn't short-circuit on the first rejection, allowing you to check the status of all promises.

17. **What are the things in the global object and what are globals:**

    **Explanation**: The global object in Node.js and the browser environment contains various properties and methods that are available globally. Examples of globals include `global` in Node.js and `window` in the browser. Common global objects include `console`, `Math`, and `JSON`.

18. **How do you track dependencies in Node.js:**

    **Explanation**: Dependencies are typically tracked in a `package.json` file, and you can use package managers like npm or Yarn to manage and install them. The `package.json` file lists all the dependencies and their versions.

19. **How do you debug your code:**

    **Explanation**: Debugging in Node.js can be done using tools like the Node.js Inspector, console.log statements, and IDEs with debugging support. You can set breakpoints, inspect variables, and step through code to find and fix issues.

20. **Explain EventEmitter:**

    **Explanation**: EventEmitter is a core module in Node.js that allows objects to emit and listen for events. It's a fundamental part of Node.js's asynchronous, event-driven architecture.

21. **Explain npm and Yarn:**

    **Explanation**: npm and Yarn are package managers for Node.js and JavaScript. They allow you to install, manage, and share packages and dependencies for your projects. Both have their own command-line tools and registries.

22. **Explain in-depth about the package.json file:**

    **Explanation**: The `package.json` file is used to define metadata about a Node.js project, including its name, version, dependencies, scripts, and more. It's essential for managing project dependencies and running scripts.

23. **Difference between dev dependencies and normal dependencies:**

    **Explanation**: Dev dependencies (`devDependencies`) are dependencies used during development and testing, while normal dependencies (`dependencies`) are required for the application to run in production. Dev dependencies are not installed when you deploy your application.

24. **What does LTS mean when downloading Node:**

    **Explanation**: LTS stands for "Long Term Support." LTS versions of Node.js receive long-term maintenance and security updates, making them a stable choice for production applications.

25. **How do you handle authentication with POST requests:**

    **Explanation**: Authentication with POST requests can be handled by verifying user credentials, generating tokens, and using them to secure access to protected routes or resources.

26. **What is a JWT token and how is data encrypted:**

    **Explanation**: JWT (JSON Web Token) is a compact, self-contained way to represent information between parties. Data is not encrypted but is digitally signed. The token can be decoded to verify its authenticity, but it's not meant to be used for sensitive data storage.

27. **What is the process model:**

    **Explanation**: The "process model" can refer to various things in different contexts, including how a computer's operating system manages processes or how Node.js handles concurrency. More context is needed for a specific explanation.

28. **What is Node.js chaining:**

    **Explanation**: Node.js chaining often refers to method chaining, where you chain multiple method calls together to perform a sequence of operations on an object. This is a common pattern in Node.js for simplifying code and improving readability.
