function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);           // 1
getFirstElement<string>(["a", "b", "c"]);     // "a"
getFirstElement<boolean>([true, false, true]); // true

//  TypeScript не дозволяє передати масив змішаних типів без відповідного типу.

// getFirstElement<number>([1, "a", true]);
// getFirstElement<string>([1, 2, 3]); // Error