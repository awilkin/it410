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
  let pos_num = 0;
  let sum_neg_num = 0;

  for (var num in numbers) {
    if (numbers[num] > 0) {
      // count the number of positive numbers
      pos_num++;
    }
    else {
      // sum negative numbers
      sum_neg_num += numbers[num];
    }
  }

  let num_array = [pos_num, sum_neg_num];
  return num_array;
}
