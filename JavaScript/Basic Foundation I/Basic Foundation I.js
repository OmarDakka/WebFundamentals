//challenge 1//

function sequence() {
    var arr = [];
    for (var i = 1; i <= 255; i++) {
        arr.push(i)
    }
    return arr;
}

//challenge 2//

function evenNumbers() {
    var sum = 0;
    for (var i = 0; i <= 1000; i += 2) {
        sum = sum + i;
    }
    console.log(sum);
}
evenNumbers();

//challenge 3//

function sumOdd() {
    var sum = 0;
    for (var i = 1; i <= 5000; i += 2) {
        sum = sum + i;
    }
    console.log(sum);
}

sumOdd();

//challenge 4 //

var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function iterate(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    console.log(sum);
}

iterate(arr);

//challenge 5 //
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findMax(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log(max);
}

findMax(arr);

//challenge 6 // 
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function findAvg(arr) {
    var avg = 0;
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    console.log(avg);
}
findAvg(arr);

//challenge 7 //

function oddNumber() {
    var arr = [];
    for (var i = 1; i <= 50; i += 2) {
        arr.push(i);
    }
    console.log(arr);
}

oddNumber();

//challenge 8//
var arr = [1, 3, 5, 7];
var y = 0;

function greaterThanY(arr, y) {
    var big = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            big = big + 1;
        }
    }
    console.log(big);
}

greaterThanY(arr, y);

//challenge 9//
var arr = [1, 2, 3, 4, 5, 6]

function square(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] ** 2;
    }
    console.log(arr);
}

square(arr);

//challenge 10//
var arr = [-3, -5, -7, -21, 100];

function noNig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
}
noNig(arr);

//challenge 11//

var arr = [5, 7, 4, 89, -1000, 60, -73, -34, 36];

function maxMinAvg() {
    var arrNew = [];
    var max = 0;
    var min = 999;
    var avg = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        avg = avg + arr[i];
    }
    avg = avg / arr.length;
    arrNew.push(max);
    arrNew.push(min);
    arrNew.push(avg);
    console.log(arrNew);
}
maxMinAvg();

//challenge 12//
var arr = [1, 2, -3, 4, -56, 7, 8];

function swap(arr) {
    var temp = arr[0];

    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    console.log(arr);
}
swap(arr);

//challenge 13//
var arr = [-5, 10, -3, 15, -20];

function numberToString(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = "Dojo";
        }
    }
    console.log(arr);
}

numberToString(arr);