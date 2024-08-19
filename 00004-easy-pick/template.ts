type MyPick<T, K extends keyof T> = {
  [P in K]: T[P];
};

// js
function myPick(todo, keys) {
  const obj = {};
  keys.forEach((key) => {
    if (key in todo) {
      obj[key] = todo[key];
    }
  });
  return obj;
}

// 1.返回一个对象
// 2.遍历forEach
// 3.todo[key] 取值
// 4.看看key存不存在
