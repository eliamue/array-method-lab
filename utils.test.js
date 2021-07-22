import { mapArray, filterArray, findIndex } from './utils';

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
  it('filters into a new array with only numbers less than 7', async () => {
    const callback = item => item < 7;
    const array = [1, 3, 5, 7];
    const expected = [1, 3, 5];
    const actual = filterArray(array, callback);

    expect(expected).toEqual(actual);
  });

});

describe('findIndex method', () => {
  it('array with callback to find the index of the first item that starts with the letter Z', async () => {
    const callback = item => item.startsWith('Z');
    const array = ['Teen', 'Melhissandre', 'Zoey'];
    const expected = [2];
    const actual = findIndex(array, callback);

    expect(expected).toEqual(actual);
  });

});

// describe('findIndex method', () => {
//   it('reduce', async () => {
//     const callback = item => item.startsWith('Z');
//     const array = callback(['Teen', 'Melhissandre', 'Zoey', 'Scout', 'Zuul']);
//     const expected = [2];
//     const actual = reduceArray(array);

//     expect(expected).toEqual(actual);
//   });

// });
