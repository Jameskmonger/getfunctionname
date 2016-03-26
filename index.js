module.exports = function (func) {
    if (func.name.length === 0) {
        return 'anonymous';
    }

    return func.name;
};
