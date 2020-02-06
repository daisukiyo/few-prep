# JavaScript Questions

Solutions to the questions found [here](https://h5bp.org/Front-end-Developer-Interview-Questions/questions/javascript-questions/)

---

## Table of Contents

- [JavaScript Questions](#javascript-questions)
  - [Table of Contents](#table-of-contents)
  - [Explain Event Delegation](#explain-event-delegation)
  - [Explain how `this` works in Javascript](#explain-how-this-works-in-javascript)
  - [Explain how prototypal inheritance works](#explain-how-prototypal-inheritance-works)
  - [What's the difference between a variable that is: null, undefined, or undeclared?](#whats-the-difference-between-a-variable-that-is-null-undefined-or-undeclared)
  - [What is a closure, and how/why would you use one?](#what-is-a-closure-and-howwhy-would-you-use-one)
  - [What language constructions do you use for iterating over object properties and array items?](#what-language-constructions-do-you-use-for-iterating-over-object-properties-and-array-items)
  - [Can you describe the main difference between Array.forEach() loop and Array.map() methods and why you would pick one versus the other?](#can-you-describe-the-main-difference-between-arrayforeach-loop-and-arraymap-methods-and-why-you-would-pick-one-versus-the-other)
  - [What's a typical use case for anonymous functions?](#whats-a-typical-use-case-for-anonymous-functions)
  - [What's the difference between host objects and native objects?](#whats-the-difference-between-host-objects-and-native-objects)
  - [Explain the difference between: `function Person(){}`, `var person = Person()`, and `var foo = function() {}`](#explain-the-difference-between-function-person-var-person--person-and-var-foo--function)
  - [Can you explain what `Function.call` and `Function.apply` do? What is the notable difference between the two?](#can-you-explain-what-functioncall-and-functionapply-do-what-is-the-notable-difference-between-the-two)
  - [Explain `Function.prototype.bind`](#explain-functionprototypebind)
  - [What's the difference between feature detection, feature inference, and using UA string?](#whats-the-difference-between-feature-detection-feature-inference-and-using-ua-string)
  - [Explain "hositing"](#explain-%22hositing%22)
  - [Describe event bubbling](#describe-event-bubbling)
  - [Describe event capturing](#describe-event-capturing)
  - [What's the difference between an "attribute" and a "property"](#whats-the-difference-between-an-%22attribute%22-and-a-%22property%22)
  - [What are the pros and cons of extending built-in JavaScript objects?](#what-are-the-pros-and-cons-of-extending-built-in-javascript-objects)
  - [What is the difference between == and === ?](#what-is-the-difference-between--and)
  - [Explain the same-origin policy with regards to JavaScript](#explain-the-same-origin-policy-with-regards-to-javascript)
  - [Why is it called a Ternary operator, what does the word "Ternary" indicate?](#why-is-it-called-a-ternary-operator-what-does-the-word-%22ternary%22-indicate)
  - [What is strict mode? What are some of the advantages/disadvantages of using it?](#what-is-strict-mode-what-are-some-of-the-advantagesdisadvantages-of-using-it)
  - [What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?](#what-are-some-of-the-advantagesdisadvantages-of-writing-javascript-code-in-a-language-that-compiles-to-javascript)
  - [What tools and techniques do you use debugging JavaScript code?](#what-tools-and-techniques-do-you-use-debugging-javascript-code)
  - [Explain the difference between mutable and immutable objects](#explain-the-difference-between-mutable-and-immutable-objects)
    - [What is an example of an immutable object in JavaScript?](#what-is-an-example-of-an-immutable-object-in-javascript)
    - [What are the pros and cons of immutability?](#what-are-the-pros-and-cons-of-immutability)
    - [How can you achieve immutability in your own code?](#how-can-you-achieve-immutability-in-your-own-code)
  - [Explain the difference between synchronous and asynchronous functions](#explain-the-difference-between-synchronous-and-asynchronous-functions)
  - [What is event loop?](#what-is-event-loop)
    - [What is the difference between call stack and task queue?](#what-is-the-difference-between-call-stack-and-task-queue)
  - [What are the difference between variables created using let, var or const?](#what-are-the-difference-between-variables-created-using-let-var-or-const)
  - [What are the differences between ES6 class and ES5 function constructors?](#what-are-the-differences-between-es6-class-and-es5-function-constructors)
  - [Can you offer a use case for the new arrow function syntax? How does this new syntax differ from other functions?](#can-you-offer-a-use-case-for-the-new-arrow-function-syntax-how-does-this-new-syntax-differ-from-other-functions)
  - [What advantage is there for using the arrow syntax for a method in a constructor?](#what-advantage-is-there-for-using-the-arrow-syntax-for-a-method-in-a-constructor)
  - [What is the definition of a higher-order function?](#what-is-the-definition-of-a-higher-order-function)
  - [Can you give an example for destructuring an object or an array?](#can-you-give-an-example-for-destructuring-an-object-or-an-array)
  - [Can you give an example of generating a string with ES6 Template Literals?](#can-you-give-an-example-of-generating-a-string-with-es6-template-literals)
  - [Can you give an example of a curry function and why this syntax offers an advantage?](#can-you-give-an-example-of-a-curry-function-and-why-this-syntax-offers-an-advantage)
  - [What are the benefits of using spread syntax and how is it different from rest syntax?](#what-are-the-benefits-of-using-spread-syntax-and-how-is-it-different-from-rest-syntax)
  - [How can you share code between files?](#how-can-you-share-code-between-files)
  - [Why you might want to create static class members?](#why-you-might-want-to-create-static-class-members)

---

## Explain Event Delegation
- A powerful event handling pattern
  - When dealing with a lot of similar elements -- instead of assigning a handler to each of them, put a **single** handler on their common ancestor
  - makes use of two often overlooked features of JavaScript events: **event bubbling** and the **target element**.

---

## Explain how `this` works in Javascript
- A property of an execution context (global, function or eval) that, in non–strict mode, is always a reference to an object and in strict mode can be any value.
- In the global execution context (outside of any function), this refers to the global object whether in strict mode or not.
- Inside a function, the value of this depends on how the function is called.
  - Simple Call
  - The Bind Method
  - Arrow Functions
  - As an Object Method
  - This On the Object's Prototype Chain
  - This with a getter or setter
  - As a Constructor
  - As a DOM Event Handler
  - In an Inline Event Handler

---

## Explain how prototypal inheritance works
- JavaScript is Prototype-based unline Java for example which is Class-based. (Dynamic and does not provide a `class` implementation)
  - Although ES2015 introduced the `class` keyword -- it is only Syntactical sugar.
- Javascript has **one** construct: objects
  - Each object has a private property which holds a link to another object called it's **prototype**.
  - That prototype object has a prototype of its own and so on until it hits **null**
    - `null` is the final link of the prototype chain
---

## What's the difference between a variable that is: null, undefined, or undeclared?
- `null`: A variable that represents the intentional absence of any object value
  - treated as a falsy for boolean operations
- `undefined`: a primitive value automatically assigned to variables that have been declared or to formal arguments which there are no actual arguments.
  - A function returns undefined if a value was not returned.
- `undeclared`: a variable that is declared without a `var` keyword.
  - ```JavaScript
    testVar = 'helloWorld'        // undeclared
    var testVar = 'helloWorld'    // declared
    ```
    
---

## What is a closure, and how/why would you use one?

---

## What language constructions do you use for iterating over object properties and array items?

---

## Can you describe the main difference between Array.forEach() loop and Array.map() methods and why you would pick one versus the other?

---

## What's a typical use case for anonymous functions?

---

## What's the difference between host objects and native objects?

---

## Explain the difference between: `function Person(){}`, `var person = Person()`, and `var foo = function() {}`

---

## Can you explain what `Function.call` and `Function.apply` do? What is the notable difference between the two?

---

## Explain `Function.prototype.bind`

---

## What's the difference between feature detection, feature inference, and using UA string?

---

## Explain "hositing"

---

## Describe event bubbling

---

## Describe event capturing

---

## What's the difference between an "attribute" and a "property"

---

## What are the pros and cons of extending built-in JavaScript objects?

---

## What is the difference between == and === ?
- `==`: abstract equality comparison
  - converts to the same type before comparison (type coercion)
  - loose equality, double equals
  - inequality: `!=`
- `===`: strict equality comparison
  - used by indexOf, lastIndexOf, and case-matching
  - strict equality, identity, triple equls
  - inequality: `!==`
- ECMA Script 6:
  - `Object.is()` makes up for `===`'s imperfect behavior
  - ```JavaScript
    console.log(+0 === -0)    // true
    console.log(NaN === NaN)  // false
    ```


---

## Explain the same-origin policy with regards to JavaScript

---

## Why is it called a Ternary operator, what does the word "Ternary" indicate?

---

## What is strict mode? What are some of the advantages/disadvantages of using it?

---

## What are some of the advantages/disadvantages of writing JavaScript code in a language that compiles to JavaScript?

---

## What tools and techniques do you use debugging JavaScript code?

---

## Explain the difference between mutable and immutable objects

---

### What is an example of an immutable object in JavaScript?

---

### What are the pros and cons of immutability?

---

### How can you achieve immutability in your own code?

---

## Explain the difference between synchronous and asynchronous functions

---

## What is event loop?

---

### What is the difference between call stack and task queue?

---

## What are the difference between variables created using let, var or const?

- let: declares a block scope local variable, optionally initializing it to a value.
- var: declares a variable -- processed before any code is executed
- const: are block-scoped, much like variables defined using the let statement. The value of a constant can't be changed through reassignment, and it can't be redeclared.

---

## What are the differences between ES6 class and ES5 function constructors?

---

## Can you offer a use case for the new arrow function syntax? How does this new syntax differ from other functions?

---

## What advantage is there for using the arrow syntax for a method in a constructor?

---

## What is the definition of a higher-order function? 

---

## Can you give an example for destructuring an object or an array?

---

## Can you give an example of generating a string with ES6 Template Literals?

---

## Can you give an example of a curry function and why this syntax offers an advantage?

---

## What are the benefits of using spread syntax and how is it different from rest syntax?

- Allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
- This is important for react due to immutability. Don't want a data structure to update/remove/shift to the original, but to a copy (Think State -- we make the changes, then tell react the new thing we want in the state -- object id/references).
- TLDR: You can use spread in three places:

  1. Function Calls (executing functions)

        ```JavaScript
        const temps = [10, 20, 30, 25, 25, 10]
        Math.min(temps);      // returns NaN
        Math.min(...temps)    // returns 10

        // before spread
        Math.min.apply(null, temperatures);

        console.log("hello", "friend", "bye" )
        const names = ["Bart Simpson", "Spongebob Squarepants", "Ash Ketchum"]
        console.log(names)        // returns array
        console.log(...names)     // returns each name separated by spaces

        console.log(..."potato")  // returns p o t a t o (spreads string)
        ```

  2. Array Literals (making an array) -- common use case

        ```JavaScript
        const gen1 = ["Charmander", "Squirtle", "Bulbasaur"]
        const gen2 = ["Cyndaquil", "Totodile", "Chikorita"]

        const pokemon = [gen1, gen2]            // returns nested array
        const pokemonFix = [...gen1, ...gen2]   // returns combined array

        // ORDER DOES MATTER
        // Spread only goes ONE LEVEL deep when copying an array -- does not perform a deep copy of nested arrays!
        ```

  3. Object Literals (making an object)

      ```JavaScript
      const lion = {hasTail: true, legs: 4};
      const eagle = {canFly: true };
      const hybrid = {name: "Gryphon", ...lion, ...eagle}
      ```
  
---

## How can you share code between files?

- Formerly: Asynchronous Module Definition(AMD) via RequireJS or CommonJS (Node.js)
- Modern: ES2015 defines a **module** syntax to be supported both browser and node and replace AMD and CommonJS.

  - ```JavaScript
    // export
    export { name, draw, reportArea, reportPerimeter };

    export function double (n) {
      return n * 2;
    }

    // export default (only 1 per module)
    export default function sayName() {
      console.log('Name!');
    }

    // import
    import { name, draw, reportArea, reportPerimeter } from './modules/square.js';

    import { double } from './utils.js'; // import from utils.js

    import { double as utilsDouble } from './utils.js'; // rename

    // this is probably the most semantic
    import * as Utils from './utils.js' // all from utils import -- Utils.double

    // import default
    import bottle from './utils.js' // no bracket means it imports the default

    ```

- Applying the module to your HTML:
  
  - ```HTML
    <script type="module" src="main.js"></script>
    ```

---

## Why you might want to create static class members?

- Static methods aren't called on instances, but rather they're called on the class itself.
  - Often for utility functions such as create/clone objects.
- Static methods are called **without instantiating** their class and **cannot** be called through a class instance.