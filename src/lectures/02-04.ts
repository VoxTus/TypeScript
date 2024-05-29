// 1. Nhắc lại về == và === bên Javascript
// So sánh khác kiểu dữ liệu với ==, thì sẽ được chuyển về number để so sánh. (**)
// Với 3 dấu === thì sẽ giữ nguyên giá trị để so sánh.

// Javscript 
// 2 == '2'; // true
// false == 0; // true
// 2 === '2'; // false
// false === 0; // false

// TypeScript 
// 2 == '2';
// 2 === '2';
// ts error: This condition will always return 'false' since the types'number' and 'string' have no overlap. ts(2367)

// 3. So sánh object
// object, array và function là tham chiếu.
// Khi so sánh 2 tham chiếu, thì địa chỉ của tham chiếu được so sánh, chứ không phải giá trị thật sự.

const studentA = { id: 1, name: 'Alice' };
const studentB = studentA;
studentA === studentB; // true;
// studentA === { id: 1, name: 'Alice' }; // false

// usually, we just compare the id of two objects
const studentN = { id: 1, name: 'Alice' };
const studentM = { id: 1, name: 'Alice' };
studentA.id === studentB.id; // true

// 4. null vs undefined

// null == undefined; // true;
// null == 0; // false
// null >= 0; // true
// if (something == null) {} // either null or undefined
// if (something) {} // any truthy value
// if (!something) {} // any falsy value

// Check if a global variable existed
if (typeof window !== 'undefined') {
    // if window object is available or not
    // do something on client side
}
JSON.stringify({
    id: null,
    name: undefined,
});
// will return "{\"id\":null}"
// undefined is removed from the JSON 💡


console.log("oke la")