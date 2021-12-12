// 1. Given an array, return a new array that only includes the numbers.
const arr1 = [1, 2, "a", true, {}, undefined, 55, false, "hi", null, 166, NaN];
let filteredArr = [];

function filterred(arr) {
  for (i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}
console.log(filterred(arr1));

// 2. Write a function which remove users with language equals to 'ru'.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
  },
];

let filteredArr2 = [];
function filterUsers(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].lang !== "ru") {
      filteredArr2.push(arr[i]);
    }
  }
  return filteredArr2;
}

console.log(filterUsers(users));

// 3. Write a function which filters object by field.

const users2 = [
  {
    username: "Yuri Gagarin",
    lang: "ru",
    isAstronaut: true,
  },
  {
    username: "Nil Armstrong",
    lang: "ENG",
    isAstronaut: true,
  },
  {
    username: "Elon Musk",
    isAstronaut: false,
  },
];

let filteredArr3 = [];

function filterByField(arr) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i].isAstronaut === true) {
      filteredArr3.push(arr[i]);
    }
  }
  return filteredArr3;
}
console.log(filterByField(users2));
