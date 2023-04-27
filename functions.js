// named function
function addNum(a,b){
    console.log("inside addNum function");
    return a + b;
}

console.log(addNum(1,2));

// anonymous function
var add = function (a,b){
    console.log("inside anonymous function")
    return a + b;
}

console.log(add(2,2));

setTimeout(function(){alert("inside setTimeout anonymous function"), 10000});


// constructor function
var addNumber = new Function("a","b", "console.log('inside constructor function');return a+b;" );
console.log(addNumber(5,3));

// self invoking function
(function (a,b){
    console.log("inside self invoking function");
    return a + b;
})(4,5);
