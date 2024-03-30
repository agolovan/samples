import { cleanup } from '@testing-library/react';
import { twoIntegersSum, twoIntegersSumArrayVersion } from '../samples/arrays/twoIntegersSum';

describe('code sample tests', () => {
  afterEach(cleanup);
  
  it('should find that sum of two integers is equal to a given value', () => {
    const isSumExists = twoIntegersSum([5, 7, 1, 2, 8, 4, 3], 10);
    expect(isSumExists).toEqual(true);
  });

  it('should find that sum of two integers is not equal to a given value', () => {
    const isSumExists = twoIntegersSum([5, 7, 1, 2, 8, 4, 3], 19);
    expect(isSumExists).toEqual(false);
  });

  it('should find that sum of two integers is equal to a given value - array version', () => {
    const isSumExists = twoIntegersSumArrayVersion([5, 7, 1, 2, 8, 4, 3], 10);
    expect(isSumExists).toEqual(true);
  });

  it('should find that sum of two integers is not equal to a given value - array version', () => {
    const isSumExists = twoIntegersSumArrayVersion([5, 7, 1, 2, 8, 4, 3], 19);
    expect(isSumExists).toEqual(false);
  });
});