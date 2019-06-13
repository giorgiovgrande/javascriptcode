//challenge 1
//create a variable called passowrd
//check how many letters are in the password, if there are less than 8, log to the console
//that the password is too short 
//otherwise log password to cosnole 
let password = "iamcodin"

if (password.Length < 8)
{  
console.log("Your Password Needs To Be Longer")
}
else {
    (password < 7 || password == 7) 
console.log("Your Password Has Been Accepted")
}

//challenge 2
//create variable called num 
//check if variable is divisible by 3 or 5, if it is log 'this number is'
// if not, log this number isn't 
/*
let num = 15

if (num % 3 || 5) {
    console.log("This number is divisible by 3 or 5");
}
else {
    (num % 3 || 5)
console.log("This number is not divible by 3 or 5");
}
*/


//challenge 3
// create a variable called num.
//if num is divisble by 3, log fizz, if its divisible by 5 log buzz, if both, fizzbuzz
//otherwise logged num to consile 
let num = 15

if (num % 3 === 0) {
    console.log("Fizz");
}
else if  (num % 5 === 0) {
    console.log("Buzz")
}
else {   
    (num % 3 && num % 5 === 0)
    console.log("Fizz Buzz")
}

//Challenge 4
//create a variable called num.
//check if the number is a palindrome

//Challenge 5
//create a variable called time, and a variable calles placeOfWork and a 
//variable called townOfHome. Create an if statement that logs to the console where
//someone is at times of the day. Eg. if the time is 7, im at home, 8, commuting, 9, at work.
let time = 0840;
let placeOfWork = "Code Nation"
let townOfHome = "Halifax"

if (time >= 0700 && time <= 0800){
    console.log(`I am in ${townOfHome}`)
}
else if (time >= 0801 && time <= 0900){
    console.log("I'm commuting")
}
else { (time >= 0900)
    console.log(`I'm at ${placeOfWork}`)
}

//Challenge 6 Find the index of a last vowel in the string.

let vowels = ["a","e","i","o","u",];

"jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi"
console.log(vowels.indexOf());

//challenge 7 Create a variable called word that takes a string.
// Create an if statement that checks if the last letter is the same as the first. 
//If it is return true, otherwise return false.

let word = "beauty"

//challenge 8 Create 2 variables called num1 and num2.
//create an if statement that checks if the result of the sum is even
//if it is, return the number, otherwise return the numbers multiplied together 


let vowel =["a" , "e" , "o" , "u" , "y"] ;
let vowelCount=0 ;
const countVowel = (myString) => {
    for ( i=0 ; i < myString .length; i++) {
        for ( j =0 ; j < vowel.length ; j ++) {
            if ( myString[i] == vowel[j]) {
                vowelCount = vowelCount + 1
            }
        }
    }
    return vowelCount;
}
console.log(` thre are `  + countVowel("berautiful") +` vowels in this string`)