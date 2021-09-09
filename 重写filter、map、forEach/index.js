// 1、filter方法,不改变原数组，返回新的数组。
Array.prototype.myFilter = function (callback) {
  var arr = JSON.parse(JSON.stringify(this));
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i, arr);
    if (res) {
      newArr.push(arr[i]);
    }
  }
  if (newArr) return newArr;
  return [];
};
let arr = [
  { id: 0, name: "谢昆胜", age: 23 },
  { id: 1, name: "万紫阳", age: 23 },
  { id: 2, name: "吴广华", age: 22 },
  { id: 3, name: "潘涛勇", age: 23 },
];
// 2、map方法不改变原数组，返回经过处理的原数组长度的新数组
Array.prototype.myMap = function (callback) {
  let arr = JSON.parse(JSON.stringify(this));
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback) {
      let newItem = callback(arr[i], i, arr);
      newItem && newArr.push(newItem);
    } else return undefined;
  }
  return newArr;
};
// 3、forEach会改变原来的数组
Array.prototype.myForEach = function (callback) {
  if (!this instanceof Array) throw new Error("该引用方法为数组方法");
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};
let obj = { id: 0, name: "谢昆胜", age: 23 };
let res = arr.myForEach((item, index, list) => {
  //   console.log(item);
  //   item.age = item.age * 2;
  //   return item;
  item.age = item.age * 2;
});
// let res2 = arr.forEach((item, index, list) => {
//   console.log(item);
//   item.age = item.age * 2;
// });
console.log(res);
console.log(arr);
