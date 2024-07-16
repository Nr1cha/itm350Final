const fs = require('fs');

test('helloworld.js file exists', () => {
    const path = './jsFile/helloworld.js';
    expect(fs.existsSync(path)).toBe(true);
});

