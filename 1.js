const fs = require ('fs');

/* fs.readFile ('./docs/blog1.txt', (err, data)=> {
  if (err) {
    console.log("There was an error.");
    return
  }
  console.log("File succesfully read, it says:");
  console.log(data.toString());
}) */

fs.writeFile ('./docs/blogss1.txt', ('GAGO MATAGAL NA AKO DITO'), (err)=> {
  console.log("tapos");
})


if (fs.existsSync ('./docs/blogss1.txt')) {
  setTimeout (()=> {
    fs.unlink ('./docs/blogss1.txt', (err)=> {
      console.log("File deleted");
    })
  }, 2000)
}