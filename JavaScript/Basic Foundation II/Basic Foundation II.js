//challenge 1//
//Biggie size

var arr = [67, -60, 15, 20, -15, 0]

function biggieSize(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            arr[i] = "big";
        }
    }
    return arr;
}

biggieSize(arr);

//challenge 2//

var arr = [20, 15, 7, -6, -10, 100, 0];

function lowAndHigh(arr) {
    var max = 0;
    var min = 999;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        } else if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(min);
    return max;
}

console.log(lowAndHigh(arr));

//challenge 3//

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

function oneAndAnother() {
    console.log(arr[arr.length - 2]);

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            return arr[i];
        }
    }
}

console.log(oneAndAnother());

//challenge 4//

var arr = [5, 10, 25];

function doubleVision() {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    console.log(arr);
    console.log(newArr)
    return newArr;
}

doubleVision();

//challenge 5//
var arr = [1, 4, -5, -1, 4, 7, 0];

function countPositive() {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            count++;
        }
    }
    arr[arr.length - 1] = count;
    return (arr);
}
countPositive();

//challenge 6 //

var arr = [1, 3, 5, 6, 8, 10, 1, 2, 3]

function evensOdds() {
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] % 2 != 0 && arr[i + 1] % 2 != 0 && arr[i + 2] % 2 != 0) {
            console.log("That's odd!");
        } else if (arr[i] % 2 == 0 && arr[i + 1] % 2 == 0 && arr[i + 2] % 2 == 0) {
            console.log("Even more so!")
        }
    }
    return arr;
}

evensOdds();

//challenge 7//

var arr = [1, 3, 5, 6, 10, 2, 15];

function IncSeconds() {
    for (var i = 1; i < arr.length; i += 2) {
        arr[i] = arr[i] + 1;
    }
    return arr
}

IncSeconds();

//challenge 8// 

var arr = ["hello", "dojo", "awesome"]

function preLengths() {
    var count = 0;
    for (var i = arr.length - 1; i > 0; i--) {
        count = arr[i - 1].length;
        arr[i] = count;
    }
    return arr;
}

preLengths();

//challenge 9//

var arr = [4, 5, 68, 9, 123, 57]

function addSeven() {
    newArr = [];
    for (var i = 0; i < arr.length; i++) {
        newArr.push(arr[i] + 7);
    }
    return newArr;
}

addSeven();

//challenge 10//

var arr = [2, 5, 9, 15, 20, 30];

function reverseArr() {
    temp = 0;
    for (var i = 0; i < arr.length / 2; i++) {
        temp = arr[(arr.length - 1) - i];
        arr[(arr.length - 1) - i] = arr[i];
        arr[i] = temp;
    }
    return arr;
}

reverseArr();

//challenge 11//

var arr = [2, 1, 4, 7, 4, -3, -1];

function outNeg() {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = (arr[i] * -1);
            newArr.push(arr[i]);
        } else {
            newArr.push(arr[i]);

        }
    }
    return newArr;
}
outNeg();

//challenge 12//

var arr = ["not food", "food", "sports", "food"]

function alwaysHungry() {
    var result = "";
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            result = "yummy";
            console.log(result);
        }
    }
    if (result != "yummy") {
        console.log("I'm hungry");
    }
}

alwaysHungry();

//challenge 13//

var arr = [2, 3, 6, 7, 8, 98, 100, 50];
var temp = 0;

temp = arr[0];
arr[0] = arr[arr.length - 1];
arr[arr.length - 1] = temp;
temp = arr[2];
arr[2] = arr[arr.length - 3];
arr[arr.length - 3] = temp;

console.log(arr);

//challenge 14//
var arr = [2, 34, 5, 6, 7, 10];

function scaleTheArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr;
}

scaleTheArray(arr, 7);