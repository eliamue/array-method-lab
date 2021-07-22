
export const mapArray = (arr, callback) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    newArr[i] = callback(item);
  }
  return newArr;  
};

export const filterArray = (arr, callback) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if(callback(item)) {
      newArr = [...newArr, item];
    }
  }
  return newArr;  
};

export const findIndex = (arr, callback) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    const item = callback(arr[i]);
    if(item) {
      newArr = [...newArr, i];
    }
  }
  return newArr;  
};

export const everyArray = (arr, callback) => {
  let newArr = [];
  for(let i = 0; i < arr.length; i++) {
    const item = callback(arr[i]);
    if(item) {
      newArr = [...newArr, arr[i]];
      return true;
    } else {
      return false;
    }
  }
};