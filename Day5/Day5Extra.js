const exercise =(name) => {
    return console.log(`\n\n <---------->${name}<---------->`)
}


/* EXERCISE 11
Write a function "checkArray" which receives an array of random numbers (created with giveMeRandom) and prints, for each item, whether it's bigger than 5.
The function returns the sum of the numbers bigger than 5.
*/
exercise("Exercise 11")  //needs fixxing


const giveMeRandom = (n) => {
    let randomNumbers = []
    let greaterTotal = 0
    for (let i = 0; i < n; i++) {
        let freshNumber = Math.floor(Math.random() * 10) + 1 ;
        let greaterTotal = 0
        randomNumbers.push(freshNumber)
        if (freshNumber > 5) {
            console.log(`${freshNumber} is greater than 5`)
        } else {
            console.log(`${freshNumber} is not greater than 5`)
        }
        if (freshNumber > 5) {
            greaterTotal += freshNumber
        }
        }
        console.log(`The sum of all the numbers greater than 5 is ${greaterTotal} `)
    return randomNumbers
    
}
console.log(giveMeRandom(5))

/* EXERCISE 12
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "shippingCartTotal" which calculates the total due to the shop.
*/
const stockItem = {
    name: "",
    id: "",
    price: 0,
    quantity: 0,
}
const egg = {
    name: "egg",
    id: "355",
    price: .5,
    quantity: 12,
}
const fork = {
    name: "fork",
    id: "3663",
    price: 4,
    quantity: 2,
}
const banana = {
    name: "banana",
    id: "2582",
    price: 2,
    quantity: 10,
}
const ipod = {
    name: "ipod",
    id: "1482",
    price: 285,
    quantity: 1 ,
}

let shoppingCart = [egg, banana, fork, ipod]
let shoppingCartTotal = (cart) => {


}


/* EXERCISE 13
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "addToShoppingCart" which receives a new object, adds it to shoppingCart and returns the total number of items in the shoppingCart.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 14
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "maxShoppingCart" which receives the shoppingCart array and returns the most expensive item in the array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 15
In your eCommerce you have an array of objects called shoppingCart. In this array you have a number of objects with a price, a name, an id and the quantity to be shipped.
Create a function "latestShoppingCart" which receives the shoppingCart array and returns the last item.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 16
Create a function "loopUntil" which receives an integer x between 0 and 9.
The function loops and prints a random number between 0 and 9 until the random number is bigger than x for three times in a row.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 17
Write a function "average" which receives an array and return the average value. The function automatically skips non-numeric entries in the array.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 18
Write a function "longest" to find the longest string from an given array of strings.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 19
Write a function to create a very simple anti spam filter for your mailbox. The function takes a string emailContent, and returns a boolean.
Check if the email is valid using string methods. The email (in this example) is valid if the words SPAM and SCAM does not appear.
*/
exercise("Exercise 19")
 
let sampleEmail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed SPAM do eiusmod tempor SCAM incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh sed. Orci phasellus egestas tellus rutrum tellus pellentesque eu. Mauris pharetra et ultrices neque. Mi ipsum faucibus vitae aliquet. Libero id faucibus nisl tincidunt eget nullam. Dui nunc mattis enim ut tellus elementum. Ultricies mi quis hendrerit dolor. Pretium viverra suspendisse potenti nullam ac tortor. Etiam erat velit scelerisque in dictum non consectetur a erat. Suspendisse interdum consectetur libero id faucibus. Scelerisque eu ultrices vitae auctor eu. Nullam ac tortor vitae purus faucibus ornare suspendisse."
let spamFilter = (text) => {
    wordFilter = []
    wordFilter = sampleEmail.split(" ")
    let isScam = false
    for (let i = 0; i < wordFilter.length; i++) {
        let currentWord = wordFilter[i];
        if (currentWord === "SCAM" || "SPAM") {
            console.log("This is spam")
        }
        
    }
}

/* EXERCISE 20
Write a function that receives a date d as parameter and calculates the number of days passes since the d.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 21
Write a function "matrixGenerator" that receives x and y as parameter. The result should be a matrix of x times y with, as value, the i of the position.
Ex.: X = 3, Y = 2
["00","01","02"
"10","11","12"]
*/

/* WRITE YOUR CODE HERE */