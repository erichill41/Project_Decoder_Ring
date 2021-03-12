// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  // console.log(alphabet);

  function enc(input, shift) {
    let result = '';
    input.toLowerCase().split("").forEach(letter => {
      const index = alphabet.findIndex((element) => letter === element);
      if (index !== -1) { 
        const shiftIndex = (index + shift) % 26;
        letter = alphabet[shiftIndex];
      }

      result += letter;
    });

    return result;
  }

  function decode(input, shift) {
    let result = '';
    input.toLowerCase().split("").forEach(letter => {
      const index = alphabet.findIndex((element) => letter === element);
      if (index !== -1) { 
        const shiftResult = index-shift;
        const shiftIndex = shiftResult >= 0 ? shiftResult : 26 + shiftResult;

        letter = alphabet[shiftIndex];
      }
  // checking below if there is a negative shift, if so try to wrap around left side
//       if (shift < 0) {
//         const negShift = (index - shift) % 26;
//         letter = alphabet[negShift];
//       }
      result += letter;
    });

    return result;
  }

  function caesar(input, shift = 0, encode = true) {
    // return false early if any below conditions are met
    if (shift === 0 || shift < -25 || shift > 25) return false;

    const result = encode? enc(input, shift): decode(input, shift);

    return result;
  };

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;