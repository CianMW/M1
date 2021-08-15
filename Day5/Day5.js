/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
*/

const exercise =(name) => {
    return console.log(`\n\n <---------->${name}<---------->`)
}

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
exercise("Exercise 1")
const area = (length, width) => { return length * width}
console.log(area(5,5))
/* EXERCISE 2 
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
exercise("EXERCISE 2")
const crazySum = (integer1, integer2) => {
if (integer1 === integer2) {
    return (integer1 + integer2)*3
} else { return integer1 + integer2 }
}

console.log(crazySum(2,1))
/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
exercise("EXERCISE 3")
const crazyDiff = (input) => {
    if (input > 19) {
        return (input-19)*3        
    } else { return 19 - input}
}
console.log (crazyDiff(21))
/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/
exercise("EXERCISE 4")
const boundary = (n) => {
    let inRange = n > 20 && n <= 100 || n === 400
    return inRange
}
console.log(boundary(400))
/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/
exercise("EXERCISE 5")
const strivify =(string)=> {
    if (string.startsWith("Strive")) {
        return true
    } else {
        return string.concat("Strive")
    }
}
console.log(strivify("cool Strive"))

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/
exercise("EXERCISE 6")

const check3and7 = (positiveNumber) => {
    if ((positiveNumber % 3 === 0) && (positiveNumber % 7 === 0)) {
        return console.log(`${positiveNumber} is a multiple of both 3 and 7`)
    } else if (positiveNumber % 3 === 0) {
    return console.log(`${positiveNumber} is a multiple of 3`)
    } else if (positiveNumber % 7 === 0) {
        return console.log(`${positiveNumber} is a multiple of 7`)
    } else {
        return console.log(`${positiveNumber} is not a multiple of either 3 or 7`)
    }
}
console.log(check3and7(21))


/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

exercise("EXERCISE 7")

const reverseString = (string) =>{
    let revertedString = ""
    for (let i = string.length-1 ; i >= 0 ; i -= 1) {
        revertedString += string[i] }
            return revertedString
}
console.log(reverseString("Hello"))

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/
exercise("EXERCISE 8") //NEEDS TO BE FIXED

function uppercase(str)
{
  let wordArray = str.split(' ');
  let newarray1 = [];
    
  for(let i = 0; i < wordArray.length; i++){
      newarray1.push(wordArray[i].charAt(0).toUpperCase()+wordArray[i].slice(1));
  }
  return newarray1.join(' ');
}
console.log(uppercase("hey lets go to the gym"));
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/
exercise("EXERCISE 9")


const cutString = (str1,) => {
    let newString = str1.slice(1, str1.length-1) 
    return newString
}
    /*let newString = ""
    let endCharacter = str1.length-1
    newString = str1.charAt(0) + str1.charAt(endCharacter)
    return newString
}*/
console.log(cutString("My name is Cian"))

/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/
exercise("EXERCISE 10")
const giveMeRandom = (n) => {
    let randomNumbers = []
    for (let i = 0; i < n; i++) {
        randomNumbers = randomNumbers.push(Math.floor(Math.random() * 10) + 1) ;
        return randomNumbers
    }
}
console.log(giveMeRandom(5))

/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/