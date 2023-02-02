// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.

// MY CODE

function positiveSum(arr) {
  return arr.reduce((prev, curr) => {
    if (curr > 0) return prev + curr;
    return prev;
  }, 0);
}
