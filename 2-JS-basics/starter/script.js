



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
