/* =========================================================
   JAVASCRIPT OBJECTS — COMPLETE THEORY NOTES
   ========================================================= */

/*
1) CREATING OBJECTS
-------------------
- There are **two main ways** to create objects:
  1. Object Literal:
     const obj = { key: value, ... };
  2. Object.create() (Prototypal Inheritance):
     const obj = Object.create(proto, propertiesObject);

- Object.create() allows directly setting the prototype and shared methods.
*/

/*
2) OBJECT PROPERTIES (KEY: VALUE)
---------------------------------
- Keys are strings by default (even without quotes).
- Keys can also be symbols (unique and hidden).
- Values can be any datatype: string, number, boolean, array, object, function, symbol.

Example:
---------
const JsUser = {
  name: "Hitesh",          // string key
  "fullName": "Hitesh",    // string key with quotes (needed if spaces/special chars)
  age: 18,
  isLoggedIn: false,
  lastLoginDays: ["Monday","Saturday"]
};
*/

/*
3) SYMBOL AS OBJECT KEY
-----------------------
- Symbol must be defined first:
  const mySym = Symbol("id");
- Used in object with []:
  const obj = { [mySym]: "secret" };
- Cannot access symbol key via dot notation:
  obj.mySym // WRONG
  obj[mySym] // CORRECT
- Symbol affects the KEY, not the VALUE
- Symbol description is optional (for debugging)
*/

/*
4) ACCESSING OBJECT PROPERTIES
------------------------------
- Dot Notation:
    obj.key
    - Simple
    - Works only if key is string without spaces
- Bracket Notation:
    obj["key"]
    - Works with spaces, special chars, dynamic keys, or symbols
*/

/*
5) MODIFYING OBJECT PROPERTIES
-------------------------------
- Objects are mutable by default:
    obj.email = "newEmail@gmail.com"; // overwrites
- Adding new property:
    obj.greeting = function() { console.log("Hello"); }

/*
6) METHODS IN OBJECTS
---------------------
- Functions inside objects are called methods.
- Accessing function reference:
    console.log(obj.greet) // function reference
- Executing method:
    obj.greet() // executes function
- 'this' inside method refers to the **current object**
*/

/*
7) FREEZING OBJECTS
-------------------
- Object.freeze(obj)
    - Prevents adding/modifying/deleting properties
    - Existing values cannot be changed
- Example:
    Object.freeze(JsUser);
    JsUser.email = "another@gmail.com"; // will not change
*/

/*
8) SUMMARY / INTERVIEW POINTS
------------------------------
- Object stores key:value pairs.
- Keys can be strings or symbols.
- Symbols prevent collisions and hide internal data.
- Dot notation: simple access. Bracket notation: flexible.
- Objects are mutable unless frozen.
- Methods are functions inside objects.
- 'this' refers to the current object.
- Object.freeze() makes object immutable.
- Two main ways to create objects: Object literal, Object.create().
*/

