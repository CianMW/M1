/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Write the code to revert an array.
es:
[1, 3, 5] ==> [5, 3, 1]
*/
const numberArray = [1,2,3,4,5,6,7,8,9]
let revertedArray = []
for (let i = numberArray.length-1 ; i >=0 ; i -= 1) {
    revertedArray = revertedArray.concat(numberArray[i])  ; 
}
console.log(numberArray)
console.log(revertedArray)

/* EXERCISE 2
Write the code to get the maximum value in an array.
*/

let maximumValue = 0
for (let i = numberArray.length-1 ; i >=0 ; i -= 1) {
    if (numberArray[i] > maximumValue) {
        maximumValue = numberArray[i]
    }  ; 
}
console.log(`The maximum value is ${maximumValue}`)
/* EXERCISE 3
Write the code to get the minimum value in an array.
*/

let minimumValue = 10
for (let i = numberArray.length-1 ; i >=0 ; i -= 1) {
    if (numberArray[i] < minimumValue) {
        minimumValue = numberArray[i]
    }  ; 
}
console.log(`The minimum value is ${minimumValue}`)
/* EXERCISE 4
Write the code to get only even numerical values in an array.
*/

let evenNumbers = []
for (let i = 0; i < numberArray.length; i++) {
  if(numberArray[i] % 2 === 0) { evenNumbers.push(numberArray[i]); }
}
console.log(`All the even numbers are ${evenNumbers}`)
/* EXERCISE 5
Write the code to delete even entries from an array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 6
Write the code to remove all the vowels from a string.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 7
Write the code to increase all the numeric values in a array by 1.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 8 
Replace all the strings in an array with their length.
es.: ["strive", "is", "great"] => [6, 2, 5]
*/

/* WRITE YOUR CODE HERE */

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/