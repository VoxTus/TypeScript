interface Student {
    id: string;
    name: string;
    gender: 'male' | 'female';
    age: number;    
}
const bob: Student = {
    id: '',
    name :'',
    gender: 'male',
    age: 1,

}
function findStudentById(studentList: Student[], studentId: string) {
if (studentList.length =0) return undefined;

studentList.find(x => x.age)
}