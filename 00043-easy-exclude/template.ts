type MyExclude<T, U> = T extends U ? never : T;

type t1 = "a" | "b" | "c";
type t2 = "a";
type t3 = MyExclude<t1, t2>;

/**
 * js实现
 * @param T Array ['a','b','c']
 * @param U Array ['a']
 */
function _MyExclude(T, U) {
  const res = [];
  T.forEach((el) => {
    let bool = false;

    U.forEach((item) => {
      if (el === item) {
        bool = true;
      }
    });

    if (!bool) {
      res.push(el);
    }
  });

  return res;
}
