import { ListNode } from "./linked-list.utils";

function findMiddle(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while(fast && fast.next) {
        slow = slow?.next ?? null;
        fast = fast.next.next;
    }

    return slow;
}

function reverseList(head: ListNode | null): ListNode | null {
    let newHead: ListNode | null = null;

    while (head) {
        const helper: ListNode = new ListNode(head.val, newHead);
        newHead = helper;
        head = head.next;
    }
    return newHead;
}

function mergeLists(headA: ListNode | null, headB: ListNode | null) {

    while(headA && headB) {
        const next = headB!;
        headB = headB?.next!;
        next.next = headA.next!;
        headA.next = next;
        headA = next.next;
    }
}

export function reorderList(head: ListNode | null): void {
    const middle = findMiddle(head)!;
    const reversedListHead = reverseList(middle.next);
    middle.next = null;
    mergeLists(head, reversedListHead);
};


// first solution, working but pretty lame
// function reverseList(head: ListNode | null): ListNode | null {
//     const stack = [];
//     let current = head;
//     let newHead = null;

//     while (current !== null) {
//         stack.push(current.val);
//         current = current.next;
//     }

//     while (stack.length > 0) {
//         if (current === null) {
//             const value = stack.pop() ?? null;
//             newHead = new ListNode(value!); 
//             current = newHead;
//         } else {
//             const value = stack.pop() ?? null;
//             current.next = new ListNode(value!);
//             current = current.next;
//         }
//     }

//     return newHead;
// }

// export function reorderList(head: ListNode | null): void {
//     if (head === null || head.next === null) {
//         return;
//     }

//     const reversedListHead = reverseList(head);
//     let reversedListCurrent = reversedListHead;
//     let isOriginalListTurn = true;

//     let current: ListNode | null = head;

//     const stack: number[] = [];
//     while (current !== null) {
//         if (isOriginalListTurn) {
//             stack.push(current.val);
//             current.val = stack.shift()!;
//             current = current.next;
//             isOriginalListTurn = !isOriginalListTurn;
//         } else {
//             stack.push(current.val);
//             current.val = reversedListCurrent?.val!;
//             current = current.next;
//             reversedListCurrent = reversedListCurrent?.next ?? null;
//             isOriginalListTurn = !isOriginalListTurn;
//         }
//     }
// };