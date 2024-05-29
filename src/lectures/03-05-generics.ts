interface List<T,> {
    length : number;
    [index: number]: T;
}
const nnumberList :List<number> =[1, 2, 3, 4, 5];
const wordLists :List<string> =['Vox' ,'Tu'];

interface Student{
    id: number;
    name: string;
}
// const studentList: List<Student> = [{id: 1, name: 'Tu'}]


// keyof operator

// console.log(typeof 'easy frontend'); // 'string'
// console.log(typeof 123); // 'number'
// console.log(typeof false); // 'boolean'
// console.log(typeof {}); // 'object'
// console.log(typeof []); // 'object'
// console.log(typeof function() {}); // 'function'
// console.log(typeof window !== 'undefined'); // true on client, false on server

// Mapped types
// Dùng index signature để định nghĩa kiểu dữ liệu có props lấy từ kiểu dữ liệu khác.

// interface Student {
// id: number;
// name: string;
// }
// type MappedTypes = {
// [Key in keyof Student]: boolean;
// };