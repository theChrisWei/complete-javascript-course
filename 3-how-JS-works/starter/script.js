///////////////////////////////////////
// Lecture: Hoisting

// functions
calculateAge(1965);

function calculateAge(year) {
    console.log(2016 - year);
}

// calculateAge(1990);

// retirement(1956);   // does not work

var retirement = function(year) {
    console.log(65 - (2016 - year));
}



// variables

console.log(age);   // undefined
var age = 23;
// console.log(age);

function foo() {
    console.log(age);   // undefined
    var age = 65;
    console.log(age);
}
foo();
console.log(age);






///////////////////////////////////////
// Lecture: Scoping


// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/



// Example to show the difference between execution stack and scope chain


var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}




///////////////////////////////////////
// Lecture: The this keyword









