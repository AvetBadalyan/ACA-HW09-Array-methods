// NEED TO FIX BUGS
//Slice method implementation
let arr = [0, 1, 2, 3, 4, 5];

function fakeSlice(arr, beginning, end) {
  let slicedArr = [];
  if (end === undefined) {
    end = arr.length;
  }
  if (typeof start === "number" && typeof end === "number") {
    for (let i = beginning; i < end; i++) {
      slicedArr.push(arr[i]);
    }
    return slicedArr;
  } else if (isNaN(beginning) || isNaN(end)) {
    console.log(` the input is not a number`);
  }
  return slicedArr;
}

console.log(arr.slice(1, 4));
console.log(fakeSlice(arr, 1, 4));

console.log(arr.slice(1));
console.log(fakeSlice(arr, 1));

console.log(arr.slice(1, "Avet"));
console.log(fakeSlice(arr, 1, "Avet"));
