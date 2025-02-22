const fs = require('fs');
const path = require('path');
const readableStream = fs.createReadStream(path.join(__dirname, 'source.txt'), {
  encoding: 'utf8',
  highWaterMark: 16 
});
const writableStream = fs.createWriteStream(path.join(__dirname, 'destination.txt'));
readableStream.on('data', (chunk) => {
  console.log(`Reading chunk: ${chunk}`);
  writableStream.write(chunk, (err) => {
    if (err) {
      console.error('Error writing to destination file:', err);
    }
  });
});
readableStream.on('end', () => {
  console.log('Finished reading from source file.');
  writableStream.end(); 
});
readableStream.on('error', (err) => {
  console.error('Error reading from source file:', err);
});
writableStream.on('error', (err) => {
  console.error('Error writing to destination file:', err);
});
writableStream.on('finish', () => {
  console.log('Finished writing to destination file.');
});
