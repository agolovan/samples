import { cleanup } from '@testing-library/react';
import { rotateArray } from '../samples/arrays/rotations';

describe('code sample tests', () => {
  afterEach(cleanup);
  it('should rotate array correctly', () => {
    const rotatedArray = rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
    expect(rotatedArray).toEqual([5, 6, 7, 1, 2, 3, 4]);
  });
});


