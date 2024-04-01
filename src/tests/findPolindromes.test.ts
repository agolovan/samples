import { cleanup } from '@testing-library/react';
import { findPalindromes } from '../samples/palindromes/findPolindromes';

describe('code sample tests', () => {
  afterEach(cleanup);
  
  it('should get all polindromes from a string correctly', () => {
    const polindromes = findPalindromes('poppopo');
    expect(polindromes).toEqual(['pop', 'poppop', 'oppo', 'pp', 'pop', 'opo']);
  });
});
