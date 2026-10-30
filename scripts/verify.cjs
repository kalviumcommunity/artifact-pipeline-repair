const fs = require('node:fs');
const assert = require('node:assert/strict');
assert.equal(fs.readFileSync('received/index.html','utf8'), '<h1>NoticeBoard</h1>\n');
console.log('VERIFY PASS exact artifact contents received/index.html');
