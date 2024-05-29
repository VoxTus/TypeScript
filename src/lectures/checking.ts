// const a = undefined;
// a.length 

// const a ='';
// a();

// const a ={};
// a.map(x => x +1);

// const name ='Easy Frontend';
// a();
// Ðiểm chung của các lỗi này là, ÐỢI CHẠY LÊN MỚI THẤY LỖI 

// ----------------------------------------------------------------

// Typescript còn có thể giúp mình hạn chế lỗi bằng việc hỗ trợ auto completions / suggestions.

// ----------------------------------------------------------------

// lệnh chạy tsc 
// # Run a compile based on a backwards look through the fs for a
// tsconfig.json
// tsc

// # Emit JS for just the index.ts with the compiler defaults
// tsc index.ts

// # Emit JS for any .ts files in the folder src, with the default settings
// tsc src/*.ts

// # Emit files referenced in with the compiler settings from
// tsconfig.production.json
// tsc --project tsconfig.production.json

// # Emit d.ts files for a js file with showing compiler options which are
// booleans
// tsc index.js --declaration --emitDeclarationOnly