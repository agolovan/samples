import { cleanup } from '@testing-library/react';
import { findLongestPolindrom } from '../samples/palindromes/findLongestPolindrom';

describe('code sample tests', () => {
  afterEach(cleanup);
  
  it('should get the longest polindrome from the string', () => {
    const longestPolindrome = findLongestPolindrom('babbad');
    expect(longestPolindrome).toEqual('abba');
  });
});
