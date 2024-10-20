let words = ["hello", "world"]

function getWordLengths(words) {
  // Start coding here
  let result = words.map((word) => word.length)
  return result
}

const result = getWordLengths(words)

console.log(result) // Output: [5, 5]
