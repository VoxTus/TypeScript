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