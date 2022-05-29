function getRange(start: number, end: number, step: number = 1): number[] {
    let array = [];
    for (let i = start; i <= end; i += step) {
        array.push(i);
    }
    return array;
}

function getTitled(str: string): string {
    if (!str)
        return str;
    return str[0].toUpperCase() + str.slice(1);
}

export {getRange, getTitled};