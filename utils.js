
export const mapArray = (arr, callback) => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    newArr[i] = callback(item);

  }
  return newArr;  
};


