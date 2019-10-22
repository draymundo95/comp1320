//script should create a brand new text file
// in node.js. If file already exists, the old one is overwritten

const fs = require("fs");

const tipsText = fs.createWriteStream("tips.txt");

//After, in lab.js:
// 1. Create an Array with 20 elements

const tips = ["do not procrastinate", "be on time", "get enough sleep", "ask for help", "ask questions",
"feed your body right", "have healthy snacks", "start homework ahead of time", "get organized", "try to stay awake",
"self care is the best care", "destress when you need to", "workout when you can!!", "play with a pet to destress", "coffee",
"COFFEEEEEE", "always try your best", "wake up early", "drinks lots of water", "DON'T BE LAZY"];

// Use loop to write each element in the array
// into its own line in the txt file
// then close the file when loop is completed


//Reopen the file
// Write current date and time on its own line in the file
// close the file
let today = new Date();
let date = today.getFullYear() + "-" + (today.getMonth() +1)+ "-" + today.getDate();
let time = today.getHours() + ":" + today.getMinutes();
let dateTime = date + "-" + time;

fs.writeFile("tips.txt", tips, function (err) {
    if(err) throw err;
    console.log("array saved");
})

fs.writeFile("tips.txt", dateTime, function (err) {
    if(err) throw err;
    console.log("array saved");
})


//reopen the file
//console.log the contents of the text file
console.log(tips.txt);