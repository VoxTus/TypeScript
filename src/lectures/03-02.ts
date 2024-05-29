// Type Alias and Interface 🔥

type Studentt = {
    readonly id: number;
    name: string;
    age?: number; // optional
    }
// const studentA: Student = {
//     id: 1,
//     name: 'Alice',
// }
// const studentB: Student = {
//     id: 2,
//     name: 'Bob',
//     age: 18,
// }
// ===========================
// Union type
type Status = 'active' | 'inactive';
type ProductStatus = 0 | 1 | 2 | 3;
type StudentId = number | string;
interface Student {
idd: number | string;
name: string;
genrder: 'male' | 'female';
grade: 'A' | 'B' | 'C' | 'D' | 'E';
}

// Cho phép giá trị có thể chấp nhận hoặc là kiểu dữ liệu này, hoặc là kiểu dữ liệu kia.

interface BusinessPartner {
    name: string;
    credit: number;
    }
    interface Identity {
    id: number;
    name: string;
    }
    interface Contact {
    email: string;
    phone: string;
    }
    type Employee = Identity & Contact;
    type Customer = BusinessPartner & Contact;

    // interface way
// interface Employee extends Identity, Contact {}
// interface Customer extends BusinessPartner, Contact {}
interface Student {
    id: number;
    name: string;
    }
    // declaration merging
    // works, no error
    interface Student {
    agge?: number;
    }
    // interfacecos có thể upadte thêm 
    // const alliice: Student = {
    // id: 1,
    // name: 'Alice',
    // }


    // type thì không update được
    // type Student = {
    //     id: number;
    //     name: string;
    //     }
        // ts error: Duplicate identifier 'Student'.
    //     type Student = {
    //     age?: number;
    //     }
// ====> 
    // Luôn luôn sử dụng interface cho đến khi bắt buộc thì mới sử dụng typr