const caesar = require("../src/caesar");
const expect = require("chai").expect;

describe("caesar", () => {
  it("should return false if shift is 0", () => {
    const input = "abcxyz";
    const shift = 0;
    const encode = true;
    const expected = false;
    const actual = caesar(input, shift, encode);

    expect(actual).to.equal(expected);
  });

  it("should return false if shift is < -25", () => {
    const input = "abcxyz";
    const shift = -26;
    const encode = true;
    const expected = false;
    const actual = caesar(input, shift, encode);

    expect(actual).to.equal(expected);
  });

  it("should return false if shift is > 25", () => {
    const input = "abcxyz";
    const shift = 26;
    const encode = true;
    const expected = false;
    const actual = caesar(input, shift, encode);

    expect(actual).to.equal(expected);
  });

  it("should return lowercase with uppercase input", () => {
    const input = "ABCxyz";
    const shift = 1;
    const encode = true;
    const expected = "bcdyza";
    const actual = caesar(input, shift, encode);

    expect(actual).to.equal(expected);
  });

  it("should wrap if reaching end of alphabet", () => {
    const input = "xyz";
    const shift = 3;
    const encode = true;
    const expected = "abc";
    const actual = caesar(input, shift, encode);

    expect(actual).to.equal(expected);
  });

  it("should maintain spaces or special characters", () => {
    const input = "abc def!";
    const shift = 1;
    const encode = true;
    const expected = "bcd efg!";
    const actual = caesar(input, shift, encode);

    expect(actual).to.equal(expected);
  });

  it("should decode properly", () => {
    const input = "bcd";
    const shift = 1;
    const encode = false;
    const expected = "abc";
    const actual = caesar(input, shift, encode);

    expect(actual).to.equal(expected);
  });
  it("should encode properly with negative shift value", () => {
    const input = "bcd";
    const shift = -1;
    const encode = true;
    const expected = "abc";
    const actual = caesar(input, shift, encode);
    
    expect(actual).to.equal(expected);
  });
  
   it("should decode properly with negative shift value", () => {
    const input = "def";
    const shift = -1;
    const encode = false;
    const expected = "efg";
    const actual = caesar(input, shift, encode);
    
    expect(actual).to.equal(expected);
  });
  
});