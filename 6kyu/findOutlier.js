// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
// Examples

// [2, 4, 0, 100, 4, 11, 2602, 36]
// Should return: 11 (the only odd number)

// [160, 3, 1719, 19, 11, 13, -21]
// Should return: 160 (the only even number)

//  MY CODE

function findOutlier(integers) {
  for (let i = 0; i < integers.length; i++) {
    const curr = integers[i] % 2 === 0;
    const first = integers[0] % 2 === 0;
    const last = integers[integers.length - 1] % 2 === 0;
    if (first === curr) continue;
    if (i === integers.length - 1) return integers[integers.length - 1];
    if (first === last) return integers[i];
    return integers[0];
  }
}
