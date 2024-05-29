// 1. Explicit types
// Khai báo kiểu dữ liệu trong typescript thì sử dụng dấu 2 chấm đằng sau tên biến.
let count: number = 123;
let studentName: string = 'Alice';
let isActive: boolean = true;
const numberList: number[] = [1, 2, 3];

// 2. Infered types
// Typescript thông minh detect được kiểu dữ liệu tương ứng ngay cả khi mình không khai báo cụ thể
// kiểu dữ liệu.

let countt = 123;
let studentNamee: string = 'Alice';
let isActivee: boolean = true;
const numberListt: number[] = [1, 2, 3];

// 3. Eraised types
// Sau khi compile từ typescript sang javascript, tất cả type annotation sẽ bị xoá.
// Từ typescript
const greeting: string = `hello ${1 + 1}`;
console.log(greeting);
// -----
(() => {
  interface Student {
    id: number;
    name: string;
    age: number;
  }
  const student: Student = {
    id: 1,
    name: 'Alice',
    age: 18,
  };
  const { id, name, age } = student;
  console.log(id, name, age);
})();

// --> JavaScript
('use strict');
// var greeting = 'hello ' + (1 + 1);
console.log(greeting);
// -----
(function () {
  var student = {
    id: 1,
    name: 'Alice',
    age: 18,
  };
  var id = student.id,
    name = student.name,
    age = student.age;
  console.log(id, name, age);
})();
