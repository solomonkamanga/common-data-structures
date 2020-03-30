// try out queue functions

// create a new empty queue object that will function as a queue
class QueueExample {
    constructor() {
        this.queue = [];
    }

    get length() {
        return this.queue.length;
    }

    enqueue(item) {
        return this.queue.unshift(item);
    }

    dequeue() {
        return this.queue.pop();
    }

    peek() {
        return this.queue[this.length - 1];
    }

    isEmpty(){
        return this.length === 0;
    }
}
// create a new queue object
const testQueue = new QueueExample();

// add some items to the queue
testQueue.enqueue('Mr.');
testQueue.enqueue('John');
testQueue.enqueue('Wick');

// print the queue contents
console.log(testQueue);

// length of the queue
console.log(testQueue.length);

// pop an item off the front of the queue
testQueue.dequeue();

// print 1st item in the queue
console.log(testQueue.peek());

// print the queue contents
console.log(testQueue);
