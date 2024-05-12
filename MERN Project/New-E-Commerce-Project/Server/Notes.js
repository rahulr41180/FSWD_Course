
class Node {
    constructor(value) {
        this.data = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    addNode(value) {
        let newNode = new Node(value);
        if(this.head === null) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next !== null) {
                current = current.next;
            }
            current.next = newNode
        }
    }

    printList() {
        if(this.head === null) {
            console.log("There is nothing to print");
        } else {
            let current = this.head;
            let result = "";
            while(current !== null) {
                result += current.data + " => ";
                current = current.next;
            }
            result += "null";
            console.log("result :", result);
        }
    }

    reverseFn() {
        let stack = [];
        let temp = this.head;

        while(temp.next !== null) {
            stack.push(temp);
            temp = temp.next;
        }

        this.head = temp;

        while(stack.length !== 0) {
            temp.next = stack.pop();
            temp = temp.next
        }
        
        temp.next = null;
    }
}

let list = new LinkedList();
list.addNode(1);
list.addNode(2);
list.addNode(3);
list.addNode(4);
list.addNode(5);
console.log("Before");
list.printList();
list.reverseFn();
list.printList();

// let head = {
//     Node : {data : 1, next : {data : 2, next : {data : 3, next : {data : 4, next : null}}}}
// }

// function reverseFn(head, prev) {
//     let current = head;
//     if(current === null) return head;
//     if(current.next === null) {
//         current.next = prev;

//         head = current;
//         return head;
//     }

//     let next1 = current.next;
//     current.next = prev;
//     let rest = reverseFn(next1, current);
//     return rest;
// }

// head = reverseFn(head.Node, null);
// console.log('head:', head);