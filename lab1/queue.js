/**
 * Queue Data Structure
 * @constructor
 */
class Queue {
    constructor() {
        this.q = [];
    }

    /** 
     * Get the current number of elements in the queue
     * @returns {Number} Returns the length of the q array
     */
    get length() {
        return this.q.length
    };

    /**
     * Gives the internal array of the queue
     * @returns {Array} Returns the q (internal) array
     */
    get queue() {
        return this.q;
    }

    /**
     * Boolean function: Checks if the queue is empty
     * @returns {Boolean} Returns true if the queue is empty, false otherwise
     */
    isEmpty() {
        return 0 == this.q.length;
    };

    /**
     * Adds new element to the end of the queue
     * @param {Integer} newItem The item to add
     */
    enqueue(newItem) {
        this.q.push(newItem)
    };

    /**
     * Boolean function: Checks if an item is found (first occurence)
     * @param {Integer} item The item to find
     * @returns {Boolean} Returns true if an item is found (first occurence); false otherwise.
     */
    inQueue(item) {
        let i = 0;
        let isFound = false;
        while (i < this.q.length && !isFound) {
            if (this.q[i] === item) {
                isFound = true;
            } else
                i++;
        }
        return (isFound);
    }

    /**
     * Pop an item from the queue
     * @returns {Integer} Returns the integer that was removed from the queue
     */
    dequeue() {
        if (0 != this.q.length) {
            let c = this.q[0];
            this.q.splice(0, 1);
            return c
        }
    };

    /**
     * Remove all items in queue in one go
     */
    removeAll() {
        while (!this.isEmpty()) {
            this.dequeue();
        }
    }

    /**
     * Add an array of elements to the queue in one go
     * @param arr The array of elements to add to the queue
     */
    addAll(arr) {
        for (let i = 0; i < arr.length; i++) {
            this.enqueue(arr[i]);
        }
    }

    /**
     * Pop n elements in one go
     * @param num
     */
    dequeueN(num) {
        let counter = 0
        while (!this.isEmpty() && counter < num) {
            this.dequeue();
            counter++;
        }
    }

    /**
     * Show content with indexes
     */
    showContent() {
        let items = {}

        for (let i = 0; i < this.q.length; i++) {
            items[i] = this.q[i];
        }

        Object.keys(items).forEach(key => console.log(key + '-->' + items[key]));
    }
};

let queue = new Queue();
console.log(`Adding 10 to the queue...`); queue.enqueue(10);
console.log(`Adding 20 to the queue...`); queue.enqueue(20);
console.log(`Length of queue: ${queue.length}`);
console.log(`Queue Array: [${queue.q}]`);
console.log(`Dequeueing...`); queue.dequeue();
console.log(`Adding 33 to the queue...`); queue.enqueue(33);
console.log(`Queue Array: [${queue.q}]`);
console.log(`inQueue(33) ${queue.inQueue(33)}`);
console.log(`inQueue(88) ${queue.inQueue(88)}`);
console.log(`Queue Array: [${queue.q}]`);
console.log(`Removing all...`); queue.removeAll();
console.log(`Queue Array: [${queue.q}]`);
console.log(`Adding a whole array [1, 2, 3]...`); queue.addAll([1, 2, 3, 10, 3, 3]);
console.log(`Queue Array: [${queue.q}]`);
console.log(`Dequeueing 3 elements in one go...`); queue.dequeueN(3);
console.log(`Queue Array: [${queue.q}]`);
queue.showContent()