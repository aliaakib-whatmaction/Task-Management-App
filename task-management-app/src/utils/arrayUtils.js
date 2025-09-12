//Reverse array order
export const reverseArray = (arr) => {
    return [...arr].reverse();
};

//Find max Id
export const findMax = (arr) => {
    if (arr.length === 0) return null;
    return Math.max(...arr.map(item => item.id));
};

//Find minimum
export const findMin = (arr) => {
    if(arr.length === 0) return null;
    return Math.min(...arr.map(item => item.id));
};