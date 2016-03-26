"use strict";

var test = require('modunit');

test('it returns the correct function name for a function', (t, expected, func) => {
    
}, [
    ['aFunction', function aFunction () { }],
    ['someOtherFunction', function someOtherFunction() { }],
    ['A_FUNCTION_IN_CAPITALS', function A_FUNCTION_IN_CAPITALS() { }],
    ['log', console.log]
]);
