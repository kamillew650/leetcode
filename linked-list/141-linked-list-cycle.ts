class ListNode {
    val: number;
    next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}

function hasCycle(head: ListNode | null): boolean {
    if(!head) {
        return false;
    }
    
    let slowPointer: ListNode | null = head;
    let fastPointer: ListNode | null = head?.next ?? null;
    
    while(slowPointer !== fastPointer) {
        if(!fastPointer || !slowPointer) {
            return false;
        }

        slowPointer = slowPointer.next;
        fastPointer = fastPointer.next?.next ?? null;
    }

    return true;
};
