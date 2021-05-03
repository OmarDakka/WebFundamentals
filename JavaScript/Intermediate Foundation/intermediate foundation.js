//sigma//

function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}

sigma(10);

//Factorial//

function factorial(num) {
    var multi = 1;
    for (var i = 1; i <= num; i++) {
        multi = multi * i;
    }
    return multi;
}

factorial(5);

//Fibonacci//
var arr = [0, 1];

function fib(num) {
    var temp = 0;
    for (var i = 1; i < num; i++) {
        temp = arr[i] + arr[i - 1];
        arr.push(temp);
    }
    return arr[arr.length - 1];
}

fib(12);

//Array: second-to-last//

var arr = [1, 2, 4, 5, 66, 7, 8, 8, 9];

function secondToLast() {
    var result = 0;
    if (arr.length < 2) {
        return null;
    }

    result = arr[arr.length - 2];
    return result;
}

secondToLast();

//Nthn-to-last//

var arr = [1, 6, 7, 8, 4, 3, 2, 5];

function nthnToLast(arr, num) {
    var result = 0;
    if (arr.length < 2) {
        return null;
    }

    result = arr[arr.length - num];
    return result;
}

nthnToLast(arr, 5);

//second-largest//
var arr = [50, 64, 15, 87, 2, -15];

function secondLargest() {
    var temp = 0;
    var secondMax = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            temp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = temp;
        }
    }
    arr.pop();
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > secondMax) {
            secondMax = arr[i];
        }
    }
    console.log(secondMax);
}

secondLargest();

//double trouble//
var arr = [4, "Ulysses", 42, false];

function doubleTrouble() {
    var temp = [];

    for (var i = 0; i < arr.length; i++) {
        temp.push(arr[i]);
        temp.push(arr[i]);
    }
    arr = temp;
    return arr;
}

doubleTrouble();