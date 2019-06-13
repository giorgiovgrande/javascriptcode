let pinNumber = 1234
let availableBalance = 100

const withdrawCash = (requestedAmount, pinNumberEntered) => {
    if (pinNumberEntered != pinNumber) {
        console.log("incorrect pin")}
    else if ((availableBalance >= requestedAmount) && pinNumberEntered == pinNumber){
        console.log (`You have requested ${requestedAmount} Here are 
        your funds, ${availableBalance-requestedAmount} remaining`)
        availableBalance -= requestedAmount;
    }
    else {
        console.log ("You do not have sufficient funds or incorrect pin")
    }
}

withdrawCash (5, 1234)
withdrawCash (3, 1234)