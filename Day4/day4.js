/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript (uncommented)
- You can ask for help, reach the Teaching Assistants if needed
- The solution must be available for the tutors by the end of the day (5PM CET)
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
*/

/* EXERCISE 1
Create an array containing the first 5 positive numbers.
*/

let positiveNumbers = [1,2,3,4,5]

console.log(positiveNumbers)
/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let myProfile = {
    name: "Cian",
    surname: "Markwick",
    email:  "markwick.cian@gmail.com",
    age: 23,
}

console.log(myProfile)
/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license.
*/

myProfile.drivingLicence = false ;


/* EXERCISE 4
Remove from the previously created object the age property.
*/

delete myProfile.age
console.log(myProfile)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address than the previous one.
*/
let newProfile = []
Object.assign(newProfile, myProfile)
newProfile.name = "John"
newProfile.surname = "Kilker"
newProfile.email = "jk@gmail.com"

console.log(newProfile)

if (newProfile.email === myProfile.email) {
    console.log(`The emails for ${myProfile.name} and ${newProfile.name} are indeed the same!`)
} else {
    console.log(`The emails for ${myProfile.name} and ${newProfile.name} are definitely different!`)
}

/* EXERCISE 6
You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
Write an algorithm that calculates the total cost to charge the user with.
*/

/*let totalShoppingCart = 5
if (totalShoppingCart > 50) {
    totalShoppingCart = totalShoppingCart
} else {
    totalShoppingCart +=10
}
console.log(totalShoppingCart)*/

/* EXERCISE 7
You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/
let totalShoppingCart = 100
let twentyPercent = (totalShoppingCart / 100) * 20
let blackFridayDiscount = totalShoppingCart - twentyPercent
totalShoppingCart = blackFridayDiscount
if (totalShoppingCart > 50) {
    totalShoppingCart = totalShoppingCart
} else {
    totalShoppingCart +=10
}
console.log(`The total price after discounts and shipping is ${totalShoppingCart}`)
/* EXERCISE 8
Create an object representing a car with properties like brand, model, licensePlate.
After you create the first car, clone it 5 times and change the licensePlate for each cloned car without affecting the original one.
*/

let car = {
    brand: "Chevrolet",
    model: "express 4500",
    licensePlate: "GMMO55234",
}
let car1 = {}
Object.assign(car1, car)
car1.licensePlate = "7XOG747"


let car2 = {}
Object.assign(car2, car)
car2.licensePlate = "7XOG419"


let car3 = {}
Object.assign(car3, car)
car3.licensePlate = "7XOG412"


let car4 = {}
Object.assign(car4, car)
car4.licensePlate = "7XOG771"


let car5 = {}
Object.assign(car5, car)
car5.licensePlate = "7XOG7458"


/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise.
*/

let carsForRent = [car, car1 , car2, car3, car4, car5]
console.log(carsForRent)
/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/
carsForRent =  carsForRent.slice(1, carsForRent.length-1 )

console.log(carsForRent)
/* EXERCISE 11
Print in the console the TYPES of the car variable, of its licensePlate and of the its brand properties.
*/

/* WRITE YOUR CODE HERE */

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in a variable totalCars the number of cars present in both carsForSale and carsForRent arrays.
*/
let carsForSale = [car2,car3, car4]
let totalCars = (carsForRent.length + carsForSale.length)
console.log(`The total number of cars is ${totalCars}`)

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array.
*/

console.log(carsForSale)

/* WHEN YOU ARE FINISHED
Send the code on the Eduflow platform. In the next days we'll also learn how to use GIT
*/