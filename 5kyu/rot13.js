// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// MY CODE

function rot13(message) {
  function rotate(letter) {
    let lowerLetter = letter.toLowerCase();
    let pos = lowerLetter.charCodeAt(0);

    pos = pos + 13 > 122 ? 96 + (pos + 13 - 122) : pos + 13;

    if (lowerLetter === letter) return String.fromCharCode(pos);
    return String.fromCharCode(pos - 32);
  }

  return message
    .split("")
    .map((el) => {
      if (el.match(/[a-z]/gi)) return rotate(el);
      return el;
    })
    .join("");
}
