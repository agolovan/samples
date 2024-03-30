import { cleanup } from '@testing-library/react';
import { getFactorial } from '../samples/factorial';

describe('code sample tests', () => {
  afterEach(cleanup);
  
  it('should get factorial correctly', () => {
    const number = getFactorial(5);
    expect(number).toEqual(120);
  });
});
