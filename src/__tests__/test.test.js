// Test file to see if jest is working

import { printSomething } from "../index/function";

test('Jest is running a test',  () => {
    expect(1).toBe(1);
});

test('Jest is importing a function and returning the correct result', () => {
    expect(printSomething()).toBe('something');
});