



/**********************************
 * 21. Function Statements and Expressions
 */

// Function declaration
// function  whatDoYouDo(job, firstName) {}


// Function expression
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.';
        case 'designer':
            return firstName + ' designs beautiful websites.';
        default:
            return firstName + ' does something else.';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('designer', 'Jane'));
console.log(whatDoYouDo('retired', 'Mark'));





/**********************************
 * 22. Arrays
 */

 // Initialize new array
var names = ['John', 'Mark', 'Jane'];

console.log(names.length);

// Mutate array data
names[5] = 'Mary';
console.log(names); // (6) ["John", "Mark", "Jane", empty × 2, "Mary"]

// Different data types
var john = ['John', 'Smith', 1990, 'teacher', false];
john.push('blue');
john.unshift('Mr.');
console.log(john);

john.pop();
console.log(john);

john.shift();
console.log(john);


console.log(john.indexOf(1990));    // 2
console.log(john.indexOf(23));      // -1

var isDesigner = john.indexOf('designer') === -1 ? 
'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);



/************************
 * Objects and properties
 *  */ 

// Object literal
/* var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1990,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false    // the last one has not comma or semicolon
};
console.log(john);
console.log(john.firstName);
console.log(john['lastName']);
var x = 'birthYear';
console.log(john[x]);

john.job = 'designer';
john['isMarried'] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = 'Jane';
jane.birthYear = 1996;
jane['lastName'] = 'Smith';
console.log(jane); */


/*******************************
 * Objects and Methods
 * */ 
var john = {
    firstName: 'John',
    lastName: 'Smith',
    birthYear: 1992,
    family: ['Jane', 'Mark', 'Bob', 'Emily'],
    job: 'teacher',
    isMarried: false,
    calcAge: function() {
        // return 2018 - this.birthYear;
        this.age = 2018 - this.birthYear;
    }
};

// console.log(john.calcAge(1990));
// console.log(john.calcAge());

// john.age = john.calcAge();

john.calcAge();
console.log(john);

/***************************
 * Loops and iteration
 */

var john = ['John', 'Smith', 1990, 'teacher', false, 'blue'];

for (var index = 0; index < john.length; index++) {
    if(typeof john[index] !== 'string') continue;    
    console.log(john[index]);   
 }
