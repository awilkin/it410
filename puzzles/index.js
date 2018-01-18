'use strict';

module.exports = {
    evenOrOdd,
    wordsInReverse,
    countPositivesSumNegatives
};

function evenOrOdd(number) {
  if((number % 2) == 1 || (number % 2) == -1) {
    return "Odd"
  }
  else {
    return "Even"
  }
}

function wordsInReverse(string) {
  const words = string.split(" ");
  let reverse_words = "";
  for (var word in words) {
    reverse_words = words[word] + " " + reverse_words;
  }
  reverse_words = reverse_words.substring(0, reverse_words.length-1);
  return reverse_words;
}

function countPositivesSumNegatives(numbers) {

}
