export function getRange(start: number, end: number, step: number = 1): number[] {
    let array: number[] = [];
    for (let i: number = start; i <= end; i += step) {
        array.push(i);
    }
    return array;
}

export function getTitled(str: string): string {
    if (!str)
        return str;
    return str[0].toUpperCase() + str.slice(1);
}
