console.log('=== app.js ===')
// Output name and student id
console.log("Jenul Ferdinand");
console.log("33119805");

// Output the date
const date = new Date().toLocaleDateString();
console.log(date);



// === Finding the largest element in an array ===
function findLargestElement(arr) {
    let largest = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i]; // Update the larg
        }
    }
    return largest;
}

let arr = [1, 6, 5, 8, 55, 12];
console.log('')
console.log(`findLargestElement([${arr}]): ${findLargestElement(arr)}`);