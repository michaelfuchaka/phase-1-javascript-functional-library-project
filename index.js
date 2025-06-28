// Helper to get array of values from collection (array or object)
function getValues(collection) {
  return Array.isArray(collection) ? collection : Object.values(collection);
}

// Collection Functions
function myEach(collection, callback) {
  const values = getValues(collection);
  for (let i = 0; i < values.length; i++) {
    callback(values[i]);
  }
  return collection;
}

function myMap(collection, callback) {
  const values = getValues(collection);
  const result = [];
  for (let i = 0; i < values.length; i++) {
    result.push(callback(values[i]));
  }
  return result;
}

function myReduce(collection, callback, acc) {
  const values = getValues(collection);
  let startIdx = 0;
  if (acc === undefined) {
    acc = values[0];
    startIdx = 1;
  }
  for (let i = startIdx; i < values.length; i++) {
    acc = callback(acc, values[i], collection);
  }
  return acc;
}

function myFind(collection, predicate) {
  const values = getValues(collection);
  for (let val of values) {
    if (predicate(val)) return val;
  }
  return undefined;
}

function myFilter(collection, predicate) {
  const values = getValues(collection);
  const result = [];
  for (let val of values) {
    if (predicate(val)) result.push(val);
  }
  return result;
}

function mySize(collection) {
  return getValues(collection).length;
}

// Array Functions
function myFirst(array, n = 1) {
  return n === 1 ? array[0] : array.slice(0, n);
}

function myLast(array, n = 1) {
  return n === 1 ? array[array.length - 1] : array.slice(-n);
}

// BONUS: mySortBy
function mySortBy(array, callback) {
  return [...array].sort((a, b) => {
    const aVal = callback(a);
    const bVal = callback(b);
    return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
  });
}

// BONUS: myFlatten
function myFlatten(array, shallow = false, newArr = []) {
  for (let val of array) {
    if (Array.isArray(val)) {
      shallow ? newArr.push(...val) : myFlatten(val, false, newArr);
    } else {
      newArr.push(val);
    }
  }
  return newArr;
}

// Object Functions
function myKeys(object) {
  return Object.keys(object);
}

function myValues(object) {
  return Object.values(object);
}
