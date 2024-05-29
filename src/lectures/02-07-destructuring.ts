// 1. Object destructuring
interface Student {
  id: number;
  name: string;
  age: number;
  gender: string;
}
const bob = {
  id: 1,
  name: 'Bob',
  age: 18,
  gender: 'male',
};
// OLD WAY
const id = bob.id;
const naame = bob.name;
// NEW WAY
// const { id, name } = bob;

// NEW WAY WITH REST OPERATOR
// const { id, ...rest } = bob;

// const bob2 = {
//     ...bob1,
//   name: 'Bob 2'
//};
// bob1 === bob2; // false;

// 2. Array destructuring

const fullName = 'Easy Frontend';
const wordList = fullName.split(' '); // ['Easy', 'Frontend']
// OLD WAY
const firsttName = wordList[0];
const lasttName = wordList[1];
// NEW WAY
const [firstName, lastName] = wordList;

// Array with rest operator
const [x, y, ...remaining] = [1, 2, 3, 4];
console.log(x, y, remaining);
// 1, 2, [3, 4]

// Clone array with spread operator
const numrberList = [1, 2, 3, 4];
const newList1 = [...numrberList]; // [1, 2, 3, 4]
const newList2 = [...numrberList, 5, 6]; // [1, 2, 3, 4, 5, 6]

// Clone array of objects (BE CAREFUL!!!)
interface Student {
  id: number;
  name: string;
  age: number;
  gender: string;
}
const studentList: Student[] = [
  { id: 1, name: 'Alice', age: 11, gender: 'female' },
  { id: 2, name: 'Bob', age: 12, gender: 'male' },
];
const newList = [...studentList];
newList[0].name = 'Alice Alice';
console.log(studentList[0].name); 



