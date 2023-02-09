//Lerado and Prudente
import { countingSort } from "../src/countingSort";
import { algorithm1 } from "../Lerado_Prudente_2/algorithm1";
import { algorithm2 } from "../Lerado_Prudente_3/algorithm2";

describe('counting sort', () => {
  it('counting sort', () => {
    const value = countingSort([1, 2, 54, 7, 8, 15, 4]);
    expect(value).toEqual([1, 2, 4, 7, 8, 15, 54]);
  });
});

describe('algorithm1', () => {
  it('algorithm1', () => {
    const value = algorithm1(10);
    expect(value).toEqual([2,3,5,7]);
  });
});

describe('algorithm2', () => {
  it('algorithm2', () => {
    const value = algorithm2(10);
    expect(value).toEqual([2,3,5,7]);
  });
});
