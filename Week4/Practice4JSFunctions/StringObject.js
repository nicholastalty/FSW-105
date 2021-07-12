var str = "Hi";
var greeting = "Hello";

var str1 = "Good Afternoon, Nicholas"
console.log("String's Length is: " + str.length);
console.log("String-1's Length is: " + str1.length);

var str2 = "Hello";

//Displays the first character
console.log("First Character in String-2: " + str2[0]);
console.log("First Character in String-2: " + str1[0]);

//Displays the last character
console.log("Last Character in String-1: " + str1[str1.length - 1]);
console.log("Last Character in String: " + str[str.length - 1]);

//concatenate multiple strings
var firstName = "Nick";
var lastName = "Talty";
var endName = "V";
var whiteSpace = " ";
//var strName = firstName + whiteSpace + lastName + whiteSpace + endName;
var strName = firstName;
strName += whiteSpace;
strName += lastName + whiteSpace;
strName += endName; 
console.log("Full Name is: " + strName);

// string(n)
// '' + n
// n.toString()

var status = false;
var str3 = status.toString(); //"false"
console.log("String-3's Value: " + str3);
var back = Boolean(str3); // true
console.log("String-3 converted back: " + back);

// >, >=, <, <=, ==

var result = 'a' < 'b';
console.log("Result's Value is: " + result);  // true

var result = 'a' < 'B';
console.log("Result's New Value is: " + result);  // false

//.concat() method
var helloGreeting = "Hello";
var greetingMessage = helloGreeting.concat(' ', 'John');
console.log("Greeting Message is: " + greetingMessage);

//concatenate array elements
var colors = ["Blue", "Green", "Red"];
var colorResults = ''.concat(...colors); 
console.log("Results of Colors: " + colorResults);

//concatenate non-string arguments
var str4 = ''.concat(1, 2, 3);
console.log("Value of String-4 is: " + str4);

//.indexOf() method
//var index = str.indexOf(substr, [, fromIndex]);

//get the index of the first occurrence of the substring in the string: finding substring in string
var str5 = 'finding substring in string';
var index = str5.indexOf('str');
console.log("Value of Index is: " + index);

//to count the number of occurrences of the substring "know" in this string: You do not know what you do not know until you know.
var str6 = 'You do not know what you do not know until you know.';
var subStr = 'know';
var count = 0;
var index = str6.indexOf(subStr);
while (index !== -1){
    count++;
    index = str6.indexOf(subStr, index + 1)
}
console.log("Final Count: " + count);

var str7 = 'JS indexOf';
var subStr = 'js';
//var index = str7.indexOf(subStr);
//perform a case-insensitive search
var index = str7.toLocaleLowerCase().indexOf(subStr.toLocaleLowerCase());
console.log("Value of Index this time is: " + index);

//.slice() method to extract a substring from a string
// var subStr = str.slice(startIndex [,endIndex]);

//get userName from an email address
var email = "john@bryanuniversity.edu";
var userName = email.slice(0, email.indexOf('@'));
console.log("User Name extracted from the email address is: " + userName);

//trim() methods to remove whitespace characters from BOTH ends of a string
//var resultStrinjg = str.trim();
var str8 = '    JS trim     ';
var result = str8.trim();
console.log("Value of String-8 after applying TRIM method: " + result);

//trimStart() removes whitespaces from the beginning of a string
//trimEnd() removes whitespaces from the end of a string

