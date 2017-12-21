let fs = require('fs');
let findRemoveSync = require('find-remove');
let path='H:/node/filesystem/file/';
var result = findRemoveSync(path, {age: {seconds: 604800},extensions:'.txt'});
console.log(result);
