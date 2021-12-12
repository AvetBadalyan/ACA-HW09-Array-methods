// REDUCE IMPLEMENTATION
let arr = [2, 4, 6, 8, 10];

function sum(acml, current) {
  return acml + current;
}

function fakeReduce(arr, sum) {
  if (arr.length === 1) {
    return arr[0];
  }

  let reducedArr = [];

  reducedArr.push(sum(arr[0], arr[1]));

  for (let i = 2; i < arr.length; i++) {
    reducedArr.push(arr[i]);
  }

  return fakeReduce(reducedArr, sum);
}

// for test, real Reduce
console.log(
  arr.reduce((acml, current) => {
    return acml + current;
  })
);

// fake reduce
console.log(fakeReduce(arr, sum));
