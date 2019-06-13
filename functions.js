/*const pressGrindBeans = () => {
    console.log("grinding for 20 seconds");
}

pressGrindBeans();



let coffeeIsGrinding = false;
const pressGrindBeans = () => {
 if (coffeeIsGrinding) {
 console.log("Stopping the grind");
 coffeeIsGrinding = false;
 } else {
 console.log("Grinding is about to begin");
 coffeeIsGrinding = true;
 }
}
pressGrindBeans();


let size = ["Piccolo", "Grande", "Venti",]
let coffeeType = ["Latte", "Cappuccino", "Espresso"]

const takeOrder = (size, coffeeType) => {
    console.log(`Here is your ${size} ${coffeeType}`);
}
takeOrder(size[2], coffeeType[0]);


const factorial = (n) => {
    if ((n === 0)|| (n=== 1)){
        return 1;
    } else
        return (n * factorial (n-1));
    }
console.log(factorial(33));

/*

*/
//Activity 1 Edit the snippet to include two parameters and a running order count updated 
//when the function is called

let orderCount = 4;
let topping = "mushrooms";

const takeOrder = (orderCount, topping) => {
    console.log(`${orderCount} pizza(s) with ${topping}`);
    orderCount++;
}

takeOrder(orderCount, topping);

//Activity 2 Create Cash Machine that dispenses cash if pin number is correct 
//and balance is equal to, or more than, the amount you're trying to withdraw. 

let pinNumber = 1234
let balance = 150
let withdrawAmount = 100

const dispenseCash = (withdrawAmount, pinNumber) => {
     if ((withdrawAmount <= balance) && pinNumber == 1234){
        console.log ("Here are your funds")
     } else {
        console.log ("You cannot withdraw funds")
     }
    }
    dispenseCash (withdrawAmount, pinNumber)