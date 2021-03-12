const substitution = require("../src/substitution");
const expect = require("chai").expect;

describe("substitution", () => {
    it("should return false if alphabet length isn't 26", () => {
      const input = "banana";
      const alphabet = "abcdefghijkl";
      const encode = true;
      const expected = false;
      const actual = substitution(input, alphabet, encode);
  
      expect(actual).to.equal(expected);
    });

    it("should return false if any duplicate letters in alphabet", () => {
        const input = "banana";
        const alphabet = "abadafahajalanaparatavaxaz";
        const encode = true;
        const expected = false;
        const actual = substitution(input, alphabet, encode);

        expect(actual).to.equal(expected);
    });

    it("should return correctly ciphered message", () => {
        const input = "abc";
        const alphabet = "qazxswedcvfrtgbnhyujmkiolp";
        const encode = true;
        const expected = "qaz";
        const actual = substitution(input, alphabet, encode);

        expect(actual).to.equal(expected);
    });
  
    it("should cipher special characters", () => {
          const input = "abcdef";
          const alphabet = "?azxswedcvqrtgb!hyujmkiolp";
          const encode = true;
          const expected = "?azxsw";
          const actual = substitution(input, alphabet, encode);

          expect(actual).to.equal(expected);
      });

    it("should return correctly deciphered message", () => {
        const input = "qaz";
        const alphabet = "qazxswedcvfrtgbnhyujmkiolp";
        const encode = false;
        const expected = "abc";
        const actual = substitution(input, alphabet, encode);

        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const input = "ABC";
        const alphabet = "qazxswedcvfrtgbnhyujmkiolp";
        const encode = true;
        const expected = "qaz";
        const actual = substitution(input, alphabet, encode);

        expect(actual).to.equal(expected);
    });

    it("should maintain spaces in message", () => {
        const input = "abc def";
        const alphabet = "qazxswedcvfrtgbnhyujmkiolp";
        const encode = true;
        const expected = "qaz xsw";
        const actual = substitution(input, alphabet, encode);

        expect(actual).to.equal(expected);
    });
});// Write your tests here!