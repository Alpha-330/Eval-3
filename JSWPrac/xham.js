// Custom implementations of array and string methods

// Custom splice function
function customSplice(array, start, deleteCount, ...items) {
  let result = [];
  // Remove the specified elements
  for (let i = 0; i < deleteCount; i++) {
    result.push(array[start + i]);
  }
  // Add new elements
  let newArray = array.slice(0, start).concat(items).concat(array.slice(start + deleteCount));
  for (let i = 0; i < newArray.length; i++) {
    array[i] = newArray[i];
  }
  array.length = newArray.length;
  return result;
}

// Custom slice function
function customSlice(array, start = 0, end = array.length) {
  let result = [];
  for (let i = start; i < end && i < array.length; i++) {
    result.push(array[i]);
  }
  return result;
}

// Custom includes function
function customIncludes(array, value) {
  for (let element of array) {
    if (element === value) return true;
  }
  return false;
}

// Custom toLowerCase function
function customToLowerCase(string) {
  let result = "";
  for (let char of string) {
    if (char >= 'A' && char <= 'Z') {
      result += String.fromCharCode(char.charCodeAt(0) + 32);
    } else {
      result += char;
    }
  }
  return result;
}

// Custom toUpperCase function
function customToUpperCase(string) {
  let result = "";
  for (let char of string) {
    if (char >= 'a' && char <= 'z') {
      result += String.fromCharCode(char.charCodeAt(0) - 32);
    } else {
      result += char;
    }
  }
  return result;
}

// Custom push function
function customPush(array, ...items) {
  let length = array.length;
  for (let i = 0; i < items.length; i++) {
    array[length + i] = items[i];
  }
  return array.length;
}

// Custom pop function
function customPop(array) {
  if (array.length === 0) return undefined;
  let lastElement = array[array.length - 1];
  array.length = array.length - 1;
  return lastElement;
}

// Test the functions
let arr = [1, 2, 3, 4, 5];

// Testing customSplice
console.log("customSplice:", customSplice(arr, 1, 2, 8, 9)); // [2, 3]
console.log("Array after customSplice:", arr); // [1, 8, 9, 4, 5]

// Testing customSlice
console.log("customSlice:", customSlice(arr, 1, 3)); // [8, 9]

// Testing customIncludes
console.log("customIncludes:", customIncludes(arr, 91)); // true

// Testing customToLowerCase
console.log("customToLowerCase:", customToLowerCase("HELLO")); // "hello"

// Testing customToUpperCase
console.log("customToUpperCase:", customToUpperCase("hello")); // "HELLO"

// Testing customPush
console.log("customPush:", customPush(arr, 6, 7)); // 7
console.log("Array after customPush:", arr); // [1, 8, 9, 4, 5, 6, 7]

// Testing customPop
console.log("customPop:", customPop(arr)); // 7
console.log("Array after customPop:", arr); // [1, 8, 9, 4, 5, 6]
