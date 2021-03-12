// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const polybiusSquare = [
    {numerals: "11", letter: "a"},
    {numerals: "21", letter: "b"},
    {numerals: "31", letter: "c"},
    {numerals: "41", letter: "d"},
    {numerals: "51", letter: "e"},
    {numerals: "12", letter: "f"},
    {numerals: "22", letter: "g"},
    {numerals: "32", letter: "h"},
    {numerals: "42", letter: "i"},
    {numerals: "42", letter: "j"},
    {numerals: "52", letter: "k"},
    {numerals: "13", letter: "l"},
    {numerals: "23", letter: "m"},
    {numerals: "33", letter: "n"},
    {numerals: "43", letter: "o"},
    {numerals: "53", letter: "p"},
    {numerals: "14", letter: "q"},
    {numerals: "24", letter: "r"},
    {numerals: "34", letter: "s"},
    {numerals: "44", letter: "t"},
    {numerals: "54", letter: "u"},
    {numerals: "15", letter: "v"},
    {numerals: "25", letter: "w"},
    {numerals: "35", letter: "x"},
    {numerals: "45", letter: "y"},
    {numerals: "55", letter: "z"},
    {numerals: "00", letter: " "},
  ]

  function enc(input) {
    let result = '';
    input.toLowerCase().split('').forEach(letter => {
      const obj = polybiusSquare.find(value => letter === value.letter);
      console.log(obj);
      if (obj.letter === "i" || obj.letter === "j") {
        obj.numerals = 42;
      }
      // console.log(obj);
      result += obj.numerals;
    });

    return result.replace("00", " ");
  }
  
  function decode(input) {
    const dblZeroInput = input.replace(" ", "00");
    const dblZeroLength = dblZeroInput.length;
    if (dblZeroLength % 2 != 0) return false;
    
    let result = '';
    dblZeroInput.match(/.{1,2}/g).forEach(pair => { 
      let obj = polybiusSquare.find(value => pair === value.numerals);
      console.log(obj);
      if (!obj) {
        obj = {numerals: "42", letter: "(i/j)"};
      }
      result += obj.letter;
    });
    
    return result;
  }


  function polybius(input, encode = true) {
    

    let result = encode? enc(input): decode(input);
   
    return result;
  };

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;