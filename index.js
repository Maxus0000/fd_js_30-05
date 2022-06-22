//константная

const arr = [5, 3, 6, 7, 2, 9, 8, 1, 6];

console.log(arr[arr.length - 1]);

// логарифмическая

const arrSort = [2, 3, 5, 6, 1, 9, 8, 7];
const binarySearch = (arr, key) => {
  let start = 0;
  let end = arr.length - 1;
  let middle;
  while (start <= end) {
    middle = Math.round((start + end) / 2);
    if (arr[middle] === key) {
      return middle;
    }
    if (arr[middle] < key) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

console.log(binarySearch(arrSort,7 ));

// линейная

const linearSearch = (arr, key) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
};

console.log(linearSearch(arr, 4));

// квадратичная

const createMultipleTable = (limit = 10) => {
  const table = [];
  for (let i = 1; i <= limit; i++) {
    for (let j = 1; j <= limit; j++) {
      table.push("${i}*${j}=${i*j}");
    }
  }
  return { table: table, length: table.length };
};
console.log(createMultipleTable(30));
