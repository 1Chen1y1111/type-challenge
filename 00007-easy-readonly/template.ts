type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

/**
 * js实现
 */
function readOnly(obj) {
  const res = {};
  for (const key in obj) {
    res["readOnly " + key] = obj[key];
  }
  return res;
}
