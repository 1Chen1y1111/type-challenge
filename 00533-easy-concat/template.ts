type Concat<T extends readonly any[], U extends readonly any[]> = [...T, ...U];

/**
 * js实现
 */
function _Concat(T, U) {
  return [...T, ...U];
}
