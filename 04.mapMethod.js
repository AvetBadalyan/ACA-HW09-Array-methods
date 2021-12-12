// Write a function which returns array of usernames.

const users = [
  { username: "Yuri Gagarin", lang: "ru" },
  { username: "Nil Armstrong", lang: "ENG" },
];

let userName = [];
1;
function getUserNames(arr) {
  arr.map((element) => {
    userName.push(element.username);
  });
  return userName;
}
console.log(getUserNames(users));

// 2. Write a function which returns array of lengths of user names

let userName2 = [];

function getUsernameLengths(arr) {
  arr.map((element) => {
    userName2.push(element.username.length);
  });
  return userName2;
}
console.log(getUsernameLengths(users));

// 3. Write a function which parses string integers. If it's not possible to parse, then add null
let arr = ["1", "px", "2", "34"];
let parsedStrings = [];
function parseInteger(arr) {
  arr.map((element) => {
    if (isNaN(parseInt(element))) {
      element = null;
    } else {
      parsedStrings.push(parseInt(element));
    }
  });
  return parsedStrings;
}
console.log(parseInteger(arr));
