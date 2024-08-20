type MyAwaited<T> = T extends Promise<infer U>
  ? MyAwaited<U>
  : T extends { then: (onfulfilled: (args: infer U) => any) => any }
  ? MyAwaited<U>
  : T;
