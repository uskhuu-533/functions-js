// Exercise 1
 
// Write a function "tipAmount" that is given the bill amount and the level of
// service (one of good, fair and poor) and returns the dollar amount for the tip.
 
// Based on:
// good --> 20%
// fair --> 15%
// poor --> 10%
 
// Examples:
// tipAmount(100, 'good') --> 20
// tipAmount(40, 'fair') --> 6

function tipAmount(tip, service){
    if (service=="good"){
        return tip*(20/100)
    }else if (service=="fair"){
        return tip*(15/100)
    }else if(service=="poor"){
        return tip*(10/100)
    }
}
console.log(tipAmount(100, "good"))

// Exercise 2
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "totalAmount" that takes the same arguments as "tipAmount"
// except it returns the total as the tip amount plus the bill amount.
// Hint: this function may use "tipAmount" internally
 
// Examples:
// totalAmount(100, 'good') --> 120
// totalAmount(40, 'fair') --> 46

function totalAmount(amount, service){
    if (service=="good"){
        return  amount+amount*(20/100)
    }else if (service=="fair"){
        return amount+amount*(15/100)
    }else if(service=="poor"){
        return amount+amount*(10/100)
    }
}
console.log(totalAmount(100, "good"))
// Exercise 3
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "splitAmount" that takes a bill amount, the level of service,
// and the number of people to split the bill between. It should return the final
// amount for each person.
 
// Examples:
// splitAmount(100, 'good', 5) --> 24
// splitAmount(40, 'fair', 2) --> 23

function splitAmount(amount, service, people){
    if (service=="good"){
        return (amount+amount*0.2)/people
    }else if (service=="fair"){
        return (amount+amount*(15/100))/people
    }else if(service=="poor"){
        return (amount+amount*(10/100))/people
    }
}console.log(splitAmount(100, "good", 5))

// Exercise 4
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "isVowel" that takes a character (i.e. a string of length 1)
// as input and returns true if it is a vowel, false otherwise.
//
// Useful resource:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
//
// Examples:
// isVowel('c') --> false
// isVowel('e') --> true
// isVowel('A') --> true
// isVowel(99) --> false
// isVowel({e: 'Elephant'}) --> false
 


// Exercise 5
 
// Write a function "rockPaperScissors" which takes the throw of player 1 and
// the throw of player 2.
// A throw can have the values of 'rock', 'paper', or 'scissors'.
// It should return the winner: 'player 1', 'player 2', or 'draw'
// Examples:
// rockPaperScissors('rock', 'scissors') --> 'player 1'
// rockPaperScissors('rock', 'paper') --> 'player 2'
// rockPaperScissors('paper', 'paper') --> 'draw'
 
function rockPaperScissors(player1, player2){
    if (player1==player2){
        return "draw"
    }else if (player1=="rock"){
        if (player2=="paper"){
            return "player 2"
        }else if (player2=="scissors"){
            return "player 1"
        }
    }else if (player1=="paper"){
        if (player2=="rock"){
            return "player 1"
        }else if (player2=="scissors"){
            return "player 2"
        }
    }else if (player1=="scissors"){
        if (player2=="rock"){
            return "player 2"
        }else if (player2=="paper"){
            return "player 1"
        }
    }
}console.log(rockPaperScissors("rock", "scissors"))

// Exercise 6
 
// Write a function "numberJoinerWhile" which is given a start number and an end number.
// It should return a string of the numbers joined together by the "_" character.
// Use a "while" loop to do this.
// Examples:
// numberJoinerWhile(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerWhile(12, 14) --> '12_13_14'

function numberJoinerWhile(number1 ,number2){
    let joiner1=""
    let i = number1
    do {
        joiner1+=i+" ";
        i++;
    }
    while (i<=number2);
    let joiner = (joiner1.trimEnd()).replaceAll(" ", "_")
    return joiner
}
console.log(numberJoinerWhile(5, 9))
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFor" which does the same thing as "numberJoinerWhile",
// except using a "for" loop internally.
 
function numberJoinerFor(number1, number2){
    let joiner1 = ""
    for (let i = number1; i<=number2; i++){
        joiner1 += i+" "
    }
    const joiner = ((joiner1.toString()).trimEnd()).replaceAll(" ", "_")
    return joiner
}console.log(numberJoinerFor(1, 10))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "numberJoinerFancy" which does the same thing as "numberJoinerWhile",
// except it takes an optional third argument specifying the separator between the numbers.
// Use either a "while" or a "for" loop (your preference).
// Examples:
// numberJoinerFancy(1, 10) --> '1_2_3_4_5_6_7_8_9_10'
// numberJoinerFancy(1, 5, '~') --> 1~2~3~4~5
// numberJoinerFancy(3, 6, '***BANANAS***') --> 1***BANANAS***2***BANANAS***3
 
function numberJoinerFancy(number1, number2,separator ){
    let joiner1 = ""
    for (let i = number1; i<=number2; i++){
        joiner1 += i+" "
    }
    const joiner = ((joiner1.toString()).trimEnd()).replaceAll(" ", separator)
    return joiner
}console.log(numberJoinerFancy(1, 10, "***BANANAS***"))

// Exercise 7
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "reverse" that computes the reversal of a string.
//
// Example:
// reverse("skoob") --> "books"

