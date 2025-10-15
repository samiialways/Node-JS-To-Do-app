const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'try.txt');
// const content = 'I am writing something in it\n';

fs.writeFileSync(filePath, 'I am writing something in it', { encoding: 'utf8' });

console.log('Sync write complete');
