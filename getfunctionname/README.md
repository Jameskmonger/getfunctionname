# getfunctionname

Get the readable name of a function.

## Installation

    $ npm install getfunctionname

## Usage

```javascript
var getFunctionName = require('getfunctionname');

getFunctionName(function someFunction () { }); // 'someFunction'
getFunctionName(function ANOTHER_FUNCTION () { }); // 'ANOTHER_FUNCTION'

getFunctionName(() => { }); // 'anonymous'
```

## License

[MIT](LICENSE)
