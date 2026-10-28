# Sharing code between files (JavaScript modules)

Code sharing between files is a fundamental aspect of modular programming that helps maintain a clean, organized, and reusable codebase. Here’s how you can accomplish code sharing between files in JavaScript, depending on the environment and tools you're using:

### 1. **Using ES6 Modules**

**ES6 (ECMAScript 2015) Modules** provide a standardized way to share code between files using `import` and `export` statements.

- **Exporting Code**: In the module file, you can export functions, objects, or variables that you want to share.

  ```javascript
  // math.js
  export function add(a, b) {
    return a + b;
  }

  export const PI = 3.14;
  ```

- **Importing Code**: In another file, you can import the exported code using the `import` statement.

  ```javascript
  // app.js
  import { add, PI } from "./math.js";

  console.log(add(2, 3)); // Output: 5
  console.log(PI); // Output: 3.14
  ```

**Advantages**:

- Clear and standard syntax for importing and exporting.
- Supports both named and default exports.
- Encourages modular and maintainable code.

**Disadvantages**:

- Requires a build tool or a browser that supports ES6 modules for full compatibility.
- Can be less flexible compared to other module systems in older environments.

### 2. **Using CommonJS Modules**

**CommonJS** is a module system primarily used in Node.js. It uses `require()` and `module.exports` to share code.

- **Exporting Code**: Use `module.exports` to export functions, objects, or variables.

  ```javascript
  // math.js
  function add(a, b) {
    return a + b;
  }

  const PI = 3.14;

  module.exports = { add, PI };
  ```

- **Importing Code**: Use `require()` to import the exported code.

  ```javascript
  // app.js
  const { add, PI } = require("./math.js");

  console.log(add(2, 3)); // Output: 5
  console.log(PI); // Output: 3.14
  ```

**Advantages**:

- Well-supported in Node.js and many JavaScript environments.
- Allows for dynamic `require()` calls.

**Disadvantages**:

- Not natively supported in browsers (though bundlers like Webpack can handle it).
- Lacks the static analysis benefits of ES6 modules.

### 3. **Using AMD (Asynchronous Module Definition)**

**AMD** is a module format designed for asynchronous loading, often used in older JavaScript environments and with libraries like RequireJS.

- **Define Modules**: Use `define()` to declare modules and their dependencies.

  ```javascript
  // math.js
  define(function () {
    return {
      add: function (a, b) {
        return a + b;
      },
      PI: 3.14,
    };
  });
  ```

- **Require Modules**: Use `require()` to load and use modules.

  ```javascript
  // app.js
  require(["math"], function (math) {
    console.log(math.add(2, 3)); // Output: 5
    console.log(math.PI); // Output: 3.14
  });
  ```

**Advantages**:

- Supports asynchronous loading of modules.
- Allows for dependency management and modular code.

**Disadvantages**:

- Less commonly used today compared to ES6 and CommonJS.
- Can be more complex to configure and use.

### 4. **Using UMD (Universal Module Definition)**

**UMD** is a module definition pattern that works across various environments, including AMD, CommonJS, and global scope.

- **Define Module**: UMD wraps your module to support different module systems.

  ```javascript
  (function (root, factory) {
    if (typeof define === "function" && define.amd) {
      define(["exports"], factory);
    } else if (typeof exports === "object") {
      factory(exports);
    } else {
      root.myModule = factory({});
    }
  })(this, function (exports) {
    function add(a, b) {
      return a + b;
    }

    const PI = 3.14;

    exports.add = add;
    exports.PI = PI;
  });
  ```

**Advantages**:

- Provides compatibility across multiple module systems.
- Useful for libraries that need to work in different environments.

**Disadvantages**:

- More complex than simpler module formats.
- Less commonly used with modern tooling and ES6 module support.

### 5. **Using Script Tags (For Browsers)**

In environments where modules are not supported, code can be shared using `<script>` tags and global variables.

- **Define Global Variables**: Include scripts in HTML to define global variables or functions.

  ```html
  <!-- index.html -->
  <script src="math.js"></script>
  <script src="app.js"></script>
  ```

  ```javascript
  // math.js
  var MathLib = {
    add: function (a, b) {
      return a + b;
    },
    PI: 3.14,
  };
  ```

  ```javascript
  // app.js
  console.log(MathLib.add(2, 3)); // Output: 5
  console.log(MathLib.PI); // Output: 3.14
  ```

**Advantages**:

- Simple and straightforward for quick prototypes and small projects.

**Disadvantages**:

- Global namespace pollution.
- No module encapsulation or dependency management.
- Harder to manage and scale for larger applications.

### Summary

- **ES6 Modules**: Standardized, well-supported in modern environments, encourages modularity and maintainability.
- **CommonJS**: Widely used in Node.js, allows dynamic module loading but not natively supported in browsers.
- **AMD**: Supports asynchronous loading and dependency management, but less common today.
- **UMD**: Provides compatibility across various module systems, but can be complex.
- **Script Tags**: Simple but lacks modularity and can lead to global namespace issues.

Choosing the right method depends on the project’s environment, requirements, and tooling. Modern projects typically use ES6 modules due to their standardized syntax and support in current browsers and build tools.
