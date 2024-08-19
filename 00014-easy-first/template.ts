type First<T extends any[]> = T extends [] ? never : T[0];

type First2<T extends any[]> = T["length"] extends 0 ? never : T[0];

type First3<T extends any[]> = T[0] extends T[number] ? T[0] : never;

type First4<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First
  : never;

/**
 * js实现
 */
function first(arr) {
  if (arr.length === 0) return "never";
  return arr[0];

  /*   const [first, ...rest] = arr;
  return first ? first : "never"; */
}
