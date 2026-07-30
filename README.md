# 7️⃣ What is a Symbol?

A **Symbol** is a **primitive data type** in JavaScript that represents a **unique** and **immutable (cannot be changed)** value.

- Every Symbol is unique.
- Even if two Symbols have the same description, they are **never equal**.
- Symbols are commonly used as **unique object property keys** to avoid property name conflicts.

---

# Creating a Symbol

## Syntax

```javascript
let id = Symbol("id");

console.log(id);
console.log(typeof id);
```

## Output

```javascript
Symbol(id)
symbol
```

## Explanation

- `"id"` is only a **description** used for debugging.
- It **does not** determine the Symbol's identity.
- The data type returned by `typeof` is `"symbol"`.

---

# Every Symbol is Unique

```javascript
let s1 = Symbol("id");
let s2 = Symbol("id");

console.log(s1 == s2);
```

## Output

```javascript
false
```

## Explanation

Although both Symbols have the same description (`"id"`), they are completely different values.

```javascript
Symbol("id") !== Symbol("id")
```

Every call to `Symbol()` creates a brand-new unique Symbol.

---

# Using Symbol as an Object Property

## Using a Normal Property

```javascript
let student = {};

student.id = 101;

console.log(student);
```

## Output

```javascript
{ id: 101 }
```

### Explanation

Here, `"id"` is a **string property name**.

---

## Using a Symbol Property

```javascript
let id = Symbol();

let student = {};

student[id] = 101;

console.log(student);
```

## Output

```javascript
{ [Symbol()]: 101 }
```

## Explanation

- The property key is a **Symbol**, not a string.
- Symbol keys help prevent accidental property name collisions.

---

# Accessing a Symbol Property

```javascript
console.log(student[id]);
```

## Output

```javascript
101
```

---

# Symbol Keys Must Use Bracket Notation

## Correct

```javascript
obj[id];
```

## Wrong

```javascript
obj.id;
```

## Why?

```javascript
obj.id
```

looks for a **string property** named `"id"`.

However,

```javascript
obj[id]
```

uses the Symbol stored in the variable `id` as the property key.

---

# Symbol Properties Are Hidden

```javascript
let id = Symbol();

let student = {
    name: "John"
};

student[id] = 101;

console.log(Object.keys(student));
```

## Output

```javascript
["name"]
```

## Explanation

`Object.keys()` returns only **string-keyed enumerable properties**.

The Symbol property is **hidden** and is **not included** in the result.

---

## Example

```javascript
let id = Symbol();

let student = {
    name: "John"
};

student[id] = 101;

console.log(student.name);         // John
console.log(student[id]);          // 101
console.log(Object.keys(student)); // ["name"]
```

## Output

```javascript
John
101
["name"]
```

# Without Symbol
```javascript
let student = {
    name: "John"
};

// First code
student.id = 101;

// Another code accidentally uses the same property
student.id = 999;

console.log(student.id);
```

## Output

```javascript
999
```

## Explanation

Both pieces of code use the property name `"id"`.

The second assignment **overwrites** the first value.

```javascript
student.id = 101
          ↓
student.id = 999
```

Final value:

```javascript
999
```

---

# With Symbol

```javascript
let student = {
    name: "John"
};

let id1 = Symbol("id");
let id2 = Symbol("id");

// First code
student[id1] = 101;

// Another code
student[id2] = 999;

console.log(student[id1]);
console.log(student[id2]);
```

## Output

```javascript
101
999
```

## Explanation

Although both Symbols have the description `"id"`,

```javascript
Symbol("id") !== Symbol("id")
```

Therefore,

```javascript
student[id1]
```

and

```javascript
student[id2]
```

are **two different properties**.

Nothing gets overwritten.

---

# Real-World Example: Student Admission ID vs Library ID

Imagine a student has:

- **Admission ID**
- **Library ID**

Both developers accidentally use the same property name `"id"`.

---

## Without Symbol

```javascript
let admissionId = "id";
let libraryId = "id";

let student = {};

student[admissionId] = "ADM101";
student[libraryId] = "LIB500";

console.log(student);
```

## Output

```javascript
{
    id: "LIB500"
}
```

## Why?

Both variables contain the same string.

```javascript
admissionId --> "id"
libraryId   --> "id"
```

So these two statements are actually the same:

```javascript
student["id"] = "ADM101";

student["id"] = "LIB500";
```

The second one **overwrites** the first.

Final object:

```javascript
{
    id: "LIB500"
}
```

The Admission ID is lost.

---

## With Symbol

```javascript
let admissionId = Symbol("id");
let libraryId = Symbol("id");

let student = {};

student[admissionId] = "ADM101";
student[libraryId] = "LIB500";

console.log(student[admissionId]);
console.log(student[libraryId]);
console.log(student);
```

## Output

```javascript
ADM101
LIB500
{
    [Symbol(id)]: "ADM101",
    [Symbol(id)]: "LIB500"
}
```

## Why?

Although both Symbols have the same description,

```javascript
Symbol("id") !== Symbol("id")
```

So:

```javascript
student[admissionId]
```

and

```javascript
student[libraryId]
```

are completely different properties.

Nothing gets overwritten.

