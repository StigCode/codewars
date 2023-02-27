// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
// Examples

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

// MY CODE

function pigIt(str) {
  return str
    .split(" ")
    .map((el) => {
      if (el.match(/[a-z]/i)) {
        return `${el.slice(1)}${el[0]}ay`;
      }
      return el;
    })
    .join(" ");
}
