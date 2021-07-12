const readline = require("readline-sync")
var one = readline.questionInt("Please enter your first number")
var two = readline.questionInt("Please enter your second number")
var operator = readline.question("What would you like to do? sub, add, mul, div")
function add(){
    return(one + two)
}
function sub(){
    return(one - two)
}
function mul(){
    return (one * two)
}
function div(){
    return (one / two)
}
if(operator=="add"){
    console.log(add(one, two))
}
else if(operator=="sub"){
    console.log(sub(one, two))
}
else if(operator=="mul"){
    console.log(mul(one, two))
}
else if (operator=="div"){
    console.log(div(one, two))
}