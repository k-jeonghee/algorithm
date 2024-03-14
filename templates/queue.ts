class Node<T> {
    value: T;
    next: Node<T> | null = null;
    prev: Node<T> | null = null;
    constructor(value: T) {
        this.value = value;
    }
}

class Queue<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private size = 0;

    enqueue(value: T) {
        const node = new Node(value);
        if (!this.head) {
            this.head = node;
            this.tail = node;
            this.size = 1;
            return;
        }
        const prevNode = this.tail;
        prevNode!.prev = node;
        node.prev = prevNode;

        this.tail = node;
        this.size++;
    }

    dequeue() {
        if (!this.head) {
            throw new Error('Queue is Empty');
        }

        const removeNode = this.head;
        this.head = removeNode.next;
        removeNode.prev = null;

        this.size--;
        return removeNode.value;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }
}

const queue = new Queue();
queue.enqueue({ a: 1 });
queue.enqueue({ b: 1 });
console.log(queue);
