function getRange(start, end, step = 1){
    let array = [];
    for (let i = start; i <= end; i += step){
        array.push(i);
    }
    return array;
}

function getTitled(str){
    if (!str)
        return str;
    return str[0].toUpperCase() + str.slice(1);
}

function getElementTopOffset(element){
    return element.current.getBoundingClientRect().top + window.pageYOffset;
}

export {getRange, getTitled, getElementTopOffset};