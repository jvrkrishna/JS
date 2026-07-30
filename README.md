## Without Symbol

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

### Output

```javascript
999
```

### Explanation

Both pieces of code use the property name `"id"`.

The second assignment **overwrites** the first value.

```
student.id = 101
          ↓
student.id = 999
```

Final value:

```javascript
999
```



## With Symbol

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

### Output

```javascript
101
999
```

### Explanation

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