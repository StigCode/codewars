// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
// Examples

// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))(("

// Notes

// Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

// MY CODE

function duplicateEncode(word) {
  let resultStr = "";
  word = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    const start = word.slice(0, i);
    const end = word.slice(i + 1);
    const letter = word[i];
    if (start.includes(letter) || end.includes(letter)) {
      resultStr += ")";
    } else {
      resultStr += "(";
    }
  }

  return resultStr;
}
