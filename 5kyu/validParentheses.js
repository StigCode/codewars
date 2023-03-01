// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
// Examples

// "()"              =>  true
// ")(()))"          =>  false
// "("               =>  false
// "(())((()())())"  =>  true

// Constraints

// 0 <= input.length <= 100

// MY CODE

function validParentheses(parens) {
  const newStr = parens.replace(/\(\)/, "");
  if (newStr.length === 0) return true;
  if (parens.length === newStr.length) return false;

  return validParentheses(newStr);
}
