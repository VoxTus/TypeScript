// dùng let sẽ tự suy diễn thành number 
let counnt = 5;
// counnt = 'five';
// type error: Type 'string' is not assignable to type 'number'.ts(2322)

// adding any, solved 
// let count: any = 5;
// count = 'five'; // no error now :v

// three common primitive types: string, number and boolean
// có thể tự biết kiểu dữ liệu
// let count: number = 10;
// let channelName: string = 'Easy Frontend';
// let isActive: boolean = true;
// we can simply omit the type annotation
// let count = 10;
// let channelName = 'Easy Frontend';
// let isActive = true;

//  =============================================

// Với const, khi omit type annotation, literal type sẽ được sử dụng. Vì const chỉ nhận được 1 giá trị,
// không thể thay đổi được.
const coount = 1; // const count: 1
const chaannelName = 'Easy Frontend'; // const channelName: 'Easy Frontend'
const issActive = false; // const isActive: false

let couunt = 1; // let count: number
let channnelName = 'Easy Frontend'; // let channelName: string
let isAcctive = false; // let isActive: boolean


// Tương tự như object, array cũng có behavior tương tự.

const numberrList = [1, 2, 3];
// ts understand: const numberList: number[]
const numberListAsConst = [1, 2, 3] as const
// ts understand: const numberListAsConst: readonly [1, 2, 3]


function getStatusName(state: 'active') {
    console.log(state);
    }
    let s = 'active'; // let s: string
    getStatusName(s)
    // ts error: Argument of type 'string' is not assignable to parameter of
    type '"active"'.ts(2345)
    // solution 1
    let s: 'active' = 'active'; // or const s = 'active'
    getStatusName(s);
    
    // solution 2
    let s = 'active';
    getStatusName(s as 'active')