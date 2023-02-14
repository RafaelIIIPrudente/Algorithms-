import { binarySearch } from "../binary";

describe('counting sort', () => {
  it('counting sort', () => {
    const value = binarySearch([1,2,3,4,5,6,7,8,9,10], 10);
    expect(value).toEqual(9);
  });
});