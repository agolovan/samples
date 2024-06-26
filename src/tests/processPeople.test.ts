import { cleanup } from '@testing-library/react';
import { processPeople } from '../samples/tree/processPeople';

describe('code sample tests', () => {
  afterEach(cleanup);
  
  it('should all get all people and level for each person', () => {
    const people = processPeople();
    expect(people).toEqual(
      [
        {"name":"alex","level":1},
        {"name":"mila","level":2},
        {"name":"mitchel","level":3},
        {"name":"ira","level":2},
        {"name":"eugene","level":3},
        {"name":"jacob","level":4},
        {"name":"jesse","level":4}]
      );
  });
});
