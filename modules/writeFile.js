const fs = require('fs');


function writeFile(fileContent) {
    fs.appendFile("RESULTS.txt", fileContent, (err) => {
        if (err) {
          console.log(err);
        }
        else {
          // Get the file contents after the append operation
        //   console.log("\nFile Contents of file after append:",
            // fs.readFileSync("example_file.txt", "utf8"));
        }
      });
}


module.exports = writeFile;