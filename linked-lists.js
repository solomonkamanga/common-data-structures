// Linked List Example
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;

    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    // count
    getCount() {
        return this.count;
    }

    // insert a new node
    insert(data) {
        // A newNode object is created with property data and next = null 
        let newNode = new Node(data);

        // The pointer next is assigned head pointer so that both pointers now point at the same node.
        newNode.next = this.head;

        // As we are inserting at the beginning the head pointer needs to now point at the newNode.
        this.head = newNode;

        // Update the count
        this.count += 1;

        return this.head;
    }

    // find the first item with a given value
    find(index) {
        //let counter = 0;
        let node = this.head;
        while (node !== null) {
            if (node.data === index) {
                return node;
            } else {
                node = node.next;
            }
        }
        return null;
    }

    // delete an item at given index
    deleteAt(index){
        if(index > this.count - 1){
            return;
        }
        if(index === 0){
            this.head = this.head.next;
        } else{
            let tempIndex = 0;
            let node = this.head;
            while(tempIndex < index -1){
                node = node.next;
                tempIndex += 1;
            }
            node.next = node.next.next;
            this.count -= 1;
        }
    }

    // print list 
    print() {
        if (!this.head) {
            return
        }
        let node = this.head;
        while (node !== null) {
            console.log(node.data);
            node = node.next;
        }
    }
}

// create a linked List
let list = new LinkedList();

// insert some items
list.insert(38);
list.insert(49);
list.insert(13);
list.insert(15);

// Print list 
list.print();

// exercise the list
// console.log("Item count: ", list.getCount());
// console.log("Finding item: ", list.find(13));
// console.log("Finding item: ", list.find(78));

// deleting an item
list.deleteAt(3);
console.log("Item count: ", list.getCount());
console.log("Finding item: ", list.find(38));
list.print();