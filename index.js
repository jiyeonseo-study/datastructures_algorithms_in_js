
function createQueue() {
    const queue = [];

    return {
        enqueue(item) {
            queue.unshift(item);
        },
        dequeue() {
            return queue.pop();
        },
        peek() {
            return queue[queue.length -1];
        },
        get length() {
            return queue.length;
        },
        isEmpty() {
            return queue.length === 0
        }
    
    
    }
}

const q = createQueue();
q.enqueue('1');
q.enqueue('2');
q.enqueue('3');

console.log(q.peek()); // 1

q.dequeue();
console.log(q.peek()); // 2 

q.dequeue();
console.log(q.peek()); // 3 

q.dequeue();
console.log(q.isEmpty()); // true


