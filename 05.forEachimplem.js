// Implementation of forEach.

let arr = [2, 4, 6, 8, 10];

const fakeForEach = function (array, fun) {
  for (let i = 0; i < array.length; i++) {
    fun(arr[i], i, arr);
  }
};

fakeForEach(arr, (value, index, arr) => {
  console.log(
    ` in the array ${arr} for the value ${value} the index is ${index}  `
  );
});
