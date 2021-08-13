// Additional assignments for Day 3

/*
 1. Use ternary operator to assign "male" or "female" string to a variable based on the value of another 'isMale' variable
*/

let isMale = false ;

let gender = isMale? "Male" : "Female" ;
console.log(`The gender is: ${gender}`) ;

/*
 2. Write code to check from two given integers whether one of them is 8 or their sum or difference is 8.
*/
let firstInteger = 2 ; 
let secondInteger = 8 ; 
let areEight = firstInteger === 8 || secondInteger === 8 || secondInteger - firstInteger === 8 || firstInteger + secondInteger === 8 ;
console.log(`Are either integer equal to 8 or equal 8 by adding or subtracting the other? Answer: ${areEight}`)

/*
  3. Create a variable which concatenates two strings.
*/

let greeting = "Good evening "
let title = "Sir/Madam or Non-Binary being"

let introduction = greeting.concat(title)

console.log(introduction)
/*
4.Write a JavaScript conditional statement to sort three numbers. Display the result in the console.
*/
let number = (5,6,1)



/*
 5. Write code to find the average of two given integers.
*/
let firstNumber = 8
let secondNumber = 5
let average = (firstNumber + secondNumber) /2
console.log(`The average of ${firstNumber} and ${secondNumber} is ${average}`)
/* 
  6. Find the longest of two given strings
*/
let longString = "My couch is on fire dude!" ; 
let shortString = "woah"

if (long String.length > shortString.length) {
  console.log("The longest string is longString ")
} else {
    console.log("The longest string is shortString")
}
/*
 7. Write code to check whether a value is an integer or not.
*/

/*
 8. Write code to calculate the percentage (%) of a number.
        Ex.: 20% of 400 is 80
*/

/*
 9. Write code to check if a given number is even or odd.
*/

