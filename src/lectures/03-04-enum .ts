// What: Tập hợp các giá trị cùng nhóm.
// Why: Dễ dàng quản lý và truy xuất.
// When: Sử dụng cho data một chiều, định nghĩa enum --> rồi sử dụng.

// Number enum
// enum Status {
//   PENDING, // 0
//   IN_PROGRESS, // 1
//   DONE, // 2
//   CANCELLED, // 3
// }
// enum Status {
//   PENDING = 3, // 3
//   IN_PROGRESS, // 4
//   DONE, // 5
//   CANCELLED, // 6
// }
// enum Status {
//   PENDING = 3,
//   IN_PROGRESS = 5,
//   DONE = 8,
//   CANCELLED = 10,
// }

// 2. String enum
enum MediaTypes {
  JSON = 'application/json',
  XML = 'application/xml',
}
fetch('https://example.com/api/endpoint', {
  headers: {
    Accept: MediaTypes.JSON,
  },
}).then((response) => {
  // ...
});
