"use strict";

var test = require('modunit');
var getFunctionName = require('./index');

test('it returns the correct function name for a function', (t, expected, func) => {
    let returned = getFunctionName(func);

    t.assert.equal(expected, returned);
}, [
    ['aFunction', function aFunction () { }],
    ['someOtherFunction', function someOtherFunction() { }],
    ['A_FUNCTION_IN_CAPITALS', function A_FUNCTION_IN_CAPITALS() { }]
]);

test('it returns \'anonymous\' for a lambda function', t => {
    t.assert.equal(
        getFunctionName(() => {}),
        'anonymous'
    );
});
