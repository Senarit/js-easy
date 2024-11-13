// Задача: Написати функцію, яка приймає рядок і повертає його у зворотному порядку,
//  при цьому пропускаючи всі цифри.

function reverseWithoutNumbers(str) {
	let result = '';  
  for (let i = 0; i < str.length; i++) {
    if (isNaN(str[i]) || str[i] === ' ') {
      result += str[i];
    }
  }
  return result.split('').reverse().join('');
  }

console.log(reverseWithoutNumbers("hello123world456")); // Виведе: "dlrowolleh"
console.log(reverseWithoutNumbers("abc123xyz"));       // Виведе: "zyxabc"

module.exports = reverseWithoutNumbers;