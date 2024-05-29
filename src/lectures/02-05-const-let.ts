// - const: hằng số + biến ko có nhu cầu thay đổi
// - let: biến số mà sẽ thay đổi

// Dùng cho hằng số. UPPER_CASE
// constants
const API_URL = 'https://api.com';
const BACKGROUND_URL = 'https://image.com';
const DEFAULT_SIZE = 12;
const SECONDS_PER_HOUR = 3600;
// Dùng cho biến mà không có nhu cầu thay đổi giá trị. camelCase
const channelName = 'Easy Frontend';
const studentId = 123;
const isActive = true;

const student = {};
student.name = 'Bob';

const numberList = [];
numberList.push(1);

// --> Luôn ưu tiên dùng const, đổi sang let khi cần thiết.
// When to use let
// Dùng cho những biến có nhu cầu thay đổi bằng việc thực hiện phép gán. (re-assignment)

let countnn = 1;
count++;
for (let i = 0; i < 10; i++) {
  console.log(i);
}
let numberListq = [1, 2, 3];
numberListq = [];
