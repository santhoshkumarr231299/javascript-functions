Array.prototype.forEach = function(cb, thisArg) {
    if (this == null) {
        throw new TypeError('Array.prototype.forEach called on null or undefined');
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

    for (let index = 0; index < len; index++) {
        if (index in sourceArray) {
            cb.call(T, sourceArray[index], index, sourceArray);
        }
    }
};
