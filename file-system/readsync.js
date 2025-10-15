const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'try.txt');

const data = fs.readFileSync(filePath, { encoding: 'utf8' });
console.log('Sync read data:', data);
