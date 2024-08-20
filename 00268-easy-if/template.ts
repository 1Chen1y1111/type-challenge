type If<C extends boolean, T, F> = C extends true ? T : F;

/**
 * js实现
 */
function _IF(C, T, F) {
  if (C === null) return;
  if (C) {
    return T;
  } else {
    return F;
  }
}
