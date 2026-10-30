const fs = require('node:fs');
const assert = require('node:assert/strict');
assert.equal(fs.readFileSync('received/index.html','utf8'), '<h1>NoticeBoard</h1>\n');
console.log('PREVIEW PASS packaged output checked; NO deployment performed');
