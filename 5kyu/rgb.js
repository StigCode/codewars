function rgb(r, g, b) {
  const hexEquivalent = {
    0: "0",
    1: "1",
    2: "2",
    3: "3",
    4: "4",
    5: "5",
    6: "6",
    7: "7",
    8: "8",
    9: "9",
    10: "A",
    11: "B",
    12: "C",
    13: "D",
    14: "E",
    15: "F",
  };

  function convert(num) {
    num = num < 0 ? 0 : num;
    num = num > 255 ? 255 : num;

    const first = Math.floor(num / 16);
    const second = Math.floor(num % 16);

    return `${hexEquivalent[first]}${hexEquivalent[second]}`;
  }

  return `${convert(r)}${convert(g)}${convert(b)}`;
}
