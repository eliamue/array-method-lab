import { mapArray, filterArray } from './utils';

describe('map array method', () => {
  it('maps array with callback to multiply each number in the array by 2', async () => {
    const callback = item => item * 2;
    const array = [1, 3, 5, 7];
    const expected = [2, 6, 10, 14];
    const actual = mapArray(array, callback);

    expect(expected).toEqual(actual);
  });

});

describe('filter array method', () => {
  it('filters array with callback to ', async () => {
    const callback = item => item < 7;
    const array = [1, 3, 5, 7];
    const expected = [1, 3, 5];
    const actual = filterArray(array, callback);

    expect(expected).toEqual(actual);
  });

});
