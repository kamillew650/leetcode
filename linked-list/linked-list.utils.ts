export class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export function createList(numbers: number[]) {
    let head = null;
    let currentNode = null;
    for (const num of numbers) {
        if (currentNode === null) {
            head = new ListNode(num);
            currentNode = head;
        } else {
            currentNode.next = new ListNode(num);
            currentNode = currentNode.next;
        }
    }

    return head;
}

export function compareTwoLists(headA: ListNode | null, headB: ListNode | null): boolean {
    if (!headA && !headB) {
        return true;
    }

    while (headA?.next && headB?.next) {
        if (headA.val !== headB?.val) {
            return false;
        }

        headA = headA.next;
        headB = headB.next;
    }

    if(headA?.val !== headB?.val) {
        return false;
    }

    if ((!!headA && !headB) || (!headA && !!headB)) {
        return false;
    }

    return true;
}