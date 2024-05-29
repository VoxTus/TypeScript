// Nếu không khai báo kiểu dữ liệu thì ts sẽ tự hiểu
function sayHello() {
  console.log('Hi Easy Frontend');
}
// ts: function sayHello(): void

function sum(a: number, b: number) {
  return a + b;
}
// ts: function sum(a: number, b: number): number

function sumb(a: number, b: number): number {
  return a + b;
}
// ts: function sum(a: number, b: number): number

// function summ(a: number, b: number): number {
// return a + b.toString();
// }
// ts error: Type 'string' is not assignable to type 'number'

// function createStudent(id: number, name: string, age: number) {
// console.log(id, name, age)
// }
// createStudent(1, 'Bob', 18);

function createStudent(student: { id: number; name: string; age: number }) {
  const { id, name, age } = student;
  console.log(id, name, age);
}
createStudent({
  id: 1,
  name: 'Bob',
  age: 18,
});

// Ngan gon hon

// function createStudent({ id, name, age }: { id: number, name: string, age:
//     number}) {
//     console.log(id, name, age)
//     }
//     createStudent({
//     id: 1,
//     name: 'Bob',
//     age: 18,
//     });
