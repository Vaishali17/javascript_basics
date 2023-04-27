// creating object with new keyword 

var person = new Object();
person.name = "Vaishali Mangwani";
person.phoneNo = 123;

console.log(person['phoneNo']);
console.log(person.name);

// without new keyword

var p = {};
p.name = "Vaishali";
p.phone = 567;

console.log(p.name);

// object creation with object.create()
var Address = {
    area:"kharadi",
    city: "pune"

}

var address = Object.create(Address);
console.log(address.city);

delete Address.city;
console.log("post deletion");
console.log(address.city);