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


//Binary search for task by ID
export const binarySearchById = (arr, targetId) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midId = arr[mid].id;

        if(midId === targetId) {
            return arr[mid]; // Task found
        } else if (midId < targetId) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return null; // Task not found
};