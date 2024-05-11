console.clear();

const friend_data = require("./createJson.json");

console.log(friend_data);
console.log(JSON.parse('{"name" : "amamma"}'));

// console.log(friend_data.friends[1]);
// console.log(friend_data.friends[1].name);

// friend_data.friends[1].name = "Ananna Fatema";
// console.log(friend_data.friends[1].name);

// delete friend_data.friends[1];
// console.log(friend_data);

// const student_data = require("./student_data.json");
// console.log(student_data);
// console.log(student_data.students[0].friends[1].name);

// //looping

// for (item in student_data) {
//   console.log(item);
//   console.log(student_data[item]);
// }
