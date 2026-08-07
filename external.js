//Js to json
let student = {
    name: "John",
    age: 20
};

let jsonData = JSON.stringify(student);
console.log(jsonData);

//json to js
let jsonData = '{"name":"John","age":20}';
let student = JSON.parse(jsonData);
console.log(student.name);


//local storage
localStorage.setItem("name","John");
let a=localStorage.getItem("name");
console.log(a);


//js to json with localstorage
let student = {
    name: "John",
    age: 20
};

localStorage.setItem("student",JSON.stringify(student));

//json to js with local storage
let a=JSON.parse(localStorage.getItem(student));
console.log(a.name);


//Form Example
<body>
<input type="text" id="username" placeholder="Enter your name">
<button type="button" onclick="saveData()">Save</button>
<button type="button" onclick="showData()">Show</button>
<button type="button" onclick="removeData()">Remove</button>

<br><br>

<div id="output"></div>

<script>
function saveData() {
    let name = document.getElementById("username").value;

    localStorage.setItem("username", name);
    document.getElementById("output").innerHTML = "Data Saved Successfully!";
}

function showData() {
    let name = localStorage.getItem("username");

    if (name !== null) {
        document.getElementById("output").innerHTML = "Stored Name: " + name;
}
}

function removeData() {
    localStorage.removeItem("username");
    document.getElementById("output").innerHTML = "Data Removed Successfully!";
}
</script>

</body>