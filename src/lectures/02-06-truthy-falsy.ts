// link bảng tập hợp các giá trị falsy
// https://developer.mozilla.org/en-US/docs/Glossary/Falsy

// Ngoài các giá trị trong bảng thì đều là truthy
// #     Value      T or F
// 1     '0'        T
// 2     'null'     ?
// 3     {}         T
// 4     []         ?
// 5     Number.NaN ?
// 6     0              F
// 7     ''             F

// 2. Use cases

// check if falsy (use ! operator)
// if (!studentId) {}
// if (!isSelected) {}
// if (!isSelected) {}

// check if truthy
// if (student) {}
// if (studentId) {}
// if (isSelected) {}

// Check length
// if (name.length) {} // BAD
// if (name.length > 0) {} // GOOD

// if (studentList.length) {} // BAD
// if (studentList.length > 0) {} // GOOD

// const name = 'Easy Frontend';
// console.log(!name); // false
// console.log(!!name); // true
// const name = '';
// console.log(!name); // true
// console.log(!!name); // false

// !! operator or Boolean()
// const student = { id: 1, name: 'Alice' };
// const hasStudent1 = !!student?.id; // true
// const hasStudent2 = Boolean(student?.id); // true