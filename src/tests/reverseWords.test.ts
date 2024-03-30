import { cleanup } from '@testing-library/react';
import { reverseWords } from '../samples/strings/reverseWords';

describe('code sample tests', () => {
  afterEach(cleanup);
  
  it('should rewerse words correctly', () => {
    const output = reverseWords('This is Alex Golovan');
    expect(output).toEqual('Golovan Alex is This');
  });
});