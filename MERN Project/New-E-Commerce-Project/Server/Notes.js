
// class Node {
//     constructor(value) {
//         this.data = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//     }

//     addNode(value) {
//         let newNode = new Node(value);
//         if(this.head === null) {
//             this.head = newNode;
//         } else {
//             let current = this.head;
//             while(current.next !== null) {
//                 current = current.next;
//             }
//             current.next = newNode
//         }
//     }

//     printList() {
//         if(this.head === null) {
//             console.log("There is nothing to print");
//         } else {
//             let current = this.head;
//             let result = "";
//             while(current !== null) {
//                 result += current.data + " => ";
//                 current = current.next;
//             }
//             result += "null";
//             console.log("result :", result);
//         }
//     }

//     reverseFn() {

//         let current = this.head;
//         function reverse(head) {
//             if(head === null || head.next === null) {
//                 return head;
//             }

//             let rest = reverse(head.next);
//             head.next.next = head;

            
//             head.next = null;
//             return rest;

//         }
//         this.head = reverse(current)
//         console.log("this.head :", this.head);
//     }
// }

// let list = new LinkedList();
// list.addNode(1);
// list.addNode(2);
// list.addNode(3);
// list.addNode(4);
// list.addNode(5);
// console.log("Before");
// list.printList();
// list.reverseFn();


let head = {
    Node : {data : 1, next : {data : 2, next : {data : 3, next : {data : 4, next : null}}}}
}

function reverseFn(head) {
    console.log('head:', head)
    // let current = this.head.Node;
    // function reverse(head) {
        if(head === null || head.next === null) {
            return head;
        }
        let rest = reverseFn(head.next);
        head.next.next = head;
        head.next = null;
        return rest;
    // }
    // this.head = reverse(head)
    // console.log("this.head :", this.head);
}

head = reverseFn(head.Node);
console.log('head:', head);