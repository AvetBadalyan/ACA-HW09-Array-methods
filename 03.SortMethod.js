/* Create a function that takes an array of numbers arr, a string str
 and return an array of numbers as per the following rules:
 - "Asc" returns a sorted array in ascending order.
 - "Desc" returns a sorted array in descending order.
*/
let arr1 = [1, 2, 3, 4];
let arr2 = [7, 8, 11, 66];
let sortedArr = [];
function sortBy(arr, rule) {
  if (rule === "Asc") {
    sortedArr.push(...arr);
    sortedArr.sort(function (a, b) {
      return a - b;
    });
  } else if (rule === "Desc") {
    sortedArr.push(...arr);
    sortedArr.sort(function (a, b) {
      return b - a;
    });
  }

  return sortedArr;
}

console.log(sortBy(arr1, "Asc"));
