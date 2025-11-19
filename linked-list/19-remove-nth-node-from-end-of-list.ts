import { ListNode } from "./linked-list.utils";

function countNodes(head: ListNode) {
    let count = 1;
    while(head.next) {
        count++;
        head = head.next;
    }

    return count;
}

export function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
    if(!head?.next) {
        return null;
    }

    const nodeCount = countNodes(head);

    if(nodeCount === n) {
        return head.next;
    }

    const indexOfNodeToRemove = nodeCount - (n - 1);

    let current: ListNode | null = head;
    for(let i = 1; i < (indexOfNodeToRemove - 1) && !!current.next; i++) {
        current = current?.next;
    }

    current.next = current?.next?.next ?? null;
    
    return head;
};