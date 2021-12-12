//the implementation of MAP method
let array = [2, 4, 6, 8, 10];

function fakeMap(array, fun) {
  let mappedArr = [];
  for (let i = 0; i < array.length; i++) {
    mappedArr.push(fun(array[i]));
  }

  return mappedArr;
}

let map = fakeMap(array, (value) => {
  return value * 10;
});

console.log(map);
