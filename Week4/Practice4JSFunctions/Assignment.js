var str = "Hello";  // => HELLOhello
var str1 = "HelloHowAreYou";   // => HELLOHOWAREYOUhellohowareyou
console.log(str.toUpperCase(),str)
console.log(str1.toUpperCase(),str1)

var str2 = "2015904";  // => 2
var str3 = str2.slice(0, 2);  // => 5
var round = Math.floor(str3)
console.log(round)
console.log(round)

var str4 = "This is a sliced sentence";
var half = Math.ceil(str4.length / 2)
var firstHalf = str4.slice(0, half)
console.log(firstHalf)

var str5 = "Helloo";
var halfString = Math.ceil(str5.length / 2)
var str6 = str5.slice(0, halfString)
console.log(str6)
console.log(str5)
console.log(halfString)