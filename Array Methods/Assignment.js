var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function arrayExcercise(){
    vegetables.pop
    console.log("vegetables: ", vegetables);
    fruit.shift();
    console.log("fruit: ", fruit);
    var indexOrange = fruit.indexOf("orange");
    console.log("Index of orange is: " + indexOrange);
    fruit.push(indexOrange);
    console.log("Fruit " + fruit);

};
console.log(arrayExcercise());



function fiveAndGreaterOnly(arr)
{
    //code here
    var result = arr.filter(function(num){
        if (num >= 5){
            return true;
        }
    });
    return result;

}

console.log("--- Array Filter #1 ---");
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));