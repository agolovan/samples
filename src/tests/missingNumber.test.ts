import { cleanup } from '@testing-library/react';
import { findMissingNumber, findMissingNumberUsingTotalSum } from '../samples/arrays/missingNumber';

describe('code sample tests', () => {
  afterEach(cleanup);
  
  it('should get missing number correctly', () => {
    const missingNumber = findMissingNumber([3, 7, 1, 2, 8, 4, 5]);
    expect(missingNumber).toEqual(6);
  });

  it('should get missing number using total sum correctly', () => {
    const missingNumber = findMissingNumberUsingTotalSum([3, 7, 1, 2, 8, 4, 5]);
    expect(missingNumber).toEqual(6);
  });

});