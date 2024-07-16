const printWelcome = require('./helloworld.js');

test(`prints hello message to the console.`, () => {
    console.log = jest.fn();

    printWelcome();

    expect(console.log).toHaveBeenCalledWith('hello nick');
});