/**
 * cost, letの変数制限
 */

//  var val1 = "var変数";
//  console.log(val1);
//  // var変数は上書き可能
//  val1 = "var変数を上書き";
//  console.log(val1);

//  //var変数は再宣言可能
//  var val1 = "var変数を再宣言";
//  console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// //letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);
// //letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// //const変数は上書き不可
// //val3 = "const変数を上書き";

// const val3 = "const変数を再宣言";

//constで定義したobjectはプロパテぅの変更が可能。追加もできる
//  const val4 = {
//    name: "yuri",
//    age: 33,
//  };
// val4.name = "george";
// val4.address = "brisbane";
// console.log(val4);

//constで定義した配列もはプロパテぅの変更が可能。追加もできる

// const val5 = ["dog", "cat"];
// val5[0] = "pig";
// val5.push("kangaroo");
// console.log(val5);

/**
 * テンプレート文字列
 */
// const name = "yuri";
// const age = 33;
// // my name is yuri, 33 years old.
// //従来
// const message1 = "my name is " + name + ", " + age + "years old.";
// console.log(message1);
// //テンプレート文字列を用いると。。。
// const message2 = `my name is ${name}, ${age}years old,`;
// console.log(message2);

// /**
//  * arrow関数
//  */
// //従来の関数
// // function func1(str){
// //   return str;
// // }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("here's func1"));
// //arrow関数
// const func2 = (str) => {
//   return str;
// }
// console.log(func2("its func2"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20))

/**
 * 分割代入
 */
// const myProfile = {
//   name: "yuri",
//   age: 33,
// };
// const message1 = `my name is ${myProfile.name}, ${myProfile.age} years old.`;
// console.log(message1)

// const {name, age} = myProfile;
// const message2 = `my name is ${name}, ${age}yol.`;
// console.log(message2)

// const myProfile = [`yuri`, 33];
// const message3 = `my name is ${myProfile[0]
// }, ${myProfile[1]}yol.`;
// console.log(message3);

// const[name, age] = myProfile;
// const message4 = `my name is ${name}, ${age}yoll.`;
// console.log(message4);

/** 
 * デフォルト値、引数など
//  */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは${name}さん`);
// sayHello("yuri");

/**
 * スプレッド構文...
 */
//配列の展開
// const arr1 = [1,2];
// // console.log(arr1);
// // console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1)

//まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピーや結合
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
arr6[0] = 100;
console.log(arr6);
console.log(arr4);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7)

// const arr8 = arr4;
// console.log(arr4);
// arr8[0] = 100;
// console.log(arr4);
