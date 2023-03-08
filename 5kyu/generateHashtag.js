// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// MY CODE

function generateHashtag(str) {
  if (str.replace(/\s/g, "").length) {
    const hashtagged = "#".concat(
      str
        .replace(/\s+/g, " ")
        .split(" ")
        .map((el) => el[0].toUpperCase().concat(el.slice(1)))
        .join("")
    );
    return hashtagged.length > 1 && hashtagged.length < 141
      ? hashtagged
      : false;
  }

  return false;
}
