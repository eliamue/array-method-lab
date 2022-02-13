import { mapArray, filterArray, findIndex, everyArray, reduceArray, expo } from './utils';

describe('map array method', () => {
  it('maps array with callback to multiply each number in the array by 2', async () => {
    const callback = item => item * 2;
    const array = [1, 3, 5, 7];
    const expected = [2, 6, 10, 14];
    const actual = mapArray(array, callback);

    expect(expected).toEqual(actual);
  });

});

describe('exponential method', () => {
  it('exponential', async () => {
    const a = 3;
    const b = 4;
    const expected = expo(a, b);
    const actual = 81;

    expect(expected).toEqual(actual);
  });

});

describe('filter array method', () => {
  it('filters into a new array with only numbers less than 7', async () => {
    const callback = item => item < 7;
    const array = [1, 3, 5, 7];
    const expected = [1, 3, 5];
    const actual = filterArray(array, callback);

    expect(expected).toEqual(actual);
  });

});

describe('findIndex method', () => {
  it('array with callback to find the index of the first item that is even', async () => {
    const callback = item => (item % 2 === 0);
    const array = [1, 3, 6, 13, 15];
    const expected = [2];
    const actual = findIndex(array, callback);

    expect(expected).toEqual(actual);
  });
});

describe('every method', () => {
  it('returns false if any item is not even', async () => {
    const callback = item => (item % 2 === 0);
    const array = [1, 3, 6, 12, 15];
    const expected = false;
    const actual = everyArray(array, callback);

    expect(expected).toEqual(actual);
  });

  it('returns true if every item is even', async () => {
    const callback = item => (item % 2 === 0);
    const array = [2, 4, 6, 12, 16];
    const expected = true;
    const actual = everyArray(array, callback);

    expect(expected).toEqual(actual);
  });
});

describe('reduce method', () => {
  it('reduce stuff idk', async () => {
    const callback = (newArr, item) => newArr + item;
    const array = [1, 3, 6, 7, 9];
    const expected = 26;
    const actual = reduceArray(array, callback);

    expect(expected).toEqual(actual);
  });
});
