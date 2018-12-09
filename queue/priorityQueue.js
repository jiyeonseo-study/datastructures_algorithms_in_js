const {createQueue} = require('./index.js');

function createPriorityQueue() {
    const lowPriorityQueue = createQueue();
    const highPriorityQueue = createQueue();

    return {
        enqueue(item, isHighPriority = false) {
            isHighPriority ? highPriorityQueue.enqueue(item) : lowPriorityQueue.enqueue(item)
        },
        dequeue() {
            if(!highPriorityQueue.isEmpty()){ 
                return highPriorityQueue.dequeue();
            }

            return lowPriorityQueue.dequeue();
        },
        peek() {
            if(!highPriorityQueue.isEmpty()){ 
                return highPriorityQueue.peek();
            }

            return lowPriorityQueue.peek();
        },
        length() {
            return highPriorityQueue.length + lowPriorityQueue.length;
        },
        isEmpty() {
            return highPriorityQueue.isEmpty() && lowPriorityQueue.isEmpty();
        }
    }
}

const q = createPriorityQueue();
 q.enqueue('1');
 q.enqueue('2');
 q.enqueue('3');

 console.log(q.peek()); // 1 

 q.dequeue();
 q.enqueue('emergency 1', true);
 console.log(q.peek()); // 2 