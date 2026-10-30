const fs = require('node:fs');
fs.mkdirSync('dist', {recursive:true});
fs.writeFileSync('dist/index.html', '<h1>NoticeBoard</h1>\n');
console.log('BUILD PASS dist/index.html');
