export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const arr1 = [...collection_1].reverse();
  const arr2 = collection_2;
  const arr3 = collection_3;

  const merged: number[] = [];

  let i = 0;
  let j = 0;
  let k = 0;

  while (i < arr1.length || j < arr2.length || k < arr3.length) {
    const val1 = i < arr1.length ? arr1[i] : Infinity;
    const val2 = j < arr2.length ? arr2[j] : Infinity;
    const val3 = k < arr3.length ? arr3[k] : Infinity;

    const min = Math.min(val1, val2, val3);

    merged.push(min);

    if (min === val1) {
      i++;
    } else if (min === val2) {
      j++;
    } else {
      k++;
    }
  }

  return merged;
}