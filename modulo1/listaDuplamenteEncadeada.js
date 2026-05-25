class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertFirst(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head.previous = newNode;
            this.head = newNode;
        }

        this.length++;
    }

    insertTail(value) {
        let newNode = new Node(value);
        if (!this.tail) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.previous = this.tail;
            this.tail = newNode;
        }

        this.length++;
    }

    insertAt(index, value) {
        if (index < 0 || index > this.length) {
            throw new RangeError('Indíce fora dos limites');
        }

        if (index === 0) {
            this.insertFirst(value);
        }

        let actual = this.head;

        for (let i = 0; i < index; i++) {
            actual = actual.next;
        }

        let newNode = new Node(value);
        let previous = actual.previous;
        previous.next = newNode;
        newNode.previous = previous;
        newNode.next = actual;
        actual.previous = newNode;

        this.length++;
    }
}