# Memoization


Memoization is a technique used to optimize functions by caching their results based on the inputs. This helps avoid redundant calculations by storing previously computed results and returning them when the same inputs are encountered again.

Here's a basic implementation of memoization in JavaScript:

#### Memoization Function

```javascript
function memoize(fn) {
  const cache = new Map();

  return function (...args) {
    const key = JSON.stringify(args); // Create a cache key from function arguments
    if (cache.has(key)) {
      return cache.get(key); // Return cached result if it exists
    }
    const result = fn(...args); // Compute result if not in cache
    cache.set(key, result); // Store result in cache
    return result;
  };
}
```

#### Example Usage

Let's use the `memoize` function to optimize a computationally expensive function, like computing Fibonacci numbers.

```javascript
// Expensive Fibonacci function
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Create a memoized version of the Fibonacci function
const memoizedFibonacci = memoize(fibonacci);

console.log(memoizedFibonacci(10)); // Computed result, stored in cache
console.log(memoizedFibonacci(10)); // Result fetched from cache
```

#### Explanation

1. **Cache Creation:**

   - `const cache = new Map();` creates a `Map` to store cached results.

2. **Key Creation:**

   - `const key = JSON.stringify(args);` converts the function arguments into a string key. This helps in uniquely identifying the result for specific inputs.

3. **Cache Check:**

   - `if (cache.has(key)) return cache.get(key);` checks if the result for the given key is already in the cache.

4. **Result Computation and Caching:**

   - `const result = fn(...args);` computes the result if not cached.
   - `cache.set(key, result);` stores the result in the cache for future use.

5. **Return Result:**
   - The function returns the result, whether it's fetched from the cache or computed afresh.

#### Notes

- **Cache Key:** In the implementation above, the cache key is created using `JSON.stringify(args)`. This works well for simple data types, but for more complex objects, you might need a more sophisticated method to create unique keys.

- **Performance Considerations:** Memoization is particularly useful for functions with expensive computations and a relatively small set of unique inputs. If the number of unique inputs grows too large, the cache size might become a concern.

- **Limitations:** This simple memoization technique assumes that arguments are JSON serializable. If you use more complex data types (like functions or instances of custom classes), you'll need a more advanced key generation strategy.

This basic memoization implementation can be a powerful tool to optimize performance and avoid redundant computations in your JavaScript applications.
