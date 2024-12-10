// Create a function that takes two numbers as arguments and returns their sum.
// console.log(Somme(7,15))

function sumOfTwoNumber(number1, number2){
    return number1+number2
}
console.log(sumOfTwoNumber(21, 9))
 
// Write a function that takes the base and height of a triangle as arguments and returns its area.
// console.log(TriangleArea(10,12))

function triangleArea(base, height){
    return (base*height)/2
}
console.log(triangleArea(5, 6))
 
// Write a function that takes the height and the width of rectangle as arguments and returns its perimeter.
// console.log(RectanglePerimetre(6,6))
 
function rectanglePerimetre(height, width){
    return (height+width)*2
}
console.log(rectanglePerimetre(6,7))

// Write a function that takes a number as argument and returns it square.
// console.log(SquareNumber(9))

function squareNumber(number){
    return number**2
}console.log(squareNumber(8))
 
// Write a function that takes hours as argument  and converts its into seconds.
// console.log(HourToSecond(24))
 function hourToSecond(hours){
    return hours*3600
 }console.log(hourToSecond(5))
// Create a function that  takes a string as argument and returns the length of this string.
 function lengthOfString(string){
    let length = string.length
    return length;
 }console.log(lengthOfString("rt"))
// write a function that takes a string as argument and returns it to number
 
// write a function that takes a number as argument and returns it to string
 
// Exercise 1
// <h3>Write a function which checks given input/parameter:</h3>
// <ul>
//   <li>If input/parameter is divisible by 3 print => Fizz</li>
//   <li>If input/parameter is divisible by 5 print => Buzz</li>
//   <li>If input/parameter is divisible by 3 or 5 print => FizzBuzz</li>
//   <li>If input/parameter is NOT divisible by 3 or 5 print => given Input Number/Value</li>
//   <li>If input/parameter is other than Number/Value print => 'Nan - Not a Number! Please Input Number' </li>
// </ul>
 function fizzBuzz(number){
    if(number%15==0){
        return "FizzBuzz"
    }else if(number%5==0){
        return "Buzz"
    }else if(number%3==0){
        return "Fizz"
    }else if(typeof number !=="number"){
        return 'Nan - Not a Number! Please Input Number'
    }else{
        return number
    }
 }
 console.log(fizzBuzz(6))
// Exercise 2
 
// In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n.
//  In simple terms, the Factorial of 7 is solved like this:
// 7 _ 6 _ 5 _ 4 _ 3 _ 2 _ 1 = 5,040

function factorializer(number){
    let ftr =1
    for (let i = 1;i<=number;i++){
        ftr*=i
    }
    return ftr
}
console.log(factorializer(7))
 
// Example:
// > console.log(factorializer(7));
// > 5040
 
// Exercise 3
// Identify if a number is Odd or Even?
// A function that lets you know if a number is Even or Odd
 
// Example:
// > console.log(oddOrEven(7));
// > "Odd"
 
function oddOrEven(number){
    if (number%2===0){
        return "Even"
    }else{
        return "Odd"
    }
}console.log(oddOrEven(8))

// Exercise 4
 
// Return the sum of a number going back to it's root. In other words, the function will work like this:
 
// addUp(5);
// 5 + 4 + 3 + 2 + 1 + 0 = 15
// Example:
// > console.log(addUp(8));
// > 36

function addUp(number){
    let addUp =0
    for (let i = 1;i<=number;i++){
        addUp+=i
    }
    return addUp
}
console.log(addUp(8))

// Exercise 5
 
// Create a function  that takes a string as argument and returns true if a string is empty and false otherwise.
// isEmpty(“ ”)➞ true
// isEmpty(“Chaima”)➞ false

function isEmpty(string){
    if ((string.trim()).length==0){
        return true
    }else{
        return false
    }
}
console.log(isEmpty("     ")) 
// Exercise 6
 
