const fs = require("fs");
const path = require("path");

fs.unlink(path.join(__dirname, "HelloWorld.txt"), (err) =>{
    if (err) console.error(err);
    else console.log("File Deleted");
});
