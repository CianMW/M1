let exercise = (text) => {
    console.log(`\n\n\<--------------------------->${text}<--------------------------->`)
} 

const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]



/*
    ASSIGNMENT RULES
    - All the answers must be written in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for help, reach the Teaching Assistants if needed
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or de-commenting the single exercises in this one.
      You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics
exercise("JS Basics")
/* Ex.A
   Create a variable called "test" and assign a string to it.
*/
let test = ""
test = "who lives here?"


/* Ex.B
    Create a variable called "sum" and assign to it the result of the sum between 10 and 20.
*/
let sum = 0
sum = 10+20

/* Ex.C 
    Create a variable called "random" and assign to it a random number between 0 and 20 (it should be randomly created at each execution).
*/
let random = Math.round(Math.random() * 20)
console.log(`A random number between 0 and 20 is : ${random}`)

/* Ex.D
    Create a variable called "me" and assign to it an object containing the following information: name = your name, surname = your surname, age = your age.
*/
let me = {
    name: "Cian",
    surname: "Markwick",
    age: 23
}
console.log(me)


/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
delete me.age
console.log("\n\The age property has been deleted from the object")
console.log(me)

/* Ex.F 
   Programmatically add to the object me an array called "skills", containing the programming languages you know right now.
*/
console.log("\n\n The object now includes the programming languages I know")
me.skills = ["Javascript", "HTML", "CSS", "Scratch"]
console.log(me)
/* Ex.G 
   Programmatically remove the last skill from the "skills" array inside the "me" object.
*/
console.log("\n\n Actually lets not count Scratch lol")
me.skills.pop()
console.log(me)
// JS Functions
/* Ex.1
    Write a function called "dice"; it should randomize an integer number between 1 and 6.
*/
exercise("Exercise 1")
let dice = (x) => {
    return Math.ceil(Math.random() * 6)
}
console.log("Lets roll the die! " + dice())
/* Ex.2 
    Write a function called "whoIsBigger" which receives 2 numbers as parameters and returns the biggest one.
*/
exercise("Exercise 2")


let whoIsBigger = (x , y) => {
    let biggerNumber = 0
    if ( x > y) {
        biggerNumber = x
    } else {
        biggerNumber = y
    }
    return "The bigger number is: " + biggerNumber
}
console.log(whoIsBigger(100,78))
/* Ex.3
    Write a function called "splitMe" which receives a string as a parameter and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns ["I", "Love", "Coding"]
*/
exercise("Exercise 3")
let splitMe = (string) => {
    let newArray = []
    newArray = string.split(" ")
    return newArray
}

console.log(splitMe("A group of miners are protesting outside a noble???s estate over poor work conditions. They are all covered in coal dust, holding signs that say 'NO ORE NO MORE'."))


/* Ex.4
    Write a function called "deleteOne" which receives a string and a boolean as parameters. If the boolean value is true it should return the string without the first letter, otherwise it should remove the last one from it.
*/
exercise("Exercise 4")

let deleteOne = (string, value) => {
    let changedString = ""
    if (value === true) {
        changedString = string.substring(1)
    } else {
        changedString = string.substring(0, string.length-1)
    }
    return changedString
}
console.log(deleteOne("where is the cow", false))

/* Ex.5
   Write a function called "onlyLetters" which receives a string as a parameter and returns it removing all the digits.
   Ex.: onlyLetters("I have 4 dogs")  => returns "I have  dogs"
*/
exercise("Exercise 5")

let onlyLetters = (string) => {
    const withoutNumbers = string.replace(/[0-9]/g, '')
    return withoutNumbers
}
console.log(onlyLetters("where 4 art 2 romeo?"))
/* Ex.6 
   Write a function called "isThisAnEmail" which receives a string as a parameter and returns true if the string is a valid email address.
*/
exercise("Exercise 6")

