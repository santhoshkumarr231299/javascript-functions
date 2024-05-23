Array.prototype.reduce = function(cb, initialValue) {
    if (this == null) {
        throw new TypeError('Array.prototype.reduce called on null or undefined');
    }

    if (typeof cb !== 'function') {
        throw new TypeError(cb + ' is not a function');
    }

    const sourceArray = Object(this);
    const len = sourceArray.length >>> 0;

    let accumulator;
    let startIndex;

    if (arguments.length > 1) {
        accumulator = initialValue;
        startIndex = 0;
    } else {
        if (len === 0) {
            throw new TypeError('Reduce of empty array with no initial value');
        }

        let found = false;
        for (let i = 0; i < len; i++) {
            if (i in sourceArray) {
                accumulator = sourceArray[i];
                startIndex = i + 1;
                found = true;
                break;
            }
        }

        if (!found) {
            throw new TypeError('Reduce of empty array with no initial value');
        }
    }

    for (let index = startIndex; index < len; index++) {
        if (index in sourceArray) {
            accumulator = cb.call(accumulator, sourceArray[index], index, sourceArray);
        }
    }

    return accumulator;
    };
