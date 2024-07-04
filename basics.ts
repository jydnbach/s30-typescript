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

// object type
let person: {
  name: string;
  age: number;
};

person = {
  name: 'Max',
  age: 32,
};

// person = {
//   isEmployee: true,
// };

// arrays of object
let people: {
  name: string;
  age: number;
}[];

// type inference

let course = 'React'; // ts automatically infers the type
// course = 1231; // err: bc type inference
