// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// MY CODE

function solution(str) {
  //   let revString = "";
  //   for (let i = str.length - 1; i > -1; i--) {
  //     revString += str[i];
  //   }
  //   return revString;
  return str.split("").reverse().join("");
}
