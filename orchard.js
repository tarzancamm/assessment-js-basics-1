///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day off the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in dollars. 
*/



const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55


// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/

// CODE HERE

let eachDayAcres = []

for (let i = 0; i <= 6; i++) {
    eachDayAcres.push(fujiAcres[i] + galaAcres[i] + pinkAcres[i])
}

// console.log(eachDayAcres)

let totalAcres = eachDayAcres.reduce((a, b) => a + b, 0)

console.log(totalAcres)


// First I created an empty array stored in a variable (eachDayAcres) that would store the acreage for each day. Then I created a for loop that added the acres picked from each orchard and placed that number as an item in the eachDayAcres. Once I had an array that included each day's acres picked (eachDayAcres), I created a totalAcres variable that used the reduce method on eachDayAcres to return the sum of the items in the eachDayAcres array. The reduce method takes the previous value in the array and adds it to the next value, and so on.


// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/

// CODE HERE


let averageDailyAcres = totalAcres / 7
console.log(averageDailyAcres)


// I took the totalAcres variable - which equals 63 - and divided it by the number of days in a week - 7. This equates to an average of 9 acres picked a day.


// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE


while (acresLeft > 0) {
    days += 1
    acresLeft -= averageDailyAcres
}

console.log(days)

// I created a for loop that runs while acresLeft is greater than 0. Each time the loop runs the days variable increases by 1 and the acresLeft variable decreases by the averageDailyAcres (9).


// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons = []
let galaTons = []
let pinkTons = []

for (let i = 0; i < fujiAcres.length; i++) {
    fujiTons.push(fujiAcres[i] * 6.5)
}
console.log(fujiTons)

for (let i = 0; i < galaAcres.length; i++) {
    galaTons.push(galaAcres[i] * 6.5)
}
console.log(galaTons)

for (let i = 0; i < pinkAcres.length; i++) {
    pinkTons.push(pinkAcres[i] * 6.5)
}
console.log(pinkTons)


// I created three for loops that loops through each index of the original Acres array and multiplies it by 6.5. This number is then stored in each respective Tons array.


// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/

// CODE HERE 

let fujiPounds = fujiTons.reduce((a, b) => a + b, 0) * 2000
let galaPounds = galaTons.reduce((a, b) => a + b, 0) * 2000
let pinkPounds = pinkTons.reduce((a, b) => a + b, 0) * 2000


console.log(fujiPounds)
console.log(galaPounds)
console.log(pinkPounds)

// I used the same .reduce method code I used in problem 1 to add each item in an array together to find the sum. After this I multiplied that number by 2000 and stored it in its respective variable.


// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujiPounds * fujiPrice
let galaProfit = galaPounds * galaPrice
let pinkProfit = pinkPounds * pinkPrice


console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)

// I took the pounds of apples picked and multiplied it by each respective price per pound. This gave me the total dollar amount of sales we'll receive from each orchard.


// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/

// CODE HERE


let totalProfit = fujiProfit + galaProfit + pinkProfit

console.log(totalProfit)


// I created a variable - totalProfit - that adds each respective orchard's profits together to find the sum.