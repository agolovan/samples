import { cleanup } from '@testing-library/react';
import { reverseWords } from '../samples/strings/reverseWords';
import { reverseWords2} from '../samples/strings/reverseWords2';

describe('code sample tests', () => {
  afterEach(cleanup);
  
  it('should rewerse words correctly', () => {
    const output = reverseWords('This is Alex Golovan');
    expect(output).toEqual('Golovan Alex is This');
  });

  it('should rewerse words correctly - second version', () => {
    const output = reverseWords2('This is Alex Golovan');
    expect(output).toEqual('Golovan Alex is This');
  });
});