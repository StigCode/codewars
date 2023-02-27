// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// MY CODE

function moveZeros(arr) {
  return arr
    .reduce(
      (accumulator, curr) => {
        if (curr === 0) return [[...accumulator[0]], [...accumulator[1], curr]];
        return [[...accumulator[0], curr], [...accumulator[1]]];
      },
      [[], []]
    )
    .flat();
}
