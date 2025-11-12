export class ListNode {
     val: number
     next: ListNode | null
     constructor(val?: number, next?: ListNode | null) {
         this.val = (val===undefined ? 0 : val)
         this.next = (next===undefined ? null : next)
     }
 }

 export function createList(numbers: number[]) {
    let head = null;
    let currentNode = null;
    for (const num of numbers) {
        if(currentNode === null) {
            head = new ListNode(num);
            currentNode = head;
        } else {
            currentNode.next = new ListNode(num);
            currentNode = currentNode.next;
        }
    }

    return head;
 }