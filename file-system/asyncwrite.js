const fs = require('fs');

// const content = 'I am Iron Man!';

fs.writeFile('try.txt', 'I am Iron Man and I am the Robert Downey Junior!', (err) => {
  if (err) {
    console.error('Error writing file:', err);
    return;
  }
  console.log('File written successfully!');
});

console.log('Writing file...');
