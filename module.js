const fs =require("fs");
let text= fs.readFileSync("module read.txt","utf-8");
//console.log(text);
text = text.replace("hello","Hii abdul");
//console.log(text);
console.log("good morning ahad");
console.log(text);

//fs.writeFileSync("module1.text",text);
//console.log("creating  a new file");