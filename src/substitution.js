// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  const regAlpha = "abcdefghijklmnopqrstuvwxyz".split("");

   function enc(input, alphabet) {
    const subAlpha = alphabet.split("");
    let result = '';
    input.toLowerCase().split("").forEach(inputLetter => {
      let conv = ' ';
      // try to find the character in reqAlpha 
      const index = regAlpha.findIndex((element) => inputLetter === element);
      if (index !== -1) {
        conv = subAlpha[index];
      }
      
      result += conv;
    });

    return result;
  }

  function decode(input, alphabet) {
    const subAlpha = alphabet.split("");
    let result = '';
    input.toLowerCase().split("").forEach(inputLetter => {
      let conv = ' ';
      const index = subAlpha.findIndex((element) => inputLetter === element);
      if (index !== -1) {
        conv = regAlpha[index];
      }
      result += conv;
    })

    return result;
  }
// checking for duplicates
 function duplicates(alphabet) {
    const subAlpha = alphabet.split("");
    for(let i = 0; i < subAlpha.length-1; i++) {
      for (let j = i+1; j < subAlpha.length; j++) {
        if (subAlpha[i] === subAlpha[j]) {
          return true;
        }
      }
    }
    return false;
  }

  function substitution(input, alphabet = ' ', encode = true) {
    if (alphabet.length !== 26 || duplicates(alphabet)) return false;
    
    const result = encode? enc(input, alphabet): decode(input, alphabet);

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;