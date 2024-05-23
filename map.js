Array.prototype.map = function(cb, thisArg) {
    if (this == null) {
        throw new TypeError('Array.prototype.map called on null or undefined');
    }

    if (typeof cb !== 'function') {
        throw new TypeError(cb + ' is not a function');
    }

    const sourceArray = Object(this); 
    const len = sourceArray.length >>> 0; 

    let T;
    if (arguments.length > 1) {
        T = thisArg;
    }

    const resultArray = new Array(len); 

    for (let index = 0; index < len; index++) { 
        if (index in sourceArray) {
            const currentValue = sourceArray[index]; 
            const mappedValue = cb.call(T, currentValue, index, sourceArray); 
            resultArray[index] = mappedValue; 
        }
    }

    return resultArray; 
};

