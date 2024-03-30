import { cleanup } from '@testing-library/react';
import { findPalindromes } from '../samples/arrays/findPolindromes';

describe('code sample tests', () => {
  afterEach(cleanup);
  
  it('should get missing number correctly', () => {
    const missingNumber = findPalindromes('poppopo');
    expect(missingNumber).toEqual(['pop', 'poppop', 'oppo', 'pp', 'pop', 'opo']);
  });
});
