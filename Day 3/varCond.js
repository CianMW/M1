/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT we suggest you to use just the material provided
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.

*/
/* EXERCISE 1
Enumerate and describe the main datatypes in JavaScript. Try to explain the concepts as you were speaking to a 12 years old.
*/

// There are five different data types in Javascript and two others that are rare. The main 5 are Numbers, strings, boolean, undefined and Null.
// Numbers are any normal number you may see in life including negative numbers and numbers with decimals. Strings are data where letters, numbers and other characters are treated like words in a sentence.
// Boolean data means either True or False. Undefined data is when the container hasn't been given any input yet. Null is when the data container has been purposely assigned to be empty.


/* EXERCISE 2
Try to describe what a variable is, in your own words.
*/

// A variable is a container that values can be assigned to and called at a later point in time. 

/* EXERCISE 3
Write the code to execute an addition (a sum) of the numbers 12 and 20.
*/

let sum = 12 + 20 ; 
console.log(sum)

/* EXERCISE 4
Create a variable named x containing the number 12.
*/

let x = 12

/* EXERCISE 5
Create a variable called name containing the string John Doe.
*/

let name = "John Doe"

/* EXERCISE 6
Execute a subtraction between the number 12 and the variable x, which is storing the value 12.
*/

let subtraction = (x - 12) ;
console.log(subtraction) ;
/* EXERCISE 7
Create two variables: name1 and name2. name1 is equal to john, name2 is equal to John.
Verify that name1 is different from name2. 
Verify then, that name1 and name2 are equals if both lowercase (without changing the value of name2).
*/

let name1 = ("john")
let name2 = ("John") ;
let areTheSame = (name1===name2)
console.log(areTheSame)

let areTheSameWhenLowerCase = name1.toLowerCase() === name2.toLowerCase()
console.log( `Are the names equal when they are both lowercase? ${areTheSameWhenLowerCase}`)

/* EXERCISE 8
Create a variable named x (its value must be less than 10). Write the code to print the literal value of x (ex.: if x is 1 print "one", if 5 print "five" etc.).
*/
// x was already used as a variable above so I have substituted y.
let y = 7

switch (y) {
    case 1 :
        console.log("The number is one")
        break; 
    
    case 2 :
        console.log("The number is two")
        break; 

    case 3 :
        console.log("The number is three")
        break; 

    case 4 :
         console.log("The number is four")
        break; 
        
    case 5 :
        console.log("The number is five")
        break; 

    case 6 :
        console.log("The number is six")
        break; 

    case 7 :
        console.log("The number is seven")
        break; 

    case 8 :
        console.log("The number is eight")
        break; 

    case 9 :
        console.log("The number is nine")
        break; 
    
    default:
        console.log("no answer available")
        break ; 
}

/* EXERCISE 9
[Extra] Insert a value in a variable based on the resut of a ternary if (topic not covered during lesson, try to search it by yourself, tomorrow morning we'll discuss it together ;) )
*/

let likeAnimals= true

let goodPerson = likeAnimals ? "yes! That's awesome! ":"no, that's really sad"

console.log(`people say that if you like animals then you're a good person. Are you a good peron? ${goodPerson}`)
/* WHEN YOU ARE FINISHED
Upload the .js file on Eduflow before 5PM CET. In the next days we'll also learn how to use GIT!
*/