const isThisAnEmail= (string) => {
    gmail = "@gmail.com"
    hotmail = "@hotmail.com"
    yahoo = "@yahoo.com"
    let isEmail = true

    if (string.includes(gmail) || string.includes(hotmail) ||string.includes(yahoo) ) {
        isEmail = true
    } else {
        isEmail = false
    } return "is this an email? " + isEmail
}
console.log(isThisAnEmail("cian.ward@gmail.com"))

/* Ex.7
   Write a function called "whatDayIsIt" that should return the current day of the week.
*/
exercise("Exercise 7")

const whatDayIsIt = () => {
    let date = new Date();
    let day = date.getDay()
    let weekday = "The day of the week is "

    switch (day) {
        case 0:
            weekday += "Sunday"
            break;
        case 1:
            weekday += "Monday"
            break;
        case 2:
            weekday += "Tuesday"
            break;
        case 3:
            weekday += "Wednesday"
            break;
        case 4:
            weekday += "Thursday"
            break;
        case 5:
            weekday += "Friday "
            break;
        case 6:
            weekday  += "Saturday"
            break;
        default: weekday += "well I have abolutely no idea"
            break;
    }   return weekday

}
console.log(whatDayIsIt())
/* Ex.8
    Write a function called "rollTheDices" which receives a number as a parameter.
    It should invoke the dice() function defined in Ex1 the specified amount of times,
    and return an object containing a "sum" property holding the sum of all values extracted
    and a "values" array containing the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [3, 3, 4]
    }
*/
exercise("Exercise 8")

const rollTheDices = (n) =>{
    let diceRoll = {
          sum : 0,
          values : [],
      
    }

    for (let i = 0; i < n; i++) {
        diceRoll.values.push(dice());
        diceRoll.sum += diceRoll.values[i]
    } return diceRoll
}
console.log(rollTheDices(8))
/* Ex.9
   Write a function called "howManyDays" which receives a date as a parameter and should return the number of days passed since that date.
*/
exercise("Exercise 9")

const howManyDays = (d) => {
    let currentDate = new Date()
    let pastDate = d
    let oneDay = 1000 * 60 * 60 * 24 ;

    let Result = Math.round((currentDate.getTime() - pastDate.getTime()) / (oneDay));
   return Result + " Days have passed"
}

console.log(howManyDays(new Date(2021, 3, 23)))


/* Ex.10
   Write a function called "isTodayMyBirthday" which should return true if today's your birthday, false otherwise.
*/
exercise("Exercise 10")
const isTodayMyBirthday = (birthday) => {
    let birthMonth = birthday.getMonth()
    let birthDate = birthday.getDate()
    let upToDate = new Date()
    let today = upToDate.getDate()
    let thisMonth = upToDate.getMonth()
    let celebration = true
     if (birthMonth === thisMonth && birthDate === today) {
        celebration = true
    } else {
        celebration = false
    }
    return "Today is my birthday :" + celebration

}

console.log(isTodayMyBirthday(new Date(1997, 7, 16)))
// JS Arrays // Objs
// NOTE: movies array is defined at the end of this file!

/* Ex.11
   Write a function called "deleteProp" which receives an object and a string as parameters, and returns the given object after deleting its property named as the given string.
*/
exercise("Exercise 11")
const deleteProp = (obj, string) => {
    let object = {}
    Object.assign(object,obj)
    let prop = string
    delete object[`${string}`]
    return object
}

 let testObject = {
     name: "kevin",
     brand: "nike",
     color: "blue"
 }
console.log(deleteProp(testObject,"name"))

/* Ex.12 
    Write a function called "olderMovie" which finds the oldest movie in the array provided at the end of this file.
*/
exercise("Exercise 12") //cannot get this one to work
const olderMovie = (movieList) => {
    let oldMovie = { Year: 2100 }
    for (let i = 0; i < movieList.length; i++) {
        let movie = movieList[i]
        let currentYear = parseInt(movie.Year)
        if (currentYear < oldMovie.Year) {
         oldMovie = movie
        }
    }return oldMovie
        
    }


console.log(olderMovie(movies))

