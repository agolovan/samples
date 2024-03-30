import { cleanup } from '@testing-library/react';
import { processPosts } from '../samples/posts';

describe('code sample tests', () => {
  afterEach(cleanup);
  it('should return corrected number of linked comments for valid post id', () => {
    const totals = processPosts(1);
    expect(totals).toEqual(9);
  });

  it('should return corrected number of linked comments for another valid post id', () => {
    const totals = processPosts(5);
    expect(totals).toEqual(7);
  });

  it('should return corrected number of comments for valid post id with no links', () => {
    const totals = processPosts(8);
    expect(totals).toEqual(1);
  });

  it('should return corrected number of linked comments for invalid post id', () => {
    const totals = processPosts(0);
    expect(totals).toEqual(0);
  });
});

