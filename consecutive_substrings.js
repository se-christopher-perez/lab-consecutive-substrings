
function consecutiveSubstrings(string) {

  const array = []
  let letters = ""

  for (let i = 0; i <= string.length; i++) {

    for (let j = i + 1; j <= string.length; j++) {

      array.push(string.slice(i, j))

    }

  }

  return array

}

console.log(consecutiveSubstrings("Hello"))

// if (require.main === module) {

//   console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
//   console.log("=>", consecutiveSubstrings('abc'));
//   console.log("");
//   console.log("Expecting: ['a']");
//   console.log("=>", consecutiveSubstrings('a'));

// }

module.exports = consecutiveSubstrings;


