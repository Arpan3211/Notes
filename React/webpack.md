# Setting Up and Configuring Webpack


**Theoretical Explanation**:
Webpack is a module bundler that transforms your code and assets into a bundle for the browser.

**Basic Webpack Configuration Example**:

```js
const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point
  output: {
    filename: "bundle.js", // Output file
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.js$/, // Transpile JS files
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  mode: "development", // or 'production'
};
```
