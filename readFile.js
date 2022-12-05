const fs = require("fs");
const path = require("path");

fs.readFile(path.join(__dirname, "/HelloWorld.txt"), (err, data)=>{
    if (err) console.error(err);

    console.log(`Data: ${data}`);
});
