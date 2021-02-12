alert('Hello World');
console.log('this is a log');
console.warn('this is a warning');
console.error('this is an error');

// var, let, const

var age = 30;
var age = 31;
console.log(age);

// String, Numbers, Boolean, null, undefined

const name = 'Sanaz';
const age = 24;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
var z;

console.log(typeof x);

// Concatenation
console.log('My name is ' + name + ' and my age is ' + age + '.');
// Template String
console.log(`My name is ${name} and I am ${age}.`);

// String methods

const s = 'Hello World!';

/* length is basically a property not a method */
console.log(s.length);

/* this is a method */
console.log(s.toUpperCase());
console.log(s.toLowerCase());

/* it stops before the end number */
console.log(s.substring(6, 12));

console.log(s.substring(0, 5).toUpperCase());

console.log(s.split(''));

const str = 'technology, computer, it, code';
console.log(str.split(', '));

// Arrays

var names = ['Sanaz', 'Solmaz', 'Sahar'];

var names = new Array('Sanaz', 'Solmaz', 'Sahar');

var first_item = names[0];
var second_item = names[1];
var third_item = names[2];

names[3] = 'Zahra';