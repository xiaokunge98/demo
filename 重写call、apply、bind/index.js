// 1、call支持多个个参数，第一个为修改的指向对象，其余为参数,使用call是会立即执行函数的
Function.prototype.myCall = function (obj, ...args) {
  obj.fn = this;
  obj.fn(...args);
  obj.fn && delete obj.fn;
};
// 2、apply支持两个参数，第一个为修改的指向对象，第二个为数组参数
Function.prototype.myApply = function (obj, arr) {
  console.log(arr instanceof Array);
  if (!(arr instanceof Array)) throw Error("第二个参数为数组！");
  obj.fn = this;
  obj.fn(arr);
  obj.fn && delete obj.fn;
};
// 3、bind支持对个参数，第一个为修改对象指向，其余为参数，且返回的参数也支持参数
Function.prototype.myBind = function (obj, ...args) {
  obj.fn = this;
  return function (...param) {
    let res = obj.fn(...args, ...param);
    if (res) return res;
    return "没有返回值！";
  };
};
let obj = {
  id: 0,
  name: "xiekunsheng",
  age: 23,
};
function newInfo() {
  console.log(this);
  console.log(arguments);
  let paramList = [...arguments];
  paramList.forEach((item, index) => {
    if (item == "a") return;
    console.log(item);
  });
  return paramList;
}
let otherObj = {
  id: 1,
  name: "wanziyang",
  age: 23,
};
let res = newInfo.myBind(otherObj, "a", "b");
console.log(res({ name: "copy" }));
// newInfo();
// console.log(otherObj);
