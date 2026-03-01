import { merge } from '../src/merge'

describe('merge function', () => {
  it('should merge and sort correctly', () => {
    const result = merge(
      [9, 7, 5, 3],
      [0, 2, 4],
      [1, 6, 8]
    );

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });

  it('should handle empty arrays', () => {
    const result = merge([], [], []);
    expect(result).toEqual([]);
  });

  it('should handle one empty collection', () => {
    const result = merge(
      [5, 4, 3],
      [],
      [1, 2]
    );

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle duplicates', () => {
    const result = merge(
      [5, 3, 1],
      [1, 2, 3],
      [2, 4]
    );

    expect(result).toEqual([1, 1, 2, 2, 3, 3, 4, 5]);
  });

  it('should handle negative numbers', () => {
    const result = merge(
      [5, 0, -5],
      [-10, -2],
      [1, 3]
    );

    expect(result).toEqual([-10, -5, -2, 0, 1, 3, 5]);
  });
});