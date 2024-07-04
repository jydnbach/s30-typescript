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

// functions & types

function add(a: number, b: number) {
  return a + b;
}
// no need to set type for return due to inference

function print(value: any) {
  console.log(value);
}
// void: fn that doesnt return

// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArray = [1, 2, 3];
const updatedArray = insertAtBeginning(demoArray, -1); // flexible until you call it with a certain type. it's locked in and known from that point
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');

// updatedArray[0].split('') // err: cannot split number
