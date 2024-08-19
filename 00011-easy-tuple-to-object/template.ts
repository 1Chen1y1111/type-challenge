type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [P in T[number]]: P;
};

/**
 * js实现
 */
function tupleToObject(arr) {
  const res = {};

  arr.forEach((item) => {
    res[item] = item;
  });

  return res;
}
