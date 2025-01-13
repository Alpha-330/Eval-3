let array = []
function customPush(...args){
  array = [...array,...args]
  return array.toUpper
}

console.log(customPush("lupin"))
console.log(customPush("Akash"))
console.log(customPush("Piyush"))
console.log(customPush("Naina"))



class FunTechArray {
  constructor(arr = []) {
    this.arr = arr;
  }

  // Custom Splice: Removes, replaces, or adds elements in the array
  customSplice(start, deleteCount, ...items) {
    const removedItems = [];
    for (let i = 0; i < deleteCount; i++) {
      if (this.arr[start + i] !== undefined) {
        removedItems.push(this.arr[start + i]);
        this.arr[start + i] = undefined;
      }
    }
    this.arr = [
      ...this.arr.slice(0, start),
      ...items,
      ...this.arr.slice(start + deleteCount).filter(item => item !== undefined),
    ];
    return removedItems;
  }

  // Custom Slice: Returns a portion of the array
  customSlice(start, end) {
    const result = [];
    for (let i = start; i < (end || this.arr.length); i++) {
      if (this.arr[i] !== undefined) {
        result.push(this.arr[i]);
      }
    }
    return result;
  }

  // Custom Includes: Checks if an item exists in the array
  customIncludes(item) {
    for (let element of this.arr) {
      if (element === item) {
        return true;
      }
    }
    return false;
  }

  // Custom Push: Adds an item to the end of the array
  customPush(...items) {
    for (let item of items) {
      this.arr[this.arr.length] = item;
    }
    return this.arr.length;
  }

  // Custom Pop: Removes the last item in the array
  customPop() {
    if (this.arr.length === 0) return undefined;
    const lastItem = this.arr[this.arr.length - 1];
    this.arr.length = this.arr.length - 1;
    return lastItem;
  }
}

class FunTechString {
  constructor(str = '') {
    this.str = str;
  }

  // Custom toLowerCase: Converts the string to lowercase
  customToLowerCase() {
    let result = '';
    for (let char of this.str) {
      const code = char.charCodeAt(0);
      if (code >= 65 && code <= 90) {
        result += String.fromCharCode(code + 32);
      } else {
        result += char;
      }
    }
    return result;
  }

  // Custom toUpperCase: Converts the string to uppercase
  customToUpperCase() {
    let result = '';
    for (let char of this.str) {
      const code = char.charCodeAt(0);
      if (code >= 97 && code <= 122) {
        result += String.fromCharCode(code - 32);
      } else {
        result += char;
      }
    }
    return result;
  }
}

// Example Usage:
const myArray = new FunTechArray([1, 2, 3, 4, 5]);
console.log(myArray.customSplice(1, 2, 9, 8)); // Removes 2 items from index 1, adds 9 and 8
console.log(myArray.arr); // [1, 9, 8, 4, 5]

console.log(myArray.customSlice(1, 3)); // Gets elements from index 1 to 3 -> [9, 8]

console.log(myArray.customIncludes(4)); // Checks if 4 is in the array -> true

myArray.customPush(6, 7); // Adds 6 and 7 to the end
console.log(myArray.arr); // [1, 9, 8, 4, 5, 6, 7]

console.log(myArray.customPop()); // Removes the last item -> 7
console.log(myArray.arr); // [1, 9, 8, 4, 5, 6]

const myString = new FunTechString('Hello World');
console.log(myString.customToLowerCase()); // Converts to lowercase -> 'hello world'
console.log(myString.customToUpperCase()); // Converts to uppercase -> 'HELLO WORLD'
