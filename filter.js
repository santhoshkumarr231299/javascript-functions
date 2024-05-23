Array.prototype.filter = function(cb, thisArg) {
    if (this == null) {
        throw new TypeError('Array.prototype.filter called on null or undefined');
    }

    if (typeof cb !== 'function') {
        throw new TypeError(cb + ' is not a function');
    }

    const sourceArray = Object(this); 
    const len = sourceArray.length >>> 0; 

    const resultArray = []; 

    let T; 
    if (arguments.length > 1) {
        T = thisArg;
    }

    for (let index = 0; index < len; index++) {
        if (index in sourceArray) {
            const value = sourceArray[index];
            if (cb.call(T, value, index, sourceArray)) {
                resultArray.push(value);
            }
        }
    }
    return resultArray;
};