// Create a function that takes two strings as arguments and returns true if
// the total number of characters in the first string is equal to the total number of characters in the second string.
// Otherwise return false.
 
// isEqualStr (“ Simplon”,”tunis ”)➞ false
// isEqualStr (“CA”,”FS”)➞ true
 
function isEqualStr(str1, str2){
    if ((str1.length)===(str2.length)){
        return true
    }else{
        return false
    }
}
console.log(isEqualStr("GS", "Cu"))
// Exercise 7
 
// Create a function that takes two numbers, a and b, return true if a can be divided evenly by b , return false otherwise.
// oneDevideByTwo(9,3)➞true
// oneDevideByTwo(10,2)➞true
// oneDevideByTwo(13,2)➞false

function oneDevideByTwo(number1, number2){
    if(number1%number2===0){
        return true
    }else{
        return false
    }
}
console.log(oneDevideByTwo(4, 2))
// Exercise 8
 
// Create a function that takes in a mood and return a sentence in the following format:
// "Today, I am feeling {mood}". However, if no argument is passed, return "Today, I am feeling neuter".
// moodToday("happy") ➞ "Today, I am feeling happy"
// moodToday( ) ➞ "Today, I am feeling neuter"

function moodToday(mood){
    if ((mood.trim()).length==0){
        return "Today, I am feeling neuter"
    }else{
        return `Today, I am feeling ${mood}`
    }
}
console.log(moodToday(""))
 
// Exercise 9
 
// Write a function that validates whether two strings are identical. Make it case insensitive.
// match(“HELLO WORLD”) and (”hello world”) → true
// match("mask", "mAskinG") ➞ false
 
function match(str1, str2){
    if(str1.toLowerCase()==str2.toLowerCase()){
        return true
    }else{
        return false
    }
}
console.log(match("hello", "HElLo"))

// Exercise 10
 
// Create a function that takes a string as argument and returns "upper" if all the letters in a word are uppercase, "lower" if lowercase and "mixed" for any mix of the two.
// getCase("javascript..") ➞ "lower"
// getCase("SHOUT!") ➞ "upper"
 
function getCase(str){
    if(str.toUpperCase()==str){
        return "upper"
    }else{
        return "lower"
    }
}
console.log(getCase("HH"))

// Exercise 11
 
// Create a function that takes  a string as argument (of a person’s first and last name) and returns a string with the first and last name swapped.
// swapName("Ada Lovelace") ➞ "Lovelace Ada"
// swapName(“Alan Turing”)➞  “Turing Alan”

function swapName(firstNameLastName){
    const myArr=firstNameLastName.split(" ")
    const temp = myArr[0];
    myArr[0] = myArr[1];
    myArr[1] = temp
    const myArr1 = myArr.toString()
    const newArr = myArr1.replace(",", " ")
    return newArr
}
console.log(swapName("Hun amitan"))
 
// Exercise 12
 
// Create a function that takes a string and returns a string with its letters in alphabetical order.
// AlphabetSoup("javascript") ➞ "aacijprstv"
// AlphabetSoup(“simplon”) ➞”ilmnops”

function alphabetSoup(string){
    let arr = "";
    for (let i of string){
        arr += i+""
    }
    let myArr = arr.split("")
    let myArrSorted = myArr.sort()
    let bplan = myArrSorted.join()
    let stringSorted  = myArrSorted.toString()
    let stringVal = stringSorted.replaceAll(",","")
    return stringVal
}
console.log(alphabetSoup("qwertyuiopasdfghjklzxcvbnm"))
 
// Exercise 13
 
// Create a function that takes a number as argument and returns the incrementing (+1) for each odd number and decrementing (-1) for each even number.
// incrementOrDecrement(5) ➞4
// incrementOrDecrement(2) ➞3
 
function incrementOrDecrement(number){
    if (number%2==0){
        return number+1
    }else{
        return number-1
    }
}
console.log(incrementOrDecrement(2))
