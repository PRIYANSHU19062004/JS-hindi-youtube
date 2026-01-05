/* =========================================================
   JAVASCRIPT SYMBOL — COMPLETE THEORY NOTES (WITH DOUBTS)
   ========================================================= */

/*
1) WHAT IS A SYMBOL?
-------------------
- Symbol is a primitive data type in JavaScript.
- Introduced in ES6 (ES2015).
- Every Symbol value is UNIQUE.
- Mainly used as a unique object property KEY.

Example:
---------
const sym1 = Symbol();
const sym2 = Symbol();

sym1 === sym2  // false (always unique)
*/


/*
2) SYMBOL WITH DESCRIPTION
--------------------------
- Symbol(description)
- The description is OPTIONAL.
- It is ONLY for debugging, logging, and readability.
- Description does NOT affect uniqueness.

Example:
---------
const a = Symbol("id");
const b = Symbol("id");

a === b  // false

Reason:
- "id" is NOT the value.
- The symbol itself is unique internally.
*/


/*
3) WHY SYMBOL WAS INTRODUCED?
----------------------------
Problems before Symbols:
- Object keys were strings.
- Property name collisions happened in large codebases.

Symbols solve:
- Name collision
- Accidental overwrite
- Library/framework conflicts
- Hidden/internal data storage
*/


/*
4) SYMBOL AS OBJECT KEY (CORRECT WAY)
------------------------------------
IMPORTANT RULE:
- To use a symbol as a key, ALWAYS use square brackets [].

Example:
---------
const mySym = Symbol("key");

const obj = {
  name: "Priyanshu",
  [mySym]: "secretValue"
};

Access:
-------
obj[mySym]        // correct
obj.mySym         // WRONG (undefined)
*/


/*
5) COMMON MISTAKE (VERY IMPORTANT)
---------------------------------
This does NOT create a symbol key:

const mySym = Symbol("key");

const obj = {
  mySym: "value"
};

Explanation:
------------
- 'mySym' here is treated as a STRING key.
- NOT the symbol.

Result:
--------
typeof obj.mySym === "string"
*/


/*
6) TYPE OF SYMBOL AND SYMBOL VALUE
---------------------------------
- The SYMBOL itself has type "symbol".
- The VALUE stored at a symbol key can be ANY datatype.

Example:
---------
const s = Symbol("id");

const obj = {
  [s]: "hello"
};

typeof s          // "symbol"
typeof obj[s]     // "string"

IMPORTANT:
----------
Symbol affects the KEY, not the VALUE.
*/


/*
7) SHOULD SYMBOL BE DECLARED OUTSIDE THE OBJECT?
------------------------------------------------
Short Answer:
- NOT mandatory
- But RECOMMENDED

Why declare outside?
--------------------
- You can access the symbol later
- You can reuse it
- Clean and practical

Example:
---------
const sym = Symbol("id");

const obj = {
  [sym]: 101
};

obj[sym]  // accessible
*/


/*
8) SYMBOL DECLARED INSIDE OBJECT — WHY?
--------------------------------------
Yes, this is VALID JS:

const obj = {
  [Symbol("hidden")]: "data"
};

But:
----
- You CANNOT access it later
- You lose the reference
- Every Symbol() is unique

Reason this is useful:
----------------------
- Internal / private-like data
- One-time metadata
- Library internals
- Avoiding external access
*/


/*
9) WHY USE SYMBOL IF IT CAN'T BE ACCESSED?
-----------------------------------------
Because sometimes data should:
- Not be modified
- Not be overwritten
- Not be accessed accidentally

Symbols created inside objects provide:
- Safety
- Isolation
- Zero collision
*/


/*
10) SYMBOLS ARE HIDDEN FROM LOOPS
--------------------------------
Symbol keys do NOT appear in:

- for...in
- Object.keys()
- Object.values()
- Object.entries()

Example:
---------
const sym = Symbol("id");

const obj = {
  name: "JS",
  [sym]: 123
};

Object.keys(obj); // ["name"]
*/


/*
11) HOW TO SEE SYMBOL KEYS (ADVANCED)
------------------------------------
Use:
-----
Object.getOwnPropertySymbols(obj)

Example:
---------
Object.getOwnPropertySymbols(obj); // [Symbol(id)]
*/


/*
12) BUILT-IN SYMBOLS (JS ENGINE USES THEM)
------------------------------------------
JavaScript uses symbols internally.

Examples:
---------
Symbol.iterator
Symbol.toStringTag
Symbol.asyncIterator
Symbol.toPrimitive

These control object behavior.
*/


/*
13) SYMBOL VS STRING KEY
-----------------------
STRING KEY:
- Can conflict
- Visible in loops
- Guessable

SYMBOL KEY:
- Always unique
- Hidden
- Safe for libraries
*/


/*
14) INTERVIEW ONE-LINERS
-----------------------
- Symbol is a primitive data type used for unique object property keys.
- Symbol descriptions are only for debugging and readability.
- Symbols prevent property name collisions.
- Symbols can be used to create hidden internal object properties.
*/


/*
15) FINAL RULES TO REMEMBER
--------------------------
- Symbol() always returns a unique value
- Description is optional
- Use [] to define symbol keys
- Declare symbol outside if you need access later
- Declare symbol inside for internal/private data
- Symbol affects the KEY, not the VALUE
*/

/* ================= END OF SYMBOL NOTES ================= */
