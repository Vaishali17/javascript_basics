var add = 1+2;
console.log(add);

var diff = 3-1;
console.log(diff);

var mul = 12*2;
console.log(mul);

var div = 12/2;
console.log(div);

var mod = 10%3;
console.log(mod);

var temp = 2;
console.log(temp+=1);

var s =10;
var s1 = 11
if(s == s1){
    console.log("values are equal");
} else {
    console.log("values are not equal");
}

var weight = parseFloat(prompt("Enter your weight"));
switch(weight){
    case 1: 
    console.log("Weight is 1");
    break;
    case 2: console.log("Weight is 2");
    break;
    default: console.log("Weight is " + weight);
}

console.log("executing normal loop");

// normal loop
var subjects = new Array("Maths", "Chemistry", "Physics");
for(var i = 0; i < subjects.length; i++){
    console.log(subjects[i]);
}

console.log("executing for in loop");


// for in loop
for(subject in subjects){
    console.log(subjects[subject]);
}

console.log("executing while loop");

var i = 0;
// while loop
while(i < subjects.length){
    console.log(subjects[i]);
    i++;
}

console.log("executing do while loop");
var j = 0;
do{
    console.log(subjects[j]);
    j++;

}while (j < subjects.length)