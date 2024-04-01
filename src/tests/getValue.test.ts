import { cleanup } from '@testing-library/react';
import { getValue } from '../samples/strings/getValue';

describe('code sample tests', () => {
  afterEach(cleanup);
  
  it('should get number correctly', () => {
    const value = getValue('alex');
    expect(value).toEqual('alex');
  });
});