function reverse(word){
    let str = ""
    for (let i = word.length-1; i>=0; i--){
        str += word[i]
    }
    return str
}
console.log(reverse("rover"))
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "findLongestWord" that takes a string of words and returns
// the longest word in that string. If there are multiple words with the same
// maximum length return the first longest word.
//
// Example:
// findLongestWord('a book full of dogs') --> 'book'
 
function findLongestWord(string){
    string = string.match(/[a-zA-Z0-9]+/gi);
    let longest = "";
    for (let i = 0; i<string.length;i++){
        if (string[i].length>longest.length){
            longest = string[i]
        }
    }
    return longest
}
console.log(findLongestWord("a book full dogs"))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "nicer"
// It should clean up the language in its input sentence.
// Forbidden words include heck, darn, dang, and crappy.
//
// Example:
// nicer('mom get the heck in here and bring me a darn sandwich.')
// > 'mom get the in here and bring me a sandwich.'
 
function nicer(str){
    forBiddenWords = ["heck", "darn", "crappy"]
    let str1 = str.split(" ")
    for ( let i=forBiddenWords.length;i>=0; i--){
        let str1Len = str1.length
        for (let j =0; j<str1Len; j++){
            if (str1[j]==forBiddenWords[i]){
                str1 = str1.slice(0, j).concat(str1.slice(j+1, str1Len));
            }
        }
    }
return str1.toString().replaceAll(",", " ")
}
console.log(nicer('mom get the heck in here and bring me a darn sandwich.'))

// Exercise 8
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "capitalizeAll"
// It should take as input a sentence and capitalize the first letter
// of every word in the sentence.
//
// Examples:
// capitalizeAll('hello world') --> 'Hello World'
// capitalizeAll('every day is like sunday') --> 'Every Day Is Like Sunday'

function capitalizeAll(str){
    let newArray = str.split(" ")
    let result = ''
    for (let i =0; i<newArray.length; i++){
        let newWord = newArray[i][0].toUpperCase() + newArray[i].slice(1)
        result += newWord+" "
    }
    return result
}
console.log(capitalizeAll("every day is like sunday"))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function called "split" that does the same thing as String.split
// It should take two inputs: (1) a string and (2) a delimiter string
// Do not use the native .split() method for this. Your task is to reverse-engineer
// .split() and write your own.
//
// Examples:
// split('a-b-c', '-') --> ['a', 'b', 'c']
// split('APPLExxBANANAxxCHERRY', 'xx') --> ['APPLE', 'BANANA', 'CHERRY']
// split('xyz', 'r') --> ['xyz']
 
function split(array, delimiter){
    let str = array.toString().replaceAll(delimiter," ")
    console.log(str)
    let arr = ['']
    let j = 0
    for (let i = 0; i<str.length; i++){
        if (str[i]==" "){
            j++;
            arr.push('');
        }else{
            arr[j] += str[i]
        }
    }
    return arr
}
console.log(split("APPLExxBANANAxxCHERRYxxBLUEBERRY", "xx"))

// Exercise 9
 
// Write a function "max" that takes an array of numbers returns the highest
// number in the array.
 


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "sumNumbers" which is given an array of numbers and returns
// the sum of the numbers.
// Example:
// sumNumbers([1, 4, 8]) --> 13
 
function sumNumbers(arr){
    let sum = 0
    for (let i = 0; i<arr.length; i++){
        sum +=(arr[i])
    }
    return sum
}
console.log(sumNumbers([1, 2, 3, 5]))

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "positives" which is given an array of numbers and
// returns a new array containing only the positive numbers within the given array.
// Examples:
// positives([1, -3, 5, -3, 0]) --> [1, 5]
// positives([1, 2, 3]) --> [1, 2, 3]
// positives([-1, -2, -3]) --> []
function positives(arr){
    for (let i = 0; i<arr.length; i++){
        if ((arr[i]>0))
    }
}
console.log(positives([1, -3, -2, 3, 5]))
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "evens" which takes an array of numbers and returns a new
// array containing only the even numbers in the given array.
// Hint: you may want to re-use your "isEven" function from 01-predicate-functions.js
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "odds" which takes an array of numbers and returns a new
// array containing only the odd numbers in the given array.
// Hint: you may want to re-use your "isOdd" function from 01-predicate-functions.js
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "integers" which takes an array of numbers and returns a new
// array containing only the integers in the given array.
// Hint: Do you need a new predicate function for this?
 
//
// Example:
// integers([3.14, 2.4, 7, 8.1, 2]) --> [7, 2]
 
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "squareDance" which takes an array of numbers and returns a
// new array containing the result of squaring each of the numbers in the given array.
//
// Example:
// squareDance([1, 2, 3]) --> [1, 4, 9]
 
//Exercise
 
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
 
// You can return the answer in any order.
 
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 
//Exercise
 
// Given an integer x, return true if x is palindrome integer.
 
// An integer is a palindrome when it reads the same backward as forward.
 
// For example, 121 is a palindrome while 123 is not.
 
// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
 
//Exercise
 
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 
// An input string is valid if:
 
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
 
// Example 1:
 
// Input: s = "()"
// Output: true
// Example 2:
 
// Input: s = "()[]{}"
// Output: true
 
//Exercise
 
// write a JavaScript function that checks if the string is palindrome or not.
 
// A string is a palindrome if it is read the same from forward or backward.
//  For example, dad reads the same either from forward or backward. So the word dad is a palindrome.
// Similarly, madam is also a palindrome.
 
// Input: s = "dad"
// Output: true
// Example 2:
 
// Input: s = "civic"
// Output: true
 
// Input: s = "race"
// Output: false