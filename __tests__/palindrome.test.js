const isPalindrome = require("../src/palindrome");

test('isPalindrome should return true for "Kasur ini rusak"', () => {
  expect(isPalindrome("Kasur ini rusak")).toBe(true);
});

test('isPalindrome should return false for "hello world"', () => {
  expect(isPalindrome("hello world")).toBe(false);
});

test('isPalindrome should return true for "Able was I ere I saw Elba"', () => {
  expect(isPalindrome("Able was I ere I saw Elba")).toBe(true);
});

test('isPalindrome should return false for "Madam Arora teaches malayalam"', () => {
  expect(isPalindrome("Madam Arora teaches malayalam")).toBe(false);
});
