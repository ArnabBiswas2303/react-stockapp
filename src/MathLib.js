const locationToInsertIn = (array, value) => {
  if (array.length === 0) {
    return 0;
  }

  let low = 0,
    high = array.length;

  while (low < high) {
    let mid = (low + high) >>> 1; // need to understand low + high
    array[mid].volume < value ? (low = mid + 1) : (high = mid);
  }
  return low;
};

export const insertInArray = (array, value) => {
  const arr = [...array];
  arr.splice(locationToInsertIn(arr, value.volume), 0, value);
  return arr;
};

export const randomNumInRange = (min, max) => Math.random() * (max - min) + min;
