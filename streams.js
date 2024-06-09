const fs = require ('fs');

const readStream = fs.createReadStream ('./docs/blog2.txt', {encoding: 'utf-8'});
const writeStream = fs.createWriteStream ('./docs/blog1.txt');

/* readStream.on ('data', (chunk)=> {
  console.log('--- CHUNK ---');
  console.log(chunk);
  writeStream.write ('\n---CHUNK---');
  writeStream.write (chunk); 
}) */

readStream.pipe (writeStream);