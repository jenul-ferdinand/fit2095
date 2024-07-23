// === Counting a specific element in the array === 
function count(arr, elem) {
    let counter = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            counter++;
        }
    }

    return counter;
}

console.log(`\ncount(): ${count([1, 2, 1, 1], 1)}`)

// === Counting all negative numbers in an array ===
function countNegative(arr) {
    let counter = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            counter++;
        }
    }

    return counter;
}

let arr = [1, -10, 2, 3, -5]
console.log(`\ncountNegative([${arr}]): ${countNegative(arr)}`)

// === Counting all the elements in an array ===
function countAll(arr) {
    const counts = {};

    for (const elem of arr) {
        // If counts elem exists, then we increment it
        if (counts[elem] == true) { counts[elem] += 1; }
        // Otherwise, set it to one initially
        else { counts[elem] = 1; }  
    }

    // Print the array
    console.log(arr);

    // Print the keys and values
    Object.keys(counts).forEach(key => console.log(key + "-->" + counts[key]));
}

console.log("\ncountAll():")
countAll([1, 2, 2, 3, 3, 4, 4, 4])
