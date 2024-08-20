type Length<T extends readonly any[]> = T["length"];

/**
 * js实现
 */
function _Length(arr) {
  if (!Array.isArray(arr)) return;
  return arr.length;
}
