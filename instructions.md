Substitution Cipher

image.png

The Substitution Cipher requires a standard alphabet and a substitution alphabet. Letters from the standard alphabet will be transposed to the standard alphabet. This cipher requires that the recipient have the substitution alphabet, otherwise it will be difficult for them to decode the message.

For example, in the image above, the word "HELLO" would be translated as follows:

"H" becomes "R".
"E" becomes "M".
"L" becomes "W".
"O" becomes "L".
This would result in the code "RMWWL". To decrypt this code, you would simply take the result and transpose back from the substitution alphabet to the standard alphabet.

substitution()

The substitution() function in the src/substitution.js file has three parameters:

- input refers to the inputted text to be encoded or decoded.
- alphabet refers to substitution alphabet.
- encode refers to whether you should encode or decode the message. By default it is set to true.

When building the function, keep the following constraints and rules in mind:

- The input could include spaces and letters as well as special characters such as #, $, *, etc.
- Spaces should be maintained throughout.
- Capital letters can be ignored.
- The alphabet parameter must be a string of exactly 26 characters, which could include special characters such as #, $, *, etc. Otherwise, it should return false.
- All of the characters in the alphabet parameter must be unique. Otherwise, it should return false.

Examples

substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev"); //> 'jrufscpw'
substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev"); //> 'elp xhm xf mbymwwmfj dne'
substitution("jrufscpw", "xoyqmcgrukswaflnthdjpzibev", false); //> 'thinkful'

substitution("message", "$wae&zrdxtfcygvuhbijnokmpl"); //> "y&ii$r&"
substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false); //> "message"

substitution("thinkful", "short"); //> false
substitution("thinkful", "abcabcabcabcabcabcabcabcyz"); //> false