//数组去重1
let array1 = [1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 8, 9, 5, 3, 4, 5, 6, 4, 2];
function set(array) {
  arr = [];
  //遍历并对比新数组中是否存在
  for (let i of array) {
    let bool = arr.some(value => i == value);
    if (!bool) {
      arr.push(i);
    }
  }
  return arr;
}
console.log(set(array1));

//数组去重2
let array2 = [1, 2, 3, 4, 5, 1, 2, 3, 6, 7, 8, 9, 5, 3, 4, 5, 6, 4, 2];
function set2(array) {
  let arr = array.sort();
  let newarr = [];
  newarr.push(arr[0]);
  for (let i = 1; i < array.length; i++) {
    if (arr[i] == arr[i - 1]) {
      continue;
    } else {
      newarr.push(arr[i]);
    }
  }

  return newarr;
}
console.log(set2(array2));

//最大值
console.log(Math.max(...[1, 2, 3, 4, 5]));

//排序颠倒
let array3 = [1, 2, 3, 4, 5];
function reverse(array) {
  let arr = [];
  for (let i = 0; i < array.length; i++) {
    arr[array.length - 1 - i] = array[i];
  }
  return arr;
}
console.log(reverse(array3));
