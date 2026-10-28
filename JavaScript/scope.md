# Explain scope in javascript


**Explanation:**

```jsx
let globalScope = "Global scope";
function varScopeExample() {
  if (true) {
    if (true) {
      if (true) {
        var functionalScope = "functionalScope";
        let BlocalScope = "Block scope";
        console.log(BlocalScope);
        console.log(functionalScope);
        console.log(globalScope);
      }
      console.log(functionalScope);
    }
    console.log(functionalScope);
  }
  console.log(functionalScope);
}
console.log(globalScope);
varScopeExample();
```

**Understanding the Difference Between let, const, and var in JavaScript!**

#### **var**

**Scope**: Function-scoped.  
**Hoisting**: Variables declared with var are hoisted to the top of their scope, but not initialized.  
**Usage**: Generally considered outdated due to its tendency to cause bugs. Use with caution!

#### **let**

**Scope**: Block-scoped.  
**Hoisting**: Variables declared with let are hoisted to the top of their block scope, but are not initialized.  
**Usage**: Ideal for variables that will be reassigned or have limited block scope.

#### **const**

**Scope**: Block-scoped.  
**Hoisting**: Similar to let, const is also block-scoped and not initialized during hoisting.  
**Usage**: Best for variables that will not be reassigned (though their properties can still be mutated).  
Key Takeaway:
