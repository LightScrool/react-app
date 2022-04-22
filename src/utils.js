function getRange(start, end, step = 1){
    let array = [];
    for (let i = start; i <= end; i += step){
        array.push(i);
    }
    return array;
}

export {getRange};