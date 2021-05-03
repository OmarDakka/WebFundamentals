//predict 1//

function greeting() {
    return "Hello";
    console.log("World"); //this line is after the return command so it won't work.
}
var word = greeting();
console.log(word); // the word "Hello" will be logged


//predict 2//
function add(num1, num2) {
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1); //it will say "num1 is" 3 and in the second result 4 
    console.log("num2 is: " + num2); // it will say "num2 is "5 and in the second result 7
    var sum = num1 + num2; // it will sum whatever two numbers that are in the parameters
    return sum; //it will return the sum of the two numbers
}
var result1 = add(3, 5); //the function will be called with the put parameters
var result2 = add(4, 7); //the function will be called with the put parameters
console.log(result1); // it will log 8
console.log(result2); // it will log 11


//predict 3//

function highFive(num) {
    for (var i = 0; i < num; i++) {
        if (i == 5) {
            console.log("High Five!");
        } else {
            console.log(i);
        }
    }
} // nothing will happen because the function has not been called.