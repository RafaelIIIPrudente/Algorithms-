import { countingSort } from "../number1/src/countingSort";

describe('counting sort', () => {
  it('counting sort', () => {
    const value = countingSort([1,2,54,7,8,15,4]);
    expect(value).toEqual([1,2,4,7,8,15,54]);
  })
})