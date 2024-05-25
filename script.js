let simple = document.getElementById("simple");
let Name = document.getElementById("name");
let city = document.getElementById("city");
let add = document.getElementById("add");
let table = document.getElementById("table");

let input = document.getElementById("input");
let output = document.getElementById("output");

let inp = document.getElementById("btnInput");
let out = document.getElementById("btnOutput");

let cities = [
  "Faisalabad",
  "Karachi",
  "Lahore",
  "Quetta",
  "Multan",
  "Rawalpindi",
  "Kashmir",
];

simple.onclick = function () {
  let Fname = "Muhammad";
  let Lname = "Muneeb";
  let banger = "!";
  alert("Muhammad Muneeb !");
  input.value =
    "let Fname = 'Muhammad' ; let Lname = 'Muneeb' ; let banger = '!'";
  output.value = Fname + " " + Lname + " " + banger;
};

Name.onclick = function () {
  let first = prompt("Enter your Firrst Name: ");
  let last = prompt("Enter your Last Name: ");
  output.value = first + " " + last;
  input.value = "";
};

city.onclick = function () {
  output.value = "";
  for (let i = 0; i < cities.length; i++) {
    output.value += i + 1 + ")" + " " + cities[i];
  }
};

add.onclick = function () {
  let city = input.value;
  if (!city) {
    alert("Please Enter a city");
    return;
  }
  cities.push(city);
  output.value = city;
};

table.onclick = function () {
  const number = input.value;
  if (!number) {
    alert("Please Enter a Number");
    return;
  }
  const range = parseInt(prompt("Enter a range: "));
  for (let i = 1; i <= range; i++) {
    const result = i * number;
    output.value += `${number} * ${i} = ${result}`;
  }
};

inp.onclick = function () {
  input.value = "";
};

out.onclick = function () {
  output.value = "";
};
