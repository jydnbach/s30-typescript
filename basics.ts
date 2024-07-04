// primitives: nums, string, boolean
// complex: arrays, objects
// fn, params

// primitives

let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

// complex

// string array
let hobbies: string[];
hobbies = ['fooball', 'lifting', 'drawing'];

// ------- type aliases -------

type Person = {
  name: string;
  age: number;
};

// object type
let person: Person;

person = {
  name: 'Max',
  age: 32,
};

// person = {
//   isEmployee: true,
// };

// arrays of object
let people: Person[];

// type inference

let course = 'React'; // ts automatically infers the type
// course = 1231; // err: bc type inference

// union type

let course2: string | number = 'react';
course2 = 1231;
