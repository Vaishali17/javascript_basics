document.write("data Types");
var stringExample = "some string";
var numberExample = 6;
var booleanExample = true;
console.log(typeof stringExample);
console.log(typeof numberExample);
console.log(typeof booleanExample);
var arrayExample = ["vaishali", 1, false];
var arrayExample2 = new Array("mohit", 1, 56);
console.log(arrayExample.length);
console.log(arrayExample[0]);
console.log(arrayExample2[0] + ' ' + arrayExample2[1]);
var objectExample = null;
console.log(typeof objectExample);


var someValue = prompt("Enter some value");
console.log(typeof someValue); // always a string
console.log(parseInt(someValue)+9); // you have to change it input to number