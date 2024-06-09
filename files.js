const fs = require("fs");

// Reading file
/* fs.readFile ('./docs/blog1.txt', (err, data)=> {
  if (err) {
    console.log('There was an error :(');
    return;
  }

  console.log(data.toString ());
}) */

// Writing file
/* fs.writeFile (`./docs/blog1.js`, `console.log ("Hello World")`, ()=> {
  console.log("Successfully written!");
}); */

// Directories
if (!fs.existsSync("./pototoy")) {
  fs.mkdir("./pototoy", (err) => {
    console.log("Directory successfully created.");
    /* fs.writeFile("./pototoy/user.txt", "Hellooo", (x) => {
      console.log("Directory successfully created!");

      fs.readFile("./pototoy/user.txt", (err, data) => {
        if (err) {
          console.log("There was an error :(");
          return;
        }

        console.log(data.toString());
      });
    }); */
  });
} else {
  console.log("Directory already existed, deleting the directory...");

  fs.rmdir ("./pototoy", (err) => {
    if (err) {
      console.log("There was an error.");
      return
    }

    console.log("Directory was successfully deleted.");
  })
}

// Deleting files
if (fs.existsSync ('./docs/deleteme.txt')) {
  fs.unlink ('./docs/deleteme.txt', (err)=> {
    if (err) {
      console.log("There was an error");
      return
    }
    
    console.log("File deleted successfully.");
  })
}