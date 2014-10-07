// Brian Gladd
// Oct. 2, 2014
// SDI 1410
// Project 1

// variables

var myName = "Brian Gladd.";
var myFavFood = "pizza";
var myNumber = 3;
var myTruth = true;

console.log("My name is " + myName);
console.log("My favorite food is " + myFavFood);
console.log("I enjoy at least " + myNumber + " toppings on my " + myFavFood);
console.log("This is absolutely, always " + myTruth + ".");

myTruth = confirm("Is this all true?  Ok for true or Cancel for false");

if (myTruth === true) {
    // this code runs if true
    myNumber = prompt("How many toppings have I got?");
    if (myNumber >=3) {
        // this code runs if both conditions are true
        myNumber = myNumber;
        console.log("I have " + myNumber + " toppings for my " + myFavFood + ", Let's eat!");
    } else {
        // this code runs if the nested conditional is false   
        console.log("There are less than 3 toppings, I do not want this " + myFavFood);
        
    };
};