const util = require('util');
const fs = require('fs');
const formattedString = util.format('Hello, %s! Today is %s.', 'Alice', 'Wednesday');
console.log('Formatted String:', formattedString); // 'Hello, Alice! Today is Wednesday.'
const user = {
    name: 'Alice',
    age: 30,
    email: 'alice@example.com',
    greet: function () { return 'Hello, ' + this.name; }
};
console.log('Object Inspection:', util.inspect(user, { showHidden: false, depth: null }));
const readFile = util.promisify(fs.readFile);
fs.writeFileSync('test.txt', 'This is a test file.');
async function readFileAsync() {
    try {
        const data = await readFile('test.txt', 'utf8');
        console.log('File Content:', data);
    } catch (err) {
        console.error('Error reading file:', err);
    }
}
readFileAsync();
const fetchData = async () => {
    return 'Fetched data!';
};
const fetchDataCallbackified = util.callbackify(fetchData);
fetchDataCallbackified((err, result) => {
    if (err) {
        console.error('Error:', err);
    } else {
        console.log('Callbackified Result:', result); // 'Fetched data!'
    }
});
const oldFunction = util.deprecate(function () {
    console.log('This function is deprecated!');
}, 'oldFunction() is deprecated and will be removed in the future.');

oldFunction(); 