/* Ex.13
    Write a function called "countMovies" which returns the number of movies contained in the array provided at the end of this file.
*/
exercise("Exercise 13")
const countMovies = (arrayList) => {
    let numberOfMovies = 0 
    for (let i = 0; i < arrayList.length; i++) {
        if (arrayList[i].Type === "movie") {
            numberOfMovies +=1
        }
        
    }return `There are ${numberOfMovies} movies.`

}
console.log(countMovies(movies))
/* Ex.14
    Write a function called "onlyTheTitles" which creates an array with just the titles of the movies provided in the array at the end of the file.
*/
exercise("Exercise 14")
const onlyTheTitles = (arrayList) => {
    let titleArrray = []
    for (let i = 0; i < arrayList.length; i++) {
        titleArrray.push(arrayList[i].Title);
        
    } return titleArrray
}
console.log(onlyTheTitles(movies))

/* Ex.15
   Write a function called "onlyInThisMillennium" which returns only the movies produced in this millennium.
*/
exercise("Exercise 15") // cannot get this one to work!
const onlyInThisMillennium =(array) => {
    let postY2k = []
    for (let i = 0; i < array.length; i++) {
        const movieRelease = array[i].Year;
        if (movieRelease > 1999) {
            postY2k = (array[i])
        }
        
    } return postY2k

}

console.log(onlyInThisMillennium(movies))

/* Ex.16 
    Write a function called "getMovieById" which receives an id as a parameter and returns the movie with the given id.
*/
exercise("Exercise 16") 
const getMovieById = (arrayList, id) => {
    let correctMovie = []
    for (let i = 0; i < arrayList.length; i++) {

        if (id === arrayList[i].imdbID) {
            correctMovie = arrayList[i]
        }
        
    }return correctMovie
}
    
      console.log( getMovieById(movies,"tt0848228" ))
/* Ex.17
    Write a function called "sumAllTheYears" which returns the sum of all the years in which the movies provided have been produced.
*/
exercise("Exercise 17") 
const sumAllTheYears = (arrayList) => {
    let allYears = 0
    for (let i = 0; i < arrayList.length; i++) {
        allYears += parseInt(arrayList[i].Year)
        
    }return "The sum of all the release years is : " + allYears
}
console.log(sumAllTheYears(movies) )

/* Ex.18
    Write a function called "searchByTitle" which receives a string as a parameter and returns all the movies which contain that string in the title.
*/
exercise("Exercise 18") 

const searchByTitle = (string) => {
    let searchResult = []
    for (let i = 0; i < movies.length; i++) {
        let movie = movies[i].Title;
        if (movie.includes(string)) {
            searchResult.push(movies[i])
        }
    } return searchResult
}

console.log(searchByTitle("Lord"))
/* Ex.19
    Write a function called "searchAndDivide" which receives a string as a parameter and returns an object;
    this object should contain an array called "match", made by all the movies which contain the given string in the title,
    and another array "unmatch" with all the remaining ones.
*/
exercise("Exercise 19") 

const searchAndDivide = (string) => {
    const matches = {
        match: [],
        unmatch: [],
    }
    for (let i = 0; i < movies.length; i++) {
        const movie = movies[i].Title;
        if (movie.indexOf(string) !== -1) {
            matches.match.push(movies[i])
        } else {
            matches.unmatch.push(movies[i])
        }
    }return matches
}
console.log(searchAndDivide("Lord"))


/* Ex.20
   Write a function called "removeIndex" which receives a number as a parameter and returns the movies array without the element in the given position.
*/

const removeIndex = (number) => {
    let result =[]
    for(let i = 0; i < movies.length; i++){
        if (number === i)
            continue
        
        result.push(movies[i])

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function called "halfTree" which receives a number as a parameter and builds an "*" half tree with the given height.
  Example:
  halfTree(3)
  *
  **
  ***
*/
console.log(`"*"\n"**"\n\"***"\n\"`)
/* Ex.22 
  Create a function called "tree" which receives a number as a parameter and builds an "*" tree with the given height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/

/* Ex.23
  Create a function called "isItPrime" that receives a number as a parameter and returns true if the given number is a prime number.