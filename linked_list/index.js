function createNode(value) {
    return {
        value,
        next : null
    }
}

function createLinkedList() {
    return {
        head: null,
        tail: null,
        length : 0,
        push(value) {
            const node = createNode(value);
            if(this.head === null) {
                this.head = node;
                this.tail = node;
                this.length++;
                return node;

            }

            this.tail.next = node;
            this.tail = node;
            this.length++;

            return node;
        },
        pop() {
            if(this.isEmpty()) {
                return null;
            }

            const node = this.tail;

            if(this.head === this.tail) {
                this.head = null;
                this.tail = null;
                this.length--;
                return node;
            }

            let current = this.head;
            let penultimate 
            while(current){
                if(current.next === this.tail){
                     penultimate = current;
                     break;
                }
                current = current.next;
            }

            penultimate.next = null;
            this.tail = penultimate;
            this.length --;
            return node; 

        },
        get(index){
            if(index > this.length-1 || index < 0 ){
                 // out of range 
                 return null; 
            }

            if(index == 0){
                return this.head;
            }

            let current = this.head;
            let i = 0;

            while(i < index) {
                i++;
                current = current.next;
            }

            return current;
        },
        delete(index) {
            if(index > this.length-1 || index < 0 ){
                // out of range 
                return null; 
           }
           if(index === 0){
                const deleted = this.head;
                this.head = this.head.next;
                this.length --;

                return deleted;
           }

           let current = this.head;
           let previous;
           let i = 0;

           while(i < index) {
               i++;

               previous = current;
               current = current.next;
           }
           const deleted = current;
           previous.next = current.next;

           if(previous.next === null) {
               this.tail = previous;
           }

           this.legnth--;

           return deleted;
        },
        isEmpty() {
            return this.length === 0; 
        },
        print() {
            const value = [];
            let current = this.head;

            while(current) {
                value.push(current.value);
                current = current.next;
            }

            return value.join(" -> ");
        }
    }
}


const list = createLinkedList();
const values = ['1','2','3','4','5','6'];
const nodes = values.map(val => list.push(val));


console.log(list.isEmpty()); // false 
console.log(list.pop());
console.log(list.tail.value); // 5 

console.log(list.delete(1)); // value 2 

console.log(list.print());