class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    insertFirst(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    insertTail(value) {
        let newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        } else {
            let actual= this.head;
            while (actual.next) {
                actual = actual.next;
            }
            actual.next = newNode;
        }
        this.length++;
    }
